import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Instagram, Youtube, Music2, Linkedin, Mic, Twitch, Sparkles, ArrowRight,
  Play, Star, CheckCircle2, MessageCircle, Clock, Heart, X, MoreHorizontal,
  Rocket, Building2, Home, GraduationCap, ShoppingBag, Wand2, Users, TrendingUp,
  Film, Scissors, Image as ImageIcon, Zap,
} from "lucide-react";
import { Carousel } from "../components/Carousel";
import { PhoneReel } from "../components/PhoneReel";
import { BookingModal, openBookingModal } from "../components/BookingModal";


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
      cardBg: "bg-[oklch(0.62_0.22_25)]",
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
            What are you hiring an <span className="bg-brand-yellow px-2">editor</span> for?
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
          <a href="#platforms" className="hover:text-brand-blue">Other</a>
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

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-blue" />
            </span>
            Editing-as-a-service for creators & brands
          </span>
          <h1 className="font-display mt-6 text-balance text-[clamp(2.5rem,6.5vw,5.5rem)] font-extrabold text-ink">
            Hire your personal{" "}
            <span className="relative inline-block">
              <span className="relative z-10">video editor</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 z-0 h-3 bg-brand-yellow md:h-5" />
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
            One dedicated editor, matched in 24 hours. Instagram, YouTube, TikTok, LinkedIn, podcasts — whatever you post, we've shipped it.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <button onClick={onOpenChooser} className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_0_0_var(--brand-blue-dark)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_var(--brand-blue-dark)] transition-all">
              Hire an editor <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#how" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 bg-white px-7 py-3.5 text-base font-semibold text-ink hover:border-ink/30 transition-colors">
              How it works
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />)}
            </div>
            <span>4.9/5 from 2,000+ brands & creators</span>
          </div>
        </div>

        <div className="relative">
          <StaticHeroVisual />
        </div>
      </div>
    </section>
  );
}

function StaticHeroVisual() {
  return (
    <div className="relative mx-auto flex w-full justify-center pt-6">
      {/* static chips */}
      <div className="absolute left-0 top-4 z-20 rotate-[-6deg] rounded-2xl border border-ink/10 bg-white px-3 py-2 text-xs font-semibold text-ink shadow-lg md:-left-6">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-secondary-brand text-ink">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span>Captions + hook added</span>
        </div>
      </div>
      <div className="absolute right-0 top-36 z-20 rotate-[5deg] rounded-2xl border border-ink/10 bg-white px-3 py-2 text-xs font-semibold text-ink shadow-lg md:-right-4">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-brand text-ink">
            <Heart className="h-4 w-4" />
          </span>
          <div>
            <div className="font-display text-sm font-extrabold leading-none">+284%</div>
            <div className="text-[10px] text-ink/60">avg. views</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-2 bottom-20 z-20 rotate-[-3deg] rounded-2xl bg-ink px-3 py-2 text-xs font-semibold text-white shadow-lg md:right-2">
        Delivered in 24h
      </div>

      {/* phone */}
      <div className="relative w-[270px] rounded-[2.4rem] border-[10px] border-ink bg-ink p-1 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] md:w-[310px]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(160deg,var(--primary-brand)_0%,var(--secondary-brand)_60%,var(--accent-brand)_100%)]">
          <div className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <div className="h-52 w-52 rounded-full bg-white/25 blur-3xl" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-16 w-16 rounded-full bg-white/95" />
                <div className="absolute top-16 h-24 w-32 rounded-t-[3rem] bg-white/95" />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-4 top-10 h-1 rounded-full bg-white/25">
            <div className="h-full w-1/3 rounded-full bg-white" />
          </div>
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center">
            <span className="inline-block rounded-lg bg-ink/85 px-3 py-1.5 font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-white">
              this <span className="bg-accent-brand px-1 text-ink">changed</span> everything
            </span>
          </div>
          <div className="absolute inset-x-4 bottom-3 flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 backdrop-blur">
            <Play className="h-3.5 w-3.5 fill-white text-white" />
            <div className="truncate text-[10px] font-semibold text-white">
              @yourbrand · edited by reelhire
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function Platforms({ onOpenChooser }: { onOpenChooser: () => void }) {
  const platforms = [
    { i: <Instagram className="h-7 w-7" />, t: "Instagram", d: "Reels, stories, carousels.", chip: "bg-brand-pink text-ink", to: "/instagram" as const, cta: "Instagram page" },
    { i: <Youtube className="h-7 w-7" />, t: "YouTube", d: "Long-form, Shorts, thumbnails.", chip: "bg-[oklch(0.62_0.22_25)] text-white", to: "/youtube" as const, cta: "YouTube page" },
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
            Built for everyone <span className="bg-brand-yellow px-2">creating video</span>
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
          <span className="inline-flex items-center gap-2 rounded-full bg-soft-blue px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue-dark">
            <Wand2 className="h-3.5 w-3.5" /> The platform
          </span>
          <h2 className="font-display mt-5 text-balance text-4xl font-extrabold text-ink md:text-6xl">
            A Superside-style workspace, <span className="bg-brand-pink px-2">built for editors</span>
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
    { i: <Youtube className="h-6 w-6" />, t: "Long-form videos", d: "Retention-optimized YouTube edits with b-roll, motion and sound design.", chip: "bg-[oklch(0.62_0.22_25)] text-white" },
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
            Every format, <span className="bg-brand-yellow px-2">one editor</span>
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
            One editor, <span className="bg-brand-yellow px-2">zero chaos</span>
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

function Pricing({ onOpenChooser }: { onOpenChooser: () => void }) {
  const plans = [
    {
      name: "Starter",
      price: "$1,499",
      per: "/month",
      desc: "For creators shipping weekly on one platform.",
      features: ["1 dedicated editor", "Up to 8 edits / month", "48h turnaround", "One dashboard"],
      c: "bg-white text-ink",
      cta: "bg-ink text-white",
      accent: false,
    },
    {
      name: "Growth",
      price: "$2,799",
      per: "/month",
      desc: "For brands posting across multiple platforms.",
      features: ["1 dedicated editor", "Up to 20 edits / month", "24h turnaround", "Thumbnails & covers included", "Priority support"],
      c: "bg-brand-yellow text-ink",
      cta: "bg-ink text-white",
      accent: true,
    },
    {
      name: "Scale",
      price: "Custom",
      per: "",
      desc: "For teams with high-volume, multi-editor needs.",
      features: ["Dedicated editor team", "Unlimited edits", "Same-day turnaround", "Custom workflows & SLAs"],
      c: "bg-ink text-white",
      cta: "bg-brand-yellow text-ink",
      accent: false,
    },
  ];
  return (
    <section id="pricing" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink shadow-sm">
            Unified pricing
          </span>
          <h2 className="font-display mt-4 text-4xl font-extrabold text-ink md:text-6xl">
            One price, <span className="bg-brand-pink px-2">any platform</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Same simple plans whether you post to Instagram, YouTube, TikTok or all of them.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`${p.c} relative rounded-[2rem] border-2 border-ink/10 p-8 ${p.accent ? "shadow-[0_14px_0_0_rgba(20,20,60,0.15)] md:-translate-y-3" : "shadow-[0_10px_0_0_rgba(20,20,60,0.12)]"}`}
            >
              {p.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Most popular
                </span>
              )}
              <div className="font-display text-2xl font-extrabold">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-extrabold">{p.price}</span>
                <span className={`text-sm ${p.c.includes("text-white") ? "text-white/70" : "text-ink/60"}`}>{p.per}</span>
              </div>
              <p className={`mt-3 text-sm ${p.c.includes("text-white") ? "text-white/80" : "text-ink/70"}`}>{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 ${p.accent ? "text-ink" : p.c.includes("text-white") ? "text-brand-yellow" : "text-brand-blue"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button onClick={onOpenChooser} className={`${p.cta} mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5`}>
                Get started <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Pause or cancel any time · No long-term contracts</p>
      </div>
    </section>
  );
}

function Contact({ onOpenChooser }: { onOpenChooser: () => void }) {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-ink p-12 text-center text-white md:p-20">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-brand-purple opacity-40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-brand-blue opacity-40 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-balance text-4xl font-extrabold md:text-6xl">
            Ready to hire your <br />
            <span className="bg-brand-yellow px-3 text-ink">personal editor?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Tell us where you post and we'll match you with an editor who's shipped for that exact format.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button onClick={onOpenChooser} className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-base font-semibold text-ink shadow-[0_8px_0_0_rgba(255,255,255,0.15)] hover:translate-y-0.5 hover:shadow-[0_4px_0_0_rgba(255,255,255,0.15)] transition-all">
              Hire an editor <ArrowRight className="h-4 w-4" />
            </button>
            <a href="mailto:hello@reelhire.co" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white hover:bg-white hover:text-ink transition-colors">
              Talk to us
            </a>
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
          <a href="#platforms" className="hover:text-ink">Other platforms</a>
          <a href="#pricing" className="hover:text-ink">Pricing</a>
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
      <Platforms onOpenChooser={open} />
      <ThePlatform />
      <Formats />
      <How />
      <Why />
      <Pricing onOpenChooser={open} />
      <Contact onOpenChooser={open} />
      <Footer />
      <ChooserModal open={chooserOpen} onClose={() => setChooserOpen(false)} />
      <BookingModal />
    </main>
  );
}
