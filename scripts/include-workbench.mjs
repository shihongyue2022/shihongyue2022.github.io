import { cp, access, mkdir, copyFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

// Local verification can supply a separately built application. CI uses the pinned checkout.
const source = resolve(process.env.WORKBENCH_DIST ?? '.workbench-source/dist');
const destination = resolve('dist/apps/poe2-companion');
await access(join(source, 'index.html'));
await mkdir(destination, { recursive: true });
await cp(source, destination, { recursive: true });
const sourceRoot = resolve(source, '..');
await copyFile(join(sourceRoot, 'LICENSE'), join(destination, 'LICENSE.txt'));
await copyFile(join(sourceRoot, 'UPSTREAM.txt'), join(destination, 'UPSTREAM.txt'));
console.log('Included PoE2 Build Atlas at /apps/poe2-companion/ (with license and attribution).');
