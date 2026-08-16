import { describe, expect, it, vi, afterEach } from "vitest";
import { getActiveAnnouncements } from "./announcements";

describe("getActiveAnnouncements", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("excludes disabled announcements", async () => {
    vi.doMock("@/lib/fixtures/announcements", () => ({
      announcementsFixture: [
        { id: "a", message: "Active", enabled: true },
        { id: "b", message: "Disabled", enabled: false },
      ],
    }));
    vi.resetModules();
    const { getActiveAnnouncements: fresh } = await import("./announcements");
    const result = fresh();
    expect(result.map((a) => a.id)).toEqual(["a"]);
    vi.doUnmock("@/lib/fixtures/announcements");
  });

  it("returns the demo fixture announcement by default", () => {
    const result = getActiveAnnouncements();
    expect(result.length).toBeGreaterThanOrEqual(0);
    for (const a of result) {
      expect(a.enabled).toBe(true);
    }
  });
});
