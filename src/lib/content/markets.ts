import { marketListSchema } from "@/lib/content/schemas/market";
import { marketsFixture } from "@/lib/fixtures/markets";

export function getMarkets() {
  return marketListSchema.parse(marketsFixture).filter((m) => m.enabled);
}
