# Karla Garrido — portfolio site

Next.js (App Router, TypeScript) port of the original Create React App site in `../karlagarrido`.

## Scripts

```bash
npm run dev     # http://localhost:3000
npm run lint
npm run build   # static export to out/
```

## Structure

- `src/app/` — one folder per route (`acerca`, `portafolio`, `trayectoria`, `demos`, `galeria`, `contacto`), `not-found.tsx`, root `layout.tsx` (header, footer, social links, metadata).
- `src/components/` — shared and page components, each styled with a CSS Module.
- `src/data/gallery.ts` — portfolio, gallery and trayectoria content, with statically imported images.
- `src/lib/validation.ts` — contact form validation.
- `src/app/globals.css` — base element styles plus the `sticky_footer` and `is_hidden` utilities.

## Contact form

The form posts JSON `{ nombre, email, subject, message }` to `NEXT_PUBLIC_CONTACT_URL`, falling back to the old `https://node-mailer-rcph.herokuapp.com/contact`. Heroku's free tier was shut down in 2022, so that endpoint is probably offline. Set `NEXT_PUBLIC_CONTACT_URL` in `.env.local` or in the host's environment to point at a working mailer.

## Deployment

`next.config.ts` uses `output: "export"`, so `npm run build` writes a static site to `out/`. On Netlify, set the build command to `npm run build` and the publish directory to `out`.
