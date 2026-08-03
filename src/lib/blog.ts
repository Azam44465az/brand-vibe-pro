export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  cover: string;
  coverAlt: string;
  tags: string[];
  content: { type: "p" | "h2" | "h3" | "quote" | "list"; text?: string; items?: string[] }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: "hire-video-editor-instagram-reels",
    title: "How to hire a video editor for Instagram Reels (without wasting 6 weeks)",
    excerpt:
      "A founder-tested playbook for finding, testing and onboarding a personal Reels editor in 7 days — hooks, retention edits, brand fit and pricing benchmarks.",
    category: "Hiring",
    author: "Sana Malik",
    authorRole: "Head of Talent, Scoobie",
    date: "Jul 22, 2026",
    readTime: "8 min read",
    cover:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Editor working on a short-form vertical video in a dark studio",
    tags: ["Instagram", "Hiring", "Reels"],
    content: [
      { type: "p", text: "Hiring a great Instagram Reels editor is 80% clarity and 20% craft. Before you ever open a portfolio, write down three things: the exact formats you post, the tone your audience already responds to, and the number of videos you actually need per week. Skip this and you'll spend the next month rejecting editors who technically did the job." },
      { type: "h2", text: "Start with a specific brief, not a vague vision" },
      { type: "p", text: "The best editors don't want to guess. Send a Loom walking through 3 reference reels you love, 3 of your own posts, and the one KPI you want to move — usually watch time or saves. Every good editor we've matched has said the same thing: a clear brief is the single biggest predictor of a fast, high-quality first cut." },
      { type: "h2", text: "Run a paid test — always" },
      { type: "p", text: "Free tests attract the wrong pool. A small paid test (one 30-second reel, one story sequence, one thumbnail) filters for editors who take the work seriously and gives you real signal on speed, communication and iteration." },
      { type: "quote", text: "The editor you hire full-time should be the one who asked the sharpest questions during the test — not the one with the flashiest reel." },
      { type: "h2", text: "What to look for in the test cut" },
      { type: "list", items: [
        "Hook lands in under 1.5 seconds — no logo, no slow zoom",
        "Cuts are motivated by the audio, not decorative",
        "Captions are on-brand, kerned, and readable at 60% brightness",
        "Retention edits: pattern interrupts every 3–5 seconds",
        "Loop or CTA in the last 2 seconds",
      ]},
      { type: "h2", text: "Onboarding in 48 hours" },
      { type: "p", text: "Once you've picked an editor, set up a shared Frame.io or Scoobie workspace, a single Notion doc with brand rules, and a recurring 15-minute Monday sync. That's it. Over-structured onboarding is where most creator-editor relationships die in the first month." },
      { type: "h3", text: "Pricing benchmarks (2026)" },
      { type: "p", text: "For a dedicated Instagram editor shipping 12–16 reels/month with stories and carousels, expect $1,800–$3,200/month depending on turnaround. Anything below $1,200 is either a template shop or an editor who will churn in 60 days." },
      { type: "p", text: "The right editor doesn't just save you time — they compound your brand. Every reel gets a little sharper, every hook a little tighter, and six months in you'll wonder how you ever posted without them." },
    ],
  },
  {
    slug: "youtube-retention-editing-2026",
    title: "The retention-first YouTube edit: a 2026 field guide",
    excerpt:
      "What actually moves YouTube AVD in 2026 — B-roll density, pattern interrupts, chapter pacing and the pre-title 8 seconds that decide everything.",
    category: "YouTube",
    author: "Marcus Chen",
    authorRole: "Lead YouTube Editor",
    date: "Jul 15, 2026",
    readTime: "11 min read",
    cover:
      "https://images.unsplash.com/photo-1601513237763-10aaaa60fbcf?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Cinematic YouTube editing timeline on a large monitor",
    tags: ["YouTube", "Retention", "Long-form"],
    content: [
      { type: "p", text: "Retention is no longer a bonus metric — it's the entire game. In 2026, YouTube's system rewards videos that hold viewers past the 60-second mark and punishes anything with a flat AVD curve, no matter how big your channel is." },
      { type: "h2", text: "The pre-title 8 seconds" },
      { type: "p", text: "The first 8 seconds decide whether the algorithm gives your video a second chance. Open cold — no logo, no intro music, no 'hey guys'. Show the payoff, tease the conflict, and cut to a title card only after the viewer is emotionally hooked." },
      { type: "h2", text: "B-roll density and pattern interrupts" },
      { type: "p", text: "The retention-first edit averages a cut every 2.4 seconds during talking-head sections and layers B-roll on 70%+ of the runtime. This isn't decoration — it's how you keep the visual cortex engaged while the viewer processes the audio." },
      { type: "list", items: [
        "Cut on emphasis words, not on breaths",
        "Use zoom-punches (5–8%) sparingly — max 3 per minute",
        "Add sound design under every B-roll clip",
        "Kill every 'um', 'so', and dead air over 200ms",
        "Chapter every 60–90 seconds with a visual reset",
      ]},
      { type: "h2", text: "Chapters as retention scaffolding" },
      { type: "p", text: "Great chapters aren't a table of contents — they're mini-hooks. Each chapter title should promise a new payoff, and each transition should reset the viewer's attention with a visual, audio and pacing change." },
      { type: "quote", text: "If your retention graph is a straight line, you don't have an edit problem — you have a story problem." },
      { type: "h2", text: "The final 20 seconds" },
      { type: "p", text: "Session watch time is what actually pushes videos into browse. End with a visual bridge to your next video, not a subscribe animation. The retention-first outro is a 6-second cliffhanger and a hard cut to the recommended clip." },
    ],
  },
  {
    slug: "editor-brief-template",
    title: "The 1-page editor brief that saves 4 hours per video",
    excerpt:
      "A copy-paste creative brief template that gives your editor everything they need — footage links, references, hooks, and non-negotiables — in one scroll.",
    category: "Workflow",
    author: "Priya Rao",
    authorRole: "Ops Lead, Scoobie",
    date: "Jul 08, 2026",
    readTime: "6 min read",
    cover:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Notion workspace on a laptop showing a creative brief",
    tags: ["Workflow", "Templates"],
    content: [
      { type: "p", text: "The single biggest reason first cuts miss is that the editor is guessing. A one-page brief — filled out in under 5 minutes — kills 90% of revision cycles." },
      { type: "h2", text: "The 6 sections that matter" },
      { type: "list", items: [
        "Goal: the one KPI this video should move",
        "Hook: the exact first line or visual",
        "Footage: linked folder + shot list with timestamps",
        "References: 2 reels you love, 1 you hate, with reasons",
        "Non-negotiables: brand colors, fonts, banned words",
        "Deadline: delivery date + who's approving",
      ]},
      { type: "h2", text: "Why references beat descriptions" },
      { type: "p", text: "Telling an editor 'make it punchy' means nothing. Linking two reels and saying 'this energy, this pacing, but with our brand tone' means everything. Every Scoobie brief has a 'reference wall' section — it's the fastest shortcut to a first cut that lands." },
      { type: "quote", text: "A brief isn't paperwork. It's the difference between one revision and five." },
      { type: "h2", text: "Version control from day one" },
      { type: "p", text: "Name every export with a version number and a date: brand_reel_v3_2026-07-08. Sounds obvious. Almost no one does it. The teams that do ship 2x faster because feedback attaches to a specific cut, not 'the one you sent Tuesday'." },
    ],
  },
  {
    slug: "in-house-vs-freelance-vs-service",
    title: "In-house editor vs freelancer vs editing-as-a-service: an honest comparison",
    excerpt:
      "Real numbers on cost, quality, ramp-up time and risk across the three most common ways brands staff video editing in 2026.",
    category: "Strategy",
    author: "Daniel Osei",
    authorRole: "Co-founder, Scoobie",
    date: "Jun 30, 2026",
    readTime: "9 min read",
    cover:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Team collaborating around a laptop in a bright office",
    tags: ["Strategy", "Hiring", "Pricing"],
    content: [
      { type: "p", text: "Every brand asks the same question at some point: do we hire an editor in-house, keep juggling freelancers, or move to a service like Scoobie? There's no universal right answer — but there are honest tradeoffs." },
      { type: "h2", text: "In-house: highest ceiling, highest risk" },
      { type: "p", text: "A full-time editor in a Tier-1 city runs $75–110k all-in. You get deep brand knowledge and same-day turnaround, but you also carry the hiring cycle, the ramp-up (3–4 months to full speed), and the churn risk. Great for brands shipping 40+ videos/month." },
      { type: "h2", text: "Freelancers: cheapest, most operational drag" },
      { type: "p", text: "Marketplaces make it easy to start and painful to sustain. You'll cycle through 3–5 editors in the first year, re-brief every one, and lose weekends chasing revisions. The math looks good until you count your own hours." },
      { type: "h2", text: "Editing-as-a-service: the middle path" },
      { type: "p", text: "A dedicated editor plus a managed workflow (like Scoobie) sits between the two. You pay a flat monthly fee, keep the same editor month over month, and get built-in coverage when they're out. Ceiling is lower than a great in-house hire, but the floor is much higher than freelancing." },
      { type: "quote", text: "Most brands don't need the best editor in the world. They need a consistent editor who ships on Tuesday, every Tuesday." },
      { type: "h2", text: "How to decide" },
      { type: "list", items: [
        "Under 15 videos/month → editing-as-a-service",
        "15–35 videos/month, multi-format → editing-as-a-service or senior freelancer",
        "35+ videos/month with a strong ops lead → in-house",
        "Testing a new channel or format → always start with a service, then decide",
      ]},
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function relatedPosts(slug: string, limit = 3) {
  return POSTS.filter((p) => p.slug !== slug).slice(0, limit);
}
