"use client";

import { Activity, Bot, Droplets, Flame, Footprints, Heart, Moon } from "lucide-react";

/**
 * CSS-built device mockup of the Vitalsy AI dashboard — keeps the hero
 * asset-free so it ships fast and looks crisp at every resolution.
 */
export function PhoneMockup() {
  return (
    <div
      aria-hidden
      className="relative mx-auto w-[280px] sm:w-[310px]"
      style={{ perspective: "1600px" }}
    >
      <div
        className="relative rounded-[3rem] border border-slate-300/60 bg-slate-900 p-2.5 shadow-2xl shadow-brand-900/30 dark:border-slate-700"
        style={{ transform: "rotateY(-12deg) rotateX(4deg)" }}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-4 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-900 dark:bg-black" />

        <div className="relative overflow-hidden rounded-[2.4rem] bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
          {/* Status bar */}
          <div className="flex items-center justify-between px-7 pb-2 pt-4 text-[10px] font-semibold text-slate-500 dark:text-slate-400">
            <span>9:41</span>
            <span className="flex gap-1">
              <span className="h-2 w-3 rounded-sm bg-slate-400/70" />
              <span className="h-2 w-2 rounded-sm bg-slate-400/70" />
            </span>
          </div>

          {/* App header */}
          <div className="px-5 pt-3">
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Good morning, Sarah</p>
            <p className="text-base font-bold text-slate-900 dark:text-white">Your Health Today</p>
          </div>

          {/* Wellness score ring */}
          <div className="mx-5 mt-4 flex items-center gap-4 rounded-2xl bg-white p-4 shadow-card dark:bg-slate-800/80">
            <div className="relative h-16 w-16 shrink-0">
              <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90">
                <circle cx="32" cy="32" r="27" fill="none" strokeWidth="7" className="stroke-slate-200 dark:stroke-slate-700" />
                <circle
                  cx="32"
                  cy="32"
                  r="27"
                  fill="none"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray="170 200"
                  className="stroke-teal-500"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-900 dark:text-white">
                86
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-900 dark:text-white">Wellness Score</p>
              <p className="mt-0.5 text-[10px] leading-snug text-slate-500 dark:text-slate-400">
                Great progress! Sleep quality improved 12% this week.
              </p>
            </div>
          </div>

          {/* Metric tiles */}
          <div className="mx-5 mt-3 grid grid-cols-2 gap-2.5">
            {[
              { icon: Heart, label: "Heart Rate", value: "72 bpm", tint: "text-rose-500 bg-rose-500/10" },
              { icon: Footprints, label: "Steps", value: "8,432", tint: "text-brand-500 bg-brand-500/10" },
              { icon: Droplets, label: "Hydration", value: "1.6 L", tint: "text-sky-500 bg-sky-500/10" },
              { icon: Moon, label: "Sleep", value: "7h 20m", tint: "text-violet-500 bg-violet-500/10" },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl bg-white p-3 shadow-card dark:bg-slate-800/80">
                <span className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${m.tint}`}>
                  <m.icon className="h-3.5 w-3.5" />
                </span>
                <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">{m.label}</p>
                <p className="text-xs font-bold text-slate-900 dark:text-white">{m.value}</p>
              </div>
            ))}
          </div>

          {/* AI insight chat bubble */}
          <div className="mx-5 my-4 rounded-2xl bg-gradient-to-r from-brand-600 to-teal-500 p-3.5 text-white shadow-lg shadow-brand-600/20">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <Bot className="h-3.5 w-3.5" />
              </span>
              <p className="text-[11px] font-semibold">Vitalsy Insight</p>
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-white/90">
              You&apos;re 568 steps from today&apos;s goal — a 10-minute walk after lunch will get you there.
            </p>
          </div>
        </div>
      </div>

      {/* Floating metric card — left */}
      <div className="glass absolute -left-16 top-16 hidden animate-float-slow rounded-2xl p-3.5 shadow-card sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
            <Heart className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Resting HR</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">62 bpm</p>
          </div>
        </div>
        <div className="mt-2 flex h-6 items-end gap-0.5">
          {[40, 65, 50, 80, 60, 90, 70, 100, 75, 85].map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-rose-400 to-rose-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Floating AI card — right */}
      <div className="glass absolute -right-14 bottom-24 hidden animate-float-slower rounded-2xl p-3.5 shadow-card sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500">
            <Bot className="h-5 w-5" />
          </span>
          <div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">AI Insight</p>
            <p className="text-xs font-semibold text-slate-900 dark:text-white">Sleep up 12%</p>
          </div>
        </div>
      </div>

      {/* Floating calories chip — top right */}
      <div className="glass absolute -right-8 top-6 hidden animate-float-slow items-center gap-2 rounded-full px-4 py-2 shadow-card sm:flex">
        <Flame className="h-4 w-4 text-orange-500" />
        <span className="text-xs font-bold text-slate-900 dark:text-white">486 kcal</span>
      </div>

      {/* Floating activity chip — bottom left */}
      <div className="glass absolute -left-10 bottom-10 hidden animate-float-slower items-center gap-2 rounded-full px-4 py-2 shadow-card sm:flex">
        <Activity className="h-4 w-4 text-teal-500" />
        <span className="text-xs font-bold text-slate-900 dark:text-white">Goal 86%</span>
      </div>
    </div>
  );
}
