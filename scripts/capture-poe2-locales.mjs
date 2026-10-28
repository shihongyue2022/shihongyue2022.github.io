// Capture the actual application UI with its committed demonstration fixtures.
// Run from this site: node scripts/capture-poe2-locales.mjs [application-directory]
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { spawnSync } from 'node:child_process';

const site = process.cwd();
const app = resolve(process.argv[2] ?? '../PoE2-Build-Atlas');
const destination = join(site, 'public/assets/projects/poe2-companion');
const captures = [
  ['workbench-attribution-regression.mjs', 'damage-attribution-desktop.png', 'modifier-equipment-contributions.png'],
  ['workbench-barrage-attribution-regression.mjs', 'barrage-attribution-desktop.png', 'skill-combination-contributions.png'],
  ['workbench-native-crafting-regression.mjs', 'craft-base-target-comparison.png', 'craft-base-comparison.png'],
  ['workbench-craft-ledger-regression.mjs', 'craft-ledger-eight-materials-desktop.png', 'craft-material-ledger.png'],
  ['workbench-skill-routine-regression.mjs', 'skill-routine-desktop.png', 'skill-routine.png'],
  ['workbench-default-workflow-regression.mjs', 'default-workflow-pair-desktop.png', 'paired-upgrades.png'],
];
let metadata = {};
try { metadata = JSON.parse(await readFile(join(site, 'src/data/poe2-captures.json'), 'utf8')); } catch { /* First capture. */ }
await mkdir(join(app, 'artifacts/portfolio-locales'), { recursive: true });
for (const [script, original, filename] of captures) {
  if (process.env.CAPTURE_ONLY && filename !== process.env.CAPTURE_ONLY) continue;
  let source = await readFile(join(app, 'scripts', script), 'utf8');
  const marker = new RegExp(`await (\\w+)\\.screenshot\\(\\{ path: ['"]artifacts/workbench/${original.replaceAll('.', '\\.')}['"] \\}\\);`);
  const match = marker.exec(source);
  if (!match) throw new Error(`Capture point missing in ${script}`);
  source = source.slice(0, match.index) + `await captureLocalized(page, ${match[1]}, ${JSON.stringify(filename)});\nassert.deepEqual(errors, []);\n} finally { await browser.close(); }\n`;
  source = source.replace('try {', `try {\n  await page.route('**/api/workbench/companion-locale', route => route.fulfill({ json: { locale: 'zh-CN' } }));`);
  const helper = `
async function captureLocalized(page, region, filename) {
  const destination = ${JSON.stringify(destination)};
  const fs = await import('node:fs/promises');
  const root = await region.elementHandle();
  const info = {};
  const untranslated = {};
  for (const [locale, language] of [['zh', 'zh-CN'], ['en', 'en'], ['ja', 'ja']]) {
    await page.getByRole('combobox', { name: 'Interface language / 表示言語 / 界面语言' }).selectOption(language);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('html')).toHaveAttribute('lang', language);
    await fs.mkdir(destination + '/' + locale, { recursive: true });
    const buffer = await root.screenshot({ path: destination + '/' + locale + '/' + filename, animations: 'disabled' });
    info[locale] = { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
    console.log('Captured', locale, filename, info[locale]);
    if (locale !== 'zh') {
      untranslated[locale] = await root.evaluate(element => {
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT), texts = [];
        while (walker.nextNode()) {
          const text = walker.currentNode.textContent.trim(), parent = walker.currentNode.parentElement;
          let hidden = false;
          for (let details = parent.closest('details'); details; details = details.parentElement?.closest('details')) {
            if (!details.open && !details.querySelector(':scope > summary')?.contains(parent)) { hidden = true; break; }
          }
          if (hidden) continue;
          const bounds = parent.getBoundingClientRect();
          if (/[\\u3400-\\u9fff]/.test(text) && bounds.width > 0 && bounds.height > 0 && !parent.closest('select')) texts.push(text);
        }
        return [...new Set(texts)];
      });
      console.log('Text review', locale, filename, JSON.stringify(untranslated[locale]));
    }
  }
  await fs.writeFile(${JSON.stringify(join(app, 'artifacts/portfolio-locales', filename + '.json'))}, JSON.stringify(info));
  await fs.writeFile(${JSON.stringify(join(app, 'artifacts/portfolio-locales', filename + '.text.json'))}, JSON.stringify(untranslated, null, 2));
}
`;
  const temporary = join(app, 'artifacts/portfolio-locales', script);
  await writeFile(temporary, helper + source);
  console.log('Rendering', filename);
  const result = spawnSync(process.execPath, [temporary], {
    cwd: app, encoding: 'utf8', timeout: 240_000,
    env: { ...process.env, WORKBENCH_URL: process.env.WORKBENCH_URL ?? 'http://127.0.0.1:5173/?companion=1&lang=zh-CN' },
  });
  process.stdout.write(result.stdout ?? '');
  if (result.status !== 0) throw new Error(result.stderr || result.error?.message || `Capture failed: ${script}`);
  metadata[filename] = JSON.parse(await readFile(join(app, 'artifacts/portfolio-locales', filename + '.json'), 'utf8'));
}
await writeFile(join(site, 'src/data/poe2-captures.json'), JSON.stringify(metadata, null, 2) + '\n');
