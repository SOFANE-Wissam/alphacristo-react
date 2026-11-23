# Alpha Cristo – React site

Rebuild of https://alphacristo.com (WordPress) with **React 19 + Vite + React Router**.
No CSS framework and no UI library: one stylesheet (`src/styles.css`) and one variable font (Archivo).

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production files in /dist
npm run preview    # test the production build locally
```

## Pages (same URLs as the WordPress site)

| URL | File |
| --- | --- |
| `/` | `src/pages/Home.jsx` |
| `/a-propos-de-nous` | `src/pages/About.jsx` |
| `/nos-produits-fiches-techniques` | `src/pages/Products.jsx` |
| `/devenir-client` | `src/pages/BecomeClient.jsx` |
| `/nous-contacter` | `src/pages/Contact.jsx` |
| `/politique-de-confidentialite` | `src/pages/Privacy.jsx` |

Keeping the same slugs means existing Google rankings and inbound links keep working.
`/details-techniques-de-nos-produits` (linked from the old homepage) redirects to the products page.

## Editing content

All text, phone numbers, opening hours, product specs, group companies, client-file lists and the privacy
policy are in **`src/data/site.js`**. Change a value there and it updates everywhere.

Adding a product = adding one object to the `products` array (it appears on the home page, the range grid
and the technical-sheet list automatically).

## Images

By default images and the PDF catalogue load from the current WordPress uploads folder
(`https://alphacristo.com/wp-content/uploads/...`). **That stops working the day WordPress is switched off.**
Before going live:

```bash
npm run download-images          # copies every file into public/wp-content/uploads
cp .env.example .env             # then set:  VITE_ASSET_BASE=/wp-content/uploads
```

The list of files is in `src/data/assetPaths.js`.

## Contact form

WordPress handled the form on the server; a React site needs somewhere to send it.
Set `VITE_CONTACT_ENDPOINT` in `.env` to any service that accepts a JSON POST (Formspree, Getform, Web3Forms,
or your own API). Fields sent: `name, company, email, phone, subject, message, consent`.
Without an endpoint, the form falls back to opening the visitor's email app with the message pre-filled.

## Deploying

1. `npm run build`
2. Upload the contents of `dist/` to the hosting root (`public_html`).
3. `dist/.htaccess` is included so deep links (e.g. refreshing `/devenir-client`) work on Apache/cPanel.
   On Netlify/Vercel/Nginx, add the equivalent "send everything to index.html" rewrite.

## Not carried over from WordPress

- Slider Revolution hero slider: replaced by a static hero with the product lineup.
- Contact Form 7 (or similar): replaced by the form above.
- WordPress admin: content is now edited in `src/data/site.js`.
