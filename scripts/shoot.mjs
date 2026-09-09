import puppeteer from 'puppeteer-core';
import path from 'node:path';

// Visual-QA helper: full-page screenshots through a locally installed Chrome.
// Override the binary with CHROME_PATH on other platforms.
const CHROME = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = process.env.SHOT_DIR || '/tmp';
const BASE = process.env.BASE || 'http://127.0.0.1:4399';

const jobs = process.argv.slice(2).map((a) => {
  const [name, route, w = '1440', mode = 'full', h = '900'] = a.split('::');
  return { name, route, w: Number(w), full: mode === 'full', h: Number(h) };
});

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  protocolTimeout: 120000,
  args: ['--hide-scrollbars', '--force-color-profile=srgb', '--font-render-hinting=none', '--no-sandbox'],
});

for (const j of jobs) {
  const page = await browser.newPage();
  page.on('pageerror', (e) => console.log(`  ! pageerror: ${e.message}`));
  await page.setViewport({ width: j.w, height: 900, deviceScaleFactor: 1 });
  await page.goto(BASE + j.route, { waitUntil: 'load', timeout: 45000 });

  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-in'));
    // Force lazy images to load for the capture.
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => i.setAttribute('loading', 'eager'));
  });

  // Step-scroll from the driver side so no single evaluate call is long-running.
  const h = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < h; y += 800) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await new Promise((r) => setTimeout(r, 70));
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 1200));

  const file = path.join(OUT, `${j.name}.png`);
  await page.screenshot({ path: file, fullPage: j.full, captureBeyondViewport: j.full });
  console.log(`${j.name.padEnd(20)} ${j.w}x${h} → ${file}`);
  await page.close();
}
await browser.close();
console.log('done');
