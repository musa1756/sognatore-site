// Content for Sognatore — индивидуальный пошив мужской одежды и обуви (Москва).
// Layout, colours and typography are inherited unchanged from the Edward Sexton clone;
// only themes, copy, data and photography are localised here.

export const BRAND = "Sognatore";
export const PHONE = "8 (985) 910-88-88";
export const PHONE_TEL = "+79859108888";

export const NAV_LINKS = [
  { label: "Индивидуальный пошив", href: "#bespoke" },
  { label: "Каталог", href: "#catalog" },
  { label: "Ткани", href: "#about" },
  { label: "Обувь", href: "#catalog" },
  { label: "Услуги", href: "#bespoke" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export const HERO = {
  title: "Индивидуальный пошив",
  subtitle: "Мужская одежда и обувь, сшитые по вашей мерке. Линия, посадка и ткань — под вас.",
  image: "/images/so-hero.jpg",
  ctas: [
    { label: "Записаться на снятие мерок", href: "#contacts" },
    { label: "Получить каталог", href: "#catalog" },
  ],
};

export const SPLIT_PANELS = [
  {
    eyebrow: "Линия, посадка и ткань — под вас",
    title: "Пошив на заказ",
    cta: { label: "Подробнее", href: "#about" },
    image: "/images/so-bespoke.jpg",
  },
  {
    eyebrow: "Эксклюзивный дизайн из премиальных тканей",
    title: "Готовая коллекция",
    cta: { label: "В каталог", href: "#catalog" },
    image: "/images/so-rtw.jpg",
  },
];

export const CATEGORIES = [
  { title: "Костюмы", cta: "Подробнее", href: "#contacts", image: "/images/so-suit.jpg" },
  { title: "Пиджаки и брюки", cta: "Подробнее", href: "#contacts", image: "/images/so-jacket-trousers.jpg" },
  { title: "Пальто и плащи", cta: "Подробнее", href: "#contacts", image: "/images/so-coat.jpg" },
  { title: "Верхняя одежда", cta: "Подробнее", href: "#contacts", image: "/images/so-outerwear.jpg" },
  { title: "Джинсы", cta: "Подробнее", href: "#contacts", image: "/images/so-jeans.jpg" },
  { title: "Обувь", cta: "Индивидуальный пошив", href: "#contacts", image: "/images/so-shoes.jpg" },
];

export const COUTURE = {
  eyebrow: "Эксклюзивное ателье индивидуального пошива в Москве",
  title: "О Sognatore",
  cta: { label: "Узнать больше", href: "#contacts" },
  image: "/images/so-live-1.jpeg",
};

export const FOOTER = {
  quote:
    "Эксклюзивный дизайн, который вы не встретите в магазине. Более 5000 уникальных моделей и лучшие премиальные ткани на каждый сезон.",
  newsletterText: "Подпишитесь на новости, образы и специальные предложения.",
  linksTitle: "Информация",
  links: [
    { label: "Индивидуальный пошив", href: "#bespoke" },
    { label: "Готовая коллекция", href: "#catalog" },
    { label: "Ткани", href: "#about" },
    { label: "Обувь", href: "#catalog" },
    { label: "Выездной сервис", href: "#contacts" },
    { label: "Корпоративные заказы", href: "#contacts" },
    { label: "Подарочный сертификат", href: "#contacts" },
    { label: "О нас", href: "#about" },
  ],
  contact: {
    phone: "8 (985) 910-88-88",
    phone2: "+7 977 493-32-09",
    whatsapp: "WhatsApp +7 985 910-88-88",
    telegram: "Telegram-канал",
    address: "Москва, Ленинградский пр-т, 15 с28",
    hours: "Ежедневно 11:00–20:00",
    visit: "Бесплатный выезд мастера по Москве",
  },
  copyright: "© 2026 Sognatore. Индивидуальный пошив мужской одежды и обуви.",
  policies: [
    { label: "Политика конфиденциальности", href: "#" },
    { label: "Договор оферты", href: "#" },
    { label: "Каталог", href: "#catalog" },
    { label: "Контакты", href: "#contacts" },
  ],
};

// Shown in the announcement bar / footer selector slot.
export const CURRENCY_LABEL = "Москва · RUB ₽";
