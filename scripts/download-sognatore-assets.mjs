import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

const assets = [
  {
    url: "https://static.tildacdn.com/tild3137-3861-4364-b438-663533626539/2.png",
    file: "public/images/sognatore-og-logo.png",
  },
  {
    url: "https://static.tildacdn.com/tild3230-3630-4137-b136-343936643133/favicon-32x32.png",
    file: "public/seo/sognatore-favicon.png",
  },
  {
    url: "https://static.tildacdn.com/tild3331-6337-4039-b963-383134613033/Frame_119.svg",
    file: "public/images/sognatore-logo.svg",
  },
  {
    url: "https://static.tildacdn.com/tild3433-6562-4732-a132-383132666230/photo_2025-02-27_191.jpeg",
    file: "public/images/sognatore-measure.jpg",
  },
  {
    url: "https://static.tildacdn.com/tild3235-3736-4639-b761-316536323465/1.png",
    file: "public/images/sognatore-catalog.png",
  },
  {
    url: "https://static.tildacdn.com/tild3734-6431-4634-b438-353439333137/3.png",
    file: "public/images/sognatore-service-1.png",
  },
  {
    url: "https://static.tildacdn.com/tild3765-3864-4731-a336-356331313763/6.png",
    file: "public/images/sognatore-service-2.png",
  },
  {
    url: "https://static.tildacdn.com/tild3330-6330-4931-b434-303534346664/5.png",
    file: "public/images/sognatore-service-3.png",
  },
  {
    url: "https://static.tildacdn.com/tild3062-3562-4735-b337-313432356232/4.png",
    file: "public/images/sognatore-service-4.png",
  },
  {
    url: "https://static.tildacdn.com/tild3561-3533-4634-a539-386433353132/3.png",
    file: "public/images/sognatore-service-5.png",
  },
  {
    url: "https://static.tildacdn.com/tild6439-3962-4564-a266-313636643233/2.png",
    file: "public/images/sognatore-service-6.png",
  },
  {
    url: "https://static.tildacdn.com/tild3165-3561-4332-b830-353138396361/photo.png",
    file: "public/images/sognatore-craft-photo.png",
  },
  {
    url: "https://static.tildacdn.com/tild3866-3935-4364-a462-313635393061/18092023_Sognatore28.jpg",
    file: "public/images/sognatore-contact.jpg",
  },
  {
    url: "https://static.tildacdn.com/tild3133-3939-4465-b839-323935303031/Sognatore_Certificat.jpg",
    file: "public/images/sognatore-certificate.jpg",
  },
  {
    url: "https://static.tildacdn.com/tild3666-3735-4731-a431-326464313964/A6300-14-00331.jpg",
    file: "public/images/sognatore-shoes.jpg",
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

console.log(`Downloaded ${assets.length} Sognatore assets`);
