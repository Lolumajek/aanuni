import { test, expect } from "@playwright/test";

test.describe("Desktop header navigation", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("navigation points to real homepage sections", async ({
    page,
  }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(
      nav.getByRole("link", { name: "Our collection" }),
    ).toHaveAttribute("href", "/#collection");
    await expect(
      nav.getByRole("link", { name: "Our philosophy" }),
    ).toHaveAttribute("href", "/#philosophy");
    await expect(nav.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "mailto:info@aanuni.com",
    );
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("hamburger opens the mobile menu with an accessible close control", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();

    const heading = page.getByRole("heading", { name: "Menu" });
    await expect(heading).toBeVisible();

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(heading).not.toBeVisible();
  });

  test("mobile menu contains only working links", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.locator('dialog[aria-labelledby="mobile-menu-heading"]');
    await expect(
      menu.getByRole("link", { name: "Our collection" }),
    ).toBeVisible();
    await expect(menu.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "mailto:info@aanuni.com",
    );
  });
});
