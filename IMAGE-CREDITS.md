# Image credits & licensing

**Status: temporary placeholder photography.**

Every photograph currently on this site is licensed stock imagery used to illustrate the
disciplines Fanatic Arts teaches. **None of it depicts Fanatic Arts learners, staff,
facilities or productions**, and it must not be captioned or presented as though it does.

## Licence

All images are from [Unsplash](https://unsplash.com) under the
[Unsplash License](https://unsplash.com/license): free to use for commercial and
non-commercial purposes, no permission needed, attribution appreciated but not required.

Two things were deliberately excluded when sourcing:

- **Unsplash+ / premium images** (`plus.unsplash.com`) — these require a paid subscription
  and are *not* covered by the free licence. Every image here was checked and confirmed to
  be standard Unsplash.
- Images from Google Images, Pinterest, Instagram or any other unverified source.

The machine-readable manifest lives in [`src/data/photos.json`](src/data/photos.json), and a
rendered credits table is published at `/credits` on the site itself.

## Replacing a placeholder with real Fanatic Arts photography

The site reads all photography from a single manifest, so swapping an image never requires
touching layout code:

1. Save the new photograph as `src/assets/photos/<key>.jpg`, overwriting the placeholder.
   Use the same `key` — that is what the pages reference.
2. In `src/data/photos.json`, update that entry's `alt` (describe what is actually happening)
   and replace `by` / `un` / `id` with your own credit, or set `by` to `"Fanatic Arts"`.
3. Rebuild. Astro regenerates every responsive size automatically.

Recommended source width: **2000–2800px** for hero and full-bleed images, **1400px** for
section and gallery images. Astro downscales from there; it never upscales.

Once *all* placeholders are replaced, remove the placeholder disclaimers in:

- `src/pages/gallery.astro` (the note under the grid)
- `src/pages/stories.astro` (the "Coming soon" panel)
- `src/components/SiteFooter.astro` (the footer credit line)
- `src/pages/credits.astro` (the whole page can go, along with its footer link)

## Re-downloading the placeholders

```bash
node scripts/fetch-photos.mjs          # fetch anything missing
node scripts/fetch-photos.mjs --force  # re-fetch everything
```

The script reads `src/data/photos.json`, pulls each image from the Unsplash CDN at the width
declared in the manifest, and applies the optional `crop` (currently used only on the hero,
to remove festival signage from the venue).

## Full credit list

See [`/credits`](src/pages/credits.astro) on the running site for the complete table of
38 images with photographer names and links to each original.
