import { announcementListSchema } from "@/lib/content/schemas/announcement";
import { announcementsFixture } from "@/lib/fixtures/announcements";

export function getActiveAnnouncements() {
  const all = announcementListSchema.parse(announcementsFixture);
  const now = Date.now();
  return all.filter((a) => {
    if (!a.enabled) return false;
    if (a.startDate && now < Date.parse(a.startDate)) return false;
    if (a.endDate && now > Date.parse(a.endDate)) return false;
    return true;
  });
}
