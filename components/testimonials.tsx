"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    initials: "SM",
    tint: "from-rose-500 to-pink-500",
    rating: 5,
    quote:
      "Vitalsy AI completely changed how I prepare for races. The sleep and recovery insights are spot-on — it's like having a coach who actually knows my body.",
  },
  {
    name: "James Okafor",
    role: "Software Engineer",
    initials: "JO",
    tint: "from-brand-500 to-indigo-500",
    rating: 5,
    quote:
      "As someone who sits at a desk all day, the gentle nudges and habit tracking have been a game changer. I've built a walking routine I've actually kept for 6 months.",
  },
  {
    name: "Elena Rodriguez",
    role: "New Mom",
    initials: "ER",
    tint: "from-teal-500 to-emerald-500",
    rating: 5,
    quote:
      "The AI assistant answers my health questions at 3am when I'm up with the baby. Clear, kind, and never judgmental. I genuinely don't know how I managed without it.",
  },
  {
    name: "David Chen",
    role: "Type 2 Diabetes Manager",
    initials: "DC",
    tint: "from-amber-500 to-orange-500",
    rating: 5,
    quote:
      "The weekly reports help me have much better conversations with my doctor. Everything is summarized clearly — trends, patterns, the works.",
  },
  {
    name: "Priya Sharma",
    role: "Yoga Instructor",
    initials: "PS",
    tint: "from-violet-500 to-purple-500",
    rating: 5,
    quote:
      "Beautiful, calm, and genuinely intelligent. I recommend Vitalsy to all my students who want to understand their bodies better.",
  },
  {
    name: "Michael Torres",
    role: "Busy Executive",
    initials: "MT",
    tint: "from-sky-500 to-cyan-500",
    rating: 5,
    quote:
      "I gave it two weeks as a test. A year later it's the first app I check every morning. The insights are concise and actually actionable.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding scroll-mt-20">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by people on every health journey"
          description="From athletes to new parents — hear how Vitalsy AI helps real people live healthier lives."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-slate-100 dark:text-slate-800" aria-hidden />
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.tint} text-sm font-bold text-white`}
                >
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
