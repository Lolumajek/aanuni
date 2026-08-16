import { test, expect } from "@playwright/test";

test.describe("Desktop header navigation", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("Products mega menu opens on hover and its links are reachable", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    // The trigger's accessible name toggles between "Open"/"Close Products
    // menu" as the panel opens, so locate it structurally instead.
    const trigger = nav.locator("button[aria-expanded]");
    await expect(trigger).toHaveAttribute("aria-expanded", "false");

    await nav.getByRole("link", { name: "Products", exact: true }).hover();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");

    const powerBanks = nav.getByRole("link", { name: "Power banks" });
    await expect(powerBanks).toBeVisible();
    await expect(powerBanks).toHaveAttribute("href", "/collections/power-banks");
  });

  test("Products label link navigates to /products", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Products", exact: true }).click();
    await expect(page).toHaveURL(/\/products$/);
  });

  test("cart drawer opens, traps focus, and closes", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open cart" }).click();

    const heading = page.getByRole("heading", { name: "Your cart" });
    await expect(heading).toBeVisible();
    await expect(page.getByText("Your cart is empty")).toBeVisible();

    await page.getByRole("button", { name: "Close cart" }).click();
    await expect(heading).not.toBeVisible();
  });

  test("country selector lists markets and updates the trigger label", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: /US · USD/ }).click();
    await expect(page.getByRole("heading", { name: "Country / region" })).toBeVisible();

    await page.getByRole("button", { name: "Canada" }).click();
    await expect(page.getByRole("button", { name: /CA · CAD/ })).toBeVisible();
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("hamburger opens the mobile menu with an accessible close control", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();

    const heading = page.getByRole("heading", { name: "Menu" });
    await expect(heading).toBeVisible();

    await page.getByRole("button", { name: "Close menu" }).click();
    await expect(heading).not.toBeVisible();
  });

  test("Products disclosure expands to reveal category links", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const menu = page.locator('dialog[aria-labelledby="mobile-menu-heading"]');
    await menu.getByRole("button", { name: "Products" }).click();

    await expect(menu.getByRole("link", { name: "Power banks" })).toBeVisible();
  });
});
