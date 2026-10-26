# All Over University

A multipage university website built with React, React Router, and Vite. Four pages (Home, About, Admissions, Contact) share one header, footer, and layout. No UI library, no CSS framework, system UI font.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
npm run preview    # serve the production build
```

Requires Node 18 or newer.

## Deploy to Vercel (live demo)

**Option A: from Git (recommended)**
1. Push this folder to a GitHub, GitLab, or Bitbucket repo.
2. In Vercel, choose **Add New > Project** and import the repo.
3. Leave the defaults. Vercel detects Vite; `vercel.json` already sets the build command, the `dist` output, and a rewrite so direct links like `/admissions` work on refresh.
4. Click **Deploy**.

**Option B: from the CLI**
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Demo-friendly details

- Routes other than Home are code-split, so the first load stays small.
- Fingerprinted assets are cached for a year (`vercel.json`).
- Direct navigation and refresh work on every route (SPA rewrite).
- Skip link, visible keyboard focus, and reduced-motion support are built in.

## Structure

```
src/
  components/   Header, Footer, Layout, Button, PageHero, CtaBand, Icons
  pages/        Home, About, Admissions, Contact, NotFound
  data/site.js  School name, phone, email, address, nav links
  styles.css    Design tokens (CSS custom properties) and all styles
```

## Customise

- **Contact details and name:** `src/data/site.js`
- **Colours:** the `:root` tokens at the top of `src/styles.css`
  (`--bg` soft white, `--text` black, `--ash` pale text, `--green` accent)
- **Contact form:** `onSubmit` in `src/pages/Contact.jsx` only shows a confirmation. Connect it to an API, Formspree, or a Vercel Function before real use.

All programs, dates, and contact details are placeholders.
