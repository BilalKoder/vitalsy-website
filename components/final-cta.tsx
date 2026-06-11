"use client";

import { motion } from "framer-motion";
import { StoreBadges } from "@/components/store-badges";

export function FinalCta() {
  return (
    <section id="download" className="section-padding scroll-mt-20">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-700 via-brand-600 to-teal-600 px-6 py-16 text-center shadow-2xl shadow-brand-700/30 sm:px-12 sm:py-20"
        >
          <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
          <div
            aria-hidden
            className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Start Your Health Journey With AI
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Download Vitalsy AI today and unlock a smarter approach to wellness.
            </p>
            <StoreBadges className="mt-9 justify-center" />
            <p className="mt-6 text-xs text-white/70">
              Free to download · No credit card required · Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
