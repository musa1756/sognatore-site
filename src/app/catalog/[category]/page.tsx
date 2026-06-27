import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ChevronDownIcon, ChevronRightIcon, FilterIcon } from "@/components/icons";
import { asset } from "@/lib/asset";
import { catalogCategories, getCatalogCategory } from "@/lib/catalog";

type CatalogPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return catalogCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CatalogPageProps): Promise<Metadata> {
  const { category } = await params;
  const data = getCatalogCategory(category);

  if (!data) return {};

  return {
    title: `${data.title} | Sognatore`,
    description: data.description,
  };
}

export default async function CatalogCategoryPage({ params }: CatalogPageProps) {
  const { category } = await params;
  const data = getCatalogCategory(category);

  if (!data) notFound();

  return (
    <>
      <Header />
      <main className="catalog-page">
        <section className="catalog-hero">
          <div className="catalog-hero__media" aria-hidden="true">
            <img alt="" src={asset(data.heroImage)} style={{ objectPosition: data.heroPosition }} />
          </div>
          <div className="catalog-hero__overlay" />
          <div className="catalog-hero__content">
            <h1>{data.title}</h1>
          </div>
        </section>

        <section className="catalog-toolbar" aria-label="Управление каталогом">
          <button className="catalog-filter-button" type="button">
            <FilterIcon />
            Фильтр
            <ChevronRightIcon />
          </button>
          <div className="catalog-category-nav" aria-label="Категории каталога">
            {catalogCategories.map((item) => (
              <Link
                aria-current={item.slug === data.slug ? "page" : undefined}
                href={`/catalog/${item.slug}`}
                key={item.slug}
              >
                {item.menuLabel}
              </Link>
            ))}
          </div>
          <button className="catalog-sort-button" type="button">
            Дата, новые
            <ChevronDownIcon />
          </button>
        </section>

        <section className="catalog-grid" aria-label={`${data.title}: демо-каталог`}>
          {data.products.map((product) => (
            <article className="catalog-card" key={product.title}>
              <Link className="catalog-card__media" href="/#contacts">
                <span className="catalog-card__image-frame">
                  <img alt="" src={asset(product.image)} />
                </span>
                <span className="catalog-card__quick-buy">Заказать</span>
              </Link>
              <div className="catalog-card__body">
                <h2>{product.title}</h2>
                <p>{product.subtitle}</p>
                <span>{product.price}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
