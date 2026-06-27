import type { CatalogCategory, CatalogMenuColumn, CatalogProduct } from "@/types/site";

// Single source of truth for catalog categories. Add a row here and it shows up
// automatically in the catalog page nav and the header mega-menu. The "all" slug
// is the landing tab and aggregates every product.
const categoryDefinitions = [
  {
    slug: "all",
    title: "Все изделия",
    menuLabel: "Все",
    description: "Каталог индивидуального пошива Sognatore: костюмы, пиджаки, брюки, пальто, обувь и ткани на заказ.",
    heroImage: "/images/catalog-hero-all.jpg",
    heroPosition: "center center",
  },
  {
    slug: "suits",
    title: "Костюмы",
    menuLabel: "Костюмы",
    description: "Костюмы на заказ — двубортные, однобортные, тройки и смокинги из итальянской и английской шерсти.",
    heroImage: "/images/catalog-hero-suits.jpg",
    heroPosition: "center center",
  },
  {
    slug: "jackets",
    title: "Пиджаки",
    menuLabel: "Пиджаки",
    description: "Пиджаки и блейзеры индивидуального пошива из шерсти, твида и льна.",
    heroImage: "/images/catalog-hero-jackets.jpg",
    heroPosition: "center center",
  },
  {
    slug: "trousers",
    title: "Брюки",
    menuLabel: "Брюки",
    description: "Брюки на заказ — классические, чинос, льняные и фланелевые.",
    heroImage: "/images/catalog-hero-trousers.jpg",
    heroPosition: "center 56%",
  },
  {
    slug: "coats",
    title: "Пальто",
    menuLabel: "Пальто",
    description: "Пальто индивидуального пошива из шерсти и кашемира.",
    heroImage: "/images/catalog-hero-coats.jpg",
    heroPosition: "center center",
  },
  {
    slug: "shoes",
    title: "Обувь",
    menuLabel: "Обувь",
    description: "Обувь ручной работы — оксфорды, дерби, лоферы, монки и броги.",
    heroImage: "/images/catalog-hero-shoes.jpg",
    heroPosition: "center 58%",
  },
  {
    slug: "fabrics",
    title: "Ткани",
    menuLabel: "Ткани",
    description: "Ткани для индивидуального пошива — шерсть, лён, кашемир и твид.",
    heroImage: "/images/catalog-hero-fabrics.jpg",
    heroPosition: "center center",
  },
] as const;

export type CategorySlug = (typeof categoryDefinitions)[number]["slug"];
type ProductCategorySlug = Exclude<CategorySlug, "all">;

// One row per product. Every item has its own generated catalog image and display price.
type ProductInput = {
  category: ProductCategorySlug;
  title: string;
  subtitle: string;
  price: string;
  image: string;
};

const productInputs: ProductInput[] = [
  // Костюмы
  { category: "suits", title: "Двубортный костюм из шерсти", subtitle: "Тёмно-синий, индивидуальный пошив", price: "от 265 000 ₽", image: "/images/catalog-product-suit-double-breasted-wool.jpg" },
  { category: "suits", title: "Однобортный костюм", subtitle: "Серый меланж, шерсть Super 130's", price: "от 225 000 ₽", image: "/images/catalog-product-suit-single-breasted.jpg" },
  { category: "suits", title: "Костюм-тройка из твида", subtitle: "Английский твид, на заказ", price: "от 315 000 ₽", image: "/images/catalog-product-suit-tweed-three-piece.jpg" },
  { category: "suits", title: "Смокинг", subtitle: "Чёрный, атласные лацканы", price: "от 295 000 ₽", image: "/images/catalog-product-suit-tuxedo.jpg" },
  { category: "suits", title: "Костюм в тонкую полоску", subtitle: "Шерсть, классический крой", price: "от 245 000 ₽", image: "/images/catalog-product-suit-pinstripe.jpg" },
  // Пиджаки
  { category: "jackets", title: "Однобортный пиджак", subtitle: "Синяя шерсть, на заказ", price: "от 145 000 ₽", image: "/images/catalog-product-jacket-single-breasted.jpg" },
  { category: "jackets", title: "Блейзер", subtitle: "Тёмно-синий, металлические пуговицы", price: "от 155 000 ₽", image: "/images/catalog-product-jacket-blazer.jpg" },
  { category: "jackets", title: "Твидовый пиджак", subtitle: "Английский твид, на подкладке", price: "от 175 000 ₽", image: "/images/catalog-product-jacket-tweed.jpg" },
  { category: "jackets", title: "Льняной пиджак", subtitle: "Бежевый, без подкладки", price: "от 125 000 ₽", image: "/images/catalog-product-jacket-linen.jpg" },
  { category: "jackets", title: "Клубный пиджак", subtitle: "Бордовый бархат, вечерний", price: "от 185 000 ₽", image: "/images/catalog-product-jacket-club.jpg" },
  // Брюки
  { category: "trousers", title: "Классические брюки", subtitle: "Шерсть, со стрелками", price: "от 62 000 ₽", image: "/images/catalog-product-trousers-classic.jpg" },
  { category: "trousers", title: "Брюки чинос", subtitle: "Хлопок, бежевые", price: "от 48 000 ₽", image: "/images/catalog-product-trousers-chinos.jpg" },
  { category: "trousers", title: "Льняные брюки", subtitle: "Светло-серые, лето", price: "от 54 000 ₽", image: "/images/catalog-product-trousers-linen.jpg" },
  { category: "trousers", title: "Фланелевые брюки", subtitle: "Серая фланель, на заказ", price: "от 68 000 ₽", image: "/images/catalog-product-trousers-flannel.jpg" },
  { category: "trousers", title: "Шерстяные брюки", subtitle: "Тёмно-синие, классический крой", price: "от 64 000 ₽", image: "/images/catalog-product-trousers-wool.jpg" },
  // Пальто
  { category: "coats", title: "Пальто-честерфилд", subtitle: "Кэмел, кашемир", price: "от 285 000 ₽", image: "/images/catalog-product-coat-chesterfield.jpg" },
  { category: "coats", title: "Двубортное пальто", subtitle: "Тёмно-синяя шерсть", price: "от 245 000 ₽", image: "/images/catalog-product-coat-double-breasted.jpg" },
  { category: "coats", title: "Однобортное пальто", subtitle: "Серое, шерсть с кашемиром", price: "от 230 000 ₽", image: "/images/catalog-product-coat-single-breasted.jpg" },
  { category: "coats", title: "Полупальто", subtitle: "Тёмно-зелёное, на заказ", price: "от 195 000 ₽", image: "/images/catalog-product-coat-short.jpg" },
  { category: "coats", title: "Кашемировое пальто", subtitle: "Верблюжья шерсть, зима", price: "от 360 000 ₽", image: "/images/catalog-product-coat-cashmere.jpg" },
  // Обувь
  { category: "shoes", title: "Оксфорды", subtitle: "Чёрная кожа, ручная работа", price: "от 96 000 ₽", image: "/images/catalog-product-shoes-oxford.jpg" },
  { category: "shoes", title: "Дерби", subtitle: "Тёмно-коричневая кожа", price: "от 89 000 ₽", image: "/images/catalog-product-shoes-derby.jpg" },
  { category: "shoes", title: "Лоферы", subtitle: "Кожа, индивидуальный пошив", price: "от 84 000 ₽", image: "/images/catalog-product-shoes-loafers.jpg" },
  { category: "shoes", title: "Монки", subtitle: "Двойная пряжка, на заказ", price: "от 98 000 ₽", image: "/images/catalog-product-shoes-monk.jpg" },
  { category: "shoes", title: "Броги", subtitle: "Коричневые, перфорация", price: "от 92 000 ₽", image: "/images/catalog-product-shoes-brogues.jpg" },
  // Ткани
  { category: "fabrics", title: "Шерсть Super 120's", subtitle: "Итальянская, костюмная", price: "от 18 000 ₽/м", image: "/images/catalog-product-fabric-super-120.jpg" },
  { category: "fabrics", title: "Лён", subtitle: "Итальянский, для лета", price: "от 12 000 ₽/м", image: "/images/catalog-product-fabric-linen.jpg" },
  { category: "fabrics", title: "Кашемир", subtitle: "Премиум, для пальто", price: "от 42 000 ₽/м", image: "/images/catalog-product-fabric-cashmere.jpg" },
  { category: "fabrics", title: "Английский твид", subtitle: "Для пиджаков и костюмов", price: "от 24 000 ₽/м", image: "/images/catalog-product-fabric-tweed.jpg" },
  { category: "fabrics", title: "Шёлк и мохер", subtitle: "Для вечерних костюмов", price: "от 28 000 ₽/м", image: "/images/catalog-product-fabric-silk-mohair.jpg" },
];

// "all" returns every product; any other slug returns just that category.
function productsFor(slug: CategorySlug): CatalogProduct[] {
  return productInputs
    .filter((product) => slug === "all" || product.category === slug)
    .map(({ category: _category, ...rest }) => ({
      ...rest,
    }));
}

export const catalogCategories: CatalogCategory[] = categoryDefinitions.map((category) => ({
  ...category,
  eyebrow: "Индивидуальный пошив",
  products: productsFor(category.slug),
}));

export function getCatalogCategory(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}

const link = (label: string, href: string) => ({ label, href });

export const catalogMenuColumns: CatalogMenuColumn[] = [
  {
    title: "Одежда",
    links: [
      link("Все изделия", "/catalog/all"),
      link("Костюмы", "/catalog/suits"),
      link("Пиджаки", "/catalog/jackets"),
      link("Брюки", "/catalog/trousers"),
      link("Пальто", "/catalog/coats"),
    ],
  },
  {
    title: "Обувь и ткани",
    links: [
      link("Обувь", "/catalog/shoes"),
      link("Ткани", "/catalog/fabrics"),
    ],
  },
  {
    title: "Услуги",
    links: [
      link("Подарочный сертификат", "/certificate"),
      link("Выездной сервис", "/outcall"),
      link("Контакты", "/#contacts"),
    ],
  },
];
