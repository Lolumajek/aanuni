import { describe, expect, it } from "vitest";
import { getNavigation } from "./navigation";

describe("getNavigation", () => {
  it("returns a schema-valid navigation tree with primary and footer sections", () => {
    const nav = getNavigation();
    expect(nav.primary.length).toBeGreaterThan(0);
    expect(nav.footer.length).toBeGreaterThan(0);
  });

  it("uses only working homepage and email destinations for pre-launch", () => {
    const nav = getNavigation();
    const hrefs = [
      ...nav.primary,
      ...nav.footer.flatMap((column) => column.links),
    ].map((link) => link.href);
    expect(
      hrefs.every(
        (href) => href.startsWith("/#") || href.startsWith("mailto:"),
      ),
    ).toBe(true);
  });
});
