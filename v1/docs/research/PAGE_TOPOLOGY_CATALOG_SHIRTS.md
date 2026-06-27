# Catalog Shirts Page Topology

## Sections
1. Sticky global Sognatore header.
2. Collection heading: centered `h1`, no descriptive copy, matching the Edward Sexton collection treatment from the supplied screenshot.
3. Catalog toolbar: filter button on the left, category links centered, sort control on the right.
4. Product grid: four-column desktop grid of product cards; two columns on tablet; one column on mobile.
5. Global Sognatore footer.

## Interaction Model
- Header: existing static/sticky Sognatore header with CSS-only mobile drawer.
- Toolbar: static controls for visual parity. Filter and sort are presentational buttons.
- Category links: normal Next/App Router navigation between statically generated category pages.
- Product cards: hover reveals a `Quick Buy` overlay on pointer-capable desktop layouts.

## Asset Policy
- Source product names, prices, and tags are copied from Edward Sexton Shopify JSON.
- Product images are local Sognatore assets only.
- No Edward Sexton product image assets are used.
