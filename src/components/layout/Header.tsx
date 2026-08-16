import { getNavigation } from "@/lib/content/navigation";
import { getMarkets } from "@/lib/content/markets";
import { HeaderClient } from "@/components/layout/HeaderClient";

export function Header() {
  const navigation = getNavigation();
  const markets = getMarkets();

  return <HeaderClient primary={navigation.primary} markets={markets} />;
}
