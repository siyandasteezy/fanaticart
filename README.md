# Fanatic Arts

Website for **Fanatic Arts** — a multidisciplinary arts education and creative enterprise
committed to restoring purpose, excellence and sustainability to the arts.

> Purpose. Excellence. Creative Futures.

## Stack

[Astro 5](https://astro.build) — static output, zero client-side framework. Chosen because
this is an image-led editorial site: Astro ships almost no JavaScript, builds responsive
AVIF/WebP variants of every photograph at build time, and keeps content in plain data files
that a non-developer can edit.

- **Fonts:** Fraunces (display) + Inter (UI), self-hosted via Fontsource — no third-party
  requests, no layout shift.
- **JavaScript on the page:** ~1.5 KB total — a scroll-reveal observer, the mobile menu, the
  sticky-header toggle and the contact-form validator. Everything degrades gracefully
  without it.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview
```

## Editing content

All copy lives in `src/data/` — no layout code involved.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, tagline, vision, mission, values, divisions, contact details, navigation |
| `src/data/disciplines.ts` | The six disciplines — copy, what-you-learn / outcomes lists, and the two photographs each one uses (`panelPhoto` for the band, `photo` for its detail section) |
| `src/data/journey.ts` | The seven journey steps (Discover → Grow) |
| `src/data/programmes.ts` | Youth / adult / institution programmes **and lesson pricing** |
| `src/data/gallery.ts` | Which photos appear in the gallery, and in what order |
| `src/data/photos.json` | Every photograph: file key, alt text, credit, licence |

### Photography

**The current photography is licensed placeholder work — it does not show Fanatic Arts
learners, staff, facilities or productions.** See [`IMAGE-CREDITS.md`](IMAGE-CREDITS.md) for
the licence position and step-by-step instructions for swapping in authentic photography.

Short version: overwrite `src/assets/photos/<key>.jpg`, update that entry's `alt` and credit
in `src/data/photos.json`, rebuild. Every page reads from that manifest, so nothing else
changes.

### The contact form

The enquiry form at `/contact` uses **Netlify Forms**, so it works as soon as the site is
deployed — no third-party service and no server code. Submissions appear under **Forms** in
the Netlify dashboard, and the visitor lands on `/contact/thank-you`. A hidden honeypot field
catches most spam.

After the first deploy, check **Site configuration → Forms** and confirm form detection is
enabled, then send a test enquiry. Add a notification email there so submissions reach an
inbox rather than sitting in the dashboard.

Three handling modes, controlled in `src/data/site.ts`:

| Setting | Behaviour |
| --- | --- |
| `formEndpoint: 'https://…'` | POSTs to your own handler (Formspree, Basin, …). Takes priority. **Add that host to `form-action` in the CSP in `netlify.toml`, or the browser will block the submission.** |
| `netlifyForms: true` *(current)* | Netlify's built-in form handling. |
| both off | Falls back to opening the visitor's email client with the answers pre-filled. |

Also update `site.contact.email` — `hello@fanaticarts.co.za` is a placeholder — and add
`site.contact.phone` and `site.social` if you want them shown.

## Structure

```
src/
├─ assets/photos/        38 photographs, optimised at build time
├─ components/           Reusable blocks (Ph, Hero, PanelHero, DisciplinePanels, …)
├─ data/                 All editable content
├─ layouts/BaseLayout    <head>, header, footer, scroll-reveal
├─ lib/photos.ts         Manifest → typed photo lookup (fails the build on a missing image)
├─ pages/                One file per route
└─ styles/global.css     Design system: palette, type scale, layout primitives
scripts/
├─ fetch-photos.mjs      Re-download the placeholder set from the manifest
└─ shoot.mjs             Full-page screenshots via local Chrome (visual QA)
```

Routes: `/`, `/about`, `/programmes`, `/disciplines`, `/stories`, `/gallery`, `/contact`,
`/credits`, plus a 404.

## Design system

Palette sampled directly from the logo — antique gold `#A67C2A` on true black, over a warm
off-white `#F7F4EF`. Tokens live at the top of `src/styles/global.css`; changing a token
changes the whole site.

Type is a fluid `clamp()` scale (`--step--1` → `--step-6`) so headlines stay large on desktop
without overflowing a 320px phone.

### Accessibility

- Semantic landmarks, one `<h1>` per page, no heading-level skips.
- Skip-to-content link; visible focus rings on every interactive element.
- Mobile menu: `aria-expanded`, Escape to close, focus returned to the toggle, scroll locked.
- All text/background pairs meet **WCAG AA** (lowest measured ratio 4.98:1).
- Decorative photography is marked `alt=""`; meaningful photography carries real alt text.
- `prefers-reduced-motion: reduce` disables every animation and reveals all content immediately.

### Performance

- Responsive `srcset`/`sizes` on every image, AVIF/WebP with explicit `width`/`height` to
  prevent layout shift.
- Only the hero and logo load eagerly (`fetchpriority="high"`); everything else is lazy.
- CSS is scoped per component and inlined when small; fonts are self-hosted `woff2` with
  `font-display: swap`.
- `dist/` is fully static — deploy to Netlify, Vercel, Cloudflare Pages or any static host.

## Deploying to Netlify

[`netlify.toml`](netlify.toml) holds the whole configuration — build command, Node version,
caching and security headers. Connect the repository in Netlify and it needs no further
setup; the settings in the UI can be left at their defaults.

```
Build command:      npm run build
Publish directory:  dist
Node version:       20   (also pinned in .nvmrc)
```

**Canonical URLs and the sitemap** follow the deployed origin automatically — Astro reads
Netlify's `URL` environment variable. Nothing to change for the first deploy on a
`*.netlify.app` address. Once the custom domain is live, Netlify updates `URL` on its own;
set `SITE_URL` in the Netlify UI only if you need to override it.

**Caching.** Everything Astro fingerprints under `/_astro/` is served `immutable` for a year;
HTML revalidates on every request, so content edits go live on the next visit.

**Security headers**, including a Content-Security-Policy, are set for every route. The
policy is same-origin only — if you later add an external script, font, analytics tag or form
handler, add its host to the matching directive in `netlify.toml` or the browser will block
it silently.

### Deploying by hand

```bash
npx netlify-cli deploy --prod
```

## Where the six disciplines appear

`DisciplinePanels.astro` renders the full-bleed band of six labelled panels. It is used
twice, from the same data:

- **Homepage** — as the "Six disciplines" section, under the hero.
- **`/disciplines`** — inside `PanelHero.astro`, as the page hero itself (`fill` mode, so
  the band stretches to the bottom of the viewport).

Each discipline carries **two** photographs in `src/data/disciplines.ts`: `panelPhoto` for
the band and `photo` for its detail section further down `/disciplines`. They are
deliberately different — both appear on that page, and repeating one would read as an
oversight. If you swap one, check the other.
