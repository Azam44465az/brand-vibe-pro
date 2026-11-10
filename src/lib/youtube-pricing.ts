export const youtubePlans = [
  {
    name: "Try Scoobie", price: 999 as number | null, tagline: "Save hours every week — no unreliable freelancers, no inconsistent AI editing.", audience: "Best for getting started",
    intro: "Includes",
    features: ["Dedicated video editor", "Professional video editing", "Basic captions and subtitles", "Basic SFX and transitions", "Standard video formatting", "48-hour turnaround", "Limited monthly revisions"],
  },
  {
    name: "Scoobie Plus", price: null as number | null, tagline: "A full content team built to perform.", audience: "For creators ready to scale",
    intro: "Everything in Try Scoobie, plus",
    features: ["Advanced captions and animations", "VFX, SFX and motion graphics", "Long-form to short-form repurposing", "AI-powered editing & AI content creation", "Thumbnail and cover design", "Integrated mass distribution tool", "Priority editing support", "Multiple hook variations", "Custom editing templates", "Priority production queue", "Dedicated quality control", "Cloud storage and project backup"],
  },
] as const;

export const priceLabel = (price: number | null) => (price === null ? "Custom" : `$${price.toLocaleString("en-US")} / month`);

const I = "Included", N = "—";
export const youtubeComparison = [
  { title: "Output", rows: [
    ["Videos per month", "4 videos", "Custom volume"],
    ["Video duration", "Long-form up to 20 min", "Long-form up to 60 min"],
    ["Edited YouTube videos", I, I],
    ["Shorts from long-form", N, I],
    ["Hook variations per video", "1", "Multiple"],
    ["Thumbnails and covers", N, I],
    ["Distribution across platforms", N, "Integrated mass distribution"],
  ] },
  { title: "Editing", rows: [
    ["Dedicated video editor", I, I],
    ["Professional video editing", I, I],
    ["Captions and subtitles", "Basic", "Advanced + animations"],
    ["SFX and transitions", "Basic", "VFX, SFX and motion graphics"],
    ["Video formatting", "Standard", "Custom editing templates"],
    ["Multiple hook variations", N, I],
    ["Thumbnail and cover design", N, I],
  ] },
  { title: "Growth", rows: [
    ["Long-form to short-form repurposing", N, I],
    ["AI-powered editing & AI content creation", N, I],
    ["Integrated mass distribution tool", N, I],
  ] },
  { title: "Workflow", rows: [
    ["Turnaround", "48 hours", "48 hours · priority queue"],
    ["Revisions", "Limited monthly", "Priority editing support"],
    ["Dedicated quality control", N, I],
    ["Cloud storage and project backup", N, I],
  ] },
] as const;

export type YouTubeQuizInput = { formats: string[]; monthlyVolumes: Record<string, number>; turnaround: string };

// Entry-plan ceilings per format: Try Scoobie covers one simple format at a
// time. Anything busier, rushed, or beyond a single format is Scoobie Plus.
const ENTRY_VOLUMES: Record<string, number> = {
  "Long-form videos": 4,
  Shorts: 20,
};

export function recommendYouTubePlan({ formats, monthlyVolumes, turnaround }: YouTubeQuizInput) {
  const onlyOneFormat = formats.length === 1;
  const format = formats[0];
  const withinEntryVolume =
    format in ENTRY_VOLUMES && (monthlyVolumes[format] ?? 0) <= ENTRY_VOLUMES[format];
  const basic = onlyOneFormat && withinEntryVolume && turnaround !== "24h";
  const plan = basic ? youtubePlans[0] : youtubePlans[1];
  return {
    tier: plan.name, name: plan.name, priceLabel: plan.price === null ? "Let’s scope it" : priceLabel(plan.price),
    summary: plan.tagline,
    included: [...plan.features],
  };
}
