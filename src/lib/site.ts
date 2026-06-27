import type { CatalogCategory, CatalogMenuColumn, CatalogProduct, FooterColumn, GalleryItem, NavItem } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Пошив", href: "/catalog/all" },
  { label: "Обувь", href: "https://sognatore.ru/shoes" },
  { label: "Ткани", href: "https://sognatore.ru/catalog" },
  { label: "Сертификат", href: "https://sognatore.ru/certificate" },
  { label: "Контакты", href: "https://sognatore.ru/contacts" },
];

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

type WardrobeSourceProduct = Omit<CatalogProduct, "image"> & {
  category: string;
};

const wardrobeProducts: WardrobeSourceProduct[] = [
  // Костюмы
  { category: "suits", title: "Двубортный костюм из шерсти", subtitle: "Тёмно-синий, индивидуальный пошив", price: "Цена по запросу" },
  { category: "suits", title: "Однобортный костюм", subtitle: "Серый меланж, шерсть Super 130's", price: "Цена по запросу" },
  { category: "suits", title: "Костюм-тройка из твида", subtitle: "Английский твид, на заказ", price: "Цена по запросу" },
  { category: "suits", title: "Смокинг", subtitle: "Чёрный, атласные лацканы", price: "Цена по запросу" },
  { category: "suits", title: "Костюм в тонкую полоску", subtitle: "Шерсть, классический крой", price: "Цена по запросу" },
  { category: "suits", title: "Льняной костюм", subtitle: "Песочный, летняя коллекция", price: "Цена по запросу" },
  // Пиджаки
  { category: "jackets", title: "Однобортный пиджак", subtitle: "Синяя шерсть, на заказ", price: "Цена по запросу" },
  { category: "jackets", title: "Блейзер", subtitle: "Тёмно-синий, металлические пуговицы", price: "Цена по запросу" },
  { category: "jackets", title: "Твидовый пиджак", subtitle: "Английский твид, на подкладке", price: "Цена по запросу" },
  { category: "jackets", title: "Льняной пиджак", subtitle: "Бежевый, без подкладки", price: "Цена по запросу" },
  { category: "jackets", title: "Клубный пиджак", subtitle: "Бордовый бархат, вечерний", price: "Цена по запросу" },
  // Брюки
  { category: "trousers", title: "Классические брюки", subtitle: "Шерсть, со стрелками", price: "Цена по запросу" },
  { category: "trousers", title: "Брюки чинос", subtitle: "Хлопок, бежевые", price: "Цена по запросу" },
  { category: "trousers", title: "Льняные брюки", subtitle: "Светло-серые, лето", price: "Цена по запросу" },
  { category: "trousers", title: "Фланелевые брюки", subtitle: "Серая фланель, на заказ", price: "Цена по запросу" },
  { category: "trousers", title: "Шерстяные брюки", subtitle: "Тёмно-синие, классический крой", price: "Цена по запросу" },
  // Пальто
  { category: "coats", title: "Пальто-честерфилд", subtitle: "Кэмел, кашемир", price: "Цена по запросу" },
  { category: "coats", title: "Двубортное пальто", subtitle: "Тёмно-синяя шерсть", price: "Цена по запросу" },
  { category: "coats", title: "Однобортное пальто", subtitle: "Серое, шерсть с кашемиром", price: "Цена по запросу" },
  { category: "coats", title: "Полупальто", subtitle: "Тёмно-зелёное, на заказ", price: "Цена по запросу" },
  { category: "coats", title: "Кашемировое пальто", subtitle: "Верблюжья шерсть, зима", price: "Цена по запросу" },
  // Обувь
  { category: "shoes", title: "Оксфорды", subtitle: "Чёрная кожа, ручная работа", price: "Цена по запросу" },
  { category: "shoes", title: "Дерби", subtitle: "Тёмно-коричневая кожа", price: "Цена по запросу" },
  { category: "shoes", title: "Лоферы", subtitle: "Кожа, индивидуальный пошив", price: "Цена по запросу" },
  { category: "shoes", title: "Монки", subtitle: "Двойная пряжка, на заказ", price: "Цена по запросу" },
  { category: "shoes", title: "Броги", subtitle: "Коричневые, перфорация", price: "Цена по запросу" },
  // Ткани
  { category: "fabrics", title: "Шерсть Super 120's", subtitle: "Итальянская, костюмная", price: "Цена по запросу" },
  { category: "fabrics", title: "Лён", subtitle: "Итальянский, для лета", price: "Цена по запросу" },
  { category: "fabrics", title: "Кашемир", subtitle: "Премиум, для пальто", price: "Цена по запросу" },
  { category: "fabrics", title: "Английский твид", subtitle: "Для пиджаков и костюмов", price: "Цена по запросу" },
];

function buildProducts(category?: string): CatalogProduct[] {
  return wardrobeProducts
    .filter((product) => !category || product.category === category)
    .map(({ category: _category, ...product }, index) => ({
      ...product,
      image: catalogImageSet[index % catalogImageSet.length],
    }));
}

export const catalogCategories: CatalogCategory[] = [
  {
    slug: "all",
    title: "Все изделия",
    menuLabel: "Все",
    eyebrow: "Индивидуальный пошив",
    description:
      "Каталог индивидуального пошива Sognatore: костюмы, пиджаки, брюки, пальто, обувь и ткани на заказ.",
    products: buildProducts(),
  },
  {
    slug: "suits",
    title: "Костюмы",
    menuLabel: "Костюмы",
    eyebrow: "Индивидуальный пошив",
    description:
      "Костюмы на заказ — двубортные, однобортные, тройки и смокинги из итальянской и английской шерсти.",
    products: buildProducts("suits"),
  },
  {
    slug: "jackets",
    title: "Пиджаки",
    menuLabel: "Пиджаки",
    eyebrow: "Индивидуальный пошив",
    description: "Пиджаки и блейзеры индивидуального пошива из шерсти, твида и льна.",
    products: buildProducts("jackets"),
  },
  {
    slug: "trousers",
    title: "Брюки",
    menuLabel: "Брюки",
    eyebrow: "Индивидуальный пошив",
    description: "Брюки на заказ — классические, чинос, льняные и фланелевые.",
    products: buildProducts("trousers"),
  },
  {
    slug: "coats",
    title: "Пальто",
    menuLabel: "Пальто",
    eyebrow: "Индивидуальный пошив",
    description: "Пальто индивидуального пошива из шерсти и кашемира.",
    products: buildProducts("coats"),
  },
  {
    slug: "shoes",
    title: "Обувь",
    menuLabel: "Обувь",
    eyebrow: "Индивидуальный пошив",
    description: "Обувь ручной работы — оксфорды, дерби, лоферы, монки и броги.",
    products: buildProducts("shoes"),
  },
  {
    slug: "fabrics",
    title: "Ткани",
    menuLabel: "Ткани",
    eyebrow: "Индивидуальный пошив",
    description: "Ткани для индивидуального пошива — шерсть, лён, кашемир и твид.",
    products: buildProducts("fabrics"),
  },
];

export const catalogMenuColumns: CatalogMenuColumn[] = [
  {
    title: "Изделия",
    links: catalogCategories.map((category) => ({ label: category.menuLabel, href: `/catalog/${category.slug}` })),
  },
  {
    title: "Каталог",
    links: [
      { label: "Все изделия", href: "/catalog/all" },
      { label: "Костюмы", href: "/catalog/suits" },
      { label: "Обувь", href: "/catalog/shoes" },
      { label: "Ткани", href: "/catalog/fabrics" },
    ],
  },
  {
    title: "Сервис",
    links: [
      { label: "Подарочный сертификат", href: "https://sognatore.ru/certificate" },
      { label: "Выезд мастера", href: "https://sognatore.ru/outcall" },
      { label: "Контакты", href: "https://sognatore.ru/contacts" },
    ],
  },
];

export function getCatalogCategory(slug: string) {
  return catalogCategories.find((category) => category.slug === slug);
}

export const hero = {
  title: "Индивидуальный пошив мужской одежды и обуви",
  copy:
    "Бутик-ателье Sognatore в Москве: костюмы, пиджаки, пальто и обувь по вашим меркам.",
  actions: [
    { label: "Записаться", href: "tel:+79859108888" },
    {
      label: "Получить каталог",
      href: "https://wa.me/89774933209?text=%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C%20%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3",
    },
  ],
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Индивидуальный пошив костюма",
    eyebrow: "Идеальная посадка с учетом особенностей фигуры",
    cta: "Записаться",
    href: "/catalog/all",
    image: "/images/sognatore-measure.jpg",
    position: "center center",
  },
  {
    title: "Готовая коллекция мужской одежды",
    eyebrow: "Образы для тех, кто ценит спокойную уверенность",
    cta: "Каталог",
    href: "/catalog/all",
    image: "/images/ready-to-wear.jpg",
  },
  {
    title: "Ткани",
    cta: "Выбрать материал",
    href: "https://sognatore.ru/catalog",
    image: "/images/pattern-cutting.jpg",
    position: "center bottom",
  },
  {
    title: "Индивидуальный пошив обуви",
    cta: "Обувь",
    href: "https://sognatore.ru/shoes",
    image: "/images/sognatore-shoes.jpg",
    position: "center bottom",
  },
  {
    title: "Корпоративный заказ",
    cta: "Обсудить",
    href: "https://sognatore.ru/corporate",
    image: "/images/sognatore-service-1.png",
    position: "center center",
  },
  {
    title: "Рубашки и детали гардероба",
    cta: "Подробнее",
    href: "/catalog/all",
    image: "/images/shirts.jpg",
  },
  {
    title: "Выездной сервис",
    eyebrow: "Портной приедет домой или в офис в удобное время",
    cta: "Заказать выезд",
    href: "https://sognatore.ru/outcall",
    image: "/images/sognatore-service-2.png",
  },
  {
    title: "Подарочный сертификат",
    cta: "Подарить",
    href: "https://sognatore.ru/certificate",
    image: "/images/sognatore-certificate.jpg",
    position: "center center",
  },
  {
    title: "Sognatore",
    eyebrow:
      "Сохраняем ваши мерки, чтобы следующий заказ можно было оформить быстрее или удаленно",
    cta: "Связаться",
    href: "https://sognatore.ru/contacts",
    image: "/images/sognatore-wide-tailoring-generated.png",
    wide: true,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Направления",
    links: [
      { label: "Индивидуальный пошив", href: "/catalog/all" },
      { label: "Обувь", href: "https://sognatore.ru/shoes" },
      { label: "Ткани", href: "https://sognatore.ru/catalog" },
      { label: "Подарочный сертификат", href: "https://sognatore.ru/certificate" },
      { label: "Корпоративные заказы", href: "https://sognatore.ru/corporate" },
      { label: "Выездной сервис", href: "https://sognatore.ru/outcall" },
    ],
  },
  {
    title: "Покупателям",
    links: [
      { label: "Контакты", href: "https://sognatore.ru/contacts" },
      { label: "Политика конфиденциальности", href: "https://sognatore.ru/policy" },
      { label: "Договор оферты", href: "https://sognatore.ru/oferta" },
    ],
  },
];

export const socials: NavItem[] = [
  { label: "WhatsApp", href: "https://wa.me/89774933209" },
  { label: "Telegram", href: "https://t.me/harrisson_shoes" },
];

export const contact = {
  title: "Записаться на снятие мерок",
  copy:
    "Оставьте заявку или позвоните: менеджер согласует встречу в бутике, дома или в офисе.",
  address: "Москва, Ленинградский пр-т., 15с28",
  addressFull: "г. Москва, ул. Ленинградский проспект д. 15, стр. 28",
  hours: "ежедневно с 11.00 до 20.00",
  phone: "+7 (985) 910-88-88",
  phoneHref: "tel:+79859108888",
  secondaryPhone: "+7 (977) 493-32-09",
  secondaryPhoneHref: "tel:+79774933209",
  whatsapp: "https://wa.me/89774933209",
};
