import { describe, it as test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { youtubeComparison, youtubePlans, recommendYouTubePlan } from "./youtube-pricing";

describe("YouTube packages", () => {
  test("two packages: Try Scoobie and Scoobie Plus", () => deepStrictEqual(youtubePlans.map((p) => p.name), ["Try Scoobie", "Scoobie Plus"]));
  test("Try Scoobie is $999 and Scoobie Plus has no price", () => deepStrictEqual(youtubePlans.map((p) => p.price), [999, null]));
  test("dedicated video editor is in both packages", () => strictEqual(youtubePlans.every((p) => p.features.includes("Dedicated video editor")), true));
  test("Try Scoobie has 48-hour turnaround", () => strictEqual(youtubePlans[0].features.includes("48-hour turnaround"), true));
  test("mass distribution is only in Scoobie Plus", () => {
    strictEqual(youtubePlans[0].features.some((f) => /distribution/i.test(f)), false);
    strictEqual(youtubePlans[1].features.some((f) => /distribution/i.test(f)), true);
  });
  test("comparison table has an Output section with videos per month", () => {
    const output = youtubeComparison.find((s) => s.title === "Output");
    strictEqual(output !== undefined, true);
    strictEqual(output?.rows.some(([label]) => label === "Videos per month"), true);
  });
  test("Shorts-only at entry volume suggests Try Scoobie", () => strictEqual(recommendYouTubePlan({ formats: ["Shorts"], monthlyVolumes: { Shorts: 12 }, turnaround: "48h" }).name, "Try Scoobie"));
  test("long-form plus Shorts suggests Scoobie Plus", () => strictEqual(recommendYouTubePlan({ formats: ["Long-form videos", "Shorts"], monthlyVolumes: { "Long-form videos": 2, Shorts: 8 }, turnaround: "48h" }).name, "Scoobie Plus"));
  test("24h turnaround suggests Scoobie Plus", () => strictEqual(recommendYouTubePlan({ formats: ["Shorts"], monthlyVolumes: { Shorts: 4 }, turnaround: "24h" }).name, "Scoobie Plus"));
  test("thumbnails suggest Scoobie Plus", () => strictEqual(recommendYouTubePlan({ formats: ["Thumbnails"], monthlyVolumes: { Thumbnails: 4 }, turnaround: "Flexible" }).name, "Scoobie Plus"));
});
