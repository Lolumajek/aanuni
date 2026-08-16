import { getActiveAnnouncements } from "@/lib/content/announcements";

export function AnnouncementBar() {
  const announcements = getActiveAnnouncements();
  if (announcements.length === 0) return null;

  // Single-announcement bar for now; rotation/multiple messages can be
  // added later without changing the data contract.
  const announcement = announcements[0];
  const content = (
    <span className="text-sm font-medium text-white">
      {announcement.message}
    </span>
  );

  return (
    <div className="bg-midnight-800 py-2 text-center">
      {announcement.href ? (
        <a
          href={announcement.href}
          className="underline-offset-4 hover:underline"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
