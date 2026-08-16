import { z } from "zod";

/**
 * Server-side environment schema.
 *
 * DEMO_MODE=true is the default for local development and any environment
 * without Shopify credentials. When DEMO_MODE is true, the app reads typed
 * fixtures from `src/lib/fixtures` instead of calling the Shopify Storefront
 * API. Fixture content must never be presented as real commercial data.
 *
 * Shopify credentials are required only when DEMO_MODE=false. They are never
 * read in a client component — see `src/lib/env.public.ts` for the subset of
 * values safe to expose to the browser.
 */
const serverEnvSchema = z
  .object({
    DEMO_MODE: z
      .string()
      .optional()
      .default("true")
      .transform((value) => value !== "false"),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
    SITE_URL: z.string().url().default("https://aanuni.com"),

    // Shopify Storefront API (server-side only; the token below is a public
    // Storefront token by Shopify's design, but we still keep all Shopify
    // reads server-side so the shop domain / API version stay centralized).
    SHOPIFY_STORE_DOMAIN: z.string().min(1).optional(),
    SHOPIFY_STOREFRONT_API_TOKEN: z.string().min(1).optional(),
    SHOPIFY_STOREFRONT_API_VERSION: z.string().default("2025-01"),

    // Optional third-party integrations. Absence keeps the corresponding
    // adapter in no-op mode rather than failing the build.
    GA4_MEASUREMENT_ID: z.string().optional(),
    META_PIXEL_ID: z.string().optional(),
    CLARITY_PROJECT_ID: z.string().optional(),
    SUPPORT_TICKET_PROVIDER_API_KEY: z.string().optional(),
    CRM_API_KEY: z.string().optional(),
    BOT_PROTECTION_SECRET_KEY: z.string().optional(),
    NEWSLETTER_PROVIDER_API_KEY: z.string().optional(),
  })
  .superRefine((value, ctx) => {
    if (!value.DEMO_MODE) {
      if (!value.SHOPIFY_STORE_DOMAIN) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["SHOPIFY_STORE_DOMAIN"],
          message: "Required when DEMO_MODE=false",
        });
      }
      if (!value.SHOPIFY_STOREFRONT_API_TOKEN) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["SHOPIFY_STOREFRONT_API_TOKEN"],
          message: "Required when DEMO_MODE=false",
        });
      }
    }
  });

export type ServerEnv = z.infer<typeof serverEnvSchema>;

let cachedEnv: ServerEnv | undefined;

/**
 * Parses and caches the server environment. Throws with an actionable
 * message on first access during boot rather than failing deep inside a
 * request handler.
 */
export function getServerEnv(): ServerEnv {
  if (cachedEnv) return cachedEnv;

  const parsed = serverEnvSchema.safeParse({
    DEMO_MODE: process.env.DEMO_MODE,
    NODE_ENV: process.env.NODE_ENV,
    SITE_URL: process.env.SITE_URL,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
    SHOPIFY_STOREFRONT_API_TOKEN: process.env.SHOPIFY_STOREFRONT_API_TOKEN,
    SHOPIFY_STOREFRONT_API_VERSION: process.env.SHOPIFY_STOREFRONT_API_VERSION,
    GA4_MEASUREMENT_ID: process.env.GA4_MEASUREMENT_ID,
    META_PIXEL_ID: process.env.META_PIXEL_ID,
    CLARITY_PROJECT_ID: process.env.CLARITY_PROJECT_ID,
    SUPPORT_TICKET_PROVIDER_API_KEY:
      process.env.SUPPORT_TICKET_PROVIDER_API_KEY,
    CRM_API_KEY: process.env.CRM_API_KEY,
    BOT_PROTECTION_SECRET_KEY: process.env.BOT_PROTECTION_SECRET_KEY,
    NEWSLETTER_PROVIDER_API_KEY: process.env.NEWSLETTER_PROVIDER_API_KEY,
  });

  if (!parsed.success) {
    const formatted = parsed.error.issues
      .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
      .join("\n");
    throw new Error(`Invalid environment configuration:\n${formatted}`);
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}
