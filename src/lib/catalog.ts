import type { CatalogCategory, CatalogMenuColumn, CatalogProduct } from "@/types/site";

// Default for a bespoke atelier — products are made to order, not priced up front.
const PRICE_ON_REQUEST = "Цена по запросу";

// Shared photography for the grid. Images are assigned to cards by position
// (see `productsFor`), so the layout and image sizing stay identical no matter
// how the product copy changes.
const catalogImageSet = [
  "/images/suits.jpg",
  "/images/jackets.jpg",
  "/images/shirts.jpg",
  "/images/pattern-cutting.jpg",
  "/images/ready-to-wear.jpg",
  "/images/black-tie.jpg",
  "/images/casual-jackets.jpg",
  "/images/heritage.jpg",
  "/images/hero-desktop.jpg",
  "/images/hero-mobile.jpg",
  "/images/sognatore-catalog.png",
  "/images/sognatore-certificate.jpg",
  "/images/sognatore-contact.jpg",
  "/images/sognatore-craft-photo.png",
  "/images/sognatore-measure.jpg",
  "/images/sognatore-service-1.png",
  "/images/sognatore-service-2.png",
  "/images/sognatore-service-3.png",
  "/images/sognatore-service-4.png",
  "/images/sognatore-service-5.png",
  "/images/sognatore-service-6.png",
  "/images/sognatore-shoes.jpg",
  "/images/sognatore-wide-tailoring-generated.png",
  "/images/womens-bespoke.jpg",
];

// Single source of truth for catalog categories. Add a row here and it shows up
// automatically in the catalog page nav and the header mega-menu. The "all" slug
// is the landing tab and aggregates every product.
const categoryDefinitions = [
  { slug: "all", title: "Все изделия", menuLabel: "Все", description: "Каталог индивидуального пошива Sognatore: костюмы, пиджаки, брюки, пальто, обувь и ткани на заказ." },
  { slug: "suits", title: "Костюмы", menuLabel: "Костюмы", description: "Костюмы на заказ — двубортные, однобортные, тройки и смокинги из итальянской и английской шерсти." },
  { slug: "jackets", title: "Пиджаки", menuLabel: "Пиджаки", description: "Пиджаки и блейзеры индивидуального пошива из шерсти, твида и льна." },
  { slug: "trousers", title: "Брюки", menuLabel: "Брюки", description: "Брюки на заказ — классические, чинос, льняные и фланелевые." },
  { slug: "coats", title: "Пальто", menuLabel: "Пальто", description: "Пальто индивидуального пошива из шерсти и кашемира." },
  { slug: "shoes", title: "Обувь", menuLabel: "Обувь", description: "Обувь ручной работы — оксфорды, дерби, лоферы, монки и броги." },
  { slug: "fabrics", title: "Ткани", menuLabel: "Ткани", description: "Ткани для индивидуального пошива — шерсть, лён, кашемир и твид." },
] as const;

export type CategorySlug = (typeof categoryDefinitions)[number]["slug"];
type ProductCategorySlug = Exclude<CategorySlug, "all">;

// One row per product. `price` is optional and falls back to PRICE_ON_REQUEST.
type ProductInput = {
  category: ProductCategorySlug;
  title: string;
  subtitle: string;
  price?: string;
};

const productInputs: ProductInput[] = [
  // Костюмы
  { category: "suits", title: "Двубортный костюм из шерсти", subtitle: "Тёмно-синий, индивидуальный пошив" },
  { category: "suits", title: "Однобортный костюм", subtitle: "Серый меланж, шерсть Super 130's" },
  { category: "suits", title: "Костюм-тройка из твида", subtitle: "Английский твид, на заказ" },
  { category: "suits", title: "Смокинг", subtitle: "Чёрный, атласные лацканы" },
  { category: "suits", title: "Костюм в тонкую полоску", subtitle: "Шерсть, классический крой" },
  { category: "suits", title: "Льняной костюм", subtitle: "Песочный, летняя коллекция" },
  // Пиджаки
  { category: "jackets", title: "Однобортный пиджак", subtitle: "Синяя шерсть, на заказ" },
  { category: "jackets", title: "Блейзер", subtitle: "Тёмно-синий, металлические пуговицы" },
  { category: "jackets", title: "Твидовый пиджак", subtitle: "Английский твид, на подкладке" },
  { category: "jackets", title: "Льняной пиджак", subtitle: "Бежевый, без подкладки" },
  { category: "jackets", title: "Клубный пиджак", subtitle: "Бордовый бархат, вечерний" },
  // Брюки
  { category: "trousers", title: "Классические брюки", subtitle: "Шерсть, со стрелками" },
  { category: "trousers", title: "Брюки чинос", subtitle: "Хлопок, бежевые" },
  { category: "trousers", title: "Льняные брюки", subtitle: "Светло-серые, лето" },
  { category: "trousers", title: "Фланелевые брюки", subtitle: "Серая фланель, на заказ" },
  { category: "trousers", title: "Шерстяные брюки", subtitle: "Тёмно-синие, классический крой" },
  // Пальто
  { category: "coats", title: "Пальто-честерфилд", subtitle: "Кэмел, кашемир" },
  { category: "coats", title: "Двубортное пальто", subtitle: "Тёмно-синяя шерсть" },
  { category: "coats", title: "Однобортное пальто", subtitle: "Серое, шерсть с кашемиром" },
  { category: "coats", title: "Полупальто", subtitle: "Тёмно-зелёное, на заказ" },
  { category: "coats", title: "Кашемировое пальто", subtitle: "Верблюжья шерсть, зима" },
  // Обувь
  { category: "shoes", title: "Оксфорды", subtitle: "Чёрная кожа, ручная работа" },
  { category: "shoes", title: "Дерби", subtitle: "Тёмно-коричневая кожа" },
  { category: "shoes", title: "Лоферы", subtitle: "Кожа, индивидуальный пошив" },
  { category: "shoes", title: "Монки", subtitle: "Двойная пряжка, на заказ" },
  { category: "shoes", title: "Броги", subtitle: "Коричневые, перфорация" },
  // Ткани
  { category: "fabrics", title: "Шерсть Super 120's", subtitle: "Итальянская, костюмная" },
  { category: "fabrics", title: "Лён", subtitle: "Итальянский, для лета" },
  { category: "fabrics", title: "Кашемир", subtitle: "Премиум, для пальто" },
  { category: "fabrics", title: "Английский твид", subtitle: "Для пиджаков и костюмов" },
];

// "all" returns every product; any other slug returns just that category.
function productsFor(slug: CategorySlug): CatalogProduct[] {
  return productInputs
    .filter((product) => slug === "all" || product.category === slug)
    .map(({ category: _category, price, ...rest }, index) => ({
      ...rest,
      price: price ?? PRICE_ON_REQUEST,
      image: catalogImageSet[index % catalogImageSet.length],
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
      link("Подарочный сертификат", "/#contacts"),
      link("Выездной сервис", "/#contacts"),
      link("Контакты", "/#contacts"),
    ],
  },
];
