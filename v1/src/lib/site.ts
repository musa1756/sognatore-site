import type { FooterColumn, GalleryItem, NavItem } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Пошив", href: "/catalog/all" },
  { label: "Обувь", href: "/catalog/shoes" },
  { label: "Ткани", href: "/catalog/fabrics" },
  { label: "Сертификат", href: "/certificate" },
  { label: "Контакты", href: "/#contacts" },
];

export const hero = {
  title: "Индивидуальный пошив мужской одежды и обуви",
  copy:
    "Бутик-ателье Sognatore в Москве: костюмы, пиджаки, пальто и обувь по вашим меркам.",
  actions: [
    { label: "Записаться", href: "tel:+79859108888" },
    {
      label: "Получить каталог",
      href: "/catalog/all",
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
    href: "/catalog/fabrics",
    image: "/images/pattern-cutting.jpg",
    position: "center bottom",
  },
  {
    title: "Индивидуальный пошив обуви",
    cta: "Обувь",
    href: "/catalog/shoes",
    image: "/images/sognatore-shoes.jpg",
    position: "center bottom",
  },
  {
    title: "Корпоративный заказ",
    cta: "Обсудить",
    href: "/#contacts",
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
    href: "/outcall",
    image: "/images/sognatore-service-2.png",
  },
  {
    title: "Подарочный сертификат",
    cta: "Подарить",
    href: "/certificate",
    image: "/images/sognatore-certificate.jpg",
    position: "center center",
  },
  {
    title: "Sognatore",
    eyebrow:
      "Сохраняем ваши мерки, чтобы следующий заказ можно было оформить быстрее или удаленно",
    cta: "Связаться",
    href: "/#contacts",
    image: "/images/sognatore-wide-tailoring-generated.png",
    wide: true,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Направления",
    links: [
      { label: "Индивидуальный пошив", href: "/catalog/all" },
      { label: "Обувь", href: "/catalog/shoes" },
      { label: "Ткани", href: "/catalog/fabrics" },
      { label: "Подарочный сертификат", href: "/certificate" },
      { label: "Корпоративные заказы", href: "/#contacts" },
      { label: "Выездной сервис", href: "/outcall" },
    ],
  },
  {
    title: "Покупателям",
    links: [
      { label: "Контакты", href: "/#contacts" },
      { label: "Политика конфиденциальности", href: "/" },
      { label: "Договор оферты", href: "/" },
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
