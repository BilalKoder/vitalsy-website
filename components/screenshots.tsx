"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Footprints,
  Heart,
  LineChart,
  Moon,
  Sparkles,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

/* Each screen is a stylized, asset-free recreation of an app view. */

function DashboardScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div>
        <p className="text-[10px] text-slate-500 dark:text-slate-400">Good morning</p>
        <p className="text-sm font-bold text-slate-900 dark:text-white">Dashboard</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: Heart, label: "Heart", value: "72 bpm", tint: "text-rose-500 bg-rose-500/10" },
          { icon: Footprints, label: "Steps", value: "8,432", tint: "text-brand-500 bg-brand-500/10" },
          { icon: Droplets, label: "Water", value: "1.6 L", tint: "text-sky-500 bg-sky-500/10" },
          { icon: Moon, label: "Sleep", value: "7h 20m", tint: "text-violet-500 bg-violet-500/10" },
        ].map((m) => (
          <div key={m.label} className="rounded-xl bg-white p-2.5 shadow-sm dark:bg-slate-800">
            <span className={`inline-flex h-6 w-6 items-center justify-center rounded-lg ${m.tint}`}>
              <m.icon className="h-3 w-3" />
            </span>
            <p className="mt-1.5 text-[9px] text-slate-500 dark:text-slate-400">{m.label}</p>
            <p className="text-[11px] font-bold text-slate-900 dark:text-white">{m.value}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-gradient-to-r from-brand-600 to-teal-500 p-3 text-white">
        <p className="text-[10px] font-semibold">Wellness Score</p>
        <p className="text-xl font-extrabold">86 / 100</p>
        <div className="mt-1.5 h-1.5 rounded-full bg-white/25">
          <div className="h-1.5 w-[86%] rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
}

function ChatScreen() {
  return (
    <div className="flex h-full flex-col gap-2.5 p-4">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-teal-500 text-white">
          <Bot className="h-3.5 w-3.5" />
        </span>
        <p className="text-sm font-bold text-slate-900 dark:text-white">AI Assistant</p>
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-brand-600 p-2.5 text-[10px] leading-relaxed text-white">
        How can I improve my sleep quality?
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white p-2.5 text-[10px] leading-relaxed text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
        Based on your data, your screen time after 10pm correlates with lighter sleep. Try a
        wind-down reminder at 9:30pm — want me to set one?
      </div>
      <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-brand-600 p-2.5 text-[10px] leading-relaxed text-white">
        Yes please!
      </div>
      <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white p-2.5 text-[10px] leading-relaxed text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-300">
        Done ✓ I&apos;ll check in tomorrow morning to see how you slept.
      </div>
    </div>
  );
}

function AnalyticsScreen() {
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <p className="text-sm font-bold text-slate-900 dark:text-white">Health Analytics</p>
      <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">Heart rate trend</p>
          <span className="text-[9px] font-bold text-emerald-500">▼ 4% resting</span>
        </div>
        <svg viewBox="0 0 200 60" className="mt-2 w-full">
          <polyline
            points="0,45 25,40 50,42 75,30 100,34 125,22 150,26 175,15 200,18"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="stroke-rose-400"
          />
        </svg>
      </div>
      <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
        <p className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">Sleep stages</p>
        <div className="mt-2 flex h-12 items-end gap-1">
          {[60, 80, 45, 90, 70, 85, 55, 75, 95, 65, 80, 50].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-violet-500 to-violet-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-teal-500/10 p-2.5 text-[9px] font-medium text-teal-700 dark:text-teal-300">
        <Sparkles className="h-3 w-3 shrink-0" />
        Deep sleep improved 12% since you started evening walks.
      </div>
    </div>
  );
}

function GoalsScreen() {
  return (
    <div className="flex h-full flex-col gap-2.5 p-4">
      <p className="text-sm font-bold text-slate-900 dark:text-white">Goal Tracking</p>
      {[
        { label: "Walk 10,000 steps daily", pct: 84, tint: "from-brand-500 to-brand-400" },
        { label: "Drink 2L of water", pct: 68, tint: "from-sky-500 to-sky-400" },
        { label: "Sleep 8 hours", pct: 91, tint: "from-violet-500 to-violet-400" },
        { label: "Meditate 10 minutes", pct: 57, tint: "from-teal-500 to-teal-400" },
      ].map((goal) => (
        <div key={goal.label} className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold text-slate-700 dark:text-slate-300">{goal.label}</p>
            <span className="text-[10px] font-bold text-slate-900 dark:text-white">{goal.pct}%</span>
          </div>
          <div className="mt-2 h-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
            <div
              className={`h-1.5 rounded-full bg-gradient-to-r ${goal.tint}`}
              style={{ width: `${goal.pct}%` }}
            />
          </div>
        </div>
      ))}
      <div className="mt-auto flex items-center gap-2 rounded-xl bg-amber-500/10 p-2.5 text-[9px] font-medium text-amber-700 dark:text-amber-300">
        <Target className="h-3 w-3 shrink-0" />
        3-week streak! You&apos;re in the top 10% of goal-keepers.
      </div>
    </div>
  );
}

function InsightsScreen() {
  return (
    <div className="flex h-full flex-col gap-2.5 p-4">
      <p className="text-sm font-bold text-slate-900 dark:text-white">Wellness Insights</p>
      {[
        {
          title: "Hydration ↔ Energy",
          body: "On days you hit your water goal, your reported energy is 23% higher.",
          tint: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
        },
        {
          title: "Best bedtime window",
          body: "Falling asleep between 10:15–10:45pm gives you your deepest sleep.",
          tint: "bg-violet-500/10 text-violet-700 dark:text-violet-300",
        },
        {
          title: "Active afternoons",
          body: "A short walk after lunch lowers your evening stress score consistently.",
          tint: "bg-teal-500/10 text-teal-700 dark:text-teal-300",
        },
      ].map((card) => (
        <div key={card.title} className={`rounded-xl p-3 ${card.tint}`}>
          <p className="flex items-center gap-1.5 text-[10px] font-bold">
            <Sparkles className="h-3 w-3" /> {card.title}
          </p>
          <p className="mt-1 text-[9px] leading-relaxed opacity-90">{card.body}</p>
        </div>
      ))}
    </div>
  );
}

const screens = [
  { id: "dashboard", label: "Dashboard", icon: LineChart, render: DashboardScreen },
  { id: "chat", label: "AI Assistant Chat", icon: Bot, render: ChatScreen },
  { id: "analytics", label: "Health Analytics", icon: Heart, render: AnalyticsScreen },
  { id: "goals", label: "Goal Tracking", icon: Target, render: GoalsScreen },
  { id: "insights", label: "Wellness Insights", icon: Sparkles, render: InsightsScreen },
];

export function Screenshots() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + screens.length) % screens.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 4500);
    return () => clearInterval(t);
  }, [go, paused]);

  const Screen = screens[index].render;

  return (
    <section
      id="screenshots"
      className="section-padding scroll-mt-20 bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="container-tight">
        <SectionHeading
          eyebrow="Screenshots"
          title="A beautiful home for your health"
          description="Explore the screens you'll use every day — clean, calm, and designed around you."
        />

        <div
          className="flex flex-col items-center gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Tab selector */}
          <div
            role="tablist"
            aria-label="App screenshots"
            className="flex max-w-full flex-wrap justify-center gap-2"
          >
            {screens.map((screen, i) => (
              <button
                key={screen.id}
                role="tab"
                aria-selected={index === i}
                onClick={() => setIndex(i)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  index === i
                    ? "bg-gradient-to-r from-brand-600 to-teal-500 text-white shadow-lg shadow-brand-600/25"
                    : "bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                }`}
              >
                <screen.icon className="h-4 w-4" aria-hidden />
                {screen.label}
              </button>
            ))}
          </div>

          {/* Device frame with animated screen */}
          <div className="flex items-center gap-4 sm:gap-10">
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => go(-1)}
              className="btn-secondary !rounded-full !p-3"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <div className="relative w-[250px] rounded-[2.6rem] border border-slate-300/60 bg-slate-900 p-2 shadow-2xl shadow-brand-900/20 dark:border-slate-700 sm:w-[280px]">
              <div className="absolute left-1/2 top-3.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900 dark:bg-black" />
              <div className="relative h-[480px] overflow-hidden rounded-[2.1rem] bg-slate-100 pt-8 dark:bg-slate-900 sm:h-[520px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={screens[index].id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="h-full"
                  >
                    <Screen />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => go(1)}
              className="btn-secondary !rounded-full !p-3"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2" aria-hidden>
            {screens.map((screen, i) => (
              <button
                key={screen.id}
                tabIndex={-1}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i
                    ? "w-8 bg-gradient-to-r from-brand-600 to-teal-500"
                    : "w-2 bg-slate-300 dark:bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
