"use client";

import { useState } from "react";
import { Dialog } from "@/components/ui/Dialog";
import type { Market } from "@/lib/content/schemas/market";

export function CountrySelector({ markets }: { markets: Market[] }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(markets[0]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-brand-full text-midnight-700 hover:bg-surface-1 px-3 py-2 text-sm font-medium"
      >
        {selected.countryCode} · {selected.currency}
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        labelledBy="country-selector-heading"
        className="w-full max-w-sm p-6"
      >
        <h2
          id="country-selector-heading"
          className="text-midnight-800 text-lg font-semibold"
        >
          Country / region
        </h2>
        <p className="text-midnight-500 mt-1 text-sm">
          Choose where you&apos;re shopping from to see local shipping and tax
          messaging.
        </p>

        <ul className="mt-4 flex flex-col gap-1" role="list">
          {markets.map((market) => {
            const isSelected = market.countryCode === selected.countryCode;
            return (
              <li key={market.countryCode}>
                <button
                  type="button"
                  onClick={() => {
                    setSelected(market);
                    setOpen(false);
                  }}
                  aria-pressed={isSelected}
                  className="rounded-brand-md hover:bg-surface-1 data-[selected=true]:bg-energy-50 flex w-full items-center justify-between px-3 py-2.5 text-left text-sm"
                  data-selected={isSelected}
                >
                  <span className="text-midnight-800 font-medium">
                    {market.countryName}
                  </span>
                  <span className="text-midnight-500">{market.currency}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </Dialog>
    </>
  );
}
