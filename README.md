# Personal Resume & Portfolio

An Astro-powered multilingual personal resume website with project highlights, certification badges, credential verification links, dark mode, an A4 print layout, and automated GitHub Pages deployment.

**Live site:** [shihongyue2022.github.io](https://shihongyue2022.github.io/)

## Development

Node.js 24 LTS is recommended.

```powershell
npm install
npm run dev
```

Open <http://localhost:4321>.

If PowerShell blocks `npm.ps1`, use `npm.cmd run dev` (and `npm.cmd run build`) instead.

Build and preview the production site:

```powershell
npm run build
npm run preview
```

## Languages

- English: `/` and `/resume/`
- Japanese: `/ja/` and `/ja/resume/`
- Chinese: `/zh/` and `/zh/resume/`

The language selector keeps visitors on the corresponding portfolio or printable resume page.

## Project case studies

PoE2 Companion is the last project on all three homepages and printable resumes. Its case study is available at `/projects/poe2-companion/`, `/ja/projects/poe2-companion/`, and `/zh/projects/poe2-companion/`, with matching language and canonical links. The real browser application is deployed at **[/apps/poe2-companion/](https://shihongyue2022.github.io/apps/poe2-companion/)**, supporting explicit PoB2 uploads, skill routines, equipment comparisons, official trade search links, and crafting calculations. Automatic local file access, desktop shortcuts, backend listing fetches, and trade synchronization require the local edition. Browser and local records are stored separately.

Edit the case study in `src/components/Poe2ProjectPage.astro`, localized content in `src/data/poe2.ts`, the illustration in `src/scripts/poe2-demo.ts`, and styles in `src/styles/poe2.css`. The case study and all three resume summaries describe application revision `63f116b`, including native PoB2 recalculation, crafting research, actual-base comparison, same-page checks, and material/cost tracking. On 2026-10-25, 592 workbench tests passed across 103 files. Local and hosted builds use the same source revision and offer Chinese, English, and Japanese interfaces. English game terms retain native names; Japanese names and modifier wording are checked against PoE2DB with source records in the application. Image provenance is recorded in `public/assets/projects/poe2-companion/SOURCES.md`.

VoiceCraft is featured on the homepage and printable resume. Its development story is available at `/projects/voicecraft/`, `/ja/projects/voicecraft/`, and `/zh/projects/voicecraft/`. The language selector and canonical/alternate links keep visitors on the corresponding project.

Edit the case study in `src/components/VoiceCraftProjectPage.astro`, its localized content in `src/data/voicecraft.ts`, and its styles in `src/styles/voicecraft.css`. The client illustration and delivery workflow are portfolio demonstrations using fictitious data; they do not run audio inference or contact the production licensing service. Package-size figures compare historical uncompressed VoiceCraft builds, and inference timings describe a two-second audio block on an RTX 4060, not end-to-end latency.

The market and outlook section describes the developer's product assessment and future plans for VTuber workflows, ASR/TTS integration, and modular packaging. Linked speech projects are candidates for evaluation, rather than existing VoiceCraft integrations.

## Edit resume content

Resume content is stored by language:

- English: [`src/data/resume.json`](src/data/resume.json)
- Japanese: [`src/data/resume.ja.json`](src/data/resume.ja.json)
- Chinese: [`src/data/resume.zh.json`](src/data/resume.zh.json)

Each file contains:

- `profile`: name, role, summary, and contact details
- `skills`: grouped technical skills
- `experience`: professional or practical experience
- `education`: academic background
- `projects`: selected projects
- `certificates`: certifications and badges

Place badge images in `public/assets/certificates/`, then add a record such as:

```json
{
  "name": "Certification Name",
  "issuer": "Issuing Organization",
  "issuedAt": "2026-06",
  "credentialId": "Optional Credential ID",
  "image": "/assets/certificates/example.png",
  "verifyUrl": "https://official-verification-url.example"
}
```

## Deployment

Every push to `main` runs the GitHub Actions workflow and deploys the generated `dist/` directory to GitHub Pages.

The workflow checks out PoE2 Companion revision `63f116b47364d9478b2acb512e6d3c18ca006e10`, builds it with `VITE_WORKBENCH_HOSTED=1` and `VITE_WORKBENCH_BASE=/apps/poe2-companion/`, and includes its output using `scripts/include-workbench.mjs`. Push the corresponding application commit before deploying this site. The application source, dependencies, and generated bundle are not committed to this resume repository. To verify locally, build the application with those variables, build this Astro site, then run the include script with `WORKBENCH_DIST` pointing to the application `dist` directory. English and Japanese project links pass `?lang=en` or `?lang=ja` to the workbench.

## Project structure

```text
├─ src/
│  ├─ components/            # Reusable project and certificate cards
│  ├─ data/                  # English, Japanese, and Chinese content
│  ├─ i18n.ts                # Shared interface translations and routes
│  ├─ layouts/               # Shared page layout
│  ├─ pages/                 # Portfolio and printable resume
│  ├─ styles/global.css      # Global visual design
│  └─ types.ts               # Data types
├─ public/assets/            # Badges, resume files, and favicon
├─ astro.config.mjs
└─ .github/workflows/pages.yml
```
