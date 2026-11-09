import { CheckCircle2, ArrowRight, ChevronDown, Repeat2 } from "lucide-react";
import { Button } from "./ui/button";
import { openBookingModal } from "./BookingModal";
import { instagramComparison, instagramPlans } from "../lib/instagram-pricing";
import creativeImage from "../assets/why-creative.jpg";
import performanceImage from "../assets/why-performance.jpg";
import strategyImage from "../assets/why-strategy.jpg";

const treatments = [
  { color: "bg-secondary", image: creativeImage, alt: "Editor crafting a branded video with captions and color grading" },
  { color: "bg-accent", image: performanceImage, alt: "Creative team reviewing two video edits and their performance" },
  { color: "bg-cream", image: strategyImage, alt: "Content team planning a consistent creative direction" },
];

export function InstagramPricing() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold text-primary">Instagram packages</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-normal text-foreground sm:text-5xl md:text-6xl">Your content. <br />A whole new gear.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">Reels built to hold attention. An editor who knows your brand. A content rhythm you can count on.</p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {instagramPlans.map((plan, index) => {
            const treatment = treatments[index];
            if (!treatment) return null;
            return (
              <article key={plan.name} aria-label={`${plan.name} package`} className={`flex min-w-0 flex-col overflow-hidden rounded-3xl border bg-card ${index === 1 ? "border-primary" : "border-border"}`}>
                <div className={`relative ${treatment.color}`}>
                  <div className="flex min-h-10 items-center justify-center border-b border-foreground/10 px-5 text-xs font-bold text-foreground">
                    {index === 0 ? "Find your rhythm" : index === 1 ? "Build your momentum" : "Scale your content operation"}
                  </div>
                  <div className="px-6 pb-6 pt-6 text-center">
                    <h3 className="font-display text-3xl font-extrabold tracking-normal text-foreground">{plan.name}</h3>
                    <p className="mt-3 flex items-baseline justify-center gap-1.5 text-foreground">
                      <span className="text-4xl font-extrabold">${plan.price.toLocaleString("en-US")}</span>
                      <span className="text-sm text-foreground/70">/ month</span>
                    </p>
                  </div>
                  <div className="relative mx-5 h-44 overflow-hidden rounded-t-xl sm:h-52">
                    <img src={treatment.image} alt={treatment.alt} loading="lazy" className="h-full w-full object-cover object-top" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-md bg-card/95 px-4 py-3 text-card-foreground backdrop-blur-sm">
                      <span className="text-sm font-semibold">Monthly Reels</span>
                      <span className="text-2xl font-extrabold">{plan.reels}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="min-h-12 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                  <ul className="mt-6 flex-1 space-y-3.5">
                    {plan.highlights.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm leading-5 text-card-foreground">
                        <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="flex items-center gap-2 text-xs font-semibold text-primary"><Repeat2 aria-hidden className="h-4 w-4 shrink-0" />Free repurposing to Shorts + TikTok</p>
                    <Button onClick={() => openBookingModal({ platform: "Instagram", planName: plan.name, planPrice: `$${plan.price.toLocaleString("en-US")} / month` })} className="mt-5 h-12 w-full rounded-xl font-bold">Start with {plan.name.replace("The ", "")} <ArrowRight /></Button>
                    <Button variant="outline" asChild className="mt-2.5 h-11 w-full rounded-xl border-foreground/25 font-semibold"><a href="#instagram-plan-comparison">Compare all features <ChevronDown /></a></Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs leading-6 text-muted-foreground sm:text-sm">Month-to-month · 30 days’ notice · 1-month unused Reel rollover · You own your project files</p>

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