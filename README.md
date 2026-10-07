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

VoiceCraft is featured on the homepage and printable resume. Its development story is available at `/projects/voicecraft/`, `/ja/projects/voicecraft/`, and `/zh/projects/voicecraft/`. The language selector and canonical/alternate links keep visitors on the corresponding project.

Edit the case study in `src/components/VoiceCraftProjectPage.astro`, its localized content in `src/data/voicecraft.ts`, and its styles in `src/styles/voicecraft.css`. The client illustration and delivery workflow are portfolio demonstrations using fictitious data; they do not run audio inference or contact the production licensing service. Package-size figures compare historical uncompressed VoiceCraft builds, and inference timings describe a two-second audio block on an RTX 4060, not end-to-end latency.

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
