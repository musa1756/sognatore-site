# Catalog Shirts Behaviors

## Source Observations
- Reference screenshot shows a centered collection title, a left filter control, and a four-column product grid.
- Product names and prices sit below each image tile.
- Cards are static in the visible state; ecommerce quick-buy behavior is implemented as a desktop hover overlay.

## Implemented Behavior
- Category navigation changes route and product subset.
- Product image scales slightly on hover: `transform: scale(1.025)` with `700ms cubic-bezier(0.2, 0, 0, 1)`.
- Quick buy overlay transitions on hover: `opacity` and `transform` over `180ms ease`.
- Mobile hides quick buy overlay to avoid covering product images.

## Responsive Behavior
- Desktop: four columns, `30px 38px` grid gap.
- Tablet: two columns below `980px`.
- Mobile: one column below `767px`; sort button hidden.
