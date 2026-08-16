// DEMO DATA — placeholder market list. Real markets are configured once
// Shopify Markets is set up; see docs/shopify-setup.md.
import type { Market } from "@/lib/content/schemas/market";

export const marketsFixture: Market[] = [
  {
    countryCode: "US",
    countryName: "United States",
    currency: "USD",
    locale: "en-US",
    enabled: true,
    shippingMessage: "Shipping and tax calculated at checkout.",
  },
  {
    countryCode: "CA",
    countryName: "Canada",
    currency: "CAD",
    locale: "en-CA",
    enabled: true,
    shippingMessage: "Shipping and tax calculated at checkout.",
  },
  {
    countryCode: "GB",
    countryName: "United Kingdom",
    currency: "GBP",
    locale: "en-GB",
    enabled: true,
    shippingMessage: "VAT included where applicable.",
  },
];
