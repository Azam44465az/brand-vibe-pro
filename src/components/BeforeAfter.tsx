import { useRef, useState, useCallback } from "react";
import { GripVertical } from "lucide-react";

/**
 * Simple interactive before/after slider. Uses inline SVG "mock" frames so
 * we don't ship images — pure visual and interactive.
 */
export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl border-2 border-ink/10 bg-ink shadow-[0_12px_0_0_rgba(20,20,60,0.12)]"
      onPointerDown={(e) => { dragging.current = true; (e.target as HTMLElement).setPointerCapture(e.pointerId); move(e.clientX); }}
      onPointerMove={(e) => { if (dragging.current) move(e.clientX); }}
      onPointerUp={() => { dragging.current = false; }}
      onPointerCancel={() => { dragging.current = false; }}
    >
      {/* BEFORE — raw footage look */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.02_260)] to-[oklch(0.22_0.02_260)]" />
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 8px)" }} />
        <div className="absolute left-4 top-4 rounded-md bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/70">Raw · 00:12:44</div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
          <div className="h-1 flex-1 rounded-full bg-white/15">
            <div className="h-full w-1/3 rounded-full bg-white/50" />
          </div>
        </div>
      </div>

      {/* AFTER — clipped by pos */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-purple to-brand-pink" />
        {/* subject silhouette */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="relative">
            <div className="h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-14 w-14 rounded-full bg-white/90" />
              <div className="absolute top-14 h-16 w-24 rounded-t-[3rem] bg-white/90" />
            </div>
          </div>
        </div>
        {/* captions */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-lg bg-ink/85 px-3 py-1.5 text-sm font-extrabold uppercase text-brand-yellow">
          <span className="text-white">this changed </span>everything
        </div>
        {/* CTA sticker */}
        <div className="absolute right-4 top-4 rotate-6 rounded-xl bg-brand-yellow px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-ink shadow-md">
          Edited
        </div>
        <div className="absolute left-4 top-4 rounded-md bg-white/95 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">Cut · 00:00:38</div>
      </div>

      {/* Handle */}
      <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-white/90" />
        <div className="pointer-events-auto absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-11 w-11 cursor-ew-resize place-items-center rounded-full bg-white text-ink shadow-lg ring-4 ring-white/30">
          <GripVertical className="h-5 w-5" />
        </div>
      </div>

      {/* labels */}
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink">Before</div>
      <div className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-ink px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-yellow">After</div>
    </div>
  );
}
