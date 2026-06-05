import { createFileRoute } from "@tanstack/react-router";
import {
  Search, Mail, TrendingUp, Megaphone, DollarSign, Clock, Sparkles, Film,
  CheckCircle2, Users, Zap, ArrowRight, Play, Instagram, MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reelhire — Hire your personal Instagram video editor" },
      { name: "description", content: "Top 1% editors working exclusively on your brand. Reels, stories, and shorts — managed end-to-end on our editing-as-a-service platform." },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full bg-white px-6 py-3 text-[oklch(0.15_0_0)] shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
        <a href="#" className="font-display text-2xl tracking-tight">reelhire</a>
        <div className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#platform" className="hover:opacity-60">Platform</a>
          <a href="#editors" className="hover:opacity-60">Editors</a>
          <a href="#how" className="hover:opacity-60">How it works</a>
          <a href="#pricing" className="hover:opacity-60">Pricing</a>
          <a href="#faq" className="hover:opacity-60">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-sm font-medium hover:opacity-60 md:inline">Log in</a>
          <a href="#pricing" className="rounded-full bg-[oklch(0.15_0_0)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">
            Hire an editor
          </a>
        </div>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Editing-as-a-service for Instagram
        </p>
        <h1 className="font-display mt-6 text-balance text-[clamp(3.5rem,11vw,11rem)] uppercase">
          Hire your personal<br/>video editor
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
          Top 1% editors who understand your brand deeply, work exclusively on it, and ship in your timezone.
          Reels, stories, shorts — managed end-to-end on one platform.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#pricing" className="rounded-full bg-hot-pink px-7 py-3.5 text-base font-semibold text-[oklch(0.15_0_0)] transition hover:scale-105">
            Hire an editor
          </a>
          <a href="#how" className="rounded-full bg-secondary px-7 py-3.5 text-base font-semibold text-foreground hover:bg-secondary/80">
            See how it works
          </a>
        </div>
        <p className="mt-5 text-sm text-muted-foreground">
          7-day trial · Replace anytime · No long contracts
        </p>
      </div>

      {/* Bento collage */}
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-12 gap-3 px-6">
        <Tile className="col-span-2 aspect-square rounded-full bg-soft-pink overflow-hidden">
          <img alt="" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80" className="h-full w-full object-cover"/>
        </Tile>
        <Tile className="col-span-2 aspect-square rounded-3xl bg-magenta flex items-center justify-center">
          <Search className="h-12 w-12 text-soft-pink"/>
        </Tile>
        <Tile className="col-span-2 aspect-square rounded-3xl bg-lilac flex items-center justify-center">
          <Mail className="h-12 w-12 text-[oklch(0.25_0.08_305)]"/>
        </Tile>
        <Tile className="col-span-4 aspect-[2/1] rounded-3xl bg-soft-pink flex items-center justify-center">
          <span className="font-display text-3xl text-magenta">REELS · STORIES · SHORTS</span>
        </Tile>
        <Tile className="col-span-2 aspect-square rounded-3xl bg-cream overflow-hidden">
          <img alt="" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" className="h-full w-full object-cover"/>
        </Tile>

        <Tile className="col-span-2 aspect-square rounded-3xl bg-coral flex items-center justify-center">
          <TrendingUp className="h-12 w-12 text-white"/>
        </Tile>
        <Tile className="col-span-3 aspect-[3/2] rounded-3xl bg-peach flex items-center justify-center px-6">
          <span className="font-display text-2xl text-[oklch(0.3_0.15_30)]">EDIT · REVISE · SHIP</span>
        </Tile>
        <Tile className="col-span-1 aspect-square rounded-3xl bg-cream overflow-hidden">
          <img alt="" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=80" className="h-full w-full object-cover"/>
        </Tile>
        <Tile className="col-span-2 aspect-square rounded-3xl bg-peach flex items-center justify-center">
          <Megaphone className="h-12 w-12 text-coral"/>
        </Tile>
        <Tile className="col-span-2 aspect-square rounded-3xl bg-sand flex items-center justify-center">
          <Film className="h-12 w-12 text-[oklch(0.3_0.05_90)]"/>
        </Tile>
        <Tile className="col-span-1 aspect-square rounded-full bg-soft-pink overflow-hidden">
          <img alt="" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" className="h-full w-full object-cover"/>
        </Tile>
        <Tile className="col-span-1 aspect-square rounded-3xl bg-coral flex items-center justify-center">
          <DollarSign className="h-10 w-10 text-white"/>
        </Tile>
      </div>
    </section>
  );
}

function Tile({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

function LogoStrip() {
  const logos = ["FOUNDERFUEL", "AGENTLAB", "NORTHWAVE", "BRIGHTCO", "STUDIO 9", "HOMEBASE", "PEAKLINE"];
  return (
    <section className="border-y border-border py-10">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Trusted by founders, agents, and brands shipping content daily
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
        {logos.map((l) => (
          <span key={l} className="font-display text-xl tracking-wider text-muted-foreground">{l}</span>
        ))}
      </div>
    </section>
  );
}

type FeatureProps = { eyebrow: string; title: string; copy: string; bg: string; fg: string; cta: string; mock: React.ReactNode };
function Feature({ eyebrow, title, copy, bg, fg, cta, mock }: FeatureProps) {
  return (
    <div className="rounded-[2rem] p-8 md:p-14" style={{ background: `var(--${bg})`, color: `var(--${fg})` }}>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">{eyebrow}</p>
          <h3 className="font-display mt-4 text-5xl uppercase md:text-6xl">{title}</h3>
          <p className="mt-5 max-w-md text-base opacity-80">{copy}</p>
          <button className="mt-7 rounded-full bg-[oklch(0.15_0_0)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90">
            {cta}
          </button>
        </div>
        <div>{mock}</div>
      </div>
    </div>
  );
}

function PlatformSection() {
  return (
    <section id="platform" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display mx-auto max-w-4xl text-balance text-center text-[clamp(2.5rem,6vw,5rem)] uppercase">
          Your whole editing workflow, finally
        </h2>
        <div className="mx-auto mt-10 flex max-w-xl justify-center rounded-full bg-secondary p-1.5">
          {["Brief", "Edit", "Review", "Ship"].map((t, i) => (
            <button key={t} className={`flex-1 rounded-full px-6 py-2.5 text-sm font-semibold ${i === 0 ? "bg-background text-foreground shadow" : "text-muted-foreground"}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <Feature
            eyebrow="Brief in seconds"
            title="Stay in control"
            copy="Drop raw footage, share references, set the vibe. Your editor sees it all in one shared brand workspace — no Drive links, no chaos."
            bg="hot-pink" fg="card"
            cta="Explore briefs"
            mock={<BriefMock />}
          />
          <Feature
            eyebrow="Editing as a service"
            title="One editor, your brand"
            copy="A dedicated editor who learns your brand voice, your hooks, your fonts. Working in your timezone, on your queue, not a faceless agency pool."
            bg="lilac" fg="primary-foreground"
            cta="Meet the editors"
            mock={<EditorMock />}
          />
          <Feature
            eyebrow="Track everything"
            title="Watch reels ship"
            copy="Live status on every reel, story, and short. Approve in one tap, request changes inline, see what's posting this week — all from your dashboard."
            bg="peach" fg="primary-foreground"
            cta="See the platform"
            mock={<TrackMock />}
          />
        </div>
      </div>
    </section>
  );
}

function BriefMock() {
  return (
    <div className="rounded-2xl bg-white p-5 text-[oklch(0.15_0_0)] shadow-2xl">
      <div className="flex items-center justify-between border-b pb-3">
        <span className="font-semibold">New Brief · #REEL-128</span>
        <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">In progress</span>
      </div>
      <div className="mt-4 space-y-3 text-sm">
        <div><span className="text-gray-500">Format</span><div className="font-medium">Instagram Reel · 9:16 · 30s</div></div>
        <div><span className="text-gray-500">Hook</span><div className="font-medium">"3 mistakes killing your reach"</div></div>
        <div><span className="text-gray-500">References</span>
          <div className="mt-1 flex gap-2">
            <div className="h-14 w-10 rounded bg-soft-pink"/>
            <div className="h-14 w-10 rounded bg-lilac"/>
            <div className="h-14 w-10 rounded bg-peach"/>
          </div>
        </div>
        <div><span className="text-gray-500">Delivery</span><div className="font-medium">Tomorrow · 9am IST</div></div>
      </div>
    </div>
  );
}

function EditorMock() {
  return (
    <div className="rounded-2xl bg-white p-6 text-[oklch(0.15_0_0)] shadow-2xl">
      <div className="flex items-center gap-4">
        <img alt="" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=160&q=80" className="h-16 w-16 rounded-full object-cover"/>
        <div>
          <div className="font-semibold">Priya M. · Your editor</div>
          <div className="text-xs text-gray-500">Top 1% · 380+ reels shipped</div>
        </div>
        <span className="ml-auto rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">Online</span>
      </div>
      <div className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between"><span className="text-gray-500">Timezone</span><span className="font-medium">GMT+5:30</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Avg turnaround</span><span className="font-medium">22 hours</span></div>
        <div className="flex justify-between"><span className="text-gray-500">Specialty</span><span className="font-medium">Founder reels</span></div>
      </div>
      <div className="mt-5 rounded-xl bg-soft-pink p-3 text-sm">
        "Loaded your last podcast — pulling 4 hook cuts by tonight."
      </div>
    </div>
  );
}

function TrackMock() {
  const items = [
    { name: "Founder story · v2", status: "Ready to review", color: "bg-hot-pink" },
    { name: "Studio tour · short", status: "Editing", color: "bg-lilac" },
    { name: "Listing walkthrough", status: "Scheduled · Fri", color: "bg-peach" },
    { name: "Client testimonial", status: "Posted · 12k views", color: "bg-coral" },
  ];
  return (
    <div className="rounded-2xl bg-white p-5 text-[oklch(0.15_0_0)] shadow-2xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-semibold">This week's queue</span>
        <span className="text-xs text-gray-500">4 reels</span>
      </div>
      <div className="space-y-2.5">
        {items.map((it) => (
          <div key={it.name} className="flex items-center gap-3 rounded-xl border p-3">
            <div className={`h-10 w-10 shrink-0 rounded-lg ${it.color}`}/>
            <div className="flex-1">
              <div className="text-sm font-medium">{it.name}</div>
              <div className="text-xs text-gray-500">{it.status}</div>
            </div>
            <Play className="h-4 w-4 text-gray-400"/>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhoFor() {
  const groups = [
    { label: "Founders", bg: "bg-hot-pink", fg: "text-[oklch(0.15_0_0)]" },
    { label: "Personal brands", bg: "bg-lilac", fg: "text-[oklch(0.15_0_0)]" },
    { label: "Realtors", bg: "bg-coral", fg: "text-white" },
    { label: "DTC brands", bg: "bg-peach", fg: "text-[oklch(0.15_0_0)]" },
    { label: "Coaches", bg: "bg-magenta", fg: "text-soft-pink" },
    { label: "Agencies", bg: "bg-sand", fg: "text-[oklch(0.15_0_0)]" },
  ];
  return (
    <section id="editors" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display max-w-3xl text-balance text-[clamp(2.5rem,6vw,5rem)] uppercase">
            Built for everyone shipping reels
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Whether you're a solo founder or a 10-person brand team, your editor plugs in like an in-house hire.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.label} className={`flex aspect-[4/3] items-end rounded-3xl p-6 ${g.bg} ${g.fg}`}>
              <span className="font-display text-3xl uppercase md:text-4xl">{g.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Tell us your brand", copy: "Share your handles, voice, references, posting cadence. We match you to an editor who's shipped in your niche.", icon: Sparkles },
    { n: "02", title: "Meet your editor", copy: "Hop on a kickoff call. Set up your brand workspace — fonts, captions, hooks, templates. They're yours, exclusively.", icon: Users },
    { n: "03", title: "Drop footage, get reels", copy: "Upload raw clips anytime. Your editor cuts, captions, and ships — usually inside 24 hours. Approve in one tap.", icon: Zap },
  ];
  return (
    <section id="how" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">How it works</p>
        <h2 className="font-display mx-auto mt-4 max-w-4xl text-balance text-center text-[clamp(2.5rem,6vw,5rem)] uppercase">
          From raw footage to posted reel
        </h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-3xl border border-border bg-background p-8">
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl text-hot-pink">{s.n}</span>
                <s.icon className="h-7 w-7 text-muted-foreground"/>
              </div>
              <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { k: "1%", v: "Top editors, hand-screened" },
    { k: "<24h", v: "Average turnaround" },
    { k: "12k+", v: "Reels shipped this year" },
    { k: "98%", v: "Client retention" },
  ];
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border px-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k} className="bg-background p-8 text-center md:p-10">
            <div className="font-display text-5xl text-hot-pink md:text-6xl">{s.k}</div>
            <div className="mt-3 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { quote: "I used to spend 6 hours a week editing. Now I drop footage Friday and 4 reels are live by Monday.", name: "Aman K.", role: "Founder, NorthWave", bg: "bg-hot-pink", fg: "text-[oklch(0.15_0_0)]" },
    { quote: "My editor genuinely gets my brand voice. It doesn't feel outsourced — it feels in-house.", name: "Sara L.", role: "Creator, 240k", bg: "bg-lilac", fg: "text-[oklch(0.15_0_0)]" },
    { quote: "Closed 3 listings from reels last month. The hooks my editor writes actually convert.", name: "Marco D.", role: "Realtor, BrightCo", bg: "bg-peach", fg: "text-[oklch(0.15_0_0)]" },
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-display max-w-3xl text-balance text-[clamp(2.5rem,6vw,5rem)] uppercase">
          Loved by people who post daily
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.map((q) => (
            <div key={q.name} className={`rounded-3xl p-8 ${q.bg} ${q.fg}`}>
              <Instagram className="h-7 w-7 opacity-70"/>
              <p className="mt-6 text-lg font-medium leading-snug">"{q.quote}"</p>
              <div className="mt-8">
                <div className="font-semibold">{q.name}</div>
                <div className="text-sm opacity-70">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter", price: "$890", per: "/mo", desc: "For solo founders & creators starting to post.",
      perks: ["8 reels per month", "Dedicated editor", "48h turnaround", "Brand workspace"],
      bg: "bg-card", fg: "text-foreground", cta: "Start free trial",
    },
    {
      name: "Growth", price: "$1,690", per: "/mo", desc: "For creators & brands posting daily.",
      perks: ["20 reels per month", "Dedicated editor", "<24h turnaround", "Hook & script support", "Priority support"],
      bg: "bg-hot-pink", fg: "text-[oklch(0.15_0_0)]", cta: "Hire your editor", featured: true,
    },
    {
      name: "Studio", price: "Custom", per: "", desc: "For teams with multiple brands & channels.",
      perks: ["Unlimited reels", "Editor team", "Same-day delivery", "Dedicated strategist", "API & integrations"],
      bg: "bg-card", fg: "text-foreground", cta: "Talk to sales",
    },
  ];
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Pricing</p>
          <h2 className="font-display mx-auto mt-4 max-w-4xl text-balance text-[clamp(2.5rem,6vw,5rem)] uppercase">
            One flat price. Cancel anytime.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            No per-edit fees, no rush charges. Pause or replace your editor whenever.
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl p-8 ${p.bg} ${p.fg} ${p.featured ? "lg:scale-105" : ""}`}>
              {p.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-[oklch(0.15_0_0)] px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <div className="text-sm font-semibold opacity-70">{p.name}</div>
              <div className="mt-4 flex items-end gap-1">
                <span className="font-display text-6xl">{p.price}</span>
                <span className="mb-2 text-sm opacity-70">{p.per}</span>
              </div>
              <p className="mt-3 text-sm opacity-80">{p.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4"/> {perk}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold ${p.featured ? "bg-[oklch(0.15_0_0)] text-white" : "bg-foreground text-background"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs = [
    { q: "Who are the editors?", a: "Hand-screened from the top 1% of applicants. Each editor has 3+ years editing short-form for Instagram and ships in your timezone." },
    { q: "Can I switch editors?", a: "Yes. If it's not the right fit, we'll rematch you in 48 hours — no awkward conversations." },
    { q: "What formats do you edit?", a: "Reels, stories, carousels with motion, shorts, podcast clips, founder talking heads, product b-roll — anything Instagram-native." },
    { q: "How does the platform work?", a: "You get a shared brand workspace with brief templates, raw-footage drops, version history, and one-tap approvals. No more Drive folders." },
    { q: "Is there a contract?", a: "Monthly, cancel anytime. We earn your renewal." },
  ];
  return (
    <section id="faq" className="bg-card py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">FAQ</p>
          <h2 className="font-display mt-4 text-[clamp(2.5rem,5vw,4rem)] uppercase">Questions, answered</h2>
          <p className="mt-6 text-muted-foreground">Still curious? Book a 15-min intro and we'll walk you through your brand's setup.</p>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-hot-pink px-6 py-3 text-sm font-semibold text-[oklch(0.15_0_0)]">
            Book intro <ArrowRight className="h-4 w-4"/>
          </a>
        </div>
        <div className="space-y-3">
          {qs.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-border bg-background p-6 open:bg-background">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                {item.q}
                <span className="font-display text-2xl text-hot-pink transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-hot-pink p-12 text-center md:p-20">
        <Clock className="mx-auto h-10 w-10 text-[oklch(0.15_0_0)]"/>
        <h2 className="font-display mt-6 text-balance text-[clamp(2.5rem,7vw,6rem)] uppercase text-[oklch(0.15_0_0)]">
          Stop editing.<br/>Start posting.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[oklch(0.15_0_0)]/80">
          Get matched with your personal Instagram editor this week. First reel ships in 48 hours.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#pricing" className="rounded-full bg-[oklch(0.15_0_0)] px-7 py-3.5 text-base font-semibold text-white hover:opacity-90">
            Hire an editor
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-[oklch(0.15_0_0)]">
            <MessageCircle className="h-4 w-4"/> Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="font-display text-3xl">reelhire</div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Personal Instagram video editors, managed end-to-end.
          </p>
        </div>
        {[
          { h: "Product", l: ["Platform", "Editors", "Pricing", "Changelog"] },
          { h: "Company", l: ["About", "Careers", "Contact", "Press"] },
          { h: "Legal", l: ["Terms", "Privacy", "DPA", "Security"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-sm font-semibold">{c.h}</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {c.l.map((x) => <li key={x}><a href="#" className="hover:text-foreground">{x}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Reelhire. All rights reserved.</span>
        <span>Made for creators who'd rather create.</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Nav />
      <Hero />
      <LogoStrip />
      <PlatformSection />
      <WhoFor />
      <HowItWorks />
      <StatsSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
