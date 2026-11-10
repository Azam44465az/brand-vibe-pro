import { describe, it as test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { instagramComparison, instagramPlans, recommendInstagramPlan } from "./instagram-pricing";

const TRY_SCOOBIE_FEATURES = [
  "Dedicated professional video editor",
  "Professional video editing",
  "Brand-specific captions and subtitles",
  "Custom editing style based on your existing content",
  "Sound design and visual enhancements",
  "Hook and pacing improvements",
  "Consistent brand formatting",
  "48-hour turnaround for standard short-form edits",
  "2 revision rounds per video",
  "Dedicated communication channel",
  "Organized file delivery and project management",
];

const rowOf = (sectionTitle: string, label: string) =>
  instagramComparison.find((s) => s.title === sectionTitle)?.rows.find(([l]) => l === label);

describe("Instagram packages", () => {
  test("two packages: Try Scoobie and Scoobie Plus", () => deepStrictEqual(instagramPlans.map((p) => p.name), ["Try Scoobie", "Scoobie Plus"]));
  test("Try Scoobie is $999 and Scoobie Plus has no price", () => deepStrictEqual(instagramPlans.map((p) => p.price), [999, null]));

  test("Try Scoobie lists exactly the agreed features", () => deepStrictEqual([...instagramPlans[0].features], TRY_SCOOBIE_FEATURES));
  test("Try Scoobie promises 48-hour turnaround and 2 revision rounds per video", () => {
    strictEqual(instagramPlans[0].features.includes("48-hour turnaround for standard short-form edits"), true);
    strictEqual(instagramPlans[0].features.includes("2 revision rounds per video"), true);
  });
  test("Try Scoobie covers captions, editing style, sound, hooks and formatting", () => {
    const entryFeatures: readonly string[] = instagramPlans[0].features;
    for (const feature of [
      "Brand-specific captions and subtitles",
      "Custom editing style based on your existing content",
      "Sound design and visual enhancements",
      "Hook and pacing improvements",
      "Consistent brand formatting",
    ]) {
      strictEqual(entryFeatures.includes(feature), true, feature);
    }
  });
  test("Try Scoobie includes a communication channel and organized delivery", () => {
    strictEqual(instagramPlans[0].features.includes("Dedicated communication channel"), true);
    strictEqual(instagramPlans[0].features.includes("Organized file delivery and project management"), true);
  });
  test("mass distribution is only in Scoobie Plus", () => strictEqual(instagramPlans[0].features.some((f) => /distribution/i.test(f)), false));

  test("comparison table mirrors the Try Scoobie terms", () => {
    deepStrictEqual(rowOf("Workflow", "Revisions")?.[1], "2 rounds per video");
    deepStrictEqual(rowOf("Workflow", "Turnaround")?.[1], "48 hours for standard short-form edits");
    deepStrictEqual(rowOf("Editing", "Captions and subtitles")?.[1], "Brand-specific");
    strictEqual(rowOf("Workflow", "Dedicated communication channel") !== undefined, true);
    strictEqual(rowOf("Workflow", "Organized file delivery and project management") !== undefined, true);
  });

  test("light Reels need suggests Try Scoobie", () => strictEqual(recommendInstagramPlan({ formats: ["Reels"], monthlyVolumes: { Reels: 8 }, turnaround: "Flexible" }).name, "Try Scoobie"));
  test("mixed formats suggest Scoobie Plus", () => strictEqual(recommendInstagramPlan({ formats: ["Reels", "Stories"], monthlyVolumes: { Reels: 8, Stories: 4 }, turnaround: "48h" }).name, "Scoobie Plus"));
});
