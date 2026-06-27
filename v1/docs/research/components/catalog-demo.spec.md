# Catalog Demo Specification

## Overview
- Target files: `src/components/Header.tsx`, `src/app/catalog/[category]/page.tsx`
- Reference: `https://www.edwardsexton.co.uk/`
- Interaction model: click-driven desktop mega-menu; static placeholder catalog grid.

## Extracted Edward Sexton Values

### Header Nav / Mega Menu
- Desktop nav item font: `bigmoore, serif`
- Desktop nav item font size: `16px`
- Desktop nav item padding: `22px 18px`
- Open nav item height at 1280px viewport: `68px`
- Mega menu top position: immediately below header
- Mega menu panel background: near-white `rgb(251, 251, 249)`
- Mega menu heading style: serif uppercase, approximately `12.8px`, letter-spaced
- Mega menu item style: serif, approximately `16px` in extracted DOM, visually larger in screenshot because of browser scale/crop.

### Product Grid
- Body background: `rgb(251, 251, 249)`
- Collection toolbar control font: `"Libre Franklin", sans-serif`
- Collection toolbar control font size: `18px`
- Toolbar control height: `54px`
- Product image object fit: `contain`
- Product image visible cell width: about `290px` at 1280px viewport
- Product image visible height: about `290-363px`, depending on item image ratio
- Screenshot layout: 3-column product grid on desktop, large centered collection title, left filter control, right sort control.

## Sognatore Adaptation
- Top-level `Пошив` opens a mega-menu instead of navigating directly.
- Menu columns are Sognatore categories, not Edward Sexton copy.
- Each category routes to `/catalog/<category>`.
- Each category contains exactly 5 placeholder product cards for client presentation.
- Product cards use local Sognatore/reference assets; no live ecommerce backend.

## Categories
- `suits`: Костюмы
- `jackets`: Пиджаки
- `trousers`: Брюки
- `shirts`: Рубашки
- `coats`: Пальто
- `shoes`: Обувь
- `fabrics`: Ткани

## Responsive Behavior
- Desktop: mega-menu appears below sticky header; product grid uses 3 columns.
- Tablet: product grid uses 2 columns.
- Mobile: desktop mega-menu hidden; categories appear in drawer; product grid uses 1 column.
