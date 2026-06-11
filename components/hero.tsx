"use client";

import { motion } from "framer-motion";
import { Download, Play, ShieldCheck, Sparkles, Star } from "lucide-react";
import { PhoneMockup } from "@/components/phone-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0 -z-20" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/80 via-transparent to-transparent dark:from-brand-950/40"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-400/20 to-teal-400/20 blur-3xl"
      />

      <div className="container-tight grid items-center gap-16 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
          >
            <Sparkles className="h-3.5 w-3.5 text-teal-500" aria-hidden />
            AI-powered health &amp; wellness assistant
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Your Personal <span className="gradient-text">AI Health</span> Companion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg lg:mx-0"
          >
            Vitalsy AI helps you understand your health, track wellness goals, receive
            intelligent insights, and stay on top of your wellbeing — all from your
            smartphone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a href="#download" className="btn-primary w-full sm:w-auto">
              <Download className="h-4 w-4" aria-hidden />
              Download App
            </a>
            <a href="#screenshots" className="btn-secondary w-full sm:w-auto">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-teal-500">
                <Play className="h-3 w-3 fill-white text-white" aria-hidden />
              </span>
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col items-center gap-4 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:justify-center lg:justify-start"
          >
            <span className="flex items-center gap-1.5">
              <span className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <strong className="text-slate-800 dark:text-slate-200">4.9</strong> on app stores
            </span>
            <span className="hidden h-4 w-px bg-slate-300 dark:bg-slate-700 sm:block" aria-hidden />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-teal-500" aria-hidden />
              HIPAA-aligned privacy
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
        >
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
