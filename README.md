# mohamedisa.tech

Personal portfolio, built with Next.js (App Router), TypeScript and Tailwind CSS. Deployed on Vercel.

## Editing content

Everything shown on the site comes from one typed file:

```
src/data/profile.ts
```

Edit the `profile`, `experience`, `projects`, `skills` and `education` objects there; the components only render what they find. The CV lives at `public/MohamedIsa_CV.pdf` and is linked from the hero and contact sections.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

The build is fully static. Sitemap, robots.txt, favicon and Open Graph images are generated from `src/app/`.
