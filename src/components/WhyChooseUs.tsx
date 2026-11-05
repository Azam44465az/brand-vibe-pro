import { ArrowDownRight, ArrowRight, Check, Play } from "lucide-react";
import strategyImage from "../assets/why-strategy.jpg";
import creativeImage from "../assets/why-creative.jpg";
import platformImage from "../assets/why-platform-native.jpg";
import performanceImage from "../assets/why-performance.jpg";
import distributionImage from "../assets/why-distribution.jpg";

const benefits = [
  {
    name: "Strategy",
    title: "Every cut has a reason.",
    detail: "Hooks, pacing and retention, considered before the edit begins.",
    image: strategyImage,
    shape: "lg:col-span-2 lg:row-span-2",
    tone: "bg-primary-brand",
    graphic: "strategy",
  },
  {
    name: "Creative",
    title: "Made to feel like you.",
    detail: "B-roll, captions and motion shaped around your brand.",
    image: creativeImage,
    shape: "lg:col-span-1 lg:row-span-2",
    tone: "bg-secondary-brand",
    graphic: "creative",
  },
  {
    name: "Platform native",
    title: "Editors who know the platform.",
    detail: "Native instincts for the formats and audiences you publish to.",
    image: platformImage,
    shape: "lg:col-span-1 lg:row-span-2",
    tone: "bg-accent-brand",
    graphic: "platform",
  },
  {
    name: "Performance",
    title: "Learn from every release.",
    detail: "Use what works to make the next edit stronger.",
    image: performanceImage,
    shape: "lg:col-span-2 lg:row-span-2",
    tone: "bg-ink",
    graphic: "performance",
  },
  {
    name: "Distribution",
    title: "One source. More places.",
    detail: "Repurpose and distribute from our built-in tool. No extra-cut fees.",
    image: distributionImage,
    shape: "lg:col-span-2 lg:row-span-2",
    tone: "bg-hero-dark",
    graphic: "distribution",
  },
];

function CardVisual({ kind }: { kind: string }) {
  if (kind === "strategy") {
    return (
      <div className="absolute inset-x-5 top-5 flex h-[56%] items-end overflow-hidden rounded-2xl border border-white/20 bg-ink/25 p-4 sm:inset-x-7 sm:top-7 sm:p-6">
        <svg viewBox="0 0 420 150" className="absolute inset-x-4 bottom-4 h-[62%] w-[calc(100%-2rem)]" aria-hidden="true">
          <path d="M4 130 C40 124 48 34 92 48 S138 115 180 85 S226 42 266 56 S310 110 352 62 S390 39 416 24" fill="none" stroke="white" strokeOpacity=".92" strokeWidth="4" strokeLinecap="round" />
          <path d="M4 130 C40 124 48 34 92 48 S138 115 180 85 S226 42 266 56 S310 110 352 62 S390 39 416 24 V150 H4Z" fill="white" fillOpacity=".12" />
          <circle cx="92" cy="48" r="7" fill="var(--accent-brand)" />
          <circle cx="352" cy="62" r="7" fill="var(--secondary-brand)" />
        </svg>
        <div className="relative z-10 flex w-full items-center justify-between border-t border-white/30 pt-3 text-xs font-semibold text-white sm:text-sm">
          <span>Audience retention</span><span className="rounded-full bg-white/20 px-2.5 py-1">Hook → payoff</span>
        </div>
      </div>
    );
  }
  if (kind === "creative") {
    return (
      <div className="absolute inset-x-5 top-5 flex h-[58%] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-ink/25 sm:inset-x-7 sm:top-7">
        <div className="relative aspect-[9/13] h-[82%] overflow-hidden rounded-xl border-4 border-white/70 bg-ink shadow-xl">
          <img src={creativeImage} alt="Editor crafting a branded short-form video" width={1440} height={1024} loading="lazy" className="h-full w-full object-cover object-center" />
          <span className="absolute inset-x-2 bottom-3 rounded-md bg-ink/75 px-2 py-1 text-center text-[10px] font-extrabold uppercase text-white">Your voice, in every frame</span>
        </div>
        <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink shadow-md"><Play className="h-4 w-4 fill-current" /></span>
      </div>
    );
  }
  if (kind === "platform") {
    return (
      <div className="absolute inset-x-5 top-5 flex h-[58%] flex-col justify-between overflow-hidden rounded-2xl border border-white/25 bg-ink/25 p-4 sm:inset-x-7 sm:top-7 sm:p-5">
        <div className="flex items-center justify-between text-white">
          <span className="text-[10px] font-bold uppercase">Format native</span>
          <span className="rounded-full bg-white/20 px-2 py-1 text-[10px]">9:16</span>
        </div>
        <div className="relative mx-auto flex h-[72%] w-[42%] items-center justify-center overflow-hidden rounded-xl border-2 border-white/70 shadow-xl">
          <img src={platformImage} alt="Creator and editor reviewing a vertical video together" width={1440} height={1024} loading="lazy" className="h-full w-full object-cover object-center" />
          <span className="absolute bottom-2 left-2 right-2 rounded bg-ink/70 px-1.5 py-1 text-center text-[9px] font-bold text-white">Built for the feed</span>
        </div>
      </div>
    );
  }
  if (kind === "performance") {
    return (
      <div className="absolute inset-x-5 top-5 grid h-[58%] grid-cols-2 gap-2 overflow-hidden rounded-2xl border border-white/20 bg-ink/30 p-2 sm:inset-x-7 sm:top-7 sm:gap-3 sm:p-3">
        {["A", "B"].map((version, index) => (
          <div key={version} className={`relative overflow-hidden rounded-xl border p-2 ${index === 1 ? "border-white bg-white/20" : "border-white/25 bg-ink/20"}`}>
            <div className="absolute left-2 top-2 z-10 rounded-full bg-ink/70 px-2 py-1 text-[10px] font-bold text-white">Version {version}</div>
            <img src={performanceImage} alt="Two creative versions being compared" width={1440} height={1024} loading="lazy" className="h-[68%] w-full rounded-lg object-cover" />
            <div className="mt-2 flex items-center justify-between text-white"><span className="text-[10px]">Watch-through</span><span className="text-sm font-extrabold">{index ? "↑" : "↗"}</span></div>
            <div className="mt-1 h-1.5 rounded-full bg-white/25"><div className={`h-full rounded-full bg-white ${index ? "w-4/5" : "w-1/2"}`} /></div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="absolute inset-x-5 top-5 flex h-[58%] flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-ink/35 p-4 sm:inset-x-7 sm:top-7 sm:p-5">
      <div className="flex items-center justify-between text-white"><span className="text-[10px] font-bold uppercase">One master video</span><ArrowDownRight className="h-4 w-4" /></div>
      <div className="grid grid-cols-3 items-center gap-2">
        <div className="col-span-1 flex aspect-video items-center justify-center rounded-lg border border-white/40 bg-white/15 text-white"><Play className="h-4 w-4 fill-current" /></div>
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {["Short clips", "Social posts", "Stories", "Newsletter"].map((label) => <span key={label} className="rounded-md border border-white/30 bg-white/15 px-2 py-2 text-center text-[9px] font-semibold text-white sm:text-[10px]">{label}</span>)}
        </div>
      </div>
      <div className="flex items-center gap-2 text-[10px] font-bold text-white"><span className="grid h-5 w-5 place-items-center rounded-full bg-white/25"><Check className="h-3 w-3" /></span>Repurposed and ready to publish</div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <h2 className="font-display text-4xl font-extrabold text-ink sm:text-5xl lg:text-6xl">Why choose us</h2>
          <span className="hidden items-center gap-2 pb-1 text-sm font-semibold text-muted-foreground sm:flex">Built around better content <ArrowRight className="h-4 w-4" /></span>
        </div>
        <div className="grid auto-rows-[310px] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[330px] lg:grid-cols-4 lg:auto-rows-[225px] lg:gap-5">
          {benefits.map((benefit) => (
            <article key={benefit.name} className={`group relative isolate overflow-hidden rounded-[1.5rem] border border-ink/10 ${benefit.shape} ${benefit.tone}`}>
              <img src={benefit.image} alt="" width={1440} height={1024} loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/10 via-ink/15 to-ink/65" />
              <CardVisual kind={benefit.graphic} />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/30 bg-ink/55 p-4 text-white shadow-lg backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-bold uppercase text-white/75 sm:text-xs">{benefit.name}</span>
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/15 transition-transform group-hover:translate-x-0.5"><ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
                <h3 className="font-display mt-1.5 text-xl font-extrabold leading-tight sm:text-2xl">{benefit.title}</h3>
                <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-white/85 sm:text-sm">{benefit.detail}</p>
              </div>
              <span className="sr-only">Image-led {benefit.name} feature card</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}