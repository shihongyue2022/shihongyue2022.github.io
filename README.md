# Personal Resume & Portfolio

An Astro-powered personal resume website with project highlights, certification badges, credential verification links, dark mode, an A4 print layout, and automated GitHub Pages deployment.

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

## Edit resume content

All resume content lives in [`src/data/resume.json`](src/data/resume.json):

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

Every push to `develop` runs the GitHub Actions workflow and deploys the generated `dist/` directory to GitHub Pages.

## Project structure

```text
├─ src/
│  ├─ components/            # Reusable project and certificate cards
│  ├─ data/resume.json       # Resume content
│  ├─ layouts/               # Shared page layout
│  ├─ pages/                 # Portfolio and printable resume
│  ├─ styles/global.css      # Global visual design
│  └─ types.ts               # Data types
├─ public/assets/            # Badges, resume files, and favicon
├─ astro.config.mjs
└─ .github/workflows/pages.yml
```
