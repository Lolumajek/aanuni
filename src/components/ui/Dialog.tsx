"use client";

import { cn } from "@/lib/utils/cn";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
} from "react";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Accessible name for the dialog when no visible heading provides one. */
  ariaLabel?: string;
  labelledBy?: string;
  /** Panel placement — drawer variants slide in from an edge. */
  placement?: "center" | "right" | "left";
  className?: string;
}

/**
 * Accessible dialog/drawer built on the native <dialog> element, which
 * gives us focus trapping, Escape-to-close, and inert background content
 * for free. Backdrop click closes; content clicks do not propagate.
 */
export function Dialog({
  open,
  onClose,
  children,
  ariaLabel,
  labelledBy,
  placement = "center",
  className,
}: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      const raf = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(raf);
    }
    if (!open && dialog.open) {
      setEntered(false);
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => {
      setEntered(false);
      onClose();
    };
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, [onClose]);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      onClose();
    }
  };

  const placementClasses = {
    center: "m-auto rounded-brand-lg",
    right: "ms-auto me-0 h-dvh max-h-none rounded-none",
    left: "me-auto ms-0 h-dvh max-h-none rounded-none",
  } as const;

  const enterTransform =
    placement === "right"
      ? entered
        ? "translate-x-0"
        : "translate-x-full"
      : placement === "left"
        ? entered
          ? "translate-x-0"
          : "-translate-x-full"
        : entered
          ? "scale-100 opacity-100"
          : "scale-95 opacity-0";

  return (
    <dialog
      ref={dialogRef}
      aria-label={labelledBy ? undefined : ariaLabel}
      aria-labelledby={labelledBy}
      onClick={handleBackdropClick}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className={cn(
        "backdrop:bg-midnight-900/40 max-w-full bg-transparent p-0 open:backdrop:animate-none",
        placementClasses[placement],
      )}
    >
      <div
        className={cn(
          "bg-surface-0 shadow-brand-lg duration-base ease-brand h-full transition-all",
          placement === "center" ? "rounded-brand-lg" : "",
          enterTransform,
          className,
        )}
      >
        {children}
      </div>
    </dialog>
  );
}
