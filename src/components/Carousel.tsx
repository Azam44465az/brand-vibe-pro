import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ children, ariaLabel }: { children: ReactNode[]; ariaLabel?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [active, setActive] = useState(0);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    const cards = Array.from(el.querySelectorAll<HTMLElement>("[data-card]"));
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    cards.forEach((c, i) => {
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(mid - center);
      if (d < min) { min = d; closest = i; }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const scrollTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-card]");
    const target = cards[i];
    if (target) el.scrollTo({ left: target.offsetLeft - 24, behavior: "smooth" });
  };

  return (
    <div className="relative" aria-label={ariaLabel} role="region">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div
            key={i}
            data-card
            className="snap-start shrink-0 w-[85%] sm:w-[55%] md:w-[38%] lg:w-[30%]"
          >
            {child}
          </div>
        ))}
        <div className="shrink-0 w-2" aria-hidden />
      </div>

      <div className="mt-2 flex items-center justify-between px-6">
        <div className="flex items-center gap-1.5">
          {children.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-ink" : "w-1.5 bg-ink/20 hover:bg-ink/40"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            disabled={!canPrev}
            aria-label="Previous"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink/15 bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-ink/40 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            disabled={!canNext}
            aria-label="Next"
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-ink/15 bg-white text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-ink/40 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:translate-y-0"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
