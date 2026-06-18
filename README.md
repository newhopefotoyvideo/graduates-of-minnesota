# Graduates of Minnesota

A faithful recreation of the Wix site
[outlivingstylemaga.wixsite.com/my-site-9](https://outlivingstylemaga.wixsite.com/my-site-9),
rebuilt as a Next.js (App Router) app ready to deploy on Vercel.

## Pages

| Route         | Original Wix page        |
| ------------- | ------------------------ |
| `/`           | Home                     |
| `/portfolio`  | Portfolio                |
| `/services`   | Inquiry Services Page    |
| `/locations`  | Locations                |
| `/faq`        | FAQ                      |
| `/contact`    | Contact                  |

## Tech

- **Next.js 16** (App Router, static prerendered pages)
- **next/font** for Playfair Display, Instrument Sans, and Parisienne (script accent)
- All images are stored locally in `public/images` (pulled from the original site)

## Develop locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy to Vercel

The project is zero-config for Vercel. Either:

1. **Dashboard:** push this repo to GitHub, then "Add New Project" on
   [vercel.com](https://vercel.com) and import it. Framework is auto-detected as Next.js.
2. **CLI:**
   ```bash
   npm i -g vercel
   vercel          # preview deploy
   vercel --prod   # production deploy
   ```

## Notes

- The contact / inquiry forms post to a placeholder `formsubmit.co` endpoint.
  Swap the `action` URL (in `app/contact/page.jsx` and `app/services/page.jsx`)
  for your real form handler or a Vercel serverless route.
- The "Holy River" calligraphy font on the original is a paid font; **Parisienne**
  (Google Fonts) is used as the closest free substitute.
