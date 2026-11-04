import { useEffect, useRef, useState } from "react";
import {
  Brain, Wand2, MessagesSquare, Trophy, Send, Play, CheckCircle2,
} from "lucide-react";

/* ---------------- shared card shell ---------------- */

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group rounded-[2rem] border-2 border-ink/10 bg-white p-7 shadow-[0_8px_0_0_rgba(20,20,60,0.08)] transition-all hover:-translate-y-1 hover:border-ink/25 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function CardHead({
  icon,
  chip,
  title,
  desc,
  dark = false,
}: {
  icon: React.ReactNode;
  chip: string;
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-ink shadow-sm">{icon}</div>
        <span className={`text-[11px] font-bold uppercase tracking-wider ${dark ? "text-white/60" : "text-muted-foreground"}`}>{chip}</span>
      </div>
      <h3 className={`font-display mt-5 text-2xl font-extrabold sm:text-[1.7rem] ${dark ? "text-white" : "text-ink"}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-ink/70"}`}>{desc}</p>
    </>
  );
}

/* ---------------- Strategy: animated retention curve ---------------- */

function StrategyCard() {
  return (
    <Card className="md:col-span-2">
      <CardHead
        icon={<Brain className="h-5 w-5" />}
        chip="Strategy"
        title="They think before they cut"
        desc="Hooks, pacing, retention — your editor tells you why a video will perform, before touching the timeline."
      />
      <div className="mt-6 rounded-2xl border border-ink/10 bg-cream p-4">
        <svg viewBox="0 0 260 90" className="h-24 w-full" aria-hidden>
          <polyline
            points="0,70 30,20 60,52 90,38 120,55 150,44 180,50 210,46 240,48 260,47"
            fill="none" stroke="var(--primary-brand)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="320" style={{ animation: "wh-draw 3.6s ease-in-out infinite" }}
          />
          <circle cx="30" cy="20" r="5" fill="var(--primary-brand)" style={{ animation: "wh-pulse 1.8s ease-in-out infinite", transformOrigin: "30px 20px" }} />
          <circle cx="30" cy="20" r="2.5" fill="white" />
        </svg>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary-brand px-3 py-1 text-[11px] font-bold text-white">Hook holds 71%</span>
          <span className="wh-fade rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-bold text-ink">Cut dead air at 0:07</span>
        </div>
      </div>
    </Card>
  );
}

/* ---------------- Creative: cycling caption frames ---------------- */

function CreativeCard() {
  const frames = [
    { label: "Hook rewrite", bar: "w-3/4" },
    { label: "B-roll match", bar: "w-1/2" },
    { label: "Sound design", bar: "w-2/3" },
  ];
  return (
    <Card className="md:col-span-2">
      <CardHead
        icon={<Wand2 className="h-5 w-5" />}
        chip="Creative"
        title="Craft in every frame"
        desc="B-roll, captions, motion and sound design — matched to your brand, not a template."
      />
      <div className="mt-6 rounded-2xl border border-ink/10 bg-ink p-4">
        <div className="relative h-24 overflow-hidden rounded-xl bg-gradient-to-br from-primary-brand/60 via-hero-card to-secondary-brand">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 grid place-items-center"
              style={{ animation: `wh-fade 7.5s ease-in-out infinite`, animationDelay: `${i * 2.5}s` }}
            >
              <span className="rounded-full bg-white/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-ink shadow">
                {frames[i].label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <div className="h-1.5 flex-1 rounded-full bg-white/20">
            <div className="h-full w-2/3 rounded-full bg-white" />
          </div>
          <span className="text-[10px] font-bold text-white/60">0:12 / 0:45</span>
        </div>
      </div>
    </Card>
  );
}

/* ---------------- Workflow: auto-playing comment thread ---------------- */

function WorkflowCard() {
  const bubbles = [
    { text: "Brief: launch-day reel, punchy", time: "You", chip: "bg-brand-pink" },
    { text: "Cut dead air at 0:07?", time: "Editor · 0:07", chip: "bg-brand-yellow" },
    { text: "Approved — ship it", time: "You", chip: "bg-brand-blue" },
  ];
  return (
    <Card className="md:col-span-2">
      <CardHead
        icon={<MessagesSquare className="h-5 w-5" />}
        chip="Workflow"
        title="One workspace, zero chaos"
        desc="Briefs, time-stamped comments and approvals in one place — no more lost DMs."
      />
      <div className="mt-6 space-y-2.5 rounded-2xl border border-ink/10 bg-cream p-4">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className={`flex items-start gap-2.5 ${i % 2 ? "flex-row-reverse" : ""}`}
            style={{ animation: "wh-pop 9s ease-in-out infinite", animationDelay: `${i * 3}s` }}
          >
            <div className={`min-w-0 max-w-[80%] rounded-2xl ${b.chip} px-3.5 py-2 shadow-sm`}>
              <div className="text-[10px] font-bold uppercase tracking-wide text-ink/60">{b.time}</div>
              <div className="truncate text-xs font-semibold text-ink">{b.text}</div>
            </div>
          </div>
        ))}
        <CheckCircle2 className="mx-auto h-5 w-5 text-primary-brand" style={{ animation: "wh-pop 9s ease-in-out infinite", animationDelay: "9s" }} />
      </div>
    </Card>
  );
}

/* ---------------- Performance: clickable A/B test ---------------- */

function PerformanceCard() {
  const [winner, setWinner] = useState<"A" | "B">("B");
  useEffect(() => {
    const t = setInterval(() => setWinner((w) => (w === "A" ? "B" : "A")), 2600);
    return () => clearInterval(t);
  }, []);
  const stats = { A: 34, B: 71 };

  return (
    <Card className="md:col-span-2">
      <CardHead
        icon={<Trophy className="h-5 w-5" />}
        chip="Performance"
        title="Built to perform"
        desc="A/B hooks and thumbnails — then we double down on what your audience rewards."
      />
      <div className="mt-6 grid grid-cols-2 gap-3">
        {(["A", "B"] as const).map((v) => (
          <button
            key={v}
            onClick={() => setWinner(v)}
            aria-pressed={winner === v}
            className={`relative rounded-2xl border-2 p-3 text-left transition-all ${
              winner === v ? "border-primary-brand bg-primary-brand/5 shadow-[0_4px_0_0_var(--primary-brand)]" : "border-ink/10 bg-cream hover:border-ink/25"
            }`}
          >
            <div className={`mx-auto aspect-video w-full rounded-lg ${v === "A" ? "bg-hero-card" : "bg-secondary-brand"}`} />
            <div className="mt-2.5 flex items-center justify-between">
              <span className="font-display text-lg font-extrabold text-ink">{v}</span>
              <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${winner === v ? "bg-primary-brand text-white" : "bg-ink/10 text-ink/60"}`}>
                {stats[v]}% ret.
              </span>
            </div>
            {winner === v && (
              <span className="absolute -top-2.5 right-2 rounded-full bg-brand-yellow px-2 py-0.5 text-[9px] font-extrabold uppercase text-ink shadow-sm">
                2x winner
              </span>
            )}
          </button>
        ))}
      </div>
      <p className="mt-3 text-center text-[11px] font-semibold text-muted-foreground">Tap a version to test it yourself</p>
    </Card>
  );
}

/* ---------------- Distribution: interactive repurposing flow ---------------- */

const CHANNELS = [
  { name: "Reels", count: "6 vertical cuts", icon: "◈" },
  { name: "Shorts", count: "8 auto-cut clips", icon: "▶" },
  { name: "TikTok", count: "5 trending cuts", icon: "♪" },
  { name: "LinkedIn", count: "3 pro edits", icon: "in" },
  { name: "Carousel", count: "4 quote slides", icon: "▤" },
  { name: "Newsletter", count: "1 snippet pack", icon: "✉" },
];

function DistributionCard() {
  const [active, setActive] = useState(0);
  const manualRef = useRef<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => {
      if (manualRef.current && Date.now() - manualRef.current < 5000) return;
      setActive((a) => (a + 1) % CHANNELS.length);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border-2 border-ink/20 bg-ink p-7 shadow-[0_8px_0_0_rgba(20,20,60,0.25)] transition-all hover:-translate-y-1 sm:p-8 md:col-span-4">
      <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-brand/25 blur-[90px]" />
      <CardHead
        dark
        icon={<Send className="h-5 w-5" />}
        chip="Distribution"
        title="Repurposing + built-in distribution"
        desc="One master video becomes every cut — and our built-in tool pushes it everywhere for you. So you never pay for extra cuts."
      />

      {/* master video -> channels flow */}
      <div className="relative mt-6 grid items-center gap-4 sm:grid-cols-[auto_1fr] sm:gap-6">
        <div className="mx-auto flex w-36 shrink-0 flex-col items-center sm:w-40">
          <div className="grid aspect-video w-full place-items-center rounded-xl bg-gradient-to-br from-primary-brand to-primary-brand-dark shadow-lg">
            <Play className="h-7 w-7 fill-white text-white" />
          </div>
          <span className="mt-2 text-center text-[10px] font-bold uppercase tracking-wider text-white/60">1 master video</span>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <button
              key={c.name}
              onClick={() => { setActive(i); manualRef.current = Date.now(); }}
              aria-pressed={active === i}
              className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left transition-all ${
                active === i
                  ? "border-primary-brand bg-primary-brand text-white shadow-[0_3px_0_0_var(--primary-brand-dark)]"
                  : "border-white/15 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10"
              }`}
            >
              <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-xs font-bold ${active === i ? "bg-white/25 text-white" : "bg-white/10 text-white/70"}`}>
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block truncate text-xs font-bold">{c.name}</span>
                <span className={`block truncate text-[10px] ${active === i ? "text-white/80" : "text-white/50"}`}>{c.count}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/5 px-4 py-3">
        <p className="text-xs font-semibold text-white/80">
          <span className="text-brand-yellow">{CHANNELS[active].count}</span> from one master — pushed automatically
        </p>
        <span className="rounded-full bg-brand-yellow px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wide text-ink">
          Extra cuts: $0 — included
        </span>
      </div>
    </div>
  );
}

/* ---------------- Section ---------------- */

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
            Why <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">choose us</span></span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Not just editors — a partner who thinks, tests, and ships everywhere for you.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          <StrategyCard />
          <CreativeCard />
          <WorkflowCard />
          <PerformanceCard />
          <DistributionCard />
        </div>
      </div>
    </section>
  );
}
