"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { CountrySelector } from "@/components/layout/CountrySelector";
import { useCartUI } from "@/components/cart/CartUIProvider";
import type { PrimaryNavItem } from "@/lib/content/schemas/navigation";
import type { Market } from "@/lib/content/schemas/market";

export function HeaderClient({
  primary,
  markets,
}: {
  primary: PrimaryNavItem[];
  markets: Market[];
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const cart = useCartUI();

  return (
    <header className="border-border bg-surface-0 sticky top-0 z-30 border-b">
      <Container className="flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-brand-full text-midnight-700 hover:bg-surface-1 p-2 lg:hidden"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <Link href="/" aria-label="aanuni home" className="flex items-center">
            <Logo height={24} priority />
          </Link>
        </div>

        <DesktopNav items={primary} />

        <div className="flex items-center gap-1">
          <Link
            href="/search"
            aria-label="Search"
            className="rounded-brand-full text-midnight-700 hover:bg-surface-1 p-2"
          >
            <SearchIcon />
          </Link>
          <div className="hidden sm:block">
            <CountrySelector markets={markets} />
          </div>
          <Link
            href="/account"
            aria-label="Account"
            className="rounded-brand-full text-midnight-700 hover:bg-surface-1 p-2"
          >
            <AccountIcon />
          </Link>
          <button
            type="button"
            onClick={cart.open}
            className="rounded-brand-full text-midnight-700 hover:bg-surface-1 relative p-2"
            aria-label="Open cart"
          >
            <CartIcon />
          </button>
        </div>
      </Container>

      <MobileMenu
        items={primary}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 6h16M3 11h16M3 16h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M17 17l-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function AccountIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="7" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3.5 17c1.2-3.2 4-4.5 6.5-4.5s5.3 1.3 6.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6h13l-1.5 8.5a1.5 1.5 0 01-1.48 1.25H6.98A1.5 1.5 0 015.5 14.5L4 6zm0 0L3.3 3.4A1 1 0 002.33 2.5H1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="18" r="1.1" fill="currentColor" />
      <circle cx="14.5" cy="18" r="1.1" fill="currentColor" />
    </svg>
  );
}
