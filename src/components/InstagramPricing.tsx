import { Check, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { openBookingModal } from "./BookingModal";
import { instagramComparison, instagramPlans, priceLabel } from "../lib/instagram-pricing";

export function InstagramPricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mx-auto max-w-5xl font-display text-5xl font-bold tracking-normal text-foreground sm:text-6xl md:text-7xl">Choose your plan</h2>

        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
          {instagramPlans.map((plan, index) => {
            const featured = index === 1;
            return (
              <article key={plan.name} aria-label={`${plan.name} package`} className={`relative flex min-w-0 flex-col rounded-2xl border p-7 text-accent-foreground sm:p-9 ${featured ? "border-primary/30 bg-accent shadow-[0_24px_60px_-28px_var(--primary)]" : "border-accent bg-hero-card"}`}>
                {featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">Most Popular</span>}
                <div className="text-center">
                  <h3 className="font-display text-3xl font-extrabold tracking-normal sm:text-4xl">{plan.name}</h3>
                  <p className="mt-3 min-h-[3rem] text-base">{plan.tagline}</p>
                  <p className="mt-2 text-xs font-semibold text-hero-muted">{plan.audience}</p>
                  <p className="mt-7 font-display text-6xl font-extrabold tracking-normal">{plan.price === null ? "Custom" : `$${plan.price.toLocaleString("en-US")}`}</p>
                  <p className="mt-2 h-5 text-sm text-hero-muted">{plan.price === null ? "Tailored to your content volume" : "per month"}</p>
                  <Button variant={featured ? "default" : "outline"} onClick={() => openBookingModal({ platform: "Instagram", planName: plan.name, planPrice: priceLabel(plan.price) })} className={`mt-7 h-12 w-full max-w-xs rounded-md font-bold ${featured ? "" : "border-foreground/25 bg-background/60 text-foreground hover:bg-background"}`}>
                    {featured ? "Talk to us" : "Get started"} <ArrowRight />
                  </Button>
                </div>
                <div className="mt-8 border-t border-foreground/10 pt-7">
                  <p className="text-sm font-bold">{plan.intro}</p>
                  <ul className="mt-4 space-y-3 text-sm leading-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3"><Check aria-hidden className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={3} /><span>{f}</span></li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs leading-6 text-muted-foreground sm:text-sm">Both plans start with a quick call · Dedicated editor on every plan · You own your project files</p>

        <details id="instagram-plan-comparison" className="group mx-auto mt-10 max-w-5xl scroll-mt-28 border-y border-border">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-xl font-bold text-foreground [&::-webkit-details-marker]:hidden">Compare every detail <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" /></summary>
          <div className="overflow-x-auto pb-6">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <caption className="sr-only">Instagram package comparison</caption>
              <thead><tr><th scope="col" className="w-[40%] border-b border-border p-4">Feature</th>{instagramPlans.map((plan) => <th scope="col" key={plan.name} className="w-[30%] border-b border-border p-4"><span className="block font-bold">{plan.name}</span><span className="mt-1 block font-normal text-muted-foreground">{priceLabel(plan.price)}</span></th>)}</tr></thead>
              {instagramComparison.map((section) => (
                <tbody key={section.title}>
                  <tr><th colSpan={3} className="bg-muted px-4 py-3 text-xs font-bold text-foreground">{section.title}</th></tr>
                  {section.rows.map(([label, ...values]) => <tr key={label}><th scope="row" className="border-b border-border px-4 py-4 font-medium">{label}</th>{values.map((value, i) => <td key={i} className="border-b border-border px-4 py-4 text-muted-foreground">{value === "Included" ? <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Included</span> : value}</td>)}</tr>)}
                </tbody>
              ))}
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}
