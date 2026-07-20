import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Instagram, Youtube, Music2, Linkedin, Mic, Twitch, Sparkles, ArrowRight,
  Play, Star, CheckCircle2, MessageCircle, Clock, Heart, ArrowLeft,
} from "lucide-react";

export const Route = createFileRoute("/other")({
  head: () => ({
    meta: [
      { title: "Reelhire — Hire a personal video editor for any platform" },
      { name: "description", content: "Hire a dedicated video editor for TikTok, LinkedIn, podcasts, Twitch, and more. Editing-as-a-service, managed end-to-end." },
    ],
  }),
  component: OtherPage,
});

function Nav() {
  return (
    <div className="sticky top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-white/90 px-6 py-3 text-ink shadow-[0_4px_24px_rgba(20,20,60,0.08)] backdrop-blur">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue text-white">
            <Play className="h-4 w-4 fill-white" />
          </span>
          reelhire
        </Link>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link to="/instagram" className="hover:text-brand-blue">Instagram</Link>
          <Link to="/youtube" className="hover:text-brand-blue">YouTube</Link>
          <Link to="/other" className="hover:text-brand-blue">Other</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/" className="hidden text-sm font-semibold text-muted-foreground hover:text-ink md:inline-flex items-center gap-1">
            <ArrowLeft className="h-3.5 w-3.5" /> Switch platform
          </Link>
          <a href="#contact" className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors">
            Talk to us
          </a>
        </div>
      </nav>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16">
      <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-soft-purple blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-soft-yellow blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-soft-pink blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
          Editing-as-a-service for every platform
        </span>
        <h1 className="font-display mt-6 text-balance text-[clamp(2.75rem,7vw,6rem)] font-extrabold text-ink">
          Hire your personal <br />
          <span className="relative inline-block">
            <span className="relative z-10">video editor</span>
            <span aria-hidden className="absolute inset-x-0 bottom-2 z-0 h-4 bg-brand-yellow md:h-6" />
          </span>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
          Whatever you post — TikTok, LinkedIn, podcast clips, Twitch VODs — we'll match you with a dedicated editor who knows your format.
        </p>
      </div>
    </section>
  );
}

function Platforms() {
  const platforms = [
    { i: <Instagram className="h-7 w-7" />, t: "Instagram", d: "Reels, stories, carousels.", c: "bg-brand-pink text-ink", to: "/instagram" as const, cta: "Instagram page" },
    { i: <Youtube className="h-7 w-7" />, t: "YouTube", d: "Long-form, Shorts, thumbnails.", c: "bg-[oklch(0.62_0.22_25)] text-white", to: "/youtube" as const, cta: "YouTube page" },
    { i: <Music2 className="h-7 w-7" />, t: "TikTok", d: "Short-form, trend-ready cuts.", c: "bg-ink text-white" },
    { i: <Linkedin className="h-7 w-7" />, t: "LinkedIn", d: "Founder videos and talking-head clips.", c: "bg-brand-blue text-white" },
    { i: <Mic className="h-7 w-7" />, t: "Podcasts", d: "Full-episode edits and viral clip Shorts.", c: "bg-brand-purple text-white" },
    { i: <Twitch className="h-7 w-7" />, t: "Twitch & VODs", d: "Highlight reels and stream recaps.", c: "bg-brand-green text-ink" },
  ];

  return (
    <section className="py-8 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Pick your platform
          <span className="h-px w-8 bg-border" />
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {platforms.map((p) => {
            const inner = (
              <>
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/95 text-ink shadow-sm">{p.i}</div>
                <div className="mt-6">
                  <div className="font-display text-3xl font-extrabold">{p.t}</div>
                  <p className={`mt-2 ${p.c.includes("text-white") ? "text-white/80" : "text-ink/70"}`}>{p.d}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  {p.to ? <>Open {p.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></> : <>Request editor <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
                </div>
              </>
            );
            const className = `${p.c} group relative overflow-hidden rounded-[2rem] border-2 border-ink/10 p-8 shadow-[0_10px_0_0_rgba(20,20,60,0.15)] transition-all hover:-translate-y-1`;
            return p.to ? (
              <Link key={p.t} to={p.to} className={className}>{inner}</Link>
            ) : (
              <a key={p.t} href="#contact" className={className}>{inner}</a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    { i: <Heart className="h-6 w-6" />, t: "Your dedicated editor", d: "One editor, exclusive to your brand — learns your voice.", c: "bg-brand-pink text-ink" },
    { i: <Clock className="h-6 w-6" />, t: "Fast turnaround", d: "24–48h delivery in your timezone, every time.", c: "bg-brand-yellow text-ink" },
    { i: <MessageCircle className="h-6 w-6" />, t: "One dashboard", d: "Briefs, comments, versions, approvals — all in one place.", c: "bg-brand-blue text-white" },
    { i: <Star className="h-6 w-6" />, t: "Top 1% talent", d: "Hand-screened editors who've worked with top brands.", c: "bg-brand-purple text-white" },
  ];
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
            Same model, <span className="bg-brand-yellow px-2">any platform</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Whatever you're creating, our editing-as-a-service model stays the same.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className={`${it.c} rounded-3xl p-7`}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-sm">{it.i}</div>
              <h3 className="font-display mt-5 text-xl font-extrabold">{it.t}</h3>
              <p className={`mt-2 text-sm ${it.c.includes("text-white") ? "text-white/80" : "text-ink/70"}`}>{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink p-12 text-center text-white md:p-20">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand-purple opacity-40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-blue opacity-40 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-balance text-4xl font-extrabold md:text-6xl">
            Don't see your platform? <br />
            <span className="bg-brand-yellow px-3 text-ink">Tell us where you post.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            We'll match you with an editor who's shipped for that exact format.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:hello@reelhire.co" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-base font-semibold text-ink shadow-[0_8px_0_0_rgba(255,255,255,0.15)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(255,255,255,0.15)] transition-all">
              Talk to us <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-ink transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to platforms
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm">
            <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
            <span className="text-white/70">Editors matched in 24 hours · Pause or cancel any time</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Reelhire. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/instagram" className="hover:text-ink">Instagram</Link>
          <Link to="/youtube" className="hover:text-ink">YouTube</Link>
          <Link to="/other" className="hover:text-ink">Other platforms</Link>
        </div>
      </div>
    </footer>
  );
}

function OtherPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Platforms />
      <Why />
      <Contact />
      <Footer />
    </main>
  );
}
