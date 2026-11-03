import { Target, Sparkles, Workflow, TrendingUp, Repeat } from "lucide-react";

const layers = [
  {
    n: "01",
    tag: "Strategy",
    icon: <Target className="h-7 w-7" />,
    line: "Hooks, pacing & retention — decided before we cut.",
    c: "bg-brand-yellow text-ink",
    span: "lg:col-span-2",
  },
  {
    n: "02",
    tag: "Creative",
    icon: <Sparkles className="h-7 w-7" />,
    line: "Story, sound & motion. One brand look everywhere.",
    c: "bg-brand-pink text-ink",
    span: "lg:col-span-2",
  },
  {
    n: "03",
    tag: "Workflow",
    icon: <Workflow className="h-7 w-7" />,
    line: "Raw footage to scheduled delivery. On time, every time.",
    c: "bg-brand-blue text-white",
    span: "lg:col-span-2",
  },
  {
    n: "04",
    tag: "Performance",
    icon: <TrendingUp className="h-7 w-7" />,
    line: "What performed shapes the next edit. A/B-ready ads.",
    c: "bg-brand-purple text-white",
    span: "lg:col-span-3",
  },
  {
    n: "05",
    tag: "Distribution",
    icon: <Repeat className="h-7 w-7" />,
    line: "One recording becomes a week of content.",
    c: "bg-white border-2 border-ink/10 text-ink shadow-[0_8px_0_0_rgba(20,20,60,0.08)]",
    span: "lg:col-span-3",
  },
];

export function WhyDifferent() {
  return (
    <section id="why-different" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display text-center text-4xl font-extrabold text-ink md:text-6xl">
          <span className="relative inline-block">
            <span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] rounded-sm bg-brand-yellow" />
            <span className="relative">Why choose us</span>
          </span>
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {layers.map((it) => (
            <div key={it.tag} className={`${it.c} ${it.span} group rounded-3xl p-8 transition-transform hover:-translate-y-1`}>
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-ink shadow-md">{it.icon}</div>
                <div className="font-display text-5xl font-extrabold opacity-20 transition-opacity group-hover:opacity-35">{it.n}</div>
              </div>
              <div className="mt-8 text-xs font-bold uppercase tracking-[0.15em] opacity-60">{it.tag}</div>
              <p className="font-display mt-2 text-2xl font-extrabold leading-tight">{it.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
