import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Sparkles, Film, CheckCircle2, ArrowRight, Play, Youtube,
  MessageCircle, Star, Clock, Users, TrendingUp, Heart, Rocket,
  Calendar, Building2, GraduationCap, Image as ImageIcon,
  Scissors, Mic, ArrowLeft, Eye,
} from "lucide-react";
import { Carousel } from "../components/Carousel";
import { HowItWorks } from "../components/HowItWorks";
import { ScoobieIcon, ScoobieWordmark } from "../components/Logo";
import { BookingModal, openBookingModal } from "../components/BookingModal";
import { FinalCTA } from "../components/FinalCTA";
import { Button } from "../components/ui/button";
import { PlatformQuizModal, openPlatformQuiz, type PlatformQuizConfig } from "../components/PlatformQuizModal";
import quizConsultationImage from "../assets/quiz-consultation.jpg";
import { YouTubePricing } from "../components/YouTubePricing";

const hire = () => openBookingModal({ platform: "YouTube" });

const YOUTUBE_QUIZ_EVENT = "open-quiz-youtube";
const openYouTubeQuiz = () => openPlatformQuiz(YOUTUBE_QUIZ_EVENT);
const YOUTUBE_QUIZ_CONFIG: PlatformQuizConfig = {
  platform: "YouTube",
  eventName: YOUTUBE_QUIZ_EVENT,
  formats: ["Long-form videos", "Shorts", "Thumbnails", "Podcast episodes", "Intros & outros", "Documentary & vlogs"],
  perPiece: {
    "Long-form videos": 330,
    Shorts: 50,
    Thumbnails: 30,
    "Podcast episodes": 95,
    "Intros & outros": 140,
    "Documentary & vlogs": 250,
  },
  lowVolumeFormats: ["Long-form videos", "Documentary & vlogs", "Podcast episodes"],
  fixedPackages: true,
};


export const Route = createFileRoute("/youtube")({
  head: () => ({
    meta: [
      { title: "Scoobie — Hire your personal video editor for YouTube content" },
      { name: "description", content: "Top 1% talent who understands your brand, works in your timezone, and delivers scroll-stopping content every time." },
      { property: "og:title", content: "Scoobie — Hire your personal video editor for YouTube content" },
      { property: "og:description", content: "Top 1% talent who understands your brand, works in your timezone, and delivers scroll-stopping content every time." },
      { property: "og:url", content: "https://hirescoobie.com/youtube" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hirescoobie.com/youtube" }],
  }),
  component: YouTubePage,
});

/* ---------- NAV ---------- */
function Nav() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-white/90 px-6 py-3 text-ink shadow-[0_4px_24px_rgba(20,20,60,0.08)] backdrop-blur">
        <Link to="/" className="flex items-center gap-2 font-brand text-2xl font-extrabold tracking-tight text-primary-brand">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-brand text-white">
            <ScoobieIcon className="h-5 w-5" />
          </span>
          <ScoobieWordmark dotColor="var(--ink)" />
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
          <button onClick={hire} className="rounded-full bg-primary-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-brand-dark transition-colors">
            Hire an editor
          </button>
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
        <h1 className="font-display mt-6 text-balance text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold text-ink">
          Hire your personal <br />
          <span className="relative inline-block">
            <span className="relative z-10">YouTube editor</span>
            <span aria-hidden className="absolute inset-x-0 bottom-2 z-0 h-4 bg-brand-yellow md:h-6" />
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
          Videos built for watch time and clicks, uploaded on schedule every week by a top 1% editor
          who knows your channel. You film; we handle the rest.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={hire} className="group inline-flex items-center gap-2 rounded-full bg-primary-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_0_0_var(--primary-brand-dark)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_var(--primary-brand-dark)] transition-all">
            Hire an editor
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
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
            { c: "bg-primary-brand text-white", t: "Long-form", i: <Film className="h-6 w-6" /> },
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
    <section className="border-y border-ink/10 bg-hero-dark py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-hero-muted">
          Editors trained on the world's biggest channels
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
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
          <h2 className="font-display mt-5 text-balance text-4xl font-extrabold text-ink md:text-6xl">
            Everything you need to <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">ship videos</span></span> weekly
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Videos that perform, uploads that never slip, and a workflow that takes zero effort.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-6">
          <div className="md:col-span-4 rounded-[2rem] bg-primary-brand p-10 text-white relative overflow-hidden">
            
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
            <p className="mt-2 text-ink/70">Weekly uploads that never slip. Next-day Shorts and thumbnails.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-pink p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Your dedicated editor</h3>
            <p className="mt-2 text-ink/70">One editor who learns your channel voice, so every upload feels consistent.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-purple p-8 text-white">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Retention-first cuts</h3>
            <p className="mt-2 text-white/80">Editors who study your retention graphs so each video performs better than the last.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-green p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Built for CTR</h3>
            <p className="mt-2 text-ink/70">Thumbnails and titles tested for more clicks and views.</p>
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
    { i: <Film className="h-6 w-6" />, t: "Long-form videos", d: "Retention-optimized cuts with hooks, b-roll, motion graphics and captions.", chip: "bg-primary-brand text-white" },
    { i: <Scissors className="h-6 w-6" />, t: "Shorts", d: "Vertical shorts repurposed from your long-form or shot native.", chip: "bg-brand-yellow text-ink" },
    { i: <ImageIcon className="h-6 w-6" />, t: "Thumbnails", d: "High-CTR thumbnails A/B-ready, tuned to your channel style.", chip: "bg-brand-pink text-ink" },
    { i: <Mic className="h-6 w-6" />, t: "Podcast episodes", d: "Full-episode edits plus viral clip Shorts to grow the show.", chip: "bg-brand-purple text-white" },
    { i: <Play className="h-6 w-6" />, t: "Intros & outros", d: "Branded intros, endscreens, and lower-thirds that stay consistent.", chip: "bg-brand-green text-ink" },
    { i: <Eye className="h-6 w-6" />, t: "Documentary & vlogs", d: "Cinematic, story-driven edits for high-production channels.", chip: "bg-ink text-white" },
  ];
  return (
    <section id="formats" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-pink px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            <Film className="h-3.5 w-3.5" /> Formats
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            Every YouTube format, <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">covered</span></span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One editor, every video type your channel ships. Long-form to Shorts to thumbnails.
          </p>
        </div>
        <div className="mt-10">
          <Carousel ariaLabel="YouTube formats">
            {items.map((it) => (
              <div key={it.t} className="group flex h-full flex-col rounded-3xl border-2 border-ink/10 bg-white p-7 shadow-[0_8px_0_0_rgba(20,20,60,0.08)] transition-all hover:-translate-y-1 hover:border-ink/25">
                <div className={`${it.chip} grid h-12 w-12 place-items-center rounded-2xl shadow-sm`}>{it.i}</div>
                <h3 className="font-display mt-5 text-2xl font-extrabold text-ink">{it.t}</h3>
                <p className="mt-2 text-sm text-ink/70">{it.d}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}


/* ---------- HOW IT WORKS ---------- */
/* ---------- STATS ---------- */
function Stats() {
  const items = [
    { v: "1%", l: "Top editors only", c: "bg-primary-brand text-white" },
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
    { q: "We tried three agencies. Scoobie's editor learned our style in a week and shipped every Friday.", a: "Rohan V.", r: "Podcast + YouTube", c: "bg-soft-green" },
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

/* ---------- QUIZ PROMPT ---------- */
function QuizPrompt() {
  return (
    <section className="pt-16 pb-4 sm:pt-20 sm:pb-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 overflow-hidden rounded-[1.75rem] bg-hero-card p-5 sm:p-7 md:flex-row md:items-center md:gap-8 md:p-8">
          <img src={quizConsultationImage} alt="Creator reviewing video content on her phone and laptop" width={1280} height={1024} loading="lazy" className="h-44 w-full rounded-xl object-cover sm:h-56 md:h-48 md:w-[260px] md:shrink-0" />
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-balance text-2xl font-extrabold text-ink sm:text-3xl md:text-4xl">Not sure which YouTube plan?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Answer a few quick questions about your role, formats and volume. We’ll suggest the right YouTube plan for your content.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 md:items-center">
            <Button variant="outline" onClick={openYouTubeQuiz} className="h-12 w-full rounded-md border-ink/40 bg-surface px-6 font-bold text-ink hover:bg-surface/80 md:w-auto">
              Take the quiz <ArrowRight className="h-4 w-4" />
            </Button>
            <span className="text-xs font-medium text-ink/60">About 45 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const qs = [
    { q: "How fast will I get my first video?", a: "Editing turnaround is 48 hours. Scoobie Plus adds a priority production queue." },
    { q: "Do you edit both long-form and Shorts?", a: "Yes — one dedicated editor handles both. Turning long-form into Shorts is part of Scoobie Plus." },
    { q: "Do you make thumbnails?", a: "Yes — thumbnail and cover design is part of Scoobie Plus, built for clicks." },
    { q: "Can I swap my editor?", a: "Swap editors any time with one click. We'll re-match you instantly with no questions asked." },
    { q: "Can I pause my plan?", a: "Yes — talk to us and we’ll adjust your plan around your content calendar." },
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
                <span className="grid h-8 w-8 place-items-center rounded-full bg-soft-pink text-primary-brand-dark transition-transform group-open:rotate-45">
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


/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-white py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-brand text-2xl font-extrabold text-primary-brand">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-brand text-white">
                <ScoobieIcon className="h-5 w-5" />
              </span>
              <ScoobieWordmark dotColor="var(--ink)" />
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
          <span>© {new Date().getFullYear()} Scoobie. All rights reserved.</span>
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
      <FeatureBlocks />
      <WhoFor />
      <Formats />
      <HowItWorks platform="YouTube" />
      <YouTubePricing />
      <QuizPrompt />
      <FAQ />
      <FinalCTA onHire={hire} />
      <Footer />
      <BookingModal defaultPlatform="YouTube" />
      <PlatformQuizModal config={YOUTUBE_QUIZ_CONFIG} />
    </main>
  );
}
