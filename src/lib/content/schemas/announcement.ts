import { z } from "zod";

export const announcementSchema = z.object({
  id: z.string().min(1),
  message: z.string().min(1),
  href: z.string().optional(),
  enabled: z.boolean().default(true),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
});
export type Announcement = z.infer<typeof announcementSchema>;

export const announcementListSchema = z.array(announcementSchema);
