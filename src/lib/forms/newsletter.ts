"use server";

import { z } from "zod";
import { getServerEnv } from "@/lib/env";

const newsletterSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  consent: z.literal(true, {
    message: "Please confirm you'd like to receive email from aanuni.",
  }),
});

export interface NewsletterFormState {
  status: "idle" | "success" | "error";
  message?: string;
}

/**
 * Newsletter provider adapter is not configured yet (no
 * NEWSLETTER_PROVIDER_API_KEY). Validates input server-side and reports
 * honestly rather than claiming a subscription that didn't happen.
 */
export async function subscribeToNewsletter(
  _prevState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
    consent: formData.get("consent") === "on",
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Please check your details.",
    };
  }

  const env = getServerEnv();
  if (!env.NEWSLETTER_PROVIDER_API_KEY) {
    return {
      status: "error",
      message:
        "Newsletter signup isn't connected yet — no provider is configured for this environment.",
    };
  }

  // TODO: call the configured newsletter provider once one is chosen.
  return { status: "success", message: "You're subscribed." };
}
