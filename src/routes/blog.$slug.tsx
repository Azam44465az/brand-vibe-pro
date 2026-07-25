import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Sparkles, Play, Twitter, Linkedin, Link2 } from "lucide-react";
import { getPost, relatedPosts, POSTS } from "@/lib/blog";
import { BookingModal, openBookingModal } from "@/components/BookingModal";
import { BlogFooter } from "./blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — Reelhire" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Reelhire Blog` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.cover },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: Article,
});

function Article() {
  const { post } = Route.useLoaderData();
  const related = relatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-cream">
      <Nav />

      <article className="mx-auto max-w-3xl px-5 pt-10 sm:px-6 sm:pt-14">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>

        <div className="mt-6 text-[11px] font-bold uppercase tracking-wider text-ink/60">
          {post.category} · {post.readTime}
        </div>
        <h1 className="font-display mt-3 text-balance text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{post.excerpt}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-pink font-display text-xs font-extrabold text-ink">
              {post.author.split(" ").map((n) => n[0]).join("")}
            </span>
            <div className="text-sm">
              <div className="font-semibold text-ink">{post.author}</div>
              <div className="text-xs text-muted-foreground">{post.authorRole} · {post.date}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <ShareBtn icon={<Twitter className="h-4 w-4" />} label="Share on Twitter" />
            <ShareBtn icon={<Linkedin className="h-4 w-4" />} label="Share on LinkedIn" />
            <ShareBtn icon={<Link2 className="h-4 w-4" />} label="Copy link" />
          </div>
        </div>
      </article>

      <div className="mx-auto mt-8 max-w-5xl px-5 sm:px-6">
        <div className="overflow-hidden rounded-3xl border-2 border-ink/10">
          <img src={post.cover} alt={post.coverAlt} className="aspect-[16/9] w-full object-cover" />
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16">
        <div className="space-y-6">
          {post.content.map((block, i) => {
            if (block.type === "h2")
              return (
                <h2 key={i} className="font-display mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
                  {block.text}
                </h2>
              );
            if (block.type === "h3")
              return (
                <h3 key={i} className="font-display mt-2 text-xl font-extrabold text-ink">
                  {block.text}
                </h3>
              );
            if (block.type === "quote")
              return (
                <blockquote
                  key={i}
                  className="my-4 rounded-2xl border-l-4 border-brand-blue bg-white p-5 font-display text-lg font-semibold text-ink sm:p-6 sm:text-xl"
                >
                  “{block.text}”
                </blockquote>
              );
            if (block.type === "list")
              return (
                <ul key={i} className="ml-1 space-y-2.5 text-base text-ink/80">
                  {block.items?.map((it, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className="text-base leading-relaxed text-ink/80 sm:text-lg">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink/70">
              #{t}
            </span>
          ))}
        </div>
      </article>

      {/* Inline CTA */}
      <section className="mx-auto max-w-5xl px-5 pb-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl bg-ink p-8 text-white sm:p-12">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3 w-3" /> Ready to ship?
              </span>
              <h2 className="font-display mt-4 text-balance text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl">
                Hire a <span className="text-accent-brand">personal video editor</span> — matched in 24 hours.
              </h2>
            </div>
            <button
              onClick={() => openBookingModal({})}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_6px_0_0_rgba(0,0,0,0.25)] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_0_rgba(0,0,0,0.25)]"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-6">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-extrabold text-ink sm:text-3xl">Keep reading</h2>
            <Link to="/blog" className="text-sm font-semibold text-ink hover:text-brand-blue">All posts →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-3xl border-2 border-ink/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.coverAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-ink/60">{p.category}</div>
                  <h3 className="font-display mt-2 text-lg font-extrabold text-ink">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <BlogFooter />
      <BookingModal />
    </div>
  );
}

function ShareBtn({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink/70 transition-colors hover:bg-ink hover:text-white"
    >
      {icon}
    </button>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-cream/90 backdrop-blur">
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
          <Link to="/blog" className="text-brand-blue">Blog</Link>
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

function NotFound() {
  return (
    <div className="min-h-screen bg-cream">
      <Nav />
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-extrabold text-ink sm:text-5xl">Article not found</h1>
        <p className="mt-4 text-muted-foreground">
          The post you're looking for might have moved. Here are all our latest reads.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-primary-brand-dark"
        >
          <ArrowLeft className="h-4 w-4" /> Back to the blog
        </Link>
        <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
          {POSTS.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="rounded-2xl border-2 border-ink/10 bg-white p-4 hover:border-ink/25"
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-ink/60">{p.category}</div>
              <div className="font-display mt-1 font-extrabold text-ink">{p.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
