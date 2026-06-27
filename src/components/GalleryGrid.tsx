import { asset } from "@/lib/asset";
import type { GalleryItem } from "@/types/site";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <section className="gallery-stack" aria-label="Sognatore services">
      {chunk(items).map((row, index) => (
        <div className={`gallery-row ${row.length === 1 ? "gallery-row--single" : ""}`} key={index}>
          {row.map((item) => (
            <a
              className={`gallery-card ${item.wide ? "gallery-card--wide" : ""}`}
              href={item.href}
              key={item.title}
            >
              <img src={asset(item.image)} alt="" style={{ objectPosition: item.position ?? "center center" }} />
              <span className="image-overlay" />
              <span className="gallery-card__content">
                {item.eyebrow ? <span className="eyebrow">{item.eyebrow}</span> : null}
                <span className="gallery-card__title">{item.title}</span>
                <span className="button button--light">{item.cta}</span>
              </span>
            </a>
          ))}
        </div>
      ))}
    </section>
  );
}

function chunk(items: GalleryItem[]) {
  const rows: GalleryItem[][] = [];
  for (let i = 0; i < items.length; i += 2) {
    const next = items.slice(i, i + 2);
    if (next.some((item) => item.wide)) {
      rows.push(next.filter((item) => item.wide));
      if (next.some((item) => !item.wide)) rows.push(next.filter((item) => !item.wide));
    } else {
      rows.push(next);
    }
  }
  return rows;
}
