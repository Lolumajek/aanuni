import { z } from "zod";

export const marketSchema = z.object({
  countryCode: z.string().length(2),
  countryName: z.string().min(1),
  currency: z.string().length(3),
  locale: z.string().min(1),
  enabled: z.boolean().default(true),
  shippingMessage: z.string().optional(),
  taxMessage: z.string().optional(),
});
export type Market = z.infer<typeof marketSchema>;

export const marketListSchema = z.array(marketSchema);
