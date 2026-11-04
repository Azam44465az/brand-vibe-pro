import { useEffect, useRef, useState, type ReactNode, type FormEvent } from "react";
import { X, CheckCircle2, Sparkles, ArrowRight, ArrowLeft, Calendar, Loader2 } from "lucide-react";
 
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
 
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const TOTAL_STEPS = 3;
 
type Step = 1 | 2 | 3 | "done";
 
export type LeadPayload = {
  name: string;
  email: string;
  platforms: string[];
  formats: string[];
  goals: string[];
  volume: string;
  timezone: string;
  notes: string;
  planName?: string;
  planPrice?: string;
  page: string;
};
 
/**
 * Single hand-off point for submissions.
 * "contact" fires when step 1 is completed (so a lead is kept even if they
 * leave later); "complete" fires when the last step is submitted.
 * Nothing is sent anywhere yet — the email delivery is wired in here next.
 */
async function sendLead(_stage: "contact" | "complete", _payload: LeadPayload): Promise<void> {
  return;
}
 
/** Browser timezone as a readable label, e.g. "Asia/Karachi (UTC+5)". */
function detectTimezone(): string {
  try {
    const iana = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!iana) return "";
    const readable = iana.replace(/_/g, " ");
    const offset = new Intl.DateTimeFormat("en-US", {
      timeZone: iana,
      timeZoneName: "shortOffset",
    })
      .formatToParts(new Date())
      .find((p) => p.type === "timeZoneName")?.value;
    return offset ? `${readable} (${offset.replace("GMT", "UTC")})` : readable;
  } catch {
    return "";
  }
}
 
/** "Asia/Karachi (UTC+5)" -> "Karachi", "PST (UTC-8)" -> "PST" */
function shortTimezone(tz: string): string {
  return tz.split(" (")[0].split("/").pop() ?? tz;
}
 
export function BookingModal({ defaultPlatform }: { defaultPlatform?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [platforms, setPlatforms] = useState<string[]>(
    defaultPlatform ? [defaultPlatform] : ["Instagram"],
  );
  const [platformKnown, setPlatformKnown] = useState(!!defaultPlatform);
  const [formats, setFormats] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [volume, setVolume] = useState("");
  const [tz, setTz] = useState("");
  const [detectedTz, setDetectedTz] = useState("");
  const [notes, setNotes] = useState("");
  const [planName, setPlanName] = useState<string | undefined>();
  const [planPrice, setPlanPrice] = useState<string | undefined>();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const contactSent = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<BookingDetail>).detail ?? {};
      if (detail.platform) setPlatforms([detail.platform]);
      setPlatformKnown(!!(detail.platform || defaultPlatform));
      if (detail.formats?.length) setFormats(detail.formats);
      if (detail.goals?.length) setGoals(detail.goals);
      setPlanName(detail.planName);
      setPlanPrice(detail.planPrice);
      const detected = detectTimezone();
      setDetectedTz(detected);
      setTz((prev) => prev || detected);
      contactSent.current = false;
      setStep(1);
      setError("");
      setOpen(true);
    };
    window.addEventListener("open-booking", onOpen);
    return () => window.removeEventListener("open-booking", onOpen);
  }, [defaultPlatform]);
 
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
 
  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0 });
  }, [step]);
 
  if (!open) return null;
 
  const toggle = (value: string, list: string[], setter: (v: string[]) => void) => {
    setter(list.includes(value) ? list.filter((x) => x !== value) : [...list, value]);
  };
 
  const buildPayload = (): LeadPayload => ({
    name: name.trim(),
    email: email.trim(),
    platforms,
    formats,
    goals,
    volume,
    timezone: tz,
    notes: notes.trim(),
    planName,
    planPrice,
    page: typeof window === "undefined" ? "" : window.location.pathname,
  });
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (submitting || step === "done") return;
 
    if (step === 1) {
      if (!name.trim() || !email.trim() || platforms.length === 0) {
        setError("Please fill in every required field.");
        return;
      }
      if (!EMAIL_RE.test(email.trim())) {
        setError("Please enter a valid email address.");
        return;
      }
      setError("");
      if (!contactSent.current) {
        contactSent.current = true;
        sendLead("contact", buildPayload()).catch(() => {});
      }
      setStep(2);
      return;
    }
 
    if (step === 2) {
      if (formats.length === 0) {
        setError("Pick at least one format.");
        return;
      }
      setError("");
      setStep(3);
      return;
    }
 
    if (!volume || !tz) {
      setError("Please choose your volume and timezone.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      await sendLead("complete", buildPayload());
      setStep("done");
    } catch {
      setError("Something went wrong sending your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
 
  const tzOptions =
    detectedTz && !TIMEZONES.includes(detectedTz) ? [detectedTz, ...TIMEZONES] : TIMEZONES;
  const tzOptionsWithCurrent = tz && !tzOptions.includes(tz) ? [tz, ...tzOptions] : tzOptions;
 
  const inputClass =
    "w-full rounded-xl border-2 border-ink/10 bg-white px-4 py-3 text-base text-ink outline-none focus:border-ink/40 sm:text-sm";
 
  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-4">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div
        ref={panelRef}
        className="relative w-full max-w-xl max-h-[95vh] sm:max-h-[92vh] overflow-y-auto rounded-t-[1.75rem] sm:rounded-[2rem] border border-ink/10 bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between bg-white/95 px-4 pt-4 backdrop-blur sm:px-6">
          {typeof step === "number" && step > 1 ? (
            <button
              type="button"
              onClick={() => {
                setError("");
                setStep((step - 1) as Step);
              }}
              aria-label="Back"
              className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          ) : (
            <span aria-hidden className="h-9 w-9" />
          )}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink hover:bg-ink/10"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
 
        {step !== "done" ? (
          <form onSubmit={handleSubmit} className="px-5 pb-8 pt-2 sm:px-8" noValidate>
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-pink px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                <Sparkles className="h-3 w-3" /> Hire your editor
              </span>
              <span className="text-xs font-semibold text-ink/60">
                Step {step} of {TOTAL_STEPS}
              </span>
            </div>
            <div
              className="mt-3 flex gap-1.5"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={TOTAL_STEPS}
              aria-valuenow={step}
            >
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    n <= step ? "bg-ink" : "bg-ink/10"
                  }`}
                />
              ))}
            </div>
 
            {step === 1 && (
              <>
                <h2 className="font-display mt-5 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                  Let's get you <Highlight>matched</Highlight>.
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
                      <span className="font-display text-lg font-extrabold text-ink">
                        {planName}
                      </span>
                      {planPrice && (
                        <span className="font-display text-lg font-extrabold text-ink">
                          {planPrice}
                        </span>
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
                      autoComplete="name"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      autoCapitalize="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@brand.com"
                      maxLength={200}
                      className={inputClass}
                    />
                  </Field>
 
                  {!platformKnown && (
                    <Field label="Primary platform * (select all that apply)">
                      <ChipRow
                        options={PLATFORMS}
                        selected={platforms}
                        onToggle={(p) => toggle(p, platforms, setPlatforms)}
                        activeClass="bg-ink text-white"
                      />
                    </Field>
                  )}
                </div>
              </>
            )}
 
            {step === 2 && (
              <>
                <h2 className="font-display mt-5 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                  What do you <Highlight>make</Highlight>?
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tap everything that fits. This is how we pick your editor.
                </p>
 
                <div className="mt-6 space-y-5">
                  <Field label="Formats you need * (select all that apply)">
                    <ChipRow
                      options={ALL_FORMATS}
                      selected={formats}
                      onToggle={(f) => toggle(f, formats, setFormats)}
                      activeClass="bg-brand-blue text-white"
                    />
                  </Field>
                  <Field label="Your goals (select all that apply)">
                    <ChipRow
                      options={GOALS}
                      selected={goals}
                      onToggle={(g) => toggle(g, goals, setGoals)}
                      activeClass="bg-brand-pink text-ink"
                    />
                  </Field>
                </div>
              </>
            )}
 
            {step === 3 && (
              <>
                <h2 className="font-display mt-5 text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                  Last <Highlight>details</Highlight>.
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  So your editor starts with the right volume, in your timezone.
                </p>
 
                <div className="mt-6 space-y-5">
                  <Field label="Videos per month *">
                    <ChipRow
                      options={VOLUMES}
                      selected={volume ? [volume] : []}
                      onToggle={(v) => setVolume(v)}
                      activeClass="bg-ink text-white"
                    />
                  </Field>
 
                  <Field label="Your timezone *">
                    <select
                      value={tz}
                      onChange={(e) => setTz(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select timezone…</option>
                      {tzOptionsWithCurrent.map((t) => (
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
                      className={`${inputClass} resize-none`}
                    />
                  </Field>
                </div>
              </>
            )}
 
            {error && (
              <p role="alert" className="mt-4 text-sm font-semibold text-destructive">
                {error}
              </p>
            )}
 
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white shadow-[0_6px_0_0_var(--brand-blue-dark)] transition-all hover:translate-y-0.5 hover:shadow-[0_3px_0_0_var(--brand-blue-dark)] disabled:cursor-not-allowed disabled:opacity-80"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : step === TOTAL_STEPS ? (
                <>
                  Request my editor <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                <>
                  Continue <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
            {step === 1 && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                No credit card · No spam · Reply in 24h
              </p>
            )}
          </form>
        ) : (
          <div className="px-5 pb-8 pt-2 text-center sm:p-10">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-pink text-ink">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h2 className="font-display mt-6 text-2xl font-extrabold text-ink sm:text-3xl">
              You're on the list{name ? `, ${name.trim().split(" ")[0]}` : ""}.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We'll reach out at <span className="font-semibold text-ink">{email}</span> within 24
              hours with your matched {platforms.join(" + ")} editor.
            </p>
 
            <ul className="mt-6 space-y-3 rounded-2xl bg-cream p-5 text-left text-sm">
              <NextStep
                n={1}
                title="Match call"
                body={`A 15-min intro with your dedicated ${platforms.join(" + ")} editor.`}
              />
              <NextStep
                n={2}
                title="Onboard"
                body="Share brand refs, examples, and drop first footage."
              />
              <NextStep
                n={3}
                title="First cut"
                body={`Delivered in your timezone (${shortTimezone(tz)}) within 48 hours.`}
              />
            </ul>
 
            <button
              type="button"
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
 
function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block px-1.5">
      <span
        aria-hidden
        className="absolute inset-x-0 top-[12%] bottom-[18%] -z-0 bg-brand-yellow"
      />
      <span className="relative">{children}</span>
    </span>
  );
}
 
function ChipRow({
  options,
  selected,
  onToggle,
  activeClass,
}: {
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  activeClass: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = selected.includes(o);
        return (
          <button
            type="button"
            key={o}
            onClick={() => onToggle(o)}
            aria-pressed={active}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              active ? activeClass : "bg-ink/5 text-ink hover:bg-ink/10"
            }`}
          >
            {o}
          </button>
        );
      })}
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
