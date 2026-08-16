import { getNavigation } from "@/lib/content/navigation";
import { HeaderClient } from "@/components/layout/HeaderClient";

export function Header() {
  const navigation = getNavigation();
  return <HeaderClient primary={navigation.primary} />;
}
