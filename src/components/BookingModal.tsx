import { useEffect, useState, type ReactNode, type FormEvent } from "react";
import { X, CheckCircle2, Sparkles, ArrowRight, Calendar } from "lucide-react";

export type BookingDetail = {
  platform?: string;
  formats?: string[];
  goals?: string[];
  planName?: string;
  planPrice?: string;
};

export function openBookingModal(detail: BookingDetail = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("open-booking", { detail }));
}

const PLATFORMS = ["Instagram", "YouTube", "TikTok", "LinkedIn", "Podcast", "Other"];

const ALL_FORMATS = [
  "Reels / Shorts",
  "Long-form videos",
  "Stories",
  "Carousels",
  "UGC",
  "Ads",
  "Thumbnails",
  "Podcast clips",
  "Talking-head",
  "Not sure yet",
];

const GOALS = [
  "Grow followers",
  "Ship consistently",
  "Run paid ads",
  "Launch a new channel",
  "Repurpose long-form",
  "Build personal brand",
];

const VOLUMES = ["4 / mo", "8 / mo", "20 / mo", "40+ / mo"];

const TIMEZONES = [
  "PST (UTC-8)",
  "EST (UTC-5)",
  "GMT / UK",
  "CET / EU",
  "IST (India)",
  "SGT / Asia",
  "AEST / Australia",
];

export function BookingModal({ defaultPlatform }: { defaultPlatform?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "done">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState(defaultPlatform ?? "Instagram");
  const [formats, setFormats] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [tz, setTz] = useState("");
  const [notes, setNotes] = useState("");
  const [planName, setPlanName] = useState<string | undefined>();
  const [planPrice, setPlanPrice] = useState<string | undefined>();
  const [error, setError] = useState("");

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<BookingDetail>).detail ?? {};
      if (detail.platform) setPlatform(detail.platform);
      if (detail.formats?.length) setFormats(detail.formats);
      if (detail.goals?.length) setGoals(detail.goals);
      setPlanName(detail.planName);
      setPlanPrice(detail.planPrice);
      setStep("form");
      setError("");
      setOpen(true);
    };
    window.addEventListener("open-booking", onOpen);
    return () => window.removeEventListener("open-booking", onOpen);
  }, []);

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

  const toggle = (
    value: string,
    list: string[],
    setter: (v: string[]) => void,
  ) => {
    setter(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !email.trim() ||
      !platform ||
      formats.length === 0 ||
      !volume ||
      !tz
    ) {
      setError("Please fill in every required field.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStep("done");
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-4">
      <div
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-xl max-h-[95vh] sm:max-h-[92vh] overflow-y-auto rounded-t-[1.75rem] sm:rounded-[2rem] border border-ink/10 bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex justify-end bg-white/95 px-4 pt-4 backdrop-blur sm:px-6">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {step === "form" ? (
          <form onSubmit={submit} className="px-5 pb-8 -mt-3 sm:px-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pink px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
              <Sparkles className="h-3 w-3" /> Hire your editor
            </span>
            <h2 className="font-display mt-4 text-2xl font-extrabold text-ink sm:text-3xl">
              Let's get you <span className="bg-brand-yellow px-1.5">matched</span>.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              60 seconds. We reply within 24 hours with your editor.
            </p>


            {planName && (
              <div className="mt-5 rounded-2xl border-2 border-ink/10 bg-cream p-4 text-sm">
                <div className="text-[11px] font-bold uppercase tracking-wider text-ink/60">
                  Selected plan
                </div>
                <div className="mt-1 flex items-baseline justify-between gap-2">
                  <span className="font-display text-lg font-extrabold text-ink">{planName}</span>
                  {planPrice && (
                    <span className="font-display text-lg font-extrabold text-ink">{planPrice}</span>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 space-y-5">
              <Field label="Your name *">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  maxLength={80}
                  className="w-full rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                />
              </Field>
              <Field label="Email *">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  maxLength={200}
                  className="w-full rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                />
              </Field>

              <Field label="Primary platform *">
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                        platform === p
                          ? "bg-ink text-white"
                          : "bg-ink/5 text-ink hover:bg-ink/10"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Formats you need * (select all that apply)">
                <div className="flex flex-wrap gap-2">
                  {ALL_FORMATS.map((f) => {
                    const active = formats.includes(f);
                    return (
                      <button
                        type="button"
                        key={f}
                        onClick={() => toggle(f, formats, setFormats)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                          active
                            ? "bg-brand-blue text-white"
                            : "bg-ink/5 text-ink hover:bg-ink/10"
                        }`}
                        aria-pressed={active}
                      >
                        {f}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Your goals (select all that apply)">
                <div className="flex flex-wrap gap-2">
                  {GOALS.map((g) => {
                    const active = goals.includes(g);
                    return (
                      <button
                        type="button"
                        key={g}
                        onClick={() => toggle(g, goals, setGoals)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                          active
                            ? "bg-brand-pink text-ink"
                            : "bg-ink/5 text-ink hover:bg-ink/10"
                        }`}
                        aria-pressed={active}
                      >
                        {g}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Videos per month *">
                <div className="flex flex-wrap gap-2">
                  {VOLUMES.map((v) => (
                    <button
                      type="button"
                      key={v}
                      onClick={() => setVolume(v)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                        volume === v
                          ? "bg-ink text-white"
                          : "bg-ink/5 text-ink hover:bg-ink/10"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Your timezone *">
                <select
                  value={tz}
                  onChange={(e) => setTz(e.target.value)}
                  className="w-full rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                >
                  <option value="">Select timezone…</option>
                  {TIMEZONES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Anything else? (optional)">
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  maxLength={500}
                  placeholder="Links to references, brand notes, deadlines…"
                  className="w-full resize-none rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                />
              </Field>
            </div>

            {error && (
              <p className="mt-4 text-sm font-semibold text-destructive">{error}</p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_0_0_var(--brand-blue-dark)] hover:translate-y-0.5 hover:shadow-[0_3px_0_0_var(--brand-blue-dark)] transition-all"
            >
              Request my editor <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              No credit card · No spam · Reply in 24h
            </p>
          </form>
        ) : (
          <div className="px-5 pb-8 pt-2 text-center sm:p-10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-pink text-ink">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-display mt-6 text-2xl font-extrabold text-ink sm:text-3xl">
              You're on the list{name ? `, ${name.split(" ")[0]}` : ""}.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll reach out at <span className="font-semibold text-ink">{email}</span>{" "}
              within 24 hours with your matched {platform} editor.
            </p>



            <ul className="mt-6 space-y-3 rounded-2xl bg-cream p-5 text-left text-sm">
              <NextStep
                n={1}
                title="Match call"
                body={`A 15-min intro with your dedicated ${platform} editor.`}
              />
              <NextStep
                n={2}
                title="Onboard"
                body="Share brand refs, examples, and drop first footage."
              />
              <NextStep
                n={3}
                title="First cut"
                body={`Delivered in your timezone (${tz.split(" ")[0]}) within 48 hours.`}
              />
            </ul>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
            >
              <Calendar className="h-4 w-4" /> Got it
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-ink/60">
        {label}
      </span>
      {children}
    </label>
  );
}

function NextStep({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white font-display text-xs font-extrabold text-ink">
        {n}
      </span>
      <span>
        <span className="font-semibold text-ink">{title}.</span> {body}
      </span>
    </li>
  );
}
