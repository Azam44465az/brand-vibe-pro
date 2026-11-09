import { describe, expect, test } from "bun:test";
import { instagramPlans, instagramComparison, recommendInstagramPlan } from "./instagram-pricing";

describe("Supplied Instagram packages", () => {
  test("monthly prices are $950, $2,200 and $4,500", () => expect(instagramPlans.map(p => p.price)).toEqual([950, 2200, 4500]));
  test("monthly Reel allowances are 12, 24 and 45", () => expect(instagramPlans.map(p => p.reels)).toEqual([12, 24, 45]));
  test("maximum Reel lengths are 60s, 90s and unrestricted", () => expect(instagramPlans.map(p => p.maxSeconds)).toEqual([60, 90, null]));
  test("Stories and carousel allowances are 0, 4 and 10", () => expect(instagramPlans.map(p => p.extras)).toEqual([0, 4, 10]));
  test("standard turnaround is 72h, 48h and 48h", () => expect(instagramPlans.map(p => p.turnaround)).toEqual([72, 48, 48]));
  test("revisions are 1, 2 and unlimited", () => expect(instagramPlans.map(p => p.revisions)).toEqual([1, 2, null]));
  for (const section of instagramComparison) for (const [label, ...values] of section.rows) {
    test(`${section.title}: ${label} has three supplied tier values`, () => expect(values.length).toBe(3));
  }
  test("12 Reels fit Engine at $950", () => expect(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 12 }, turnaround: "Flexible" }).priceLabel).toBe("$950 / month"));
  test("24 Reels and 4 Stories fit Machine", () => expect(recommendInstagramPlan({ formats: ["Reels", "Stories"], monthlyVolumes: { Reels: 24, Stories: 4 }, turnaround: "48h" }).name).toBe("The Machine"));
  test("24h rush requires Franchise", () => expect(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 12 }, turnaround: "24h" }).name).toBe("The Franchise"));
  test("volume above 45 Reels needs scope review", () => expect(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 46 }, turnaround: "Flexible" }).tier).toBe("Consultation"));
  test("Stories and carousels share an allowance", () => expect(recommendInstagramPlan({ formats: ["Stories", "Carousels"], monthlyVolumes: { Stories: 4, Carousels: 4 }, turnaround: "Flexible" }).name).toBe("The Franchise"));
  test("formats not in the supplied packages need scope review", () => expect(recommendInstagramPlan({ formats: ["Ads & promos"], monthlyVolumes: { "Ads & promos": 4 }, turnaround: "Flexible" }).tier).toBe("Consultation"));
});