import manifest from '../data/photos.json';

export type PhotoMeta = {
  key: string;
  id: string;
  file: string;
  w: number;
  by: string;
  un: string;
  alt: string;
};

export type Photo = PhotoMeta & {
  src: ImageMetadata;
  /** Public Unsplash page for this photo. */
  sourceUrl: string;
  /** Public Unsplash profile of the photographer. */
  authorUrl: string;
};

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.jpg',
  { eager: true }
);

const byKey = new Map<string, Photo>();

for (const meta of manifest.photos as PhotoMeta[]) {
  const mod = files[`../assets/photos/${meta.key}.jpg`];
  if (!mod) {
    throw new Error(
      `[photos] No image file for key "${meta.key}". ` +
        `Expected src/assets/photos/${meta.key}.jpg — run: node scripts/fetch-photos.mjs`
    );
  }
  byKey.set(meta.key, {
    ...meta,
    src: mod.default,
    sourceUrl: `https://unsplash.com/photos/${meta.id}`,
    authorUrl: `https://unsplash.com/@${meta.un}`,
  });
}

/** Look up a photo by manifest key. Throws at build time if it is missing. */
export function photo(key: string): Photo {
  const p = byKey.get(key);
  if (!p) throw new Error(`[photos] Unknown photo key "${key}"`);
  return p;
}

export const allPhotos = (): Photo[] => [...byKey.values()];
export const photoLicense = manifest.license;
