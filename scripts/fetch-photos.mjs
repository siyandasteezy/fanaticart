/**
 * Downloads the placeholder photography defined in src/data/photos.json
 * from the Unsplash CDN into src/assets/photos/.
 *
 * These are TEMPORARY, openly-licensed placeholders. To swap in authentic
 * Fanatic Arts photography, replace the file at src/assets/photos/<key>.jpg
 * and update that entry's credit in src/data/photos.json (see README).
 *
 *   node scripts/fetch-photos.mjs [--force]
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'src/assets/photos');
const force = process.argv.includes('--force');

const { photos } = JSON.parse(await readFile(path.join(root, 'src/data/photos.json'), 'utf8'));
await mkdir(outDir, { recursive: true });

const exists = async (p) => access(p).then(() => true, () => false);
let fetched = 0, skipped = 0;

for (const p of photos) {
  const dest = path.join(outDir, `${p.key}.jpg`);
  if (!force && (await exists(dest))) { skipped++; continue; }
  const url = `https://images.unsplash.com/${p.file}?w=${p.w}&q=78&fm=jpg&fit=max&auto=format`;
  const res = await fetch(url);
  if (!res.ok) { console.error(`FAIL ${p.key} → ${res.status}`); process.exitCode = 1; continue; }
  let buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 5000) { console.error(`FAIL ${p.key} → suspiciously small (${buf.length}B)`); process.exitCode = 1; continue; }

  // Optional crop, expressed as fractions of the source (see `crop` in photos.json).
  if (p.crop) {
    const img = sharp(buf);
    const { width, height } = await img.metadata();
    const top = Math.round((p.crop.top ?? 0) * height);
    const left = Math.round((p.crop.left ?? 0) * width);
    const w = Math.round(width - left - (p.crop.right ?? 0) * width);
    const h = Math.round(height - top - (p.crop.bottom ?? 0) * height);
    buf = await img.extract({ top, left, width: w, height: h }).jpeg({ quality: 82 }).toBuffer();
  }

  await writeFile(dest, buf);
  console.log(`  ${p.key.padEnd(22)} ${(buf.length / 1024).toFixed(0).padStart(5)} KB${p.crop ? '  (cropped)' : ''}`);
  fetched++;
  await new Promise((r) => setTimeout(r, 120));
}
console.log(`\nfetched ${fetched}, skipped ${skipped} (already present)`);
