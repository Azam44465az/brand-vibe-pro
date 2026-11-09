import { describe, it as test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { instagramPlans, recommendInstagramPlan } from "./instagram-pricing";

describe("Instagram packages", () => {
  test("two packages: Try Scoobie and Scoobie Plus", () => deepStrictEqual(instagramPlans.map((p) => p.name), ["Try Scoobie", "Scoobie Plus"]));
  test("Try Scoobie is $999 and Scoobie Plus has no price", () => deepStrictEqual(instagramPlans.map((p) => p.price), [999, null]));
  test("Try Scoobie has 48-hour turnaround", () => strictEqual(instagramPlans[0].features.includes("48-hour turnaround"), true));
  test("mass distribution is only in Scoobie Plus", () => strictEqual(instagramPlans[0].features.some((f) => /distribution/i.test(f)), false));
  test("light Reels need suggests Try Scoobie", () => strictEqual(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 8 }, turnaround: "Flexible" }).name, "Try Scoobie"));
  test("mixed formats suggest Scoobie Plus", () => strictEqual(recommendInstagramPlan({ formats: ["Reels", "Stories"], monthlyVolumes: { Reels: 8, Stories: 4 }, turnaround: "48h" }).name, "Scoobie Plus"));
});
