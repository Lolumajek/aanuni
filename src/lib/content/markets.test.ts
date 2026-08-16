import { describe, expect, it } from "vitest";
import { getMarkets } from "./markets";

describe("getMarkets", () => {
  it("returns only enabled markets with valid ISO-ish codes", () => {
    const markets = getMarkets();
    expect(markets.length).toBeGreaterThan(0);
    for (const market of markets) {
      expect(market.countryCode).toHaveLength(2);
      expect(market.currency).toHaveLength(3);
      expect(market.enabled).toBe(true);
    }
  });
});
