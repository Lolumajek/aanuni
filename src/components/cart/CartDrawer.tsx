"use client";

import { Dialog } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { useCartUI } from "@/components/cart/CartUIProvider";

/**
 * Cart contents are wired to Shopify in the commerce-core milestone; this
 * renders the persistent empty state so the drawer's structure, focus
 * trapping, and open/close affordances are already correct.
 */
export function CartDrawer() {
  const { isOpen, close } = useCartUI();

  return (
    <Dialog
      open={isOpen}
      onClose={close}
      placement="right"
      labelledBy="cart-drawer-heading"
      className="flex w-full max-w-md flex-col"
    >
      <div className="border-border flex items-center justify-between border-b px-6 py-5">
        <h2
          id="cart-drawer-heading"
          className="text-midnight-800 text-lg font-semibold"
        >
          Your cart
        </h2>
        <button
          type="button"
          onClick={close}
          className="rounded-brand-full text-midnight-500 hover:bg-surface-1 hover:text-midnight-800 p-2"
          aria-label="Close cart"
        >
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-12 text-center">
        <p className="text-midnight-800 text-base font-medium">
          Your cart is empty
        </p>
        <p className="text-midnight-500 max-w-xs text-sm">
          Browse our products to find graceful, dependable tech for the way you
          work, travel and play.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-2"
          href="/products"
          onClick={close}
        >
          Continue shopping
        </Button>
      </div>
    </Dialog>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
