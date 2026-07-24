import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Instagram, Youtube, Music2, Linkedin, Mic, Twitch, Sparkles, ArrowRight,
  Play, Star, CheckCircle2, MessageCircle, Clock, Heart, X, MoreHorizontal,
  Rocket, Building2, Home, GraduationCap, ShoppingBag, Users, TrendingUp,
  Film, Scissors, Image as ImageIcon, Zap,
} from "lucide-react";
import { Carousel } from "../components/Carousel";

import { BookingModal, openBookingModal } from "../components/BookingModal";
import { QuizModal, openQuiz } from "../components/QuizModal";
import { FinalCTA } from "../components/FinalCTA";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reelhire — Hire your personal video editor" },
      { name: "description", content: "Hire a top 1% personal video editor for Instagram, YouTube, TikTok, LinkedIn, podcasts and more. Editing-as-a-service, managed end-to-end." },
      { property: "og:title", content: "Reelhire — Hire your personal video editor" },
      { property: "og:description", content: "Top 1% editors, exclusive to your brand. Pick your platform and get matched in 24 hours." },
    ],
  }),
  component: HomePage,
});

function ChooserModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  if (!open) return null;

  const options = [
    {
      label: "Instagram",
      tag: "Reels • Stories • Carousels",
      desc: "Scroll-stopping reels and stories, shipped in your timezone.",
      icon: <Instagram className="h-7 w-7" />,
      cardBg: "bg-brand-pink",
      textColor: "text-ink",
      onClick: () => navigate({ to: "/instagram" }),
    },
    {
      label: "YouTube",
      tag: "Long-form • Shorts • Thumbnails",
      desc: "Retention-optimized cuts, clean thumbnails, weekly uploads.",
      icon: <Youtube className="h-7 w-7" />,
      cardBg: "bg-primary-brand",
      textColor: "text-white",
      onClick: () => navigate({ to: "/youtube" }),
    },
    {
      label: "Something else",
      tag: "TikTok • LinkedIn • Podcasts",
      desc: "Editing help for any other platform you create on.",
      icon: <MoreHorizontal className="h-7 w-7" />,
      cardBg: "bg-brand-yellow",
      textColor: "text-ink",
      onClick: onClose,
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl rounded-[2.5rem] border-2 border-ink/10 bg-white p-6 shadow-2xl md:p-10">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink shadow-sm">
            <Sparkles className="h-3 w-3 text-brand-purple" />
            Get started
          </span>
          <h2 className="font-display mt-4 text-balance text-3xl font-extrabold text-ink md:text-5xl">
            What are you hiring an <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">editor</span></span> for?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Pick your primary platform and we'll match you with a dedicated editor in 24 hours.
          </p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {options.map((o) => (
            <button
              key={o.label}
              onClick={o.onClick}
              className={`${o.cardBg} ${o.textColor} group relative overflow-hidden rounded-[1.75rem] border-2 border-ink/10 p-6 text-left shadow-[0_8px_0_0_rgba(20,20,60,0.15)] transition-all hover:-translate-y-1`}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-sm">
                {o.icon}
              </div>
              <div className="mt-6">
                <div className="text-[11px] font-bold uppercase tracking-wider opacity-70">{o.tag}</div>
                <div className="font-display mt-1 text-2xl font-extrabold">{o.label}</div>
                <p className={`mt-2 text-sm ${o.textColor === "text-white" ? "text-white/80" : "text-ink/70"}`}>{o.desc}</p>
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Not sure? Pick <button onClick={onClose} className="font-semibold underline hover:text-ink">Something else</button> to explore all platforms.
        </div>
      </div>
    </div>
  );
}

function Nav({ onOpenChooser }: { onOpenChooser: () => void }) {
  return (
    <div className="sticky top-4 z-40 flex justify-center px-4">
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
          <a href="#pricing" className="hover:text-brand-blue">Pricing</a>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onOpenChooser} className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-blue-dark transition-colors">
            Get started
          </button>
        </div>
      </nav>
    </div>
  );
}

function Hero({ onOpenChooser }: { onOpenChooser: () => void }) {
  return (
    <section className="relative overflow-hidden pt-14 pb-20">
      <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-soft-blue blur-3xl opacity-70" />
      <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-soft-yellow blur-3xl opacity-70" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-display mt-6 text-balance text-[clamp(2.5rem,7vw,6rem)] font-extrabold text-ink">
          Hire your personal{" "}
          <span className="relative inline-block">
            <span className="relative z-10">video editor</span>
            <span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand-yellow md:h-5" />
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          One dedicated editor, matched in 24 hours. Instagram, YouTube, TikTok, LinkedIn, podcasts — whatever you post, we've shipped it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button onClick={onOpenChooser} className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_0_0_var(--brand-blue-dark)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_var(--brand-blue-dark)] transition-all">
            Hire an editor <ArrowRight className="h-4 w-4" />
          </button>
          <a href="#how" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-white px-7 py-3.5 text-base font-semibold text-ink hover:border-ink/30 transition-colors">
            How it works
          </a>
        </div>
        <div className="mt-7 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />)}
          </div>
          <span>4.9/5 from 2,000+ brands & creators</span>
        </div>
      </div>
    </section>
  );
}



function Platforms({ onOpenChooser }: { onOpenChooser: () => void }) {
  const platforms = [
    { i: <Instagram className="h-7 w-7" />, t: "Instagram", d: "Reels, stories, carousels.", chip: "bg-brand-pink text-ink", to: "/instagram" as const, cta: "Instagram page" },
    { i: <Youtube className="h-7 w-7" />, t: "YouTube", d: "Long-form, Shorts, thumbnails.", chip: "bg-primary-brand text-white", to: "/youtube" as const, cta: "YouTube page" },
    { i: <Music2 className="h-7 w-7" />, t: "TikTok", d: "Short-form, trend-ready cuts.", chip: "bg-ink text-white" },
    { i: <Linkedin className="h-7 w-7" />, t: "LinkedIn", d: "Founder videos and talking-head clips.", chip: "bg-brand-blue text-white" },
    { i: <Mic className="h-7 w-7" />, t: "Podcasts", d: "Full-episode edits and viral clip Shorts.", chip: "bg-brand-purple text-white" },
    { i: <Twitch className="h-7 w-7" />, t: "Twitch & VODs", d: "Highlight reels and stream recaps.", chip: "bg-brand-green text-ink" },
  ];

  return (
    <section id="platforms" className="py-8 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center gap-3 px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-blue px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue-dark">
            Pick your platform
          </span>
          <h2 className="font-display text-balance text-3xl font-extrabold text-ink md:text-5xl">
            Where do you post?
          </h2>
        </div>

        <Carousel ariaLabel="Platforms">
          {platforms.map((p) => {
            const inner = (
              <>
                <div className={`${p.chip} grid h-14 w-14 place-items-center rounded-2xl shadow-sm`}>
                  {p.i}
                </div>
                <div className="mt-6">
                  <div className="font-display text-2xl font-extrabold text-ink">{p.t}</div>
                  <p className="mt-2 text-sm text-ink/70">{p.d}</p>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                  {p.to ? <>Open {p.cta}</> : <>Request editor</>}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </>
            );
            const className = "group relative flex h-full flex-col rounded-[1.75rem] border-2 border-ink/10 bg-white p-7 text-left shadow-[0_8px_0_0_rgba(20,20,60,0.08)] transition-all hover:-translate-y-1 hover:border-ink/25";
            return p.to ? (
              <Link key={p.t} to={p.to} className={className}>{inner}</Link>
            ) : (
              <button key={p.t} onClick={onOpenChooser} className={className}>{inner}</button>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}


function Logos() {
  const names = ["MrBeast style", "Ali Abdaal", "Alex Hormozi", "Steven Bartlett", "MKBHD", "Gary Vee"];
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

function WhoFor() {
  const items = [
    { i: <Rocket className="h-6 w-6" />, t: "Founders", d: "Build a personal brand without lifting a finger.", c: "bg-soft-blue" },
    { i: <Sparkles className="h-6 w-6" />, t: "Creators", d: "Ship 3x more content and stay consistent.", c: "bg-soft-pink" },
    { i: <Home className="h-6 w-6" />, t: "Realtors", d: "Tour videos and listings that actually convert.", c: "bg-soft-yellow" },
    { i: <ShoppingBag className="h-6 w-6" />, t: "DTC brands", d: "Product content at the speed of social.", c: "bg-soft-green" },
    { i: <GraduationCap className="h-6 w-6" />, t: "Coaches", d: "Tip-of-the-day clips and storytelling videos.", c: "bg-soft-purple" },
    { i: <Building2 className="h-6 w-6" />, t: "Agencies", d: "White-label editing capacity on tap.", c: "bg-cream" },
  ];
  return (
    <section id="who" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            Who it's for
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            Built for everyone <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">creating video</span></span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Whether you're a solo founder or a scaling brand — we've shipped for teams like yours.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className={`${it.c} group rounded-3xl border border-border p-7 transition-all hover:-translate-y-1`}>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink shadow-sm">{it.i}</div>
              <h3 className="font-display mt-6 text-2xl font-extrabold text-ink">{it.t}</h3>
              <p className="mt-2 text-ink/70">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ThePlatform() {
  return (
    <section id="the-platform" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display mt-5 text-balance text-4xl font-extrabold text-ink md:text-6xl">
            A collaboration workspace <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-pink rounded-sm" /><span className="relative">built for you and your editor</span></span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to brief, review, and approve videos — in one dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-6">
          <div className="md:col-span-4 rounded-[2rem] bg-brand-blue p-10 text-white relative overflow-hidden">
            <div aria-hidden className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-3xl font-extrabold md:text-4xl">One dashboard. Zero chaos.</h3>
              <p className="mt-3 max-w-xl text-white/80">
                Drop footage, send briefs, leave time-stamped comments and approve cuts — all in one place. No more lost DMs or Drive mess.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Briefs", "Comments", "Versions", "Asset library", "Approvals"].map(t => (
                  <span key={t} className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-yellow p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white"><Clock className="h-6 w-6" /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">24h turnaround</h3>
            <p className="mt-2 text-ink/70">Most edits delivered the next working day, your timezone.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-pink p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white"><Heart className="h-6 w-6" /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Your dedicated editor</h3>
            <p className="mt-2 text-ink/70">One editor, exclusively yours. Learns your brand and voice.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-purple p-8 text-white">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20"><Users className="h-6 w-6" /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Top 1% talent</h3>
            <p className="mt-2 text-white/80">Hand-screened editors who've shipped for top brands.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-green p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white"><TrendingUp className="h-6 w-6" /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Built to perform</h3>
            <p className="mt-2 text-ink/70">Hooks, pacing, captions — optimized for every platform.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Formats() {
  const items = [
    { i: <Film className="h-6 w-6" />, t: "Reels & Shorts", d: "Vertical short-form with hooks, captions and pacing that hold attention.", chip: "bg-brand-pink text-ink" },
    { i: <Youtube className="h-6 w-6" />, t: "Long-form videos", d: "Retention-optimized YouTube edits with b-roll, motion and sound design.", chip: "bg-primary-brand text-white" },
    { i: <ImageIcon className="h-6 w-6" />, t: "Thumbnails & covers", d: "High-CTR thumbnails and cover art, on-brand and A/B-ready.", chip: "bg-brand-yellow text-ink" },
    { i: <Mic className="h-6 w-6" />, t: "Podcast clips", d: "Full-episode edits plus viral clips for Reels, Shorts and TikTok.", chip: "bg-brand-purple text-white" },
    { i: <Scissors className="h-6 w-6" />, t: "Talking-head", d: "Founder & creator talking-heads cut clean with b-roll and captions.", chip: "bg-brand-blue text-white" },
    { i: <Zap className="h-6 w-6" />, t: "Ads & UGC", d: "Paid-social-ready ads and UGC-style content, versioned per placement.", chip: "bg-ink text-white" },
  ];
  return (
    <section id="formats" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-yellow px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink">
            <Film className="h-3.5 w-3.5" /> Formats
          </span>
          <h2 className="font-display mt-5 text-4xl font-extrabold text-ink md:text-6xl">
            Every format, <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">one editor</span></span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Reels, long-form, thumbnails, ads, podcast clips — whatever you post, we've shipped it.
          </p>
        </div>
        <div className="mt-10">
          <Carousel ariaLabel="Formats">
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


function How() {
  const steps = [
    { n: "01", t: "Tell us where you post", d: "Instagram, YouTube, TikTok, podcasts — share your channels and goals.", c: "bg-brand-pink text-ink" },
    { n: "02", t: "Get matched in 24h", d: "We pair you with a top 1% editor who's already shipped in your format.", c: "bg-brand-yellow text-ink" },
    { n: "03", t: "Brief, review, publish", d: "One dashboard for briefs, comments, versions and approvals.", c: "bg-brand-blue text-white" },
  ];
  return (
    <section id="how" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
            One editor, <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">zero chaos</span></span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            The same model for every platform. Dedicated editor. One dashboard. Predictable turnaround.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className={`${s.c} rounded-3xl p-8`}>
              <div className="font-display text-5xl font-extrabold opacity-40">{s.n}</div>
              <h3 className="font-display mt-4 text-2xl font-extrabold">{s.t}</h3>
              <p className={`mt-2 text-sm ${s.c.includes("text-white") ? "text-white/80" : "text-ink/70"}`}>{s.d}</p>
            </div>
          ))}
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
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-extrabold text-ink md:text-6xl">
            Same model, <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">any platform</span></span>
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

function Pricing({ onOpenChooser }: { onOpenChooser: () => void }) {
  const [format, setFormat] = useState<"instagram" | "youtubeShorts" | "youtubeLongform" | "youtubeFull">("instagram");

  const formatTabs = [
    {
      id: "instagram" as const,
      label: "Instagram",
      short: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
    },
    {
      id: "youtubeShorts" as const,
      label: "YouTube Shorts",
      short: "Shorts",
      icon: <Youtube className="h-4 w-4" />,
    },
    {
      id: "youtubeLongform" as const,
      label: "YouTube Long-form",
      short: "Long-form",
      icon: <Film className="h-4 w-4" />,
    },
    {
      id: "youtubeFull" as const,
      label: "YouTube Shorts + Long-form",
      short: "Full YouTube",
      icon: <Zap className="h-4 w-4" />,
    },
  ];

  const plansByFormat = {
    instagram: [
      {
        name: "Starter",
        desc: "For creators posting 2-3 times a week.",
        price: "$890",
        features: ["1 dedicated editor", "8 Reels / month", "Stories, Carousels, UGC, Ads", "24h turnaround", "Unlimited revisions"],
        accent: false,
      },
      {
        name: "Growth",
        desc: "For brands scaling across every Instagram format.",
        price: "$1,690",
        features: ["1 dedicated editor", "20 Reels / month", "Stories, Carousels, UGC, Ads", "24h turnaround", "Hooks & captions", "Strategy calls"],
        accent: true,
      },
      {
        name: "Scale",
        desc: "For agencies and high-volume teams.",
        price: "Custom",
        features: ["Editor team", "Unlimited Reels + formats", "Same-day turnaround", "Dedicated PM"],
        accent: false,
      },
    ],
    youtubeShorts: [
      {
        name: "Starter",
        desc: "For creators posting daily Shorts.",
        price: "$990",
        features: ["1 dedicated editor", "20 Shorts / month", "48h turnaround", "Unlimited revisions"],
        accent: false,
      },
      {
        name: "Growth",
        desc: "For channels scaling Shorts output.",
        price: "$1,690",
        features: ["1 dedicated editor", "40 Shorts / month", "48h turnaround", "Hooks & captions", "Strategy calls"],
        accent: true,
      },
      {
        name: "Scale",
        desc: "For channels shipping Shorts every day.",
        price: "Custom",
        features: ["Editor team", "Unlimited Shorts", "Same-day turnaround", "Dedicated PM"],
        accent: false,
      },
    ],
    youtubeLongform: [
      {
        name: "Starter",
        desc: "For weekly long-form uploads.",
        price: "$1,990",
        features: ["1 dedicated editor", "4 long-form videos / month", "Thumbnails included", "Hook rewrites"],
        accent: false,
      },
      {
        name: "Growth",
        desc: "For channels posting multiple long-form videos weekly.",
        price: "$2,990",
        features: ["1 dedicated editor", "8 long-form videos / month", "Thumbnails included", "Strategy calls", "Retention review"],
        accent: true,
      },
      {
        name: "Scale",
        desc: "For high-volume production teams.",
        price: "Custom",
        features: ["Editor team", "Unlimited long-form videos", "Thumbnails & intros", "Custom SLAs", "Dedicated PM"],
        accent: false,
      },
    ],
    youtubeFull: [
      {
        name: "Starter",
        desc: "For creators building with both Shorts and long-form.",
        price: "$2,490",
        features: ["1 dedicated editor", "4 long-form videos / month", "20 Shorts / month", "Thumbnails included", "48h turnaround"],
        accent: false,
      },
      {
        name: "Growth",
        desc: "For channels running a full YouTube engine.",
        price: "$3,990",
        features: ["1 dedicated editor", "8 long-form videos / month", "40 Shorts / month", "Thumbnails & intros", "Strategy calls", "Retention review"],
        accent: true,
      },
      {
        name: "Scale",
        desc: "For high-volume production teams.",
        price: "Custom",
        features: ["Editor team", "Unlimited videos + Shorts", "Thumbnails & intros", "Custom SLAs", "Dedicated PM"],
        accent: false,
      },
    ],
  };

  const currentPlans = plansByFormat[format];

  return (
    <section id="pricing" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display mt-4 text-4xl font-extrabold text-ink md:text-6xl">
            Pick your plan, <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-pink rounded-sm" /><span className="relative">pick your format</span></span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Switch between Instagram, YouTube Shorts, YouTube long-form, or the full YouTube bundle.
          </p>
        </div>

        {/* Format toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border-2 border-ink/10 bg-white p-2 shadow-sm">
            {formatTabs.map((tab) => {
              const isActive = format === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFormat(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-ink text-white shadow-[0_4px_0_0_rgba(20,20,60,0.15)]"
                      : "text-ink hover:bg-cream"
                  }`}
                  aria-pressed={isActive}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.short}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 items-stretch">
          {currentPlans.map((p) => {
            const isDark = p.accent ? false : p.name === "Scale";
            const cardBg = p.accent ? "bg-brand-yellow text-ink" : isDark ? "bg-ink text-white" : "bg-white text-ink";
            const subText = isDark ? "text-white/70" : "text-ink/60";
            const bodyText = isDark ? "text-white/80" : "text-ink/70";
            const cta = p.accent ? "bg-ink text-white" : isDark ? "bg-brand-yellow text-ink" : "bg-ink text-white";
            const iconColor = p.accent ? "text-ink" : isDark ? "text-brand-yellow" : "text-brand-blue";
            return (
              <div
                key={p.name}
                className={`${cardBg} relative flex flex-col rounded-[2rem] border-2 border-ink/10 p-8 ${p.accent ? "shadow-[0_14px_0_0_rgba(20,20,60,0.15)] md:-translate-y-3" : "shadow-[0_10px_0_0_rgba(20,20,60,0.12)]"}`}
              >
                {p.accent && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <div className="flex flex-1 flex-col">
                  <div className="font-display text-2xl font-extrabold">{p.name}</div>
                  <p className={`mt-2 text-sm ${bodyText}`}>{p.desc}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-extrabold">{p.price}</span>
                    {p.price !== "Custom" && <span className={`text-sm ${subText}`}>/month</span>}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button onClick={onOpenChooser} className={`${cta} mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5`}>
                  Get started <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Pause or cancel any time · No long-term contracts · Mix and match formats on any plan</p>
      </div>
    </section>
  );
}

function QuizPrompt() {
  return (
    <section id="quiz" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-ink/10 bg-brand-yellow p-8 shadow-[0_14px_0_0_rgba(20,20,60,0.12)] sm:p-12 md:p-16">
          <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-brand-pink/60 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-brand-blue/30 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-display text-balance text-4xl font-extrabold text-ink md:text-5xl">
                Take the 60-second <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-white rounded-sm" /><span className="relative">consultation quiz</span></span>
              </h2>
              <p className="mt-4 max-w-md text-ink/70">
                Answer 6 quick questions about your role, platforms, formats and volume — we'll recommend a custom plan and price built just for you.
              </p>
              <div className="mt-7">
                <button
                  onClick={openQuiz}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_0_0_rgba(0,0,0,0.2)] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_0_rgba(0,0,0,0.2)]"
                >
                  Take the quiz <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <ul className="space-y-3 rounded-3xl bg-white/70 p-6 text-sm backdrop-blur">
              {[
                { n: "01", t: "Tell us who you are", d: "Creator, brand, founder, agency…" },
                { n: "02", t: "Pick your platforms & formats", d: "Multi-select — Reels, long-form, UGC, more" },
                { n: "03", t: "Set volume, turnaround & budget", d: "Ballpark is fine — we'll fine-tune together" },
                { n: "04", t: "Get a custom plan & price", d: "Instantly, with your recommended features" },
              ].map((s) => (
                <li key={s.n} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-blue font-display text-xs font-extrabold text-white">
                    {s.n}
                  </span>
                  <span>
                    <span className="font-display block text-base font-extrabold text-ink">{s.t}</span>
                    <span className="text-ink/60">{s.d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-2 font-display text-2xl font-extrabold tracking-tight text-ink">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue text-white">
                <Play className="h-4 w-4 fill-white" />
              </span>
              reelhire
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Hire a dedicated personal video editor for Instagram, YouTube, TikTok, LinkedIn and more. Top 1% talent, matched in 24 hours.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand-pink hover:text-ink">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-primary-brand hover:text-white">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand-blue hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="mailto:hello@reelhire.co" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand-yellow hover:text-ink">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">Platforms</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li><Link to="/instagram" className="hover:text-ink">Instagram editing</Link></li>
                <li><Link to="/youtube" className="hover:text-ink">YouTube editing</Link></li>
                <li><a href="#platforms" className="hover:text-ink">TikTok & Reels</a></li>
                <li><a href="#platforms" className="hover:text-ink">LinkedIn videos</a></li>
                <li><a href="#platforms" className="hover:text-ink">Podcast editing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">Company</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li><a href="#who" className="hover:text-ink">Who it's for</a></li>
                <li><a href="#how" className="hover:text-ink">How it works</a></li>
                <li><a href="#pricing" className="hover:text-ink">Pricing</a></li>
                <li><a href="#the-platform" className="hover:text-ink">The platform</a></li>
                <li><a href="mailto:hello@reelhire.co" className="hover:text-ink">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li><a href="mailto:hello@reelhire.co" className="hover:text-ink">hello@reelhire.co</a></li>
                <li>Available in 12+ timezones</li>
                <li>24h turnaround on most edits</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Reelhire. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function HomePage() {
  const [chooserOpen, setChooserOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setChooserOpen(true), 350);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!chooserOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setChooserOpen(false); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [chooserOpen]);

  const open = () => openBookingModal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav onOpenChooser={open} />
      <Hero onOpenChooser={open} />
      <Logos />
      <WhoFor />
      <Platforms onOpenChooser={open} />
      <ThePlatform />
      <Formats />
      <How />
      <Why />
      <Pricing onOpenChooser={open} />
      <QuizPrompt />
      <FinalCTA onHire={open} />
      <Footer />
      <ChooserModal open={chooserOpen} onClose={() => setChooserOpen(false)} />
      <BookingModal />
      <QuizModal />
    </main>
  );
}
