import { createFileRoute, Link } from "@tanstack/react-router";
import { Instagram, Youtube, Sparkles, ArrowRight, Play, Star, MoreHorizontal } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reelhire — Hire your personal video editor" },
      { name: "description", content: "Hire a top 1% personal video editor for Instagram, YouTube, or any platform you create on. Editing-as-a-service, managed end-to-end." },
      { property: "og:title", content: "Reelhire — Hire your personal video editor" },
      { property: "og:description", content: "Top 1% editors, exclusive to your brand. Pick your platform and get matched in 24 hours." },
    ],
  }),
  component: Chooser,
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
          <Link to="/other" className="hover:text-brand-blue">Other platforms</Link>
        </div>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden text-sm font-semibold hover:text-brand-blue md:inline">Log in</a>
        </div>
      </nav>
    </div>
  );
}

function Chooser() {
  const options = [
    {
      to: "/instagram" as const,
      label: "Instagram",
      tag: "Reels • Stories • Carousels",
      desc: "Scroll-stopping reels and stories, shipped in your timezone.",
      icon: <Instagram className="h-8 w-8" />,
      cardBg: "bg-brand-pink",
      iconBg: "bg-white",
      textColor: "text-ink",
      shadow: "shadow-[0_10px_0_0_rgba(20,20,60,0.15)]",
    },
    {
      to: "/youtube" as const,
      label: "YouTube",
      tag: "Long-form • Shorts • Thumbnails",
      desc: "Retention-optimized cuts, clean thumbnails, weekly uploads.",
      icon: <Youtube className="h-8 w-8" />,
      cardBg: "bg-[oklch(0.62_0.22_25)]",
      iconBg: "bg-white",
      textColor: "text-white",
      shadow: "shadow-[0_10px_0_0_rgba(20,20,60,0.25)]",
    },
    {
      to: "/other" as const,
      label: "Something else",
      tag: "TikTok • LinkedIn • Podcasts",
      desc: "Editing help for any platform you create on.",
      icon: <MoreHorizontal className="h-8 w-8" />,
      cardBg: "bg-brand-yellow",
      iconBg: "bg-white",
      textColor: "text-ink",
      shadow: "shadow-[0_10px_0_0_rgba(20,20,60,0.15)]",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <section className="relative overflow-hidden pt-16 pb-24">
        <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-soft-purple blur-3xl opacity-70" />
        <div aria-hidden className="pointer-events-none absolute top-40 -right-24 h-96 w-96 rounded-full bg-soft-yellow blur-3xl opacity-70" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-soft-pink blur-3xl opacity-70" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-semibold text-ink shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
            Editing-as-a-service for creators
          </span>
          <h1 className="font-display mt-6 text-balance text-[clamp(2.75rem,7vw,6rem)] font-extrabold text-ink">
            Hire your personal <br />
            <span className="relative inline-block">
              <span className="relative z-10">video editor</span>
              <span aria-hidden className="absolute inset-x-0 bottom-2 z-0 h-4 bg-brand-yellow md:h-6" />
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-muted-foreground">
            One editor, exclusive to your brand — matched in 24 hours. Start by telling us where you post.
          </p>

          <div className="mx-auto mt-14 max-w-6xl">
            <div className="mb-6 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              <span className="h-px w-8 bg-border" />
              What are you hiring an editor for?
              <span className="h-px w-8 bg-border" />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {options.map((o) => (
                <Link
                  key={o.to}
                  to={o.to}
                  className={`${o.cardBg} ${o.textColor} ${o.shadow} group relative overflow-hidden rounded-[2rem] border-2 border-ink/10 p-8 text-left transition-all hover:-translate-y-1`}
                >
                  <div className={`${o.iconBg} grid h-16 w-16 place-items-center rounded-2xl text-ink shadow-sm`}>
                    {o.icon}
                  </div>
                  <div className="mt-8">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-70">{o.tag}</div>
                    <div className="font-display mt-2 text-4xl font-extrabold">{o.label}</div>
                    <p className={`mt-3 ${o.textColor === "text-white" ? "text-white/80" : "text-ink/70"}`}>{o.desc}</p>
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                    Continue <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />)}
            </div>
            <span>4.9/5 from 2,000+ brands & creators</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Reelhire. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/instagram" className="hover:text-ink">Instagram editors</Link>
            <Link to="/youtube" className="hover:text-ink">YouTube editors</Link>
            <Link to="/other" className="hover:text-ink">Other platforms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
