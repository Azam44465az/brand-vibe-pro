import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import ctaCreators from "../assets/cta-creators-couch.jpg";

interface FinalCTAProps {
  onHire: () => void;
  headline?: ReactNode;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  trustText?: string;
  image?: string;
  imageAlt?: string;
}

export function FinalCTA({
  onHire,
  headline,
  description = "Tell us where you post and we'll match you with an editor who's shipped for that exact format.",
  primaryLabel = "Hire an editor",
  secondaryLabel = "Talk to us",
  trustText = "Editors matched in 24 hours · Pause or cancel any time",
  image = ctaCreators,
  imageAlt = "Three creators sitting together on an orange couch, reviewing video edits on their laptops in a sunlit studio",
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
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink text-white sm:rounded-[2.5rem] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative h-52 sm:h-64 lg:order-2 lg:h-auto lg:min-h-[440px]">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={1920}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover object-[72%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-0 lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-ink/60"
          />
        </div>

        <div className="relative flex flex-col justify-center px-6 py-10 sm:px-12 sm:py-14 lg:order-1 lg:px-14 lg:py-16">
          <div className="max-w-xl">
            <h2 className="font-display text-balance text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              {headline ?? defaultHeadline}
            </h2>
            <p className="mt-5 max-w-lg text-base text-white/75 sm:mt-6 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                onClick={onHire}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent-brand px-6 py-3.5 text-base font-semibold text-ink transition-all hover:bg-white sm:px-8 sm:py-4"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:hello@hirescoobie.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white hover:text-ink sm:px-8 sm:py-4"
              >
                {secondaryLabel}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/65 sm:mt-10">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-brand" />
              <span>{trustText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
