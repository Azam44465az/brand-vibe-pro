import { CheckCircle2, Instagram, Youtube, Music2, Linkedin } from "lucide-react";

const card = "relative overflow-hidden rounded-3xl border border-primary-foreground/30 bg-gradient-to-br from-primary-foreground/25 via-primary-foreground/10 to-primary-foreground/5 p-7 sm:p-9 backdrop-blur-xl shadow-[inset_0_1px_0_0_color-mix(in_oklab,var(--primary-foreground)_50%,transparent),0_20px_50px_-20px_color-mix(in_oklab,var(--ink)_60%,transparent)] before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-1/2 before:bg-gradient-to-b before:from-primary-foreground/15 before:to-transparent";
const title = "font-display text-2xl font-extrabold sm:text-3xl";
const body = "mt-3 max-w-md text-primary-foreground/70";

const bars = [{ v: "102K", h: 100 }, { v: "87K", h: 84 }, { v: "71K", h: 68 }, { v: "62K", h: 58 }, { v: "48K", h: 46 }, { v: "32K", h: 32 }];

export function CoreFeatures() {
  return (
    <section id="core-features" className="relative overflow-hidden bg-gradient-to-br from-primary-brand-dark via-primary to-primary-brand-dark px-4 py-24 text-primary-foreground sm:px-6">
      <div aria-hidden className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-secondary/40 blur-3xl" />
      <div aria-hidden className="absolute -right-24 bottom-10 h-[28rem] w-[28rem] rounded-full bg-accent/40 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <h2 className="font-display max-w-3xl text-4xl font-extrabold md:text-6xl">
          Everything your content needs, <span className="text-accent">in one editor.</span>
        </h2>

        <div className="mt-14 grid gap-5 md:grid-cols-12">
          {/* Dedicated editor */}
          <div className={`${card} md:col-span-7`}>
            <h3 className={title}>A dedicated editor</h3>
            <p className={body}>One senior editor who learns your voice, pacing and style, so every video feels like you.</p>
            <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-secondary font-bold text-secondary-foreground">MK</div>
              <div className="min-w-0 flex-1">
                <p className="font-bold">Maya K. · Your editor</p>
                <p className="text-sm text-primary-foreground/60">Knows your brand kit, hooks and caption style</p>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">Online</span>
            </div>
          </div>

          {/* Performance */}
          <div className={`${card} md:col-span-5`}>
            <h3 className={title}>Built to perform</h3>
            <p className={body}>Hooks, pacing and captions made for views, shares and watch time.</p>
            <div className="mt-8 flex h-40 items-end gap-2">
              {bars.map((b) => (
                <div key={b.v} className="flex flex-1 flex-col items-center justify-end gap-1" style={{ height: "100%" }}>
                  <span className="text-[10px] font-bold text-primary-foreground/70">{b.v}</span>
                  <div className="w-full rounded-t-lg border border-primary-foreground/25 bg-gradient-to-t from-accent/40 to-accent" style={{ height: `${b.h}%` }} />
                </div>
              ))}
            </div>
          </div>

          {/* Repurposing */}
          <div className={`${card} md:col-span-5`}>
            <h3 className={title}>Repurposing & mass distribution</h3>
            <p className={body}>One video becomes cuts for every platform, published from one place. No extra-cut fees.</p>
            <div className="mt-8 space-y-2">
              {[{ i: Instagram, t: "Instagram Reel", r: "9:16" }, { i: Youtube, t: "YouTube Short", r: "9:16" }, { i: Music2, t: "TikTok", r: "9:16" }, { i: Linkedin, t: "LinkedIn", r: "1:1" }].map(({ i: Icon, t, r }) => (
                <div key={t} className="flex items-center gap-3 rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-2.5 text-sm">
                  <Icon className="h-4 w-4" /><span className="flex-1 font-semibold">{t}</span>
                  <span className="rounded bg-primary-foreground/10 px-1.5 text-xs">{r}</span>
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
              ))}
            </div>
          </div>

          {/* Captions */}
          <div className={`${card} md:col-span-7`}>
            <h3 className={title}>Captions, motion & hooks</h3>
            <p className={body}>Animated captions, SFX, motion graphics and multiple hook variations on every video.</p>
            <div className="mt-8 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-4">
              <p className="mx-auto w-fit rounded-lg bg-secondary px-3 py-1.5 text-center text-sm font-extrabold text-secondary-foreground">"This one habit changed everything"</p>
              <div className="mt-4 flex gap-1.5">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className={`h-10 flex-1 rounded ${i >= 5 && i <= 8 ? "bg-accent" : "bg-primary-foreground/20"}`} />
                ))}
              </div>
              <div className="mt-3 flex gap-2 text-xs font-semibold">
                {["Hook A", "Hook B", "Hook C"].map((h, i) => (
                  <span key={h} className={`rounded-full px-3 py-1 ${i === 0 ? "bg-secondary text-secondary-foreground" : "bg-primary-foreground/10"}`}>{h}</span>
                ))}
              </div>
            </div>
          </div>

          {[
            { t: "48-hour delivery", d: "Reliable turnaround in your timezone, so your calendar never slips." },
            { t: "Thumbnails & covers", d: "Scroll-stopping covers and thumbnails designed alongside every edit." },
            { t: "One simple workspace", d: "Brief, review and approve in one place. No DMs, no Drive mess." },
          ].map((f) => (
            <div key={f.t} className={`${card} md:col-span-4`}>
              <h3 className="font-display text-2xl font-extrabold">{f.t}</h3>
              <p className="mt-3 text-primary-foreground/70">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
