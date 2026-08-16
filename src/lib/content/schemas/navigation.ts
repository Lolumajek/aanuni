import { z } from "zod";

export const navLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  description: z.string().optional(),
});
export type NavLink = z.infer<typeof navLinkSchema>;

export const megaMenuColumnSchema = z.object({
  heading: z.string().min(1),
  links: z.array(navLinkSchema).min(1),
});
export type MegaMenuColumn = z.infer<typeof megaMenuColumnSchema>;

export const megaMenuFeaturedSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  imageSrc: z.string().min(1),
  imageAlt: z.string().min(1),
});
export type MegaMenuFeatured = z.infer<typeof megaMenuFeaturedSchema>;

export const megaMenuSchema = z.object({
  columns: z.array(megaMenuColumnSchema).min(1),
  featured: megaMenuFeaturedSchema.optional(),
});
export type MegaMenu = z.infer<typeof megaMenuSchema>;

export const primaryNavItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  megaMenu: megaMenuSchema.optional(),
});
export type PrimaryNavItem = z.infer<typeof primaryNavItemSchema>;

export const footerColumnSchema = z.object({
  heading: z.string().min(1),
  links: z.array(navLinkSchema).min(1),
});
export type FooterColumn = z.infer<typeof footerColumnSchema>;

export const navigationTreeSchema = z.object({
  primary: z.array(primaryNavItemSchema).min(1),
  footer: z.array(footerColumnSchema).min(1),
});
export type NavigationTree = z.infer<typeof navigationTreeSchema>;
