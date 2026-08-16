"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface CartUIContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const CartUIContext = createContext<CartUIContextValue | null>(null);

/**
 * UI-only open/close state for the cart drawer. Actual cart contents are
 * wired up against the Shopify Storefront API in the commerce-core
 * milestone — this provider only owns whether the drawer is visible.
 */
export function CartUIProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<CartUIContextValue>(
    () => ({
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
    }),
    [isOpen],
  );

  return (
    <CartUIContext.Provider value={value}>{children}</CartUIContext.Provider>
  );
}

export function useCartUI() {
  const ctx = useContext(CartUIContext);
  if (!ctx) throw new Error("useCartUI must be used within a CartUIProvider");
  return ctx;
}
