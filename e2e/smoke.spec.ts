import { test, expect } from "@playwright/test";

test("homepage renders and has a skip link", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/aanuni/i);
  const skipLink = page.getByRole("link", { name: /skip to main content/i });
  await expect(skipLink).toBeAttached();
});

test("unknown route renders a 404 page", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist");
  expect(response?.status()).toBe(404);
});
