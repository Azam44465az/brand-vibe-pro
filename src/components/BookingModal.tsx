import { useEffect, useState, type ReactNode, type FormEvent } from "react";
import { X, CheckCircle2, Sparkles, ArrowRight, Calendar } from "lucide-react";

export type BookingDetail = { platform?: string; format?: string };

export function openBookingModal(detail: BookingDetail = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("open-booking", { detail }));
}

const PLATFORMS = ["Instagram", "YouTube", "TikTok", "LinkedIn", "Podcast", "Other"];

const FORMATS_BY_PLATFORM: Record<string, string[]> = {
  Instagram: ["Reels", "Stories", "Carousels", "UGC", "Ads"],
  YouTube: ["Long-form", "Shorts", "Thumbnails", "Podcast episodes", "Intros"],
  TikTok: ["Short-form", "UGC", "Ads"],
  LinkedIn: ["Talking-head", "Founder clips"],
  Podcast: ["Full episodes", "Clip Shorts"],
  Other: ["Not sure yet"],
};

const TIMEZONES = ["PST (UTC-8)", "EST (UTC-5)", "GMT / UK", "CET / EU", "IST (India)", "SGT / Asia", "AEST / Australia"];

export function BookingModal({ defaultPlatform }: { defaultPlatform?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "done">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState(defaultPlatform ?? "Instagram");
  const [format, setFormat] = useState("");
  const [tz, setTz] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<BookingDetail>).detail ?? {};
      if (detail.platform) setPlatform(detail.platform);
      if (detail.format) setFormat(detail.format);
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
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const list = FORMATS_BY_PLATFORM[platform] ?? [];
    if (format && !list.includes(format)) setFormat("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform]);

  if (!open) return null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !platform || !format || !tz) {
      setError("Please fill in every field.");
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStep("done");
  };

  const formats = FORMATS_BY_PLATFORM[platform] ?? [];

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-2xl">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10"
        >
          <X className="h-4 w-4" />
        </button>

        {step === "form" ? (
          <form onSubmit={submit} className="p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pink px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
              <Sparkles className="h-3 w-3" /> Hire your editor
            </span>
            <h2 className="font-display mt-4 text-3xl font-extrabold text-ink">
              Let's get you <span className="bg-brand-yellow px-1.5">matched</span>.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">30 seconds. We reply within 24 hours with your editor.</p>

            <div className="mt-6 space-y-5">
              <Field label="Your name">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Doe"
                  maxLength={80}
                  className="w-full rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  maxLength={200}
                  className="w-full rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                />
              </Field>
              <Field label="Platform">
                <div className="flex flex-wrap gap-2">
                  {PLATFORMS.map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setPlatform(p)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                        platform === p ? "bg-ink text-white" : "bg-ink/5 text-ink hover:bg-ink/10"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Goal format">
                <div className="flex flex-wrap gap-2">
                  {formats.map((f) => (
                    <button
                      type="button"
                      key={f}
                      onClick={() => setFormat(f)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                        format === f ? "bg-brand-blue text-white" : "bg-ink/5 text-ink hover:bg-ink/10"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </Field>
              <Field label="Your timezone">
                <select
                  value={tz}
                  onChange={(e) => setTz(e.target.value)}
                  className="w-full rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-ink/40"
                >
                  <option value="">Select timezone…</option>
                  {TIMEZONES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </Field>
            </div>

            {error && <p className="mt-4 text-sm font-semibold text-destructive">{error}</p>}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_0_0_var(--brand-blue-dark)] hover:translate-y-0.5 hover:shadow-[0_3px_0_0_var(--brand-blue-dark)] transition-all"
            >
              Request my editor <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">No credit card · No spam · Reply in 24h</p>
          </form>
        ) : (
          <div className="p-10 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-pink text-ink">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-display mt-6 text-3xl font-extrabold text-ink">
              You're on the list{name ? `, ${name.split(" ")[0]}` : ""}.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll reach out at <span className="font-semibold text-ink">{email}</span> within 24 hours with your matched {platform} editor.
            </p>

            <ul className="mt-6 space-y-3 rounded-2xl bg-cream p-5 text-left text-sm">
              <NextStep n={1} title="Match call" body={`A 15-min intro with your dedicated ${platform} editor.`} />
              <NextStep n={2} title="Onboard" body="Share brand refs, examples, and drop first footage." />
              <NextStep n={3} title="First cut" body={`Delivered in your timezone (${tz.split(" ")[0]}) within 48 hours.`} />
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
      <span className="mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-ink/60">{label}</span>
      {children}
    </label>
  );
}

function NextStep({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white font-display text-xs font-extrabold text-ink">{n}</span>
      <span>
        <span className="font-semibold text-ink">{title}.</span> {body}
      </span>
    </li>
  );
}
