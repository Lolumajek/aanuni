"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { MobileMenu } from "@/components/layout/MobileMenu";
import type { PrimaryNavItem } from "@/lib/content/schemas/navigation";

export function HeaderClient({ primary }: { primary: PrimaryNavItem[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);

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

        <a
          href="mailto:info@aanuni.com"
          className="bg-midnight-800 rounded-brand-full hover:bg-midnight-700 px-4 py-2 text-sm font-medium text-white"
        >
          Contact us
        </a>
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
