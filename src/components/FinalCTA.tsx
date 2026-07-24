import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

interface FinalCTAProps {
  onHire: () => void;
  headline?: ReactNode;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  trustText?: string;
}

export function FinalCTA({
  onHire,
  headline,
  description = "Tell us where you post and we'll match you with an editor who's shipped for that exact format.",
  primaryLabel = "Hire an editor",
  secondaryLabel = "Talk to us",
  trustText = "Editors matched in 24 hours · Pause or cancel any time",
}: FinalCTAProps) {
  const defaultHeadline = (
    <>
      Ready to hire your{" "}
      <span className="inline-block rounded-lg bg-accent-brand px-2 py-1 text-ink sm:rounded-xl sm:px-3">
        personal editor?
      </span>
    </>
  );

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink p-8 text-center text-white sm:rounded-[2.5rem] sm:p-12 lg:p-20">
        <div aria-hidden className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-accent-brand opacity-10 blur-3xl sm:-top-20 sm:-left-20 sm:h-72 sm:w-72" />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-60 w-60 rounded-full bg-secondary-brand opacity-10 blur-3xl sm:-bottom-20 sm:-right-20 sm:h-80 sm:w-80" />
        <div className="relative">
          <h2 className="font-display text-balance text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
            {headline ?? defaultHeadline}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:mt-6 sm:text-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <button
              onClick={onHire}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-brand px-6 py-3.5 text-base font-semibold text-ink transition-all hover:bg-white sm:px-8 sm:py-4"
            >
              {primaryLabel}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="mailto:hello@reelhire.co"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:px-8 sm:py-4"
            >
              {secondaryLabel}
            </a>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-white/60 sm:mt-10 sm:flex-row sm:gap-3">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-brand" />
            <span>{trustText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
