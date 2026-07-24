import { Play, Volume2, Heart, MessageCircle, Sparkles, Send } from "lucide-react";

/**
 * Static + subtly animated phone-frame mock of an edited Reel.
 * Purely visual — no drag interaction. Uses CSS keyframes only.
 */
export function PhoneReel() {
  return (
    <div className="relative mx-auto flex w-full justify-center pt-6">
      {/* floating chips */}
      <div className="animate-float-slow absolute left-0 top-4 z-20 rotate-[-6deg] rounded-2xl border border-ink/10 bg-white px-3 py-2 text-xs font-semibold text-ink shadow-lg md:-left-6">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-pink text-ink">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
          <span>Captions + hook added</span>
        </div>
      </div>
      <div
        className="animate-float-slow absolute right-0 top-36 z-20 rotate-[5deg] rounded-2xl border border-ink/10 bg-white px-3 py-2 text-xs font-semibold text-ink shadow-lg md:-right-4"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-yellow text-ink">
            <Heart className="h-4 w-4" />
          </span>
          <div>
            <div className="font-display text-sm font-extrabold leading-none">+284%</div>
            <div className="text-[10px] text-ink/60">avg. views</div>
          </div>
        </div>
      </div>
      <div
        className="animate-float-slow absolute -right-2 bottom-20 z-20 rotate-[-3deg] rounded-2xl bg-ink px-3 py-2 text-xs font-semibold text-white shadow-lg md:right-2"
        style={{ animationDelay: "1.6s" }}
      >
        Delivered in 24h
      </div>

      {/* phone */}
      <div className="relative w-[270px] rounded-[2.4rem] border-[10px] border-ink bg-ink p-1 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] md:w-[310px]">
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] bg-[linear-gradient(140deg,var(--brand-blue)_0%,oklch(0.6_0.22_340)_50%,var(--brand-yellow)_100%)]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-30 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />

          {/* silhouette subject */}
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative">
              <div className="h-52 w-52 rounded-full bg-white/20 blur-3xl" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="h-16 w-16 rounded-full bg-white/95" />
                <div className="absolute top-16 h-24 w-32 rounded-t-[3rem] bg-white/95" />
              </div>
            </div>
          </div>

          {/* progress bar */}
          <div className="absolute inset-x-4 top-10 h-1 rounded-full bg-white/25">
            <div className="animate-reel-progress h-full rounded-full bg-white" />
          </div>

          {/* animated caption */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center">
            <span className="animate-caption inline-block rounded-lg bg-ink/85 px-3 py-1.5 font-display text-lg font-extrabold uppercase leading-tight tracking-tight text-white">
              this <span className="bg-brand-yellow px-1 text-ink">changed</span> everything
            </span>
          </div>

          {/* side actions */}
          <div className="absolute bottom-16 right-3 flex flex-col items-center gap-4 text-white">
            <Action icon={<Heart className="h-5 w-5" />} label="24.1K" />
            <Action icon={<MessageCircle className="h-5 w-5" />} label="932" />
            <Action icon={<Send className="h-5 w-5" />} label="1.2K" />
          </div>

          {/* bottom bar */}
          <div className="absolute inset-x-4 bottom-3 flex items-center gap-2 rounded-full bg-white/15 px-3 py-2 backdrop-blur">
            <Play className="h-3.5 w-3.5 fill-white text-white" />
            <div className="truncate text-[10px] font-semibold text-white">
              @yourbrand · edited by reelhire
            </div>
            <Volume2 className="ml-auto h-3.5 w-3.5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Action({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur">{icon}</span>
      <span className="text-[10px] font-bold">{label}</span>
    </div>
  );
}
