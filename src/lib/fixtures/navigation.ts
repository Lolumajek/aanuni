// DEMO DATA — placeholder navigation content for local development under
// DEMO_MODE. Not a real commercial catalogue; replace via the content
// editing guide once real collections exist.
import type { NavigationTree } from "@/lib/content/schemas/navigation";

export const navigationFixture: NavigationTree = {
  primary: [
    {
      label: "Products",
      href: "/products",
      megaMenu: {
        columns: [
          {
            heading: "Shop by category",
            links: [
              { label: "Power banks", href: "/collections/power-banks" },
              { label: "Wall chargers", href: "/collections/wall-chargers" },
              {
                label: "Wireless charging",
                href: "/collections/wireless-charging",
              },
              { label: "Cables", href: "/collections/cables" },
              { label: "Hubs and docks", href: "/collections/hubs-docks" },
              {
                label: "Keyboards and mice",
                href: "/collections/keyboards-mice",
              },
              { label: "Solar charging", href: "/collections/solar-charging" },
              {
                label: "Innovative devices",
                href: "/collections/innovative-devices",
              },
            ],
          },
          {
            heading: "Shop by device",
            links: [
              { label: "Phone", href: "/collections/for-phone" },
              { label: "Laptop", href: "/collections/for-laptop" },
              { label: "Tablet", href: "/collections/for-tablet" },
              { label: "Camera", href: "/collections/for-camera" },
              {
                label: "Gaming handheld",
                href: "/collections/for-gaming-handheld",
              },
              { label: "Drone", href: "/collections/for-drone" },
            ],
          },
          {
            heading: "Shop by scenario",
            links: [
              { label: "Travel", href: "/collections/travel" },
              { label: "Work", href: "/collections/work" },
              { label: "Home", href: "/collections/home" },
              { label: "Gaming", href: "/collections/gaming" },
              { label: "Off-grid", href: "/collections/off-grid" },
            ],
          },
        ],
        featured: {
          label: "Featured launch",
          href: "/products",
          imageSrc: "/brand/aanuni-logo.png",
          imageAlt: "Featured aanuni launch product",
        },
      },
    },
    { label: "Compare", href: "/compare" },
    { label: "Find your product", href: "/find-your-product" },
    { label: "Innovation", href: "/innovation" },
    { label: "Business", href: "/business" },
    { label: "Support", href: "/support" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
  ],
  footer: [
    {
      heading: "Shop",
      links: [
        { label: "All products", href: "/products" },
        { label: "Power banks", href: "/collections/power-banks" },
        { label: "Wall chargers", href: "/collections/wall-chargers" },
        { label: "Cables", href: "/collections/cables" },
        { label: "Compare products", href: "/compare" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About aanuni", href: "/about" },
        { label: "Innovation", href: "/innovation" },
        { label: "Sustainability", href: "/sustainability" },
        { label: "Journal", href: "/journal" },
      ],
    },
    {
      heading: "Business",
      links: [
        { label: "Business solutions", href: "/business" },
        { label: "Wholesale", href: "/wholesale" },
      ],
    },
    {
      heading: "Support",
      links: [
        { label: "Support home", href: "/support" },
        { label: "Manuals", href: "/support/manuals" },
        { label: "Warranty registration", href: "/support/register" },
        { label: "Warranty policy", href: "/warranty-policy" },
        { label: "Repairs", href: "/support/repairs" },
        { label: "Contact us", href: "/support/contact" },
        { label: "Order tracking", href: "/order-tracking" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy policy", href: "/privacy" },
        { label: "Terms of service", href: "/terms" },
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "Accessibility", href: "/accessibility" },
      ],
    },
  ],
};
