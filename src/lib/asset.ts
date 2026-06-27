// Plain <img>/srcSet references aren't rewritten by Next's basePath the way
// next/image and bundled assets are. On GitHub Pages the site is served from
// /<repo>/, so prefix root-absolute asset paths with the same basePath used in
// next.config.ts. Locally (dev) BASE_PATH is empty and paths stay at the root.
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/sognatore-site" : "";

export const asset = (path: string): string =>
  path.startsWith("/") ? `${BASE_PATH}${path}` : path;

// Internal links written as plain <a href="/..."> also need the basePath.
// External links (tel:, https:, mailto:) and bare anchors don't start with
// "/", so they pass through untouched.
export const withBasePath = (href: string): string =>
  href.startsWith("/") ? `${BASE_PATH}${href}` : href;
