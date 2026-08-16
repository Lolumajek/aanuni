"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Politeness = "polite" | "assertive";

interface AnnouncerContextValue {
  announce: (message: string, politeness?: Politeness) => void;
}

const AnnouncerContext = createContext<AnnouncerContextValue | null>(null);

/**
 * Global aria-live regions for status messages that aren't tied to a
 * specific form field — cart updates, search result counts, filter
 * changes. Mount once near the root; call useAnnouncer() anywhere below it.
 */
export function AnnouncerProvider({ children }: { children: ReactNode }) {
  const [polite, setPolite] = useState("");
  const [assertive, setAssertive] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const announce = useCallback(
    (message: string, politeness: Politeness = "polite") => {
      const setter = politeness === "assertive" ? setAssertive : setPolite;
      // Clear first so identical consecutive messages still get announced.
      setter("");
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setter(message), 50);
    },
    [],
  );

  return (
    <AnnouncerContext.Provider value={{ announce }}>
      {children}
      <div aria-live="polite" role="status" className="sr-only">
        {polite}
      </div>
      <div aria-live="assertive" role="alert" className="sr-only">
        {assertive}
      </div>
    </AnnouncerContext.Provider>
  );
}

export function useAnnouncer() {
  const ctx = useContext(AnnouncerContext);
  if (!ctx) {
    throw new Error("useAnnouncer must be used within an AnnouncerProvider");
  }
  return ctx;
}
