import { hero } from "@/lib/site";

export function Hero() {
  return (
    <section className="hero-section">
      <picture className="hero-media">
        <source media="(max-width: 767px)" srcSet="/images/sognatore-measure.jpg" />
        <img src="/images/sognatore-craft-photo.png" alt="" />
      </picture>
      <div className="image-overlay" />
      <div className="hero-content">
        <h1>{hero.title}</h1>
        <p>{hero.copy}</p>
        <div className="hero-actions">
          {hero.actions.map((action) => (
            <a className="button button--hero" href={action.href} key={action.label}>
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
