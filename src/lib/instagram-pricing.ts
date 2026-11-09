export const instagramPlans = [
  { name: "The Engine", price: 950, reels: 12, maxSeconds: 60, extras: 0, turnaround: 72, revisions: 1,
    coreFeatures: ["Dedicated senior editor", "Retention-first edits & strong hooks", "Monthly performance report"],
    description: "Build a consistent presence with Reels made to hold attention.",
    highlights: ["12 Reels / month · up to 60 seconds", "Dedicated senior editor", "Retention-first edits & hook engineering", "Brand-font captions, sound & Reel covers", "Monthly performance report", "72h turnaround · 1 revision round"] },
  { name: "The Machine", price: 2200, reels: 24, maxSeconds: 90, extras: 4, turnaround: 48, revisions: 2,
    coreFeatures: ["A/B covers & pre-film shot lists", "Monthly content direction call", "Performance reports with niche benchmarks"],
    description: "Grow your output with sharper creative and a clear content direction.",
    highlights: ["24 Reels + 4 Stories / carousels monthly", "Reels up to 90 seconds · custom color preset", "A/B Reel covers & pre-film shot lists", "Performance reports + niche benchmarks", "30-minute monthly content direction call", "48h turnaround · 2 revision rounds"] },
  { name: "The Franchise", price: 4500, reels: 45, maxSeconds: null, extras: 10, turnaround: 48, revisions: null,
    coreFeatures: ["Senior editor + trained backup", "Biweekly direction & quarterly planning", "Scheduling & posting with mobile approval"],
    description: "A complete content operation, from creative direction to scheduled posts.",
    highlights: ["45 Reels + 10 Stories / carousels monthly", "Any Reel length · senior editor + backup", "Competitor tracking & quarterly planning", "45-minute biweekly content direction calls", "Scheduling & posting with mobile approval", "48h delivery + 24h rush · fair-use revisions"] },
] as const;

export const instagramComparison = [
  { title: "Output", rows: [
    ["Reels per month", "12", "24", "45"],
    ["Max Reel length", "60 seconds", "90 seconds", "Any length"],
    ["Stories / carousels", "—", "4 / month", "10 / month"],
    ["Unused Reels rollover", "1 month", "1 month", "1 month"],
  ] },
  { title: "Craft", rows: [
    ["Retention-first editing", "Included", "Included", "Included"],
    ["Hook engineering (niche library)", "Included", "Included", "Included"],
    ["Custom color preset", "Standard", "Custom-built", "Maintained monthly"],
    ["Animated captions (brand fonts)", "Included", "Included", "Included"],
    ["Sound design + licensed music", "Included", "Included", "Included"],
    ["Reel covers", "Included", "With A/B variants", "With A/B variants"],
  ] },
  { title: "Repurposing engine", rows: [
    ["Every Reel → YouTube Shorts + TikTok", "Unlimited, free", "Unlimited, free", "Unlimited, free"],
    ["Batch shot lists (pre-film planning)", "—", "Included", "Included"],
    ["Asset library (all cuts archived)", "Included", "Included", "Included"],
    ["Priority queue", "—", "—", "Included"],
  ] },
  { title: "Strategy", rows: [
    ["Monthly performance report", "Included", "With niche benchmarks", "With competitor tracking"],
    ["Content direction call", "—", "30 min / monthly", "45 min / biweekly"],
    ["Quarterly content planning", "—", "—", "Included"],
    ["Niche trend & format alerts", "Weekly", "Weekly", "Priority"],
    ["Comment mining → Reel topics", "—", "Included", "Included"],
    ["Raw footage review", "—", "Included", "With pre-film consultation"],
  ] },
  { title: "Workflow", rows: [
    ["Dedicated senior editor", "Included", "Included", "With trained backup"],
    ["Turnaround", "72h", "48h", "48h + 24h rush included"],
    ["Revision rounds", "1", "2", "Unlimited (fair use)"],
    ["Feedback system", "Timestamped comments", "Timestamped comments", "Timestamped + approval flow"],
    ["Scheduling & posting", "—", "—", "One-tap mobile approval"],
  ] },
  { title: "Commercial", rows: [
    ["Contract", "Month-to-month", "Month-to-month", "Month-to-month"],
    ["Notice period", "30 days", "30 days", "30 days"],
    ["Mid-month upgrade", "Pro-rata", "Pro-rata", "—"],
    ["Seasonal pause", "—", "50% hold rate", "50% hold rate"],
    ["You own all project files", "Included", "Included", "Included"],
  ] },
] as const;

export type PackageQuizInput = {
  formats: string[];
  monthlyVolumes: Record<string, number>;
  turnaround: string;
};

export function recommendInstagramPlan({ formats, monthlyVolumes, turnaround }: PackageQuizInput) {
  const reels = monthlyVolumes.Reels ?? 0;
  const extras = (monthlyVolumes.Stories ?? 0) + (monthlyVolumes.Carousels ?? 0);
  const unsupported = formats.some((format) => !["Reels", "Stories", "Carousels"].includes(format));
  const plan = unsupported ? undefined : instagramPlans.find((p) =>
    reels <= p.reels && extras <= p.extras &&
    (turnaround === "Flexible" || (turnaround === "48h" ? p.turnaround <= 48 : p.name === "The Franchise")),
  );
  if (!plan) return {
    tier: "Consultation", name: "Instagram · Scope consultation", priceLabel: "Let’s scope it",
    summary: "Your mix of formats or volume needs a tailored scope. Let’s confirm the right package together.",
    included: ["Review your formats and monthly output", "Confirm delivery and revision needs", "Agree on scope and pricing before you start"],
  };
  return {
    tier: plan.name, name: plan.name, priceLabel: `$${plan.price.toLocaleString("en-US")} / month`,
    summary: `${plan.reels} Reels per month${plan.extras ? ` plus ${plan.extras} Stories / carousels` : ""}, with a dedicated senior editor and ${plan.turnaround}h delivery${plan.name === "The Franchise" ? " plus 24h rush" : ""}.`,
    included: [...plan.highlights, "Free repurposing to YouTube Shorts + TikTok", "Unused Reels roll over for 1 month"],
  };
}