"use client";

import { motion } from "framer-motion";
import { LineChart, Sparkles, TrendingUp, UserRound } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: UserRound,
    step: "01",
    title: "Connect & Setup Profile",
    description:
      "Create your profile in minutes and tell Vitalsy about your lifestyle, goals, and priorities.",
  },
  {
    icon: LineChart,
    step: "02",
    title: "Track Health & Activities",
    description:
      "Log activity, hydration, sleep, and habits — or let smart tracking do it for you.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Receive AI-Powered Insights",
    description:
      "Vitalsy analyzes your data and delivers personalized, easy-to-act-on recommendations.",
  },
  {
    icon: TrendingUp,
    step: "04",
    title: "Improve Your Wellbeing",
    description:
      "Watch your wellness score climb as small daily wins compound into lasting habits.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding scroll-mt-20 bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="container-tight">
        <SectionHeading
          eyebrow="How It Works"
          title="Better health in four simple steps"
          description="From setup to insight in minutes — Vitalsy AI does the heavy lifting so you can focus on living well."
        />

        <ol className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent dark:via-brand-700 lg:block"
          />
          {steps.map((step, i) => (
            <motion.li
              key={step.step}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative text-center lg:px-2"
            >
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-teal-500 text-white shadow-lg shadow-brand-600/25">
                <step.icon className="h-7 w-7" aria-hidden />
              </div>
              <span className="mt-5 block text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
                Step {step.step}
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
