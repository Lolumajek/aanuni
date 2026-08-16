import { describe, expect, it } from "vitest";
import { getNavigation } from "./navigation";

describe("getNavigation", () => {
  it("returns a schema-valid navigation tree with primary and footer sections", () => {
    const nav = getNavigation();
    expect(nav.primary.length).toBeGreaterThan(0);
    expect(nav.footer.length).toBeGreaterThan(0);
  });

  it("includes a Products mega menu with category, device, and scenario columns", () => {
    const nav = getNavigation();
    const products = nav.primary.find((item) => item.label === "Products");
    expect(products?.megaMenu?.columns.map((c) => c.heading)).toEqual([
      "Shop by category",
      "Shop by device",
      "Shop by scenario",
    ]);
  });
});
