import {
  navigationTreeSchema,
  type NavigationTree,
} from "@/lib/content/schemas/navigation";
import { navigationFixture } from "@/lib/fixtures/navigation";

/**
 * Navigation is app-level configuration rather than Shopify-sourced data,
 * so it isn't gated by DEMO_MODE — only the fixture source may change
 * later (e.g. to a CMS-backed loader) without callers needing to change.
 */
export function getNavigation(): NavigationTree {
  return navigationTreeSchema.parse(navigationFixture);
}
