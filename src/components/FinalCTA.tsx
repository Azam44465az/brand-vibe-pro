import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
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
      <div data-final-cta className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ink text-primary-foreground">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={1920}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover object-[65%_center] lg:object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-ink/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-ink/90 lg:via-ink/60 lg:to-ink/10"
          />
        <div className="relative flex min-h-[560px] max-w-xl flex-col justify-center p-8 sm:p-12">
          <div className="max-w-xl">
            <h2 className="font-display text-balance text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              {headline ?? defaultHeadline}
            </h2>
            <p className="mt-5 max-w-lg text-base text-primary-foreground/85 sm:mt-6 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button
                onClick={onHire}
                className="group h-12 rounded-md px-7 font-bold"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-md border-primary-foreground/40 bg-transparent px-7 font-bold text-primary-foreground hover:bg-primary-foreground hover:text-ink">
              <a
                href="mailto:hello@hirescoobie.com"
              >
                {secondaryLabel}
              </a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/80 sm:mt-10">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-brand" />
              <span>{trustText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
