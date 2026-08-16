"use client";

import { useState } from "react";
import Link from "next/link";
import { Dialog } from "@/components/ui/Dialog";
import type { PrimaryNavItem } from "@/lib/content/schemas/navigation";
import { cn } from "@/lib/utils/cn";

export function MobileMenu({
  items,
  open,
  onClose,
}: {
  items: PrimaryNavItem[];
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      placement="left"
      labelledBy="mobile-menu-heading"
      className="flex w-[85vw] max-w-sm flex-col"
    >
      <div className="border-border flex items-center justify-between border-b px-5 py-4">
        <h2
          id="mobile-menu-heading"
          className="text-midnight-800 text-base font-semibold"
        >
          Menu
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded-brand-full text-midnight-500 hover:bg-surface-1 p-2"
          aria-label="Close menu"
        >
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
        </button>
      </div>

      <nav aria-label="Primary" className="flex-1 overflow-y-auto px-2 py-3">
        <ul className="flex flex-col">
          {items.map((item) => {
            const isExpanded = expanded === item.label;
            return (
              <li
                key={item.label}
                className="border-border border-b last:border-b-0"
              >
                {item.megaMenu ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setExpanded(isExpanded ? null : item.label)
                      }
                      className="text-midnight-800 flex w-full items-center justify-between px-3 py-3.5 text-left text-base font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "duration-fast transition-transform",
                          isExpanded && "rotate-180",
                        )}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pb-3">
                        {item.megaMenu.columns.map((column) => (
                          <div key={column.heading} className="px-3 py-2">
                            <p className="text-midnight-400 text-xs font-semibold tracking-wide uppercase">
                              {column.heading}
                            </p>
                            <ul className="mt-1.5 flex flex-col">
                              {column.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={onClose}
                                    className="text-midnight-600 block py-1.5 text-sm"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-midnight-800 block px-3 py-3.5 text-base font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </Dialog>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M2.5 4.5L6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
