import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Search, Play, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { POSTS } from "@/lib/blog";
import { BookingModal, openBookingModal } from "@/components/BookingModal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Reelhire Blog — Video editing playbooks for Instagram & YouTube" },
      { name: "description", content: "Playbooks, benchmarks and behind-the-scenes essays on hiring editors and shipping short-form and long-form video that converts." },
      { property: "og:title", content: "Reelhire Blog — Video editing playbooks" },
      { property: "og:description", content: "Playbooks, benchmarks and essays on hiring editors and shipping video that converts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

const CATEGORIES = ["All", "Hiring", "YouTube", "Workflow", "Strategy"] as const;

function BlogIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const inCat = cat === "All" || p.category === cat;
      const s = q.trim().toLowerCase();
      const inQ =
        !s ||
        p.title.toLowerCase().includes(s) ||
        p.excerpt.toLowerCase().includes(s) ||
        p.tags.some((t) => t.toLowerCase().includes(s));
      return inCat && inQ;
    });
  }, [q, cat]);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero — editorial, one accent */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-10 text-center sm:px-6 sm:pt-24 sm:pb-14">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink/60">The Reelhire journal</div>
          <h1 className="font-display mx-auto mt-5 max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] text-ink sm:text-6xl md:text-7xl">
            Editing <span className="italic font-medium text-primary-brand">Playbooks</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink/70 sm:text-lg">
            Field notes from our editor network — how to brief, hire and scale video for Instagram, YouTube and everywhere else you post.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[65px] z-20 border-y border-ink/10 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6">
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:pb-0">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                    cat === c ? "bg-ink text-cream" : "bg-white text-ink/70 hover:text-ink hover:bg-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative block w-full sm:w-72">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search posts…"
                className="w-full rounded-full border-2 border-ink/10 bg-white py-2.5 pl-9 pr-4 text-sm text-ink outline-none focus:border-primary-brand"
              />
            </label>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
        {filtered.length === 0 ? (
          <div className="rounded-3xl border-2 border-dashed border-ink/15 bg-white p-12 text-center">
            <p className="font-display text-2xl font-extrabold text-ink">No posts match that filter.</p>
            <p className="mt-2 text-sm text-muted-foreground">Try clearing your search or picking a different category.</p>
          </div>
        ) : (
          <>
            {featured && (
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="group grid overflow-hidden rounded-3xl border-2 border-ink/10 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg md:grid-cols-2"
              >
                <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
                  <img
                    src={featured.cover}
                    alt={featured.coverAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-cream">
                    Featured
                  </span>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink/60">
                    {featured.category} · {featured.readTime}
                  </div>
                  <h2 className="font-display mt-3 text-balance text-2xl font-extrabold text-ink sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground sm:text-base">{featured.excerpt}</p>
                  <div className="mt-5 flex items-center gap-3 text-sm">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-blue font-display text-xs font-extrabold text-cream">
                      {featured.author.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <div className="font-semibold text-ink">{featured.author}</div>
                      <div className="text-xs text-muted-foreground">{featured.date}</div>
                    </div>
                    <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-ink">
                      Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex flex-col overflow-hidden rounded-3xl border-2 border-ink/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={p.cover}
                        alt={p.coverAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-ink/60">
                        {p.category} · {p.readTime}
                      </div>
                      <h3 className="font-display mt-2 text-balance text-xl font-extrabold text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                      <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-blue font-display text-[10px] font-extrabold text-cream">
                          {p.author.split(" ").map((n) => n[0]).join("")}
                        </span>
                        <span className="font-semibold text-ink">{p.author}</span>
                        <span>·</span>
                        <span>{p.date}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-14">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3 w-3" /> Ready to ship?
              </span>
              <h2 className="font-display mt-4 text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
                Skip the reading list. Get{" "}
                <span className="text-accent-brand">matched with an editor</span> in 24 hours.
              </h2>
              <p className="mt-3 text-sm text-white/70 sm:text-base">
                Top 1% talent, dedicated to your brand, working in your timezone.
              </p>
            </div>
            <button
              onClick={() => openBookingModal({})}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_6px_0_0_rgba(0,0,0,0.25)] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_0_rgba(0,0,0,0.25)]"
            >
              Hire your editor <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <BlogFooter />
      <BookingModal />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue text-white">
            <Play className="h-4 w-4 fill-white" />
          </span>
          reelhire
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink sm:flex">
          <Link to="/instagram" className="hover:text-brand-blue">Instagram</Link>
          <Link to="/youtube" className="hover:text-brand-blue">YouTube</Link>
          <Link to="/blog" activeProps={{ className: "text-brand-blue" }}>Blog</Link>
        </nav>
        <button
          onClick={() => openBookingModal({})}
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-primary-brand-dark sm:px-5 sm:py-2.5"
        >
          Get started
        </button>
      </div>
    </header>
  );
}

export function BlogFooter() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 font-display text-2xl font-extrabold text-ink">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-blue text-white">
                <Play className="h-4 w-4 fill-white" />
              </span>
              reelhire
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Your personal video editor for Instagram, YouTube and everything in between.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-secondary-brand"><Instagram className="h-4 w-4" /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-primary-brand hover:text-cream"><Youtube className="h-4 w-4" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-primary-brand hover:text-cream"><Linkedin className="h-4 w-4" /></a>
              <a href="mailto:hello@reelhire.co" aria-label="Email" className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-accent-brand"><MessageCircle className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-ink">Platforms</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/instagram" className="hover:text-ink">Instagram editing</Link></li>
              <li><Link to="/youtube" className="hover:text-ink">YouTube editing</Link></li>
              <li><Link to="/" className="hover:text-ink">All platforms</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-ink">Company</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/blog" className="hover:text-ink">Blog</Link></li>
              <li><a href="mailto:hello@reelhire.co" className="hover:text-ink">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-ink">Legal</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-ink">Privacy</a></li>
              <li><a href="#" className="hover:text-ink">Terms</a></li>
              <li><a href="#" className="hover:text-ink">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Reelhire. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
