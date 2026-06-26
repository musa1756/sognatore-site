// Downloads all Edward Sexton homepage assets to public/.
// Run: node scripts/download-assets.mjs
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const CDN = 'https://www.edwardsexton.co.uk/cdn/shop';

// [remoteUrl, localPath]
const ASSETS = [
  // Hero
  [`${CDN}/files/Edward-sexton-collection_2400x.jpg`, 'public/images/hero-spring-summer.jpg'],
  // Bespoke / Ready To Wear split
  [`${CDN}/files/pattern_cutting_2000x.jpg`, 'public/images/bespoke.jpg'],
  [`${CDN}/files/Ready-to-wear_2000x.jpg`, 'public/images/ready-to-wear.jpg'],
  // Category tiles
  [`${CDN}/files/Jackets_2000x.jpg`, 'public/images/jackets.jpg'],
  [`${CDN}/files/suits_36d9d1ff-3925-4a96-98a1-e43da0f7dc70_2000x.jpg`, 'public/images/suits.jpg'],
  [`${CDN}/files/Shirts_2000x.jpg`, 'public/images/shirts.jpg'],
  [`${CDN}/files/Edward_sexton_white_dinner_jacket_2000x.jpg`, 'public/images/black-tie.jpg'],
  [`${CDN}/files/Casual-jackets_2000x.jpg`, 'public/images/casual-wear.jpg'],
  [`${CDN}/files/Sexton-8x10-110-2_2000x.jpg`, 'public/images/discover-heritage.jpg'],
  [`${CDN}/files/Women_s-bespoke-hero_2000x.jpg`, 'public/images/womens-bespoke.jpg'],
  // Brand
  [`${CDN}/t/10/assets/edward-sexton.svg`, 'public/images/edward-sexton-logo.svg'],
  [`${CDN}/files/Edward_Sexton_Favicon_2x_9ce2dc1a-4a86-4598-9dc7-95e0806b83e1.png`, 'public/seo/favicon.png'],
];

async function download([url, path]) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, buf);
    console.log(`✓ ${path}  (${(buf.length / 1024).toFixed(0)} KB)`);
    return true;
  } catch (e) {
    console.error(`✗ ${path}  — ${e.message}  [${url}]`);
    return false;
  }
}

// batched parallel downloads, 4 at a time
let ok = 0;
for (let i = 0; i < ASSETS.length; i += 4) {
  const batch = ASSETS.slice(i, i + 4);
  const results = await Promise.all(batch.map(download));
  ok += results.filter(Boolean).length;
}
console.log(`\nDone: ${ok}/${ASSETS.length} assets downloaded.`);
