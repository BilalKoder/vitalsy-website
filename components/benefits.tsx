"use client";

import { motion } from "framer-motion";
import { CheckCircle2, HeartPulse, Lightbulb, Repeat, Timer, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const benefits = [
  {
    icon: Timer,
    title: "Save time understanding your health",
    description: "No more digging through confusing numbers — Vitalsy explains what matters in plain language.",
  },
  {
    icon: Lightbulb,
    title: "Get personalized recommendations",
    description: "Advice tailored to your body, habits, and goals — not generic one-size-fits-all tips.",
  },
  {
    icon: Repeat,
    title: "Build healthier habits",
    description: "Gentle nudges and streaks help small actions become lasting routines.",
  },
  {
    icon: TrendingUp,
    title: "Track progress intelligently",
    description: "See meaningful trends over weeks and months, not just isolated daily snapshots.",
  },
  {
    icon: HeartPulse,
    title: "Make better lifestyle decisions",
    description: "Understand how sleep, movement, and hydration interact so every choice counts.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="section-padding scroll-mt-20 overflow-hidden">
      <div className="container-tight grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Benefits"
            title="Designed to make healthy feel effortless"
            description="Vitalsy AI turns scattered health data into clarity, confidence, and momentum."
          />
          <ul className="-mt-6 space-y-5">
            {benefits.map((benefit, i) => (
              <motion.li
                key={benefit.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="flex gap-4"
              >
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                  <benefit.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Decorative trend panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          aria-hidden
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-500/10 to-teal-500/10 blur-2xl" />
          <div className="glass rounded-[2rem] p-6 shadow-card sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Weekly Wellness Trend</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Last 7 days</p>
              </div>
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="h-3.5 w-3.5" /> +18%
              </span>
            </div>

            <div className="mt-6 flex h-40 items-end gap-3">
              {[
                { day: "Mon", v: 45 },
                { day: "Tue", v: 58 },
                { day: "Wed", v: 52 },
                { day: "Thu", v: 70 },
                { day: "Fri", v: 64 },
                { day: "Sat", v: 84 },
                { day: "Sun", v: 92 },
              ].map((bar) => (
                <div key={bar.day} className="flex flex-1 flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${bar.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="w-full rounded-t-xl bg-gradient-to-t from-brand-600 to-teal-400"
                  />
                  <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                    {bar.day}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-200/70 pt-5 dark:border-slate-700/60">
              {[
                { label: "Habits kept", value: "24/28" },
                { label: "Avg. sleep", value: "7h 18m" },
                { label: "Goals hit", value: "5 of 6" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-2 rounded-2xl bg-teal-500/10 p-3 text-xs font-medium text-teal-700 dark:text-teal-300">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Consistency is paying off — your recovery scores improved 3 days in a row.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
