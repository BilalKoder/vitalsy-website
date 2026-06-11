"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  FileBarChart,
  type LucideIcon,
  MessageSquareHeart,
  ShieldCheck,
  Target,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  tint: string;
};

const features: Feature[] = [
  {
    icon: BrainCircuit,
    title: "AI Health Insights",
    description:
      "Personalized health recommendations powered by AI that learns your patterns and adapts to you.",
    tint: "from-brand-500 to-brand-600",
  },
  {
    icon: Activity,
    title: "Smart Wellness Tracking",
    description:
      "Monitor habits, activity, hydration, sleep, and progress — automatically, in one place.",
    tint: "from-teal-500 to-teal-600",
  },
  {
    icon: FileBarChart,
    title: "Health Reports",
    description:
      "Easy-to-understand summaries and trends that turn raw data into clear, actionable knowledge.",
    tint: "from-violet-500 to-violet-600",
  },
  {
    icon: MessageSquareHeart,
    title: "AI Chat Assistant",
    description:
      "Ask health-related questions any time and receive intelligent, evidence-informed guidance.",
    tint: "from-rose-500 to-rose-600",
  },
  {
    icon: Target,
    title: "Goal Management",
    description:
      "Create and track wellness goals with smart milestones that keep you motivated.",
    tint: "from-amber-500 to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Private",
    description:
      "Enterprise-grade security and privacy protection. Your health data stays yours — always.",
    tint: "from-emerald-500 to-emerald-600",
  },
];

export function Features() {
  return (
    <section id="features" className="section-padding scroll-mt-20">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to own your health"
          description="Vitalsy AI combines intelligent tracking, deep insights, and a caring AI assistant in one beautifully simple app."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div
                aria-hidden
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-500/5 to-teal-500/10 transition-transform duration-500 group-hover:scale-150"
              />
              <span
                className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.tint} text-white shadow-lg`}
              >
                <feature.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="relative mt-5 text-lg font-bold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
