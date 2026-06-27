export type NavItem = {
  label: string;
  href: string;
};

export type GalleryItem = {
  title: string;
  eyebrow?: string;
  cta: string;
  href: string;
  image: string;
  position?: string;
  wide?: boolean;
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export type CatalogProduct = {
  title: string;
  subtitle: string;
  image: string;
  price: string;
};

export type CatalogCategory = {
  slug: string;
  title: string;
  menuLabel: string;
  eyebrow: string;
  description: string;
  products: CatalogProduct[];
};

export type CatalogMenuColumn = {
  title: string;
  links: NavItem[];
};

export type ArticleBlock = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
  cta?: NavItem;
  image: string;
  alt: string;
};

export type ArticleFeature = {
  title: string;
  image: string;
  alt: string;
};

export type ArticleContent = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  lede: string;
  blocks: ArticleBlock[];
  feature?: ArticleFeature;
};
