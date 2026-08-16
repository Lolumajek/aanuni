// DEMO DATA — placeholder navigation content for local development under
// DEMO_MODE. Not a real commercial catalogue; replace via the content
// editing guide once real collections exist.
import type { NavigationTree } from "@/lib/content/schemas/navigation";

export const navigationFixture: NavigationTree = {
  primary: [
    { label: "Our collection", href: "/#collection" },
    { label: "Our philosophy", href: "/#philosophy" },
    { label: "Contact", href: "mailto:info@aanuni.com" },
  ],
  footer: [
    {
      heading: "Explore",
      links: [
        { label: "Our collection", href: "/#collection" },
        { label: "Our philosophy", href: "/#philosophy" },
      ],
    },
    {
      heading: "Get in touch",
      links: [{ label: "info@aanuni.com", href: "mailto:info@aanuni.com" }],
    },
  ],
};
