import { useEffect, useState } from "react";
import {
  X,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Rocket,
  Building2,
  Home as HomeIcon,
  GraduationCap,
  ShoppingBag,
  Building as AgencyIcon,
  Zap,
} from "lucide-react";
import { openBookingModal } from "./BookingModal";

type Role = "Creator" | "Founder" | "Brand" | "Agency" | "Coach" | "Realtor";
type Turnaround = "24h" | "48h" | "Flexible";
type BudgetTier = "<$1k" | "$1-2k" | "$2-4k" | "$4k+";

const ROLES: { id: Role; icon: React.ReactNode; desc: string }[] = [
  { id: "Creator", icon: <Sparkles className="h-5 w-5" />, desc: "Personal channel or audience" },
  { id: "Founder", icon: <Rocket className="h-5 w-5" />, desc: "Building a personal brand" },
  { id: "Brand", icon: <ShoppingBag className="h-5 w-5" />, desc: "DTC or product brand" },
  { id: "Agency", icon: <AgencyIcon className="h-5 w-5" />, desc: "Serving clients" },
  { id: "Coach", icon: <GraduationCap className="h-5 w-5" />, desc: "Course, mentor, or creator" },
  { id: "Realtor", icon: <HomeIcon className="h-5 w-5" />, desc: "Real estate content" },
];

const VOLUMES = ["4 / mo", "8 / mo", "20 / mo", "40+ / mo"];
const TURNAROUNDS: Turnaround[] = ["24h", "48h", "Flexible"];
const BUDGETS: BudgetTier[] = ["<$1k", "$1-2k", "$2-4k", "$4k+"];

const TOTAL_STEPS = 5;

export interface PlatformQuizConfig {
  /** Human-readable platform name, e.g. "Instagram" or "YouTube" */
  platform: string;
  /** window CustomEvent name used to open this quiz instance */
  eventName: string;
  /** Content formats offered for this platform, matching the page's own Formats section */
  formats: string[];
  /** Per-piece monthly price per format, aligned with this page's published pricing table */
  perPiece: Record<string, number>;
}

export function openPlatformQuiz(eventName: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(eventName));
}

export function PlatformQuizModal({ config }: { config: PlatformQuizConfig }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [role, setRole] = useState<Role | "">("");
  const [formats, setFormats] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [turnaround, setTurnaround] = useState<Turnaround | "">("");
  const [budget, setBudget] = useState<BudgetTier | "">("");

  useEffect(() => {
    const onOpen = () => {
      setStep(0);
      setRole("");
      setFormats([]);
      setVolume("");
      setTurnaround("");
      setBudget("");
      setOpen(true);
    };
    window.addEventListener(config.eventName, onOpen);
    return () => window.removeEventListener(config.eventName, onOpen);
  }, [config.eventName]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  const toggle = (v: string, list: string[], setter: (s: string[]) => void) =>
    setter(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const canAdvance = () => {
    if (step === 0) return !!role;
    if (step === 1) return formats.length > 0;
    if (step === 2) return !!volume;
    if (step === 3) return !!turnaround;
    if (step === 4) return !!budget;
    return true;
  };

  const isResult = step === TOTAL_STEPS;

  const recommendation = computeRecommendation({
    role: role as Role,
    platform: config.platform,
    formats,
    volume,
    turnaround: turnaround as Turnaround,
    budget: budget as BudgetTier,
    perPiece: config.perPiece,
  });

  const bookThis = () => {
    setOpen(false);
    openBookingModal({
      platform: config.platform,
      formats,
      planName: recommendation.name,
      planPrice: recommendation.priceLabel,
    });
  };

  const progress = ((isResult ? TOTAL_STEPS : step) / TOTAL_STEPS) * 100;

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center p-0 sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-2xl max-h-[95vh] sm:max-h-[92vh] overflow-y-auto rounded-t-[1.75rem] sm:rounded-[2rem] border border-ink/10 bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-ink/5 bg-white/95 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-ink/60 sm:text-[11px]">
              <Sparkles className="h-3 w-3 shrink-0 text-brand-blue" />
              <span className="truncate">
                {isResult ? "Your custom plan" : `Step ${step + 1} of ${TOTAL_STEPS}`}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
              <div
                className="h-full rounded-full bg-brand-blue transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-4 py-6 sm:px-8 sm:py-8">
          {!isResult && (
            <>
              {step === 0 && (
                <Step
                  title="Who are you creating for?"
                  sub="Pick the closest fit. It helps us match the right editor."
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    {ROLES.map((r) => {
                      const active = role === r.id;
                      return (
                        <button
                          key={r.id}
                          onClick={() => setRole(r.id)}
                          className={`flex items-start gap-3 rounded-2xl border-2 p-4 text-left transition-all ${
                            active
                              ? "border-ink bg-cream"
                              : "border-ink/10 bg-white hover:border-ink/25"
                          }`}
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-yellow text-ink">
                            {r.icon}
                          </span>
                          <span>
                            <span className="font-display block text-lg font-extrabold text-ink">
                              {r.id}
                            </span>
                            <span className="text-sm text-ink/60">{r.desc}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {step === 1 && (
                <Step
                  title={`What kind of ${config.platform} content do you need?`}
                  sub="Select every format your editor should ship. Multi-select."
                >
                  <div className="flex flex-wrap gap-2">
                    {config.formats.map((f) => {
                      const active = formats.includes(f);
                      return (
                        <button
                          key={f}
                          onClick={() => toggle(f, formats, setFormats)}
                          className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                            active
                              ? "bg-brand-pink text-ink"
                              : "bg-ink/5 text-ink hover:bg-ink/10"
                          }`}
                          aria-pressed={active}
                        >
                          {f}
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {step === 2 && (
                <Step title="How many videos per month?" sub="A rough number is fine — we'll fine-tune together.">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {VOLUMES.map((v) => {
                      const active = volume === v;
                      return (
                        <button
                          key={v}
                          onClick={() => setVolume(v)}
                          className={`rounded-2xl border-2 px-4 py-5 text-center font-display text-xl font-extrabold transition-all ${
                            active
                              ? "border-ink bg-brand-yellow text-ink"
                              : "border-ink/10 bg-white text-ink hover:border-ink/25"
                          }`}
                        >
                          {v}
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {step === 3 && (
                <Step title="How fast do you need edits back?">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {TURNAROUNDS.map((t) => {
                      const active = turnaround === t;
                      return (
                        <button
                          key={t}
                          onClick={() => setTurnaround(t)}
                          className={`rounded-2xl border-2 px-4 py-5 text-center font-display text-xl font-extrabold transition-all ${
                            active
                              ? "border-ink bg-brand-pink text-ink"
                              : "border-ink/10 bg-white text-ink hover:border-ink/25"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              {step === 4 && (
                <Step title="Ballpark monthly budget?" sub="Helps us shape a plan that fits.">
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {BUDGETS.map((b) => {
                      const active = budget === b;
                      return (
                        <button
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`rounded-2xl border-2 px-4 py-5 text-center font-display text-xl font-extrabold transition-all ${
                            active
                              ? "border-ink bg-brand-blue text-white"
                              : "border-ink/10 bg-white text-ink hover:border-ink/25"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </Step>
              )}

              <div className="mt-8 flex items-center justify-between gap-2">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/10 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/25 disabled:opacity-40 sm:px-5"
                >
                  <ArrowLeft className="h-4 w-4" /> Back
                </button>
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canAdvance()}
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_0_0_var(--brand-blue-dark)] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_0_var(--brand-blue-dark)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none sm:px-6"
                >
                  {step === TOTAL_STEPS - 1 ? "See my plan" : "Continue"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          )}

          {isResult && (
            <div>
              <div className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-yellow">
                  <Zap className="h-7 w-7 text-ink" />
                </div>
                <h2 className="font-display mt-5 text-balance text-3xl font-extrabold text-ink md:text-4xl">
                  Your recommended plan
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Based on your answers — you can still customize anything after booking.
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border-2 border-ink/10 bg-cream">
                <div className="bg-ink px-5 py-5 text-white sm:px-6">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                    {recommendation.tier}
                  </div>
                  <div className="font-display mt-1 text-xl font-extrabold sm:text-2xl">
                    {recommendation.name}
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-extrabold text-brand-yellow sm:text-4xl">
                      {recommendation.priceLabel}
                    </span>
                    <span className="text-sm font-semibold text-white/70">/month</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ink/70">{recommendation.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {recommendation.included.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={bookThis}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_0_0_var(--brand-blue-dark)] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_0_var(--brand-blue-dark)]"
                >
                  Book this plan <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setStep(0)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/10 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/25"
                >
                  <ArrowLeft className="h-4 w-4" /> Retake quiz
                </button>
              </div>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No credit card · Pause or cancel anytime · Checkout coming soon
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Step({
  title,
  sub,
  children,
}: {
  title: string;
  sub?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-display text-balance text-2xl font-extrabold text-ink md:text-3xl">
        {title}
      </h2>
      {sub && <p className="mt-2 text-sm text-muted-foreground">{sub}</p>}
      <div className="mt-6">{children}</div>
    </div>
  );
}

// ---- pricing logic -------------------------------------------------------
// Same formula as the homepage quiz (src/components/QuizModal.tsx): average
// per-piece price × monthly volume, adjusted for turnaround, then bucketed
// into Starter/Growth/Scale. The multi-platform bump is dropped here since
// these quizzes are locked to a single platform.

function computeRecommendation({
  role,
  platform,
  formats,
  volume,
  turnaround,
  budget,
  perPiece,
}: {
  role: Role;
  platform: string;
  formats: string[];
  volume: string;
  turnaround: Turnaround;
  budget: BudgetTier;
  perPiece: Record<string, number>;
}) {
  const volumeCount: Record<string, number> = {
    "4 / mo": 4,
    "8 / mo": 8,
    "20 / mo": 20,
    "40+ / mo": 40,
  };

  const selectedPrices = formats.map((f) => perPiece[f] ?? 120);
  const avgPerPiece = selectedPrices.length
    ? selectedPrices.reduce((a, b) => a + b, 0) / selectedPrices.length
    : 110;
  const count = volumeCount[volume] ?? 8;

  let subtotal = avgPerPiece * count;

  const tMult: Record<Turnaround, number> = { "24h": 1.15, "48h": 1, Flexible: 0.9 };
  subtotal *= tMult[turnaround] ?? 1;

  const price = Math.max(490, Math.round(subtotal / 10) * 10);

  let tier: "Starter" | "Growth" | "Scale" = "Starter";
  if (price >= 1500 || volume === "20 / mo") tier = "Growth";
  if (price >= 3500 || budget === "$4k+" || volume === "40+ / mo") tier = "Scale";

  const name = `${role || "Custom"} · ${tier}`;

  const priceLabel = tier === "Scale"
    ? `From $${price.toLocaleString()}`
    : `$${price.toLocaleString()}`;

  const summary =
    tier === "Scale"
      ? `A dedicated editor team for ${platform}, tuned for high output and ${turnaround.toLowerCase()} turnaround.`
      : `A dedicated editor for ${platform}, shipping ${volume.toLowerCase()} with ${turnaround.toLowerCase()} turnaround.`;

  const included = [
    tier === "Scale" ? "Dedicated editor team + PM" : "1 dedicated editor",
    `${volume} across selected formats`,
    ...formats.slice(0, 6),
    `${turnaround} turnaround`,
    tier === "Starter" ? "Unlimited revisions" : "Strategy calls & hook reviews",
    tier === "Scale" ? "Custom SLAs & priority queue" : "One workspace for briefs & approvals",
  ];

  return { tier, name, priceLabel, summary, included };
}
