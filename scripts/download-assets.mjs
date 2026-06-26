import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const assets = [
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/t/10/assets/edward-sexton.svg?v=48016210496995363251676375206",
    file: "public/images/edward-sexton.svg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Edward_Sexton_Favicon_2x_9ce2dc1a-4a86-4598-9dc7-95e0806b83e1.png?v=1661944604",
    file: "public/seo/favicon.png",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Edward-sexton-collection.jpg?v=1777453708",
    file: "public/images/hero-desktop.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Summer-tailoring_fe1fa376-e325-40c7-8680-54a4ac9ece8b.jpg?v=1777453817",
    file: "public/images/hero-mobile.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/pattern_cutting.jpg?v=1748000046",
    file: "public/images/pattern-cutting.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Ready-to-wear.jpg?v=1777453819",
    file: "public/images/ready-to-wear.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Jackets.jpg?v=1777453818",
    file: "public/images/jackets.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/suits_36d9d1ff-3925-4a96-98a1-e43da0f7dc70.jpg?v=1777453975",
    file: "public/images/suits.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Shirts.jpg?v=1777454146",
    file: "public/images/shirts.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Edward_sexton_white_dinner_jacket.jpg?v=1761900622",
    file: "public/images/black-tie.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Casual-jackets.jpg?v=1777453823",
    file: "public/images/casual-jackets.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Sexton-8x10-110-2.jpg?v=1759759027",
    file: "public/images/heritage.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/shop/files/Women_s-bespoke-hero.jpg?v=1662472410",
    file: "public/images/womens-bespoke.jpg",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/fonts/libre_franklin/librefranklin_n4.a9b0508e1ffb743a0fd6d0614768959c54a27d86.woff2",
    file: "public/fonts/libre-franklin-regular.woff2",
  },
  {
    url: "https://www.edwardsexton.co.uk/cdn/fonts/libre_franklin/librefranklin_n7.6739620624550b8695d0cc23f92ffd46eb51c7a3.woff2",
    file: "public/fonts/libre-franklin-bold.woff2",
  },
];

for (const asset of assets) {
  const response = await fetch(asset.url);
  if (!response.ok) {
    throw new Error(`Failed ${response.status} ${asset.url}`);
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  const target = path.join(root, asset.file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, bytes);
  console.log(`${asset.file} ${bytes.length}`);
}

console.log(`Downloaded ${assets.length} assets`);
