import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Instagram, Youtube, Music2, Linkedin, Mic, Twitch, Sparkles, ArrowRight,
  Star, CheckCircle2, MessageCircle, Clock, Heart, X, MoreHorizontal, ChevronDown,
  Rocket, Building2, Home, GraduationCap, ShoppingBag, Users, TrendingUp,
  Film, Scissors, Image as ImageIcon, Zap,
} from "lucide-react";
import { Carousel } from "../components/Carousel";
import { HowItWorks } from "../components/HowItWorks";
import { CoreFeatures } from "../components/CoreFeatures";
import { ScoobieIcon, ScoobieWordmark } from "../components/Logo";

import { BookingModal, openBookingModal } from "../components/BookingModal";
import { QuizModal, openQuiz } from "../components/QuizModal";
import { FinalCTA } from "../components/FinalCTA";
import { Button } from "../components/ui/button";
import masonryCreator from "../assets/masonry-creator.jpg";
import masonryEdit from "../assets/masonry-edit.jpg";
import masonryHost from "../assets/masonry-host.jpg";
import masonryPodcast from "../assets/masonry-podcast.jpg";
import creatorBanner from "../assets/creator-banner.jpg";
import quizConsultationImage from "../assets/quiz-consultation.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scoobie — Hire your personal video editor" },
      { name: "description", content: "Top 1% talent who understands your brand, works in your timezone, and delivers scroll-stopping content every time." },
      { property: "og:title", content: "Scoobie — Hire your personal video editor" },
      { property: "og:description", content: "Top 1% talent who understands your brand, works in your timezone, and delivers scroll-stopping content every time." },
      { property: "og:url", content: "https://hirescoobie.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://hirescoobie.com/" }],
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
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-4 animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[92vh] overflow-y-auto rounded-t-[1.75rem] sm:rounded-[2.5rem] border-2 border-ink/10 bg-white p-5 pt-14 shadow-2xl sm:p-6 sm:pt-6 md:p-10">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10 sm:right-5 sm:top-5"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink shadow-sm">
            <Sparkles className="h-3 w-3 text-brand-purple" />
            Get started
          </span>
          <h2 className="font-display mt-4 text-balance text-2xl font-extrabold text-ink sm:text-3xl md:text-5xl">
            What are you hiring an <span className="relative inline-block"><span aria-hidden className="absolute inset-x-[-0.15em] top-[0.15em] bottom-[-0.05em] bg-brand-yellow rounded-sm" /><span className="relative">editor</span></span> for?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Pick your primary platform and we'll match you with a dedicated editor in 24 hours.
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3">
          {options.map((o) => (
            <button
              key={o.label}
              onClick={o.onClick}
              className={`${o.cardBg} ${o.textColor} group relative overflow-hidden rounded-2xl border-2 border-ink/10 p-5 text-left shadow-[0_6px_0_0_rgba(20,20,60,0.15)] transition-all hover:-translate-y-1 sm:rounded-[1.75rem] sm:p-6 sm:shadow-[0_8px_0_0_rgba(20,20,60,0.15)]`}
            >
              <div className="flex items-center gap-4 md:block">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-ink shadow-sm sm:h-12 sm:w-12">
                  {o.icon}
                </div>
                <div className="md:mt-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider opacity-70 sm:text-[11px]">{o.tag}</div>
                  <div className="font-display mt-0.5 text-xl font-extrabold sm:text-2xl md:mt-1">{o.label}</div>
                </div>
              </div>
              <p className={`mt-3 text-sm md:mt-2 ${o.textColor === "text-white" ? "text-white/80" : "text-ink/70"}`}>{o.desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold sm:mt-5">
                Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
        <div className="mt-5 text-center text-xs text-muted-foreground sm:mt-6">
          Not sure? Pick <button onClick={onClose} className="font-semibold underline hover:text-ink">Something else</button> to explore all platforms.
        </div>
      </div>
    </div>
  );
}

function Nav({ onOpenChooser }: { onOpenChooser: () => void }) {
  return (
    <div className="sticky top-4 z-40 flex justify-center px-4">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-border bg-white/90 px-6 py-3 text-ink shadow-[0_4px_24px_rgba(20,20,60,0.08)] backdrop-blur transition-colors">
        <Link to="/" className="flex items-center gap-2 font-brand text-2xl font-extrabold tracking-tight text-primary-brand">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary-brand text-white">
            <ScoobieIcon className="h-5 w-5" />
          </span>
          <ScoobieWordmark dotColor="var(--ink)" />
        </Link>
        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link to="/instagram" className="hover:text-primary-brand">Instagram</Link>
          <Link to="/youtube" className="hover:text-primary-brand">YouTube</Link>
          <a href="#pricing" className="hover:text-primary-brand">Pricing</a>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onOpenChooser} className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-brand-dark transition-colors">
            Get started
          </button>
        </div>
      </nav>
    </div>
  );
}

function RotatingRole() {
  const words = ["video editor", "content partner"];
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setShown(false);
      setTimeout(() => {
        setIdx((p) => (p + 1) % words.length);
        setShown(true);
      }, 350);
    }, 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className={`text-hero-accent inline-block transition-all duration-300 ${shown ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
    >
      {words[idx]}
    </span>
  );
}

function Hero({ onOpenChooser }: { onOpenChooser: () => void }) {
  return (
    <section className="relative overflow-hidden bg-hero-dark text-ink">
      <div aria-hidden className="pointer-events-none absolute top-1/3 -left-20 h-[28rem] w-[28rem] rounded-full bg-primary-brand/20 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-secondary-brand/40 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[90vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 lg:grid-cols-2">
        <div className="max-w-2xl">
          <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>
            Hire your personal <br />
            <RotatingRole />
          </h1>
          <p className="mt-6 max-w-md text-lg text-hero-muted">
            Top 1% talent who understands your brand, works in your timezone, and delivers scroll-stopping content every time.
          </p>
          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
            <button onClick={onOpenChooser} className="inline-flex items-center gap-2 rounded-full bg-primary-brand px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_0_0_var(--primary-brand-dark)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_var(--primary-brand-dark)] transition-all">
              Hire an editor <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#how" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-base font-semibold text-ink hover:bg-ink/5 transition-colors">
              How it works
            </a>
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-hero-muted">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-hero-accent text-hero-accent" />)}
            </div>
            <span>4.9/5 from 2,000+ brands & creators</span>
          </div>
        </div>

        <div className="relative h-[560px] overflow-hidden lg:h-[640px]">
          <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-hero-dark to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-hero-dark to-transparent" />
          <div className="grid h-full grid-cols-3 gap-3">
            <MasonryColumn items={[
              { img: masonryCreator, h: "h-[280px]", label: "Creator portraits" },
              { img: masonryEdit, h: "h-[360px]", label: "Editing suites" },
              { img: masonryHost, h: "h-[240px]", label: "Short-form energy" },
            ]} />
            <MasonryColumn items={[
              { img: masonryPodcast, h: "h-[320px]", label: "Podcast clips" },
              { img: masonryCreator, h: "h-[260px]", label: "Brand films" },
              { img: masonryEdit, h: "h-[300px]", label: "Motion graphics" },
            ]} offset />
            <MasonryColumn items={[
              { img: masonryHost, h: "h-[340px]", label: "TikTok hooks" },
              { img: masonryPodcast, h: "h-[280px]", label: "YouTube Shorts" },
              { img: masonryCreator, h: "h-[260px]", label: "Retainers" },
            ]} />
          </div>
        </div>
      </div>
    </section>
  );
}


function MasonryColumn({ items, offset }: { items: { img: string; h: string; label: string }[]; offset?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 ${offset ? "mt-10" : ""}`}>
      {items.map((item, i) => (
        <div key={i} className={`group relative overflow-hidden rounded-2xl ${item.h} bg-hero-card`}>
          <img src={item.img} alt={item.label} loading="lazy" className="h-full w-full object-cover transition-all duration-500 grayscale group-hover:scale-105 group-hover:grayscale-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 p-3 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100">{item.label}</div>
        </div>
      ))}
    </div>
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
            Solo founder or scaling brand — you get content that performs, delivered on schedule, without the hassle.
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
            Brief, review and approve in one place. Hiring an editor has never been this easy.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-6">
          <div className="md:col-span-4 rounded-[2rem] bg-brand-blue p-10 text-white relative overflow-hidden">
            
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20">
                <MessageCircle className="h-6 w-6" />
              </div>
              <h3 className="font-display mt-6 text-3xl font-extrabold md:text-4xl">Effortless from brief to publish.</h3>
              <p className="mt-3 max-w-xl text-white/80">
                Drop footage, leave time-stamped notes and approve cuts in one dashboard. No chasing DMs, no Drive mess — we handle the rest.
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
            <h3 className="font-display mt-6 text-2xl font-extrabold">On time, every time</h3>
            <p className="mt-2 text-ink/70">Next-day delivery in your timezone. Consistency you can plan around.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-pink p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white"><Heart className="h-6 w-6" /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Your dedicated editor</h3>
            <p className="mt-2 text-ink/70">One editor who learns your brand, so every video looks and sounds like you.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-purple p-8 text-white">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20"><Users className="h-6 w-6" /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Top 1% talent</h3>
            <p className="mt-2 text-white/80">Hand-screened editors who've made content that performs for top brands.</p>
          </div>

          <div className="md:col-span-2 rounded-[2rem] bg-brand-green p-8 text-ink">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white"><TrendingUp className="h-6 w-6" /></div>
            <h3 className="font-display mt-6 text-2xl font-extrabold">Built to perform</h3>
            <p className="mt-2 text-ink/70">Hooks, pacing and captions made for views, shares and engagement.</p>
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
            Reels, long-form, thumbnails, ads, podcast clips — every format made to perform, all from one editor.
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



function ServiceBanner({ onOpenChooser }: { onOpenChooser: () => void }) {
  const points = ["A dedicated editor who learns your style", "Content built for views, shares and watch time", "Reliable 48-hour delivery, every time", "One simple workspace from brief to publish", "Repurposing and mass distribution, built in"];
  return (
    <section id="pricing" className="bg-background px-4 py-20 sm:px-6 sm:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <img src={creatorBanner} alt="Content creator filming a video at home" loading="lazy" width={1920} height={1024} className="absolute inset-0 h-full w-full object-cover object-left" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-ink/10 via-ink/60 to-ink/90" />
        <div className="relative ml-auto flex min-h-[560px] max-w-xl flex-col justify-center p-8 text-primary-foreground sm:p-12">
          <h2 className="font-display text-4xl font-extrabold tracking-normal sm:text-5xl md:text-6xl">Create once. Show up everywhere.</h2>
          <ul className="mt-8 space-y-4 text-base font-medium sm:text-lg">
            {points.map((p) => <li key={p} className="flex items-start gap-3"><CheckCircle2 aria-hidden className="mt-1 h-5 w-5 shrink-0 text-secondary" />{p}</li>)}
          </ul>
          <Button onClick={onOpenChooser} className="mt-10 h-12 w-fit rounded-md px-7 font-bold">See plans <ArrowRight /></Button>
        </div>
      </div>
    </section>
  );
}

function QuizPrompt() {
  return (
    <section id="quiz" className="pt-16 pb-4 sm:pt-20 sm:pb-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 overflow-hidden rounded-[1.75rem] bg-hero-card p-5 sm:p-7 md:flex-row md:items-center md:gap-8 md:p-8">
          <img src={quizConsultationImage} alt="Creator reviewing video content on her phone and laptop" width={1280} height={1024} loading="lazy" className="h-44 w-full rounded-xl object-cover sm:h-56 md:h-48 md:w-[260px] md:shrink-0" />
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-balance text-2xl font-extrabold text-ink sm:text-3xl md:text-4xl">Not sure which plan?</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70 sm:text-base">
              Answer a few quick questions about your role, platforms, formats and volume. We’ll suggest the right plan for your content.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 md:items-center">
            <Button variant="outline" onClick={openQuiz} className="h-12 w-full rounded-md border-ink/40 bg-surface px-6 font-bold text-ink hover:bg-surface/80 md:w-auto">
              Take the quiz <ArrowRight className="h-4 w-4" />
            </Button>
            <span className="text-xs font-medium text-ink/60">About 60 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}
function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = [
    {
      q: "Who is Scoobie for?",
      a: "Creators, founders, personal brands, real estate agents, e-commerce brands, and any business creating video content regularly. If you need consistent edits without hiring a full-time editor, we match you with a dedicated pro.",
    },
    {
      q: "How fast is the turnaround?",
      a: "Most short-form edits are delivered within 24–48 hours. Long-form YouTube videos and more complex projects typically take 3–5 business days depending on length and revisions.",
    },
    {
      q: "What formats do you edit?",
      a: "Instagram Reels, Stories, Carousels, TikToks, YouTube Shorts, long-form YouTube videos, LinkedIn videos, UGC ads, podcast clips, and more. You pick the platform and formats, your editor handles the rest.",
    },
    {
      q: "How does the editor matching work?",
      a: "We look at your platform, content style, volume, and timezone, then assign you an editor who already has experience in your niche. You can request a swap if the fit isn't right.",
    },
    {
      q: "Are revisions included?",
      a: "Yes. Every plan includes unlimited revisions within the scope of the original request. We want the final cut to feel exactly like your brand.",
    },
    {
      q: "Can I pause or cancel my plan?",
      a: "Absolutely. Plans are monthly and you can pause, upgrade, downgrade, or cancel anytime. No long-term contracts or hidden fees.",
    },
  ];
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-balance text-3xl font-extrabold text-ink sm:text-4xl">
            Questions? We've got answers.
          </h2>
        </div>
        <div className="mt-8 sm:mt-10">
          {items.map((item, i) => (
            <div key={i} className="border-b border-ink/10">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left sm:py-5"
              >
                <span className="font-display text-base font-extrabold text-ink sm:text-lg">{item.q}</span>
                <span className={`shrink-0 rounded-full bg-brand-blue/10 p-1 text-brand-blue transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}>
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 pb-5" : "max-h-0"}`}>
                <p className="text-sm leading-relaxed text-ink/70 sm:text-base">{item.a}</p>
              </div>
            </div>
          ))}
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
            <Link to="/" className="flex items-center gap-2 font-brand text-2xl font-extrabold tracking-tight text-ink">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue text-white">
                <ScoobieIcon className="h-5 w-5" />
              </span>
              <ScoobieWordmark dotColor="var(--primary-brand)" />
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
              <a href="mailto:hello@hirescoobie.com" aria-label="Email" className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm transition-colors hover:bg-brand-yellow hover:text-ink">
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
                <li><Link to="/blog" className="hover:text-ink">Blog</Link></li>
                <li><a href="mailto:hello@hirescoobie.com" className="hover:text-ink">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-extrabold uppercase tracking-wider text-ink">Contact</h4>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li><a href="mailto:hello@hirescoobie.com" className="hover:text-ink">hello@hirescoobie.com</a></li>
                <li>Available in 12+ timezones</li>
                <li>24h turnaround on most edits</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Scoobie. All rights reserved.</span>
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
      <WhoFor />
      <CoreFeatures />
      <Platforms onOpenChooser={open} />
      <ThePlatform />
      <Formats />
      <HowItWorks />
      <ServiceBanner onOpenChooser={open} />
      <QuizPrompt />
      <FAQ />
      <FinalCTA onHire={open} />
      <Footer />
      <ChooserModal open={chooserOpen} onClose={() => setChooserOpen(false)} />
      <BookingModal />
      <QuizModal />
    </main>
  );
}
