import { describe, it as test } from "node:test";
import { deepStrictEqual, strictEqual } from "node:assert";
import { youtubeComparison, youtubePlans, recommendYouTubePlan } from "./youtube-pricing";

const TRY_SCOOBIE_FEATURES = [
  "Dedicated professional video editor",
  "Professional video editing",
  "Brand-specific captions and subtitles",
  "Custom editing style based on your existing content",
  "Sound design and visual enhancements",
  "Hook and pacing improvements",
  "Consistent brand formatting",
  "48-hour turnaround for standard long-form edits",
  "2 revision rounds per video",
  "Dedicated communication channel",
  "Organized file delivery and project management",
];

const rowOf = (sectionTitle: string, label: string) =>
  youtubeComparison.find((s) => s.title === sectionTitle)?.rows.find(([l]) => l === label);

describe("YouTube packages", () => {
  test("two packages: Try Scoobie and Scoobie Plus", () => deepStrictEqual(youtubePlans.map((p) => p.name), ["Try Scoobie", "Scoobie Plus"]));
  test("Try Scoobie is $999 and Scoobie Plus has no price", () => deepStrictEqual(youtubePlans.map((p) => p.price), [999, null]));

  test("Try Scoobie lists exactly the agreed features", () => deepStrictEqual([...youtubePlans[0].features], TRY_SCOOBIE_FEATURES));
  test("Try Scoobie promises 48-hour turnaround on long-form edits and 2 revision rounds per video", () => {
    strictEqual(youtubePlans[0].features.includes("48-hour turnaround for standard long-form edits"), true);
    strictEqual(youtubePlans[0].features.includes("2 revision rounds per video"), true);
  });
  test("Try Scoobie turnaround covers long-form, not short-form", () => {
    strictEqual(youtubePlans[0].features.some((f) => /turnaround.*short-form/i.test(f)), false);
  });
  test("Try Scoobie includes a communication channel and organized delivery", () => {
    strictEqual(youtubePlans[0].features.includes("Dedicated communication channel"), true);
    strictEqual(youtubePlans[0].features.includes("Organized file delivery and project management"), true);
  });
  test("Try Scoobie builds on the entry package, Scoobie Plus adds on top", () => {
    strictEqual(youtubePlans[1].intro, "Everything in Try Scoobie, plus");
    strictEqual(youtubePlans[1].features.some((f) => /distribution/i.test(f)), true);
  });

  test("comparison table has an Output section with videos per month", () => {
    const output = youtubeComparison.find((s) => s.title === "Output");
    strictEqual(output !== undefined, true);
    strictEqual(output?.rows.some(([label]) => label === "Videos per month"), true);
  });
  test("comparison table Output shows video duration per package", () => {
    const duration = rowOf("Output", "Video duration");
    deepStrictEqual(duration !== undefined, true);
    deepStrictEqual(duration?.[1], "Long-form up to 20 min");
    deepStrictEqual(duration?.[2], "Long-form up to 60 min");
  });
  test("comparison table mirrors the Try Scoobie terms", () => {
    deepStrictEqual(rowOf("Workflow", "Revisions")?.[1], "2 rounds per video");
    deepStrictEqual(rowOf("Workflow", "Turnaround")?.[1], "48 hours for standard long-form edits");
    deepStrictEqual(rowOf("Editing", "Captions and subtitles")?.[1], "Brand-specific");
    strictEqual(rowOf("Workflow", "Dedicated communication channel") !== undefined, true);
    strictEqual(rowOf("Workflow", "Organized file delivery and project management") !== undefined, true);
  });

  test("Shorts-only at entry volume suggests Try Scoobie", () => strictEqual(recommendYouTubePlan({ formats: ["Shorts"], monthlyVolumes: { Shorts: 12 }, turnaround: "48h" }).name, "Try Scoobie"));
  test("long-form plus Shorts suggests Scoobie Plus", () => strictEqual(recommendYouTubePlan({ formats: ["Long-form videos", "Shorts"], monthlyVolumes: { "Long-form videos": 2, Shorts: 8 }, turnaround: "48h" }).name, "Scoobie Plus"));
  test("24h turnaround suggests Scoobie Plus", () => strictEqual(recommendYouTubePlan({ formats: ["Shorts"], monthlyVolumes: { Shorts: 4 }, turnaround: "24h" }).name, "Scoobie Plus"));
  test("thumbnails suggest Scoobie Plus", () => strictEqual(recommendYouTubePlan({ formats: ["Thumbnails"], monthlyVolumes: { Thumbnails: 4 }, turnaround: "Flexible" }).name, "Scoobie Plus"));
});
