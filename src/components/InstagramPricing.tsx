import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { openBookingModal } from "./BookingModal";
import { instagramComparison, instagramPlans } from "../lib/instagram-pricing";

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
        <p className="mt-6 text-center text-sm font-medium text-foreground">Scale & Scale+ include our repurposing engine — Shorts + TikTok cuts, at no extra cost.</p>
        <p className="mt-2 text-center text-xs leading-6 text-muted-foreground sm:text-sm">Month-to-month · 30 days’ notice · 1-month unused Reel rollover · You own your project files</p>

        <details id="instagram-plan-comparison" className="group mt-10 scroll-mt-28 border-y border-border">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-xl font-bold text-foreground [&::-webkit-details-marker]:hidden">Compare every detail <ChevronDown className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180" /></summary>
          <div className="overflow-x-auto pb-6">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
              <caption className="sr-only">Instagram package features and commercial terms</caption>
              <thead><tr><th scope="col" className="w-[31%] border-b border-border p-4">Feature</th>{instagramPlans.map((plan) => <th scope="col" key={plan.name} className="w-[23%] border-b border-border p-4"><span className="block font-bold">{plan.name}</span><span className="mt-1 block font-normal text-muted-foreground">${plan.price.toLocaleString("en-US")} / month</span></th>)}</tr></thead>
              {instagramComparison.map((section) => (
                <tbody key={section.title}>
                  <tr><th colSpan={4} className="bg-muted px-4 py-3 text-xs font-bold text-foreground">{section.title}</th></tr>
                  {section.rows.map(([label, ...values]) => <tr key={label}><th scope="row" className="border-b border-border px-4 py-4 font-medium">{label}</th>{values.map((value, index) => <td key={index} className="border-b border-border px-4 py-4 text-muted-foreground">{value === "Included" ? <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />Included</span> : value}</td>)}</tr>)}
                </tbody>
              ))}
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}