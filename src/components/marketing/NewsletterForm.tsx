"use client";

import { useActionState } from "react";
import {
  subscribeToNewsletter,
  type NewsletterFormState,
} from "@/lib/forms/newsletter";
import { Button } from "@/components/ui/Button";

const initialState: NewsletterFormState = { status: "idle" };

export function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    initialState,
  );

  return (
    <form action={formAction} className={className} noValidate>
      <label
        htmlFor="newsletter-email"
        className="text-midnight-800 text-sm font-medium"
      >
        Get product news and launch updates
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          autoComplete="email"
          aria-describedby={state.message ? "newsletter-status" : undefined}
          className="rounded-brand-md border-border bg-surface-0 text-midnight-800 placeholder:text-midnight-400 h-11 flex-1 border px-4 text-sm"
        />
        <Button type="submit" size="md" disabled={pending}>
          {pending ? "Signing up…" : "Sign up"}
        </Button>
      </div>
      <div className="mt-2 flex items-start gap-2">
        <input
          id="newsletter-consent"
          name="consent"
          type="checkbox"
          required
          className="border-border mt-0.5 h-4 w-4 rounded"
        />
        <label
          htmlFor="newsletter-consent"
          className="text-midnight-500 text-xs"
        >
          I&apos;d like to receive product news and offers from aanuni by email.
          You can unsubscribe anytime.
        </label>
      </div>
      <p
        id="newsletter-status"
        role="status"
        aria-live="polite"
        className={
          state.status === "error"
            ? "mt-2 text-sm text-[var(--color-danger)]"
            : state.status === "success"
              ? "mt-2 text-sm text-[var(--color-success)]"
              : "sr-only"
        }
      >
        {state.message}
      </p>
    </form>
  );
}
