import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { openBookingModal } from "./BookingModal";
import { instagramPlans } from "../lib/instagram-pricing";

export function InstagramPricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-primary">Instagram packages</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-normal text-foreground sm:text-5xl md:text-6xl">Your content. <br />A whole new gear.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Reels built to hold attention. An editor who knows your brand. A content rhythm you can count on.</p>
        </div>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {instagramPlans.map((plan, index) => {
            const featured = index === 1;
            return (
              <article key={plan.name} aria-label={`${plan.name} package`} className={`relative flex min-w-0 flex-col overflow-hidden rounded-lg border p-7 text-accent-foreground sm:p-8 ${featured ? "border-primary/40 bg-accent" : "border-accent bg-hero-card"}`}>
                <div aria-hidden className={`absolute inset-x-0 top-0 h-1 ${featured ? "bg-primary" : "bg-accent"}`} />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-2xl font-extrabold tracking-normal">{plan.name}</h3>
                  <span className="text-xs font-semibold text-hero-muted">{featured ? "For growing brands" : `0${index + 1}`}</span>
                </div>
                <p className="mt-3 min-h-12 text-sm leading-6 text-hero-muted">{index === 0 ? "A consistent start. Content made to perform." : index === 1 ? "Build momentum. Reach beyond Instagram." : "Your content operation, taken care of."}</p>
                <p className="mt-7 flex flex-wrap items-baseline gap-2">
                  <span className="text-5xl font-extrabold">${plan.price.toLocaleString("en-US")}</span>
                  <span className="text-sm text-hero-muted">/ month</span>
                </p>
                <ul className="mt-7 flex-1 space-y-3 border-t border-foreground/10 pt-6 text-sm leading-6">
                  <li className="flex items-start gap-2.5"><CheckCircle2 aria-hidden className="mt-1 h-4 w-4 shrink-0 text-primary" /><span>{plan.reels} Reels / month <span className="text-hero-muted">· {plan.maxSeconds ? `up to ${plan.maxSeconds}s` : "any length"}</span></span></li>
                  {plan.extras > 0 && <li className="flex items-start gap-2.5"><CheckCircle2 aria-hidden className="mt-1 h-4 w-4 shrink-0 text-primary" /><span>{plan.extras} Stories / carousels per month</span></li>}
                  {plan.coreFeatures.map((feature) => <li key={feature} className="flex items-start gap-2.5"><CheckCircle2 aria-hidden className="mt-1 h-4 w-4 shrink-0 text-primary" /><span>{feature}</span></li>)}
                </ul>
                <p className="mb-5 mt-7 border-t border-foreground/10 pt-4 text-xs leading-5 text-hero-muted">{plan.turnaround}h delivery{index === 2 ? " + 24h rush" : ""} · {plan.revisions === null ? "Unlimited revisions (fair use)" : `${plan.revisions} revision ${plan.revisions === 1 ? "round" : "rounds"}`}</p>
                <Button variant={featured ? "default" : "outline"} onClick={() => openBookingModal({ platform: "Instagram", planName: plan.name, planPrice: `$${plan.price.toLocaleString("en-US")} / month` })} className={`h-12 w-full rounded-md font-bold ${featured ? "" : "border-foreground/25 bg-background/50 text-foreground hover:bg-background"}`}>Choose {plan.name} <ArrowRight /></Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}