# CatalogShirts Specification

## Overview
- **Target files:** `src/app/catalog/[category]/page.tsx`, `src/lib/site.ts`, `src/app/globals.css`
- **Screenshot:** User-provided Edward Sexton shirts collection screenshot.
- **Interaction model:** Static collection grid with link-driven categories and hover card overlay.

## DOM Structure
- `Header`
- `main.catalog-page`
- `section.catalog-hero`
  - `h1`
- `section.catalog-toolbar`
  - `button.catalog-filter-button`
  - `div.catalog-category-nav`
  - `button.catalog-sort-button`
- `section.catalog-grid`
  - repeated `article.catalog-card`
    - `Link.catalog-card__media`
      - `span.catalog-card__image-frame`
      - `span.catalog-card__quick-buy`
    - `div.catalog-card__body`
      - `h2`
      - `p`
      - `span`
- `Footer`

## Computed Style Targets

### Collection Title
- font-family: `Forum Local`, fallback serif.
- font-size: `clamp(42px, 4.1vw, 62px)`.
- font-weight: `400`.
- line-height: `0.95`.
- text-align: center.

### Toolbar
- display: grid.
- columns: `minmax(145px, 260px) minmax(0, 1fr) minmax(145px, 260px)`.
- padding: `0 20px 46px`.
- filter button font-size: `26px`; font-weight: `700`.
- icons: `30px` square on desktop.

### Product Grid
- display: grid.
- desktop columns: `repeat(4, minmax(0, 1fr))`.
- gap: `30px 38px`.
- padding: `0 20px 78px`.

### Product Media
- aspect-ratio: `1 / 1.22`.
- background: `#ffffff`.
- image: `object-fit: cover`; `object-position: center center`.

### Product Text
- title font-family: `Libre Franklin Local`.
- title font-size: `clamp(16px, 1.35vw, 22px)`.
- title line-height: `1.25`.
- subtitle color: `rgba(41, 41, 41, 0.62)`.
- price font-size: `clamp(15px, 1.1vw, 18px)`.

## States & Behaviors
- Product image hover: scale from `1` to `1.025`.
- Quick Buy default: `opacity: 0`, `transform: translateY(8px)`.
- Quick Buy hover: `opacity: 1`, `transform: translateY(0)`.
- Category active state: `aria-current="page"` adds underline and darker text.

## Assets
- Uses all local catalog photography from `public/images/`.
- Does not use Edward Sexton remote image URLs.

## Text Content
- Product names and prices copied from Edward Sexton `/collections/shirts/products.json`.
- Category names are derived from Edward Sexton product tags.

## Responsive Behavior
- Desktop: 4 columns.
- Tablet below `980px`: 2 columns.
- Mobile below `767px`: 1 column, sort hidden, quick-buy hidden.
