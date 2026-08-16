import { describe, expect, it, beforeEach, vi } from "vitest";

describe("getServerEnv", () => {
  beforeEach(() => {
    vi.resetModules();
    delete process.env.SHOPIFY_STORE_DOMAIN;
    delete process.env.SHOPIFY_STOREFRONT_API_TOKEN;
  });

  it("defaults to DEMO_MODE=true and does not require Shopify credentials", async () => {
    process.env.DEMO_MODE = undefined;
    const { getServerEnv } = await import("./env");
    const env = getServerEnv();
    expect(env.DEMO_MODE).toBe(true);
  });

  it("requires Shopify credentials when DEMO_MODE=false", async () => {
    process.env.DEMO_MODE = "false";
    const { getServerEnv } = await import("./env");
    expect(() => getServerEnv()).toThrow(/SHOPIFY_STORE_DOMAIN/);
  });

  it("passes when DEMO_MODE=false and credentials are present", async () => {
    process.env.DEMO_MODE = "false";
    process.env.SHOPIFY_STORE_DOMAIN = "example.myshopify.com";
    process.env.SHOPIFY_STOREFRONT_API_TOKEN = "token";
    const { getServerEnv } = await import("./env");
    expect(() => getServerEnv()).not.toThrow();
  });
});
