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
