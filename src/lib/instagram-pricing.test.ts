import { describe, it as test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { instagramPlans, instagramComparison, recommendInstagramPlan } from "./instagram-pricing";

const expect = (actual: unknown) => ({ toEqual: (expected: unknown) => deepStrictEqual(actual, expected), toBe: (expected: unknown) => strictEqual(actual, expected) });
const row = (label: string) => {
  for (const section of instagramComparison) {
    for (const values of section.rows) {
      if (values[0] === label) return values.slice(1);
    }
  }
  return undefined;
};

describe("Supplied Instagram packages", () => {
  test("monthly prices are $950, $2,200 and $4,500", () => expect(instagramPlans.map(p => p.price)).toEqual([950, 2200, 4500]));
  test("monthly Reel allowances are 12, 24 and 45", () => expect(instagramPlans.map(p => p.reels)).toEqual([12, 24, 45]));
  test("maximum Reel lengths are 60s, 90s and unrestricted", () => expect(instagramPlans.map(p => p.maxSeconds)).toEqual([60, 90, null]));
  test("Stories and carousel allowances are 0, 4 and 10", () => expect(instagramPlans.map(p => p.extras)).toEqual([0, 4, 10]));
  test("standard turnaround is 72h, 48h and 48h", () => expect(instagramPlans.map(p => p.turnaround)).toEqual([72, 48, 48]));
  test("revisions are 1, 2 and unlimited", () => expect(instagramPlans.map(p => p.revisions)).toEqual([1, 2, null]));
  test("all unused Reels roll over for one month", () => expect(row("Unused Reels rollover")).toEqual(["1 month", "1 month", "1 month"]));
  test("all plans include free unlimited Shorts and TikTok repurposing", () => expect(row("Every Reel → YouTube Shorts + TikTok")).toEqual(["Unlimited, free", "Unlimited, free", "Unlimited, free"]));
  test("Franchise includes 24h rush", () => expect(row("Turnaround")).toEqual(["72h", "48h", "48h + 24h rush included"]));
  test("all plans are month-to-month", () => expect(row("Contract")).toEqual(["Month-to-month", "Month-to-month", "Month-to-month"]));
  test("all plans require 30 days notice", () => expect(row("Notice period")).toEqual(["30 days", "30 days", "30 days"]));
  test("seasonal pause is only on Machine and Franchise at 50%", () => expect(row("Seasonal pause")).toEqual(["—", "50% hold rate", "50% hold rate"]));
  test("pro-rata upgrades only apply to Engine and Machine", () => expect(row("Mid-month upgrade")).toEqual(["Pro-rata", "Pro-rata", "—"]));
  test("all clients own project files", () => expect(row("You own all project files")).toEqual(["Included", "Included", "Included"]));
  test("only Franchise includes scheduling and posting", () => expect(row("Scheduling & posting")).toEqual(["—", "—", "One-tap mobile approval"]));
  test("direction calls are monthly 30min and biweekly 45min", () => expect(row("Content direction call")).toEqual(["—", "30 min / monthly", "45 min / biweekly"]));
  test("12 Reels fit Engine at $950", () => expect(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 12 }, turnaround: "Flexible" }).priceLabel).toBe("$950 / month"));
  test("24 Reels and 4 Stories fit Machine", () => expect(recommendInstagramPlan({ formats: ["Reels", "Stories"], monthlyVolumes: { Reels: 24, Stories: 4 }, turnaround: "48h" }).name).toBe("The Machine"));
  test("24h rush requires Franchise", () => expect(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 12 }, turnaround: "24h" }).name).toBe("The Franchise"));
  test("volume above 45 Reels needs scope review", () => expect(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 46 }, turnaround: "Flexible" }).tier).toBe("Consultation"));
  test("Stories and carousels share an allowance", () => expect(recommendInstagramPlan({ formats: ["Stories", "Carousels"], monthlyVolumes: { Stories: 4, Carousels: 4 }, turnaround: "Flexible" }).name).toBe("The Franchise"));
  test("formats not in the supplied packages need scope review", () => expect(recommendInstagramPlan({ formats: ["Ads & promos"], monthlyVolumes: { "Ads & promos": 4 }, turnaround: "Flexible" }).tier).toBe("Consultation"));
});