import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, Film, CheckCircle2, ArrowRight, Play, Youtube,
  MessageCircle, Star, Clock, Users, TrendingUp, Heart, Rocket,
  Wand2, Calendar, Building2, GraduationCap, Image as ImageIcon,
  Scissors, Mic, ArrowLeft, Eye,
} from "lucide-react";

export const Route = createFileRoute("/youtube")({
  head: () => ({
    meta: [
      { title: "Reelhire for YouTube — Hire your personal YouTube video editor" },
      { name: "description", content: "Top 1% YouTube editors, exclusive to your channel. Long-form, Shorts, thumbnails, and intros — shipped on a platform built for creators." },
      { property: "og:title", content: "Reelhire for YouTube — Hire your personal YouTube video editor" },
      { property: "og:description", content: "Retention-optimized cuts, clean thumbnails, weekly uploads. Get matched with a dedicated editor in 24h." },
    ],
  }),
  component: YouTubePage,
});

/* ---------- NAV ---------- */
function Nav() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-white/90 px-6 py-3 text-ink shadow-[0_4px_24px_rgba(20,20,60,0.08)] backdrop-blur">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-[oklch(0.62_0.22_25)] text-white">
            <Play className="h-4 w-4 fill-white" />
          </span>
          reelhire
        </Link>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <a href="#platform" className="hover:text-brand-blue">Platform</a>
          <a href="#editors" className="hover:text-brand-blue">Editors</a>
          <a href="#how" className="hover:text-brand-blue">How it works</a>
          <a href="#pricing" className="hover:text-brand-blue">Pricing</a>
          <a href="#faq" className="hover:text-brand-blue">FAQ</a>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="hidden text-sm font-semibold text-muted-foreground hover:text-ink md:inline-flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" /> Switch platform
          </Link>
          <a href="#pricing" className="rounded-full bg-[oklch(0.62_0.22_25)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[oklch(0.52_0.22_25)] transition-colors">
            Hire an editor
          </a>
        </div>
      </nav>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20">
      <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-soft-pink blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-soft-yellow blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-soft-purple blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
          <Youtube className="h-3.5 w-3.5 text-[oklch(0.62_0.22_25)]" />
          Editing-as-a-service for YouTube
        </span>
        <h1 className="font-display mt-6 text-balance text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold text-ink">
          Hire your personal <br />
          <span className="relative inline-block">
            <span className="relative z-10">YouTube editor</span>
            <span aria-hidden className="absolute inset-x-0 bottom-2 z-0 h-4 bg-brand-yellow md:h-6" />
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
          Top 1% editors who learn your channel, style, and audience — and ship every week.
          Long-form, Shorts, thumbnails and intros, all in one place.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-[oklch(0.62_0.22_25)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_0_0_oklch(0.42_0.22_25)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_oklch(0.42_0.22_25)] transition-all">
            Hire an editor
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-3.5 text-base font-semibold text-ink hover:bg-ink hover:text-white transition-colors">
            <Play className="h-4 w-4" />
            See how it works
          </a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />)}
          </div>
          <span>4.9/5 from 800+ YouTube creators</span>
        </div>

        {/* preview cards */}
        <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { c: "bg-[oklch(0.62_0.22_25)] text-white", t: "Long-form", i: <Film className="h-6 w-6" /> },
            { c: "bg-brand-yellow text-ink", t: "Shorts", i: <Youtube className="h-6 w-6" /> },
            { c: "bg-brand-purple text-white", t: "Thumbnails", i: <ImageIcon className="h-6 w-6" /> },
            { c: "bg-brand-green text-ink", t: "Intros", i: <Sparkles className="h-6 w-6" /> },
          ].map((p, i) => (
            <div key={i} className={`${p.c} aspect-[16/12] rounded-3xl p-5 shadow-[0_8px_0_0_rgba(20,20,60,0.15)]`} style={{ transform: `rotate(${i % 2 ? 3 : -3}deg)` }}>
              <div className="flex h-full flex-col justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-ink">{p.i}</div>
                <div>
                  <div className="text-xs font-semibold opacity-70">Format</div>
                  <div className="font-display text-2xl font-extrabold">{p.t}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LOGO STRIP ---------- */
function Logos() {
  const names = ["MrBeast style", "Ali Abdaal", "Colin & Samir", "Nas Daily", "MKBHD", "Casey"];
  return (
    <section className="border-y border-border bg-cream py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Editors trained on the world's biggest channels
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          {names.map(n => (
            <span key={n} className="font-display text-xl font-bold text-ink">{n}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FEATURE SECTION ---------- */
function FeatureBlocks() {
  return (
    <section id="platform" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-pink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[oklch(0.52_0.22_25)]">
            <Wand2 className="h-3.5 w-3.5" /> The platform
          </span>
          <h2 className="font-display mt-5 text-balance text-4xl font-extrabold text-ink md:text-6xl">
            Everything you need to <span className="bg-brand-yellow px-2">ship videos</span> weekly
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A Superside-style collaboration platform — but built for YouTube editors and your team.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-6">
          <div className="md:col-span-4 rounded-[2rem] bg-[oklch(0.62_0.22_25)] p-10 text-white relative overflow-hidden">
            <div aria-hidden className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-3xl font-extrabold md:text-4xl">One dashboard. Zero chaos.</h3>
              <p className="mt-3 max-w-xl text-white/80">
                Drop raw footage, share Notion briefs, drop time-stamped comments, approve cuts and thumbnails — all in one place. No more Google Drive mess.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Briefs", "Frame.io-style comments", "Versions", "Thumbnails", "Approvals"].map(t => (
                  <span key={t} className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-yellow p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">48h turnaround</h3>
            <p className="mt-2 text-ink/70">Weekly long-form cuts, next-day Shorts and thumbnails.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-pink p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Your dedicated editor</h3>
            <p className="mt-2 text-ink/70">One editor, exclusively yours. Learns your channel voice and pacing.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-purple p-8 text-white">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Retention-first cuts</h3>
            <p className="mt-2 text-white/80">Editors who study your audience-retention graphs and iterate.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-green p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Built for CTR</h3>
            <p className="mt-2 text-ink/70">Thumbnails and titles A/B-tested for click-through.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO IT'S FOR ---------- */
function WhoFor() {
  const items = [
    { i: <Rocket className="h-6 w-6" />, t: "Founders & CEOs", d: "Turn keynotes and interviews into weekly uploads.", c: "bg-soft-blue" },
    { i: <Sparkles className="h-6 w-6" />, t: "Creators", d: "Ship long-form + Shorts without burning out.", c: "bg-soft-pink" },
    { i: <GraduationCap className="h-6 w-6" />, t: "Educators", d: "Course clips, explainers, and tutorials.", c: "bg-soft-yellow" },
    { i: <Mic className="h-6 w-6" />, t: "Podcasters", d: "Full-episode edits + viral clip Shorts.", c: "bg-soft-green" },
    { i: <Scissors className="h-6 w-6" />, t: "Faceless channels", d: "Voiceover + b-roll edits at scale.", c: "bg-soft-purple" },
    { i: <Building2 className="h-6 w-6" />, t: "Agencies", d: "White-label YouTube editing capacity.", c: "bg-cream" },
  ];
  return (
    <section id="editors" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            Who it's for
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            Built for everyone <br className="hidden md:block" /> growing a YouTube channel
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className={`${it.c} group rounded-3xl border border-border p-7 transition-all hover:-translate-y-1`}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-sm">{it.i}</div>
              <h3 className="font-display mt-6 text-2xl font-extrabold text-ink">{it.t}</h3>
              <p className="mt-2 text-ink/70">{it.d}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FORMATS ---------- */
function Formats() {
  const items = [
    { i: <Film className="h-6 w-6" />, t: "Long-form videos", d: "Retention-optimized cuts with hooks, b-roll, motion graphics and captions.", c: "bg-[oklch(0.62_0.22_25)] text-white" },
    { i: <Scissors className="h-6 w-6" />, t: "Shorts", d: "Vertical shorts repurposed from your long-form or shot native.", c: "bg-brand-yellow text-ink" },
    { i: <ImageIcon className="h-6 w-6" />, t: "Thumbnails", d: "High-CTR thumbnails A/B-ready, tuned to your channel style.", c: "bg-brand-pink text-ink" },
    { i: <Mic className="h-6 w-6" />, t: "Podcast episodes", d: "Full-episode edits plus viral clip Shorts to grow the show.", c: "bg-brand-purple text-white" },
    { i: <Play className="h-6 w-6" />, t: "Intros & outros", d: "Branded intros, endscreens, and lower-thirds that stay consistent.", c: "bg-brand-green text-ink" },
    { i: <Eye className="h-6 w-6" />, t: "Documentary & vlogs", d: "Cinematic, story-driven edits for high-production channels.", c: "bg-ink text-white" },
  ];
  return (
    <section id="formats" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-pink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            <Film className="h-3.5 w-3.5" /> Formats
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            Every YouTube format, <span className="bg-brand-yellow px-2">covered</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One editor, every video type your channel ships. Long-form to Shorts to thumbnails.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className={`${it.c} rounded-3xl p-7 shadow-[0_8px_0_0_rgba(20,20,60,0.1)]`}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-sm">{it.i}</div>
              <h3 className="font-display mt-5 text-2xl font-extrabold">{it.t}</h3>
              <p className={`mt-2 text-sm ${it.c.includes("text-white") ? "text-white/80" : "text-ink/70"}`}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Tell us about your channel", d: "Share your style, references, and upload cadence.", c: "bg-brand-yellow" },
    { n: "02", t: "Meet your editor in 24h", d: "We match you with a hand-picked YouTube editor.", c: "bg-brand-pink" },
    { n: "03", t: "Ship videos every week", d: "Upload raw footage, get cuts + thumbnails, approve, publish.", c: "bg-brand-green" },
  ];
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-purple px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-purple">
            How it works
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            From raw footage to <span className="bg-brand-pink px-2">upload</span> in 3 steps
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-white p-8 shadow-[0_8px_0_0_rgba(20,20,60,0.06)]">
              <div className={`${s.c} inline-flex rounded-full px-3 py-1 font-display text-sm font-extrabold text-ink`}>{s.n}</div>
              <h3 className="font-display mt-5 text-2xl font-extrabold text-ink">{s.t}</h3>
              <p className="mt-2 text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const items = [
    { v: "1%", l: "Top editors only", c: "bg-[oklch(0.62_0.22_25)] text-white" },
    { v: "<48h", l: "Long-form turnaround", c: "bg-brand-yellow text-ink" },
    { v: "5k+", l: "Videos shipped", c: "bg-brand-pink text-ink" },
    { v: "98%", l: "Creator satisfaction", c: "bg-brand-purple text-white" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((s) => (
            <div key={s.l} className={`${s.c} rounded-3xl p-8 text-center`}>
              <div className="font-display text-5xl font-extrabold md:text-6xl">{s.v}</div>
              <div className="mt-2 text-sm font-semibold opacity-80">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const list = [
    { q: "Went from 1 video a month to 1 a week. My retention graph has never looked better.", a: "Jordan L.", r: "500k YouTube channel", c: "bg-soft-yellow" },
    { q: "Their thumbnails alone doubled our CTR. It's like having a full production team on payroll.", a: "Amelia T.", r: "Founder-led channel", c: "bg-soft-pink" },
    { q: "We tried three agencies. Reelhire's editor learned our style in a week and shipped every Friday.", a: "Rohan V.", r: "Podcast + YouTube", c: "bg-soft-green" },
  ];
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
            Loved by 800+ YouTube creators
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {list.map((t, i) => (
            <div key={i} className={`${t.c} rounded-3xl border border-border p-8`}>
              <div className="flex">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-ink text-ink" />)}
              </div>
              <p className="font-display mt-5 text-xl font-bold leading-snug text-ink">"{t.q}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white font-display font-extrabold text-ink">
                  {t.a[0]}
                </div>
                <div>
                  <div className="font-semibold text-ink">{t.a}</div>
                  <div className="text-sm text-ink/60">{t.r}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
function Pricing() {
  const plans = [
    {
      name: "Shorts", price: "$990", per: "/month",
      desc: "For creators posting daily Shorts.",
      perks: ["Dedicated editor", "20 Shorts / month", "48h turnaround", "Unlimited revisions"],
      c: "bg-white border-border", btn: "bg-ink text-white",
    },
    {
      name: "Long-form", price: "$1,990", per: "/month", popular: true,
      desc: "For weekly long-form uploads.",
      perks: ["Everything in Shorts", "4 long-form / month", "Thumbnails included", "Strategy calls", "Hook rewrites"],
      c: "bg-[oklch(0.62_0.22_25)] text-white border-[oklch(0.62_0.22_25)]", btn: "bg-brand-yellow text-ink",
    },
    {
      name: "Studio", price: "Custom", per: "",
      desc: "For channels shipping every day.",
      perks: ["Editor team", "Unlimited videos", "White-label", "Dedicated PM", "API access"],
      c: "bg-white border-border", btn: "bg-ink text-white",
    },
  ];
  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-green px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            Pricing
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            Simple plans. <span className="bg-brand-yellow px-2">No surprises.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Pause or cancel any time. Replace your editor with one click.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border-2 p-8 ${p.c}`}>
              {p.popular && (
                <span className="absolute -top-3 right-6 rounded-full bg-brand-yellow px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-ink">
                  Most popular
                </span>
              )}
              <div className="font-display text-2xl font-extrabold">{p.name}</div>
              <p className={`mt-1 text-sm ${p.popular ? "text-white/80" : "text-muted-foreground"}`}>{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold">{p.price}</span>
                <span className={p.popular ? "text-white/70" : "text-muted-foreground"}>{p.per}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.perks.map(perk => (
                  <li key={perk} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`h-5 w-5 shrink-0 ${p.popular ? "text-brand-yellow" : "text-[oklch(0.62_0.22_25)]"}`} />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${p.btn}`}>
                Get started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qs = [
    { q: "How fast will I get my first video?", a: "Most creators are matched with an editor within 24 hours and receive their first cut within 48–72 hours." },
    { q: "Do you edit both long-form and Shorts?", a: "Yes — one dedicated editor handles both formats, plus thumbnails and intros." },
    { q: "Do you make thumbnails?", a: "Yes. Every long-form plan includes custom thumbnails designed for CTR." },
    { q: "Can I swap my editor?", a: "Swap editors any time with one click. We'll re-match you instantly with no questions asked." },
    { q: "Can I pause my plan?", a: "Yes — pause for up to 3 months at any time. Resume whenever you're ready." },
  ];
  return (
    <section id="faq" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink md:text-6xl">Questions?</h2>
          <p className="mt-3 text-muted-foreground">We've got answers.</p>
        </div>
        <div className="mt-10 space-y-3">
          {qs.map((it) => (
            <details key={it.q} className="group rounded-2xl border border-border bg-white p-5 transition-all open:bg-white">
              <summary className="flex cursor-pointer items-center justify-between font-display text-lg font-bold text-ink">
                {it.q}
                <span className="grid h-8 w-8 place-items-center rounded-full bg-soft-pink text-[oklch(0.52_0.22_25)] transition-transform group-open:rotate-45">
                  <span className="text-xl leading-none">+</span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink p-12 text-center text-white md:p-20">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-[oklch(0.62_0.22_25)] opacity-40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-purple opacity-40 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            <Calendar className="h-3.5 w-3.5" /> Start this week
          </span>
          <h2 className="font-display mt-6 text-balance text-4xl font-extrabold md:text-7xl">
            Your next viral video <br />
            <span className="bg-brand-yellow px-3 text-ink">is one hire away.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Get matched with your dedicated YouTube editor in 24 hours.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-base font-semibold text-ink shadow-[0_8px_0_0_rgba(255,255,255,0.15)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(255,255,255,0.15)] transition-all">
              Hire an editor <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-ink transition-colors">
              Talk to sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-2xl font-extrabold text-ink">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[oklch(0.62_0.22_25)] text-white">
                <Play className="h-4 w-4 fill-white" />
              </span>
              reelhire
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">Your personal YouTube video editor, on demand.</p>
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-ink">Platforms</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/instagram" className="hover:text-ink">Instagram</Link></li>
              <li><Link to="/youtube" className="hover:text-ink">YouTube</Link></li>
              <li><Link to="/other" className="hover:text-ink">Other platforms</Link></li>
            </ul>
          </div>
          {[
            { h: "Company", l: ["About", "Careers", "Blog", "Contact"] },
            { h: "Legal", l: ["Terms", "Privacy", "Security", "Cookies"] },
          ].map(col => (
            <div key={col.h}>
              <div className="font-display text-sm font-bold uppercase tracking-wider text-ink">{col.h}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {col.l.map(x => <li key={x}><a href="#" className="hover:text-ink">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Reelhire. All rights reserved.</span>
          <div className="flex gap-4"><a href="#" className="hover:text-ink">Twitter</a><a href="#" className="hover:text-ink">YouTube</a><a href="#" className="hover:text-ink">LinkedIn</a></div>
        </div>
      </div>
    </footer>
  );
}

function YouTubePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Logos />
      <FeatureBlocks />
      <WhoFor />
      <Formats />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
