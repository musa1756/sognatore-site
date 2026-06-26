import type { FooterColumn, GalleryItem, NavItem } from "@/types/site";

export const navItems: NavItem[] = [
  { label: "Bespoke Services", href: "/pages/tailoring-services" },
  { label: "Tailoring", href: "/collections/ready-to-wear-tailoring" },
  { label: "Shirts", href: "/collections/shirts" },
  { label: "Casual Wear", href: "/collections/casual-wear" },
  { label: "Accessories", href: "/collections/accessories" },
  { label: "Discover", href: "/pages/our-heritage" },
  { label: "Trunk Shows", href: "/pages/trunk-shows" },
];

export const hero = {
  title: "Spring Summer",
  copy: "The Shape of Summer - softer shapes and lighter fabrics.",
  actions: [
    { label: "Shop The collection", href: "/collections/spring-summer-27" },
    { label: "The shape of Summer", href: "/collections/the-shape-of-summer" },
  ],
};

export const galleryItems: GalleryItem[] = [
  {
    title: "Bespoke",
    eyebrow: "Have your clothes sculpted around you",
    cta: "Discover",
    href: "/pages/tailoring-services",
    image: "/images/pattern-cutting.jpg",
    position: "center bottom",
  },
  {
    title: "Ready To Wear",
    eyebrow: "The iconic sexton look",
    cta: "Shop",
    href: "/collections/ready-to-wear-tailoring",
    image: "/images/ready-to-wear.jpg",
  },
  {
    title: "Jackets",
    cta: "View Collection",
    href: "/collections/jackets",
    image: "/images/jackets.jpg",
  },
  {
    title: "Suits",
    cta: "View Collection",
    href: "/collections/suits",
    image: "/images/suits.jpg",
  },
  {
    title: "Shirts",
    cta: "View Collection",
    href: "/collections/shirts",
    image: "/images/shirts.jpg",
  },
  {
    title: "Black Tie",
    cta: "View Collection",
    href: "/collections/black-tie-and-cocktail",
    image: "/images/black-tie.jpg",
  },
  {
    title: "Casual Wear",
    cta: "View Casual Wear",
    href: "/collections/casual-wear",
    image: "/images/casual-jackets.jpg",
  },
  {
    title: "Discover Edward Sexton",
    cta: "Heritage",
    href: "/pages/our-heritage",
    image: "/images/heritage.jpg",
  },
  {
    title: "Couture Craft",
    eyebrow:
      "Since the early 70s we have been making striking bespoke women's suits",
    cta: "Women's Bespoke",
    href: "/pages/womens-bespoke",
    image: "/images/womens-bespoke.jpg",
    wide: true,
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Information",
    links: [
      { label: "Contact Us", href: "/pages/contact-us" },
      { label: "Overseas Trips", href: "/pages/trunk-shows" },
      { label: "Tailoring Services", href: "/pages/tailoring-services" },
      { label: "Shirting Services", href: "/pages/shirting-services" },
      { label: "Women's Bespoke", href: "/pages/womens-bespoke" },
      { label: "Our Heritage", href: "/pages/our-heritage" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Refund Policy", href: "/policies/refund-policy" },
      { label: "Privacy Policy", href: "/policies/privacy-policy" },
      { label: "Terms of Service", href: "/policies/terms-of-service" },
      { label: "Shipping Policy", href: "/policies/shipping-policy" },
    ],
  },
];

export const socials: NavItem[] = [
  { label: "Twitter", href: "https://twitter.com/SextonBespoke" },
  { label: "Facebook", href: "https://www.facebook.com/edwardsextonbespoke" },
  { label: "Youtube", href: "https://www.youtube.com/user/EdwardSextonTailor" },
  { label: "Instagram", href: "https://www.instagram.com/edwardsexton/" },
  { label: "Pinterest", href: "https://www.pinterest.co.uk/Sextonbespoke/_saved/" },
];
