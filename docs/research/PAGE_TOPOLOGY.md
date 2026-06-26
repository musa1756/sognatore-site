# Page Topology — edwardsexton.co.uk (homepage)

Captured at desktop viewport 1800px (automation viewport; breakpoints ≥1024 active).
Shopify store. 22 `shopify-section-*` blocks; visible ones below, top → bottom.

| # | Section id (suffix) | Component | Height@1800 | Notes |
|---|---|---|---|---|
| 0 | announcement-bar | `AnnouncementBar` | 42px | Dark bar `#2c312f`, white 14px. Currency selector "Netherlands (EUR €)" on the right. |
| 1 | header | `Header` | 69px | Sticky nav. Logo (SVG) left, serif nav links center, account/search/cart icons right. Transparent over hero → solid cream on scroll. Mega-menu dropdowns (21 imgs) — simplified to plain links in clone. |
| 3 | image_with_text_overlay | `Hero` | 680px | Full-bleed image `hero-spring-summer.jpg` + dark overlay. Centered: title "Spring Summer" (serif 84px), subtitle, two cream buttons. |
| 5 | gallery_taNTHU | `SplitPanel` ×2 | 1367px | 2-col full-bleed panels. L: "HAVE YOUR CLOTHES SCULPTED AROUND YOU" / **Bespoke** / DISCOVER (`bespoke.jpg`). R: "THE ICONIC SEXTON LOOK" / **Ready To Wear** / SHOP (`ready-to-wear.jpg`). CTA = underlined text link. |
| 7 | gallery_EPaWH3 | `CategoryTile` ×2 | 1125px | Jackets / Suits. |
| 8 | gallery_ftykne | `CategoryTile` ×2 | 1125px | Shirts / Black Tie. |
| 10 | gallery_wr3zfm | `CategoryTile` ×2 | 1125px | Casual Wear (CTA "VIEW CASUAL WEAR") / Discover Edward Sexton (CTA "HERITAGE"). |
| 12 | gallery_qWrXaw | `CoutureSection` | 550px | Single full-bleed `womens-bespoke.jpg`. Eyebrow "SINCE THE EARLY 70S WE HAVE BEEN MAKING STRIKING BESPOKE WOMEN'S SUITS" / title **Couture Craft** / CTA "WOMEN'S BESPOKE". |
| 20 | footer | `Footer` | 733px | Dark `#2c312f`, text `#ebe6dc`. Quote, newsletter (email + SIGN UP + socials), link column, Savile Row contact, bottom bar (currency, copyright "Designed & Built by Studio Graft", payment icons, policy links). |

`rich_text_*` and other zero-height sections are Shopify overlay-text wrappers, merged into the components above. The Shopify "gallery" DOM is rebuilt as clean CSS-grid full-bleed image panels (visually identical, simpler markup).

## Category tile model (data-driven)
6 tiles in a 2-column grid:
- Jackets → VIEW COLLECTION → /collections/jackets
- Suits → VIEW COLLECTION → /collections/suits
- Shirts → VIEW COLLECTION → /collections/shirts
- Black Tie → VIEW COLLECTION → /collections/black-tie
- Casual Wear → VIEW CASUAL WEAR → /collections/casual-wear
- Discover Edward Sexton → HERITAGE → /pages/heritage

## Nav links (verbatim)
Bespoke Services · Tailoring · Shirts · Casual Wear · Accessories · Discover · Trunk Shows
