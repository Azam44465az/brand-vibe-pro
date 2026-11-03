import { Target, Sparkles, Workflow, TrendingUp, Repeat, CheckCircle2 } from "lucide-react";

const layers = [
  {
    n: "01",
    tag: "Strategy",
    icon: <Target className="h-6 w-6" />,
    title: "Strategy, not just edits",
    desc: "Hook writing, retention analysis and pacing decisions — we tell you why a video will or won't perform before we ship it, and adapt it per platform. YouTube long-form isn't cut like a Reel, and neither works like an ad.",
    bullets: ["Hooks, retention & pacing analysis", "Adapted per platform — long-form ≠ Shorts ≠ ads"],
    c: "bg-brand-yellow text-ink",
    span: "lg:col-span-2",
  },
  {
    n: "02",
    tag: "Creative",
    icon: <Sparkles className="h-6 w-6" />,
    title: "Storytelling built in",
    desc: "Narrative structure, sound design and motion graphics — not just clean cuts. And one brand look that stays consistent across your entire content library.",
    bullets: ["Narrative structure, sound & motion", "One brand look across your library"],
    c: "bg-brand-pink text-ink",
    span: "lg:col-span-2",
  },
  {
    n: "03",
    tag: "Workflow",
    icon: <Workflow className="h-6 w-6" />,
    title: "On time, every time",
    desc: "Most editors miss deadlines. We don't. Raw footage to captions to versions to scheduled delivery — an end-to-end pipeline you never have to think about.",
    bullets: ["End-to-end pipeline, zero chasing", "Deadlines we actually hit"],
    c: "bg-brand-blue text-white",
    span: "lg:col-span-2",
  },
  {
    n: "04",
    tag: "Performance",
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Edits that get smarter",
    desc: "We study what performed and feed it straight into your next edit — \"this hook style doubled retention, let's do more of it.\" For ads, we ship A/B versions so you can test, not guess.",
    bullets: ["Retention insights in every next edit", "A/B versions of ad creatives"],
    c: "bg-brand-purple text-white",
    span: "lg:col-span-3",
  },
  {
    n: "05",
    tag: "Distribution",
    icon: <Repeat className="h-6 w-6" />,
    title: "One asset, a week of content",
    desc: "One podcast becomes 10 Shorts, 5 quote graphics and newsletter snippets. Repurposing that turns a single recording into a full week of posting.",
    bullets: ["1 recording → Shorts, graphics, snippets", "More reach from footage you already have"],
    c: "bg-white border-2 border-ink/10 text-ink shadow-[0_8px_0_0_rgba(20,20,60,0.08)]",
    span: "lg:col-span-3",
  },
];

export function WhyDifferent() {
  return (
    <section id="why-different" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            <TrendingUp className="h-3.5 w-3.5" /> Why clients choose us
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            More than cuts.{" "}
            <span className="relative inline-block">
              <span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] rounded-sm bg-brand-yellow" />
              <span className="relative">A content team.</span>
            </span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Five layers our editors cover on every project — the stuff that turns raw footage into results.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {layers.map((it) => (
            <div key={it.tag} className={`${it.c} ${it.span} rounded-3xl p-7 transition-transform hover:-translate-y-1`}>
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-sm">{it.icon}</div>
                <div className="font-display text-4xl font-extrabold opacity-25">{it.n}</div>
              </div>
              <div className="mt-5 text-xs font-bold uppercase tracking-wider opacity-60">{it.tag}</div>
              <h3 className="font-display mt-1 text-2xl font-extrabold">{it.title}</h3>
              <p className={`mt-3 text-sm ${it.c.includes("text-white") ? "text-white/80" : "text-ink/70"}`}>{it.desc}</p>
              <ul className="mt-4 space-y-1.5">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm font-semibold">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 opacity-70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
