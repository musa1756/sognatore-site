import type { FooterColumn, GalleryItem, NavItem } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Пошив", href: "/catalog/all" },
  { label: "Обувь", href: "https://sognatore.ru/shoes" },
  { label: "Ткани", href: "https://sognatore.ru/catalog" },
  { label: "Сертификат", href: "https://sognatore.ru/certificate" },
  { label: "Контакты", href: "https://sognatore.ru/contacts" },
];

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
