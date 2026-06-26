# Behaviors & Design Tokens — edwardsexton.co.uk

## Fonts
- **Headings + nav links:** `bigmoore, serif` (Adobe Fonts / Typekit kit `zsu6gjn`) — a high-contrast Didone.
  Adobe-only → **substitute `Playfair Display`** (Google) in the clone. Note in QA.
- **Body / UI / buttons:** `Libre Franklin` (Google Fonts; site self-hosts it). Weights seen: 400, 500, 700.

## Colors
| Token | Value | Use |
|---|---|---|
| `--cream` | `#fbfbf9` (251,251,249) | page background, button bg, text-on-dark |
| `--ink` | `#292929` (41,41,41) | body text |
| `--ink-strong` | `#121212` (18,18,18) | headings, nav links |
| `--green-deep` | `#3a413e` (58,65,62) | button text |
| `--green-darkest` | `#2c312f` (44,49,47) | announcement bar + footer bg |
| `--green-mid` | `#3e4b45` | store-message/accent green |
| `--footer-text` | `#ebe6dc` (235,230,220) | footer text/links |

## Type scale (computed @1800px desktop)
| Element | Font | Size / line-height | Other |
|---|---|---|---|
| Hero title | Playfair(bigmoore) | 84 / 92.4 | weight 400, center, color cream |
| Hero subtitle | Libre Franklin | 24.3 / 38.88 | weight 400, cream |
| Panel/tile title | Playfair | 30 / 33 | weight 400, cream |
| Panel eyebrow | Libre Franklin | 14.4 / 18.72 | w500, ls 1.44px (~0.1em), UPPERCASE, cream |
| Nav link | Playfair | 16 | weight 400, `#121212` |
| Footer heading | Playfair | 22 | cream |
| Footer link | Libre Franklin | 18 | `#ebe6dc` |
| Body | Libre Franklin | 18 / 28.8 | `#292929` |

Sizes are vw-influenced; clone uses `clamp()` so they scale down on small screens.

## Buttons — `.btn` (secondary/cream)
Libre Franklin 16px, weight 400, **letter-spacing 1.28px (0.08em), UPPERCASE**,
color `#3a413e`, bg `#fbfbf9`, padding `19.2px 25px` (~1.2rem 1.56rem),
**no border, no border-radius (sharp corners)**. Hover: subtle darken / slight lift.

## Behaviors
- **Header scroll:** transparent over the hero (white text) → after scrolling past hero it becomes a solid cream bar with dark text/logo and a subtle bottom border; announcement bar scrolls away. Sticky/fixed at top. Transition ~0.3s ease.
- **Reveal on scroll:** section images and overlay text fade/scale in as they enter the viewport (IntersectionObserver, observed in scroll sweep — images start faint and settle). Subtle.
- **Hover:** image tiles — image scales up slightly (~1.03–1.05) with overflow hidden; CTA buttons darken. Nav links — subtle underline/opacity.
- **Smooth scroll:** native; `html { scroll-behavior: smooth }`. No Lenis/Locomotive detected.
- **Cookie banner:** bottom bar with DECLINE / ACCEPT (dismissed during recon; not part of clone). A floating Shopify chat bubble + privacy fingerprint icon are 3rd-party widgets, excluded from clone.

## Layout
- Full-bleed sections (100vw). Hero 680px. Split panels: 2 columns each full-height image with centered overlay. Category tiles: 2-col grid, each ~portrait image with centered title + button. Couture: single full-bleed, half height.
- Overlay text is centered; images darkened with an overlay/gradient for legibility (cream text over photography).

## Responsive (to verify in QA at 390px)
Expected (typical for this theme): nav collapses to hamburger; 2-col panels/tiles stack to 1 column; hero text scales down; footer columns stack. Breakpoint ~750–990px.
