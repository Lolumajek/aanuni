"use client";

import {
  useId,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import Image from "next/image";
import type { PrimaryNavItem } from "@/lib/content/schemas/navigation";
import { cn } from "@/lib/utils/cn";

export function DesktopNav({ items }: { items: PrimaryNavItem[] }) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenLabel(null), 100);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => (
          <NavItem
            key={item.label}
            item={item}
            isOpen={openLabel === item.label}
            onOpen={() => {
              cancelClose();
              setOpenLabel(item.label);
            }}
            onScheduleClose={scheduleClose}
            onCancelClose={cancelClose}
            onToggle={() =>
              setOpenLabel((current) =>
                current === item.label ? null : item.label,
              )
            }
            onClose={() => setOpenLabel(null)}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({
  item,
  isOpen,
  onOpen,
  onScheduleClose,
  onCancelClose,
  onToggle,
  onClose,
}: {
  item: PrimaryNavItem;
  isOpen: boolean;
  onOpen: () => void;
  onScheduleClose: () => void;
  onCancelClose: () => void;
  onToggle: () => void;
  onClose: () => void;
}) {
  const panelId = useId();

  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  };

  const linkClasses =
    "block rounded-brand-full px-4 py-2 text-sm font-medium text-midnight-700 hover:bg-surface-1 hover:text-midnight-900";

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        if (item.megaMenu) onOpen();
      }}
      onMouseLeave={onScheduleClose}
      onFocus={() => {
        if (item.megaMenu) onOpen();
      }}
      onBlur={handleBlur}
    >
      {!item.megaMenu ? (
        <Link href={item.href} className={linkClasses}>
          {item.label}
        </Link>
      ) : (
        <div className="flex items-center">
          {/* The label itself navigates — /products is a real landing page.
              Hover/focus on this item opens the panel (handled by this
              <li>); the chevron button below only toggles, so it never
              fights the hover state the way a single click-to-navigate-
              and-toggle control would. */}
          <Link
            href={item.href}
            onKeyDown={handleKeyDown}
            className={cn(linkClasses, "pe-1.5")}
          >
            {item.label}
          </Link>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls={panelId}
            aria-label={`${isOpen ? "Close" : "Open"} ${item.label} menu`}
            onClick={onToggle}
            onKeyDown={handleKeyDown}
            className="rounded-brand-full text-midnight-500 hover:bg-surface-1 hover:text-midnight-900 p-2"
          >
            <ChevronIcon
              className={cn(
                "duration-fast transition-transform",
                isOpen && "rotate-180",
              )}
            />
          </button>
        </div>
      )}
      {item.megaMenu && (
        <MegaMenuPanel
          id={panelId}
          item={item}
          visible={isOpen}
          onMouseEnter={onCancelClose}
          onMouseLeave={onScheduleClose}
        />
      )}
    </li>
  );
}

function MegaMenuPanel({
  id,
  item,
  visible,
  onMouseEnter,
  onMouseLeave,
}: {
  id: string;
  item: PrimaryNavItem;
  visible: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (!item.megaMenu) return null;

  return (
    <div
      id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      aria-hidden={!visible}
      className={cn(
        "duration-base ease-brand absolute top-full left-1/2 z-40 w-[min(64rem,90vw)] -translate-x-1/2 pt-3 transition-all",
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-1 opacity-0",
      )}
    >
      <div className="rounded-brand-lg shadow-brand-lg border-border bg-surface-0 grid grid-cols-[2fr_1fr] gap-8 border p-8">
        <div className="grid grid-cols-3 gap-8">
          {item.megaMenu.columns.map((column) => (
            <div key={column.heading}>
              <p className="text-midnight-400 text-xs font-semibold tracking-wide uppercase">
                {column.heading}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      tabIndex={visible ? 0 : -1}
                      className="text-midnight-700 hover:text-energy-600 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.megaMenu.featured && (
          <Link
            href={item.megaMenu.featured.href}
            tabIndex={visible ? 0 : -1}
            className="group rounded-brand-md bg-surface-1 overflow-hidden"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={item.megaMenu.featured.imageSrc}
                alt={item.megaMenu.featured.imageAlt}
                fill
                className="duration-slow ease-brand object-contain p-8 transition-transform group-hover:scale-105"
              />
            </div>
            <p className="text-midnight-800 px-4 pb-4 text-sm font-medium">
              {item.megaMenu.featured.label}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
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
