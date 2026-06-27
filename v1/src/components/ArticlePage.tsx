import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { asset, withBasePath } from "@/lib/asset";
import type { ArticleContent } from "@/types/site";

export function ArticlePage({ content }: { content: ArticleContent }) {
  return (
    <>
      <Header />
      <main className="article-page">
        <section className="article-hero">
          <img src={asset(content.heroImage)} alt={content.heroAlt} />
          <div className="image-overlay" />
          <div className="article-hero__inner">
            <p className="article-hero__eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
          </div>
        </section>

        <section className="article-lede">
          <p>{content.lede}</p>
        </section>

        {content.blocks.map((block, index) => (
          <section
            className={`article-block${index % 2 === 1 ? " article-block--reverse" : ""}`}
            key={block.title}
          >
            <figure className="article-block__media">
              <img src={asset(block.image)} alt={block.alt} />
            </figure>
            <div className="article-block__text">
              {block.eyebrow ? <p className="article-block__eyebrow">{block.eyebrow}</p> : null}
              <h2>{block.title}</h2>
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {block.steps ? (
                <ol className="article-steps">
                  {block.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}
              {block.cta ? (
                <a className="button button--dark article-cta" href={withBasePath(block.cta.href)}>
                  {block.cta.label}
                </a>
              ) : null}
            </div>
          </section>
        ))}

        {content.feature ? (
          <section className="article-feature">
            <img src={asset(content.feature.image)} alt={content.feature.alt} />
            <div className="image-overlay" />
            <div className="article-feature__text">
              <h2>{content.feature.title}</h2>
            </div>
          </section>
        ) : null}

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
