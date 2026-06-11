"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const faqs = [
  {
    question: "Is Vitalsy AI a replacement for my doctor?",
    answer:
      "No. Vitalsy AI is a wellness companion that helps you understand and improve your everyday health habits. It provides educational insights and lifestyle guidance, but it does not diagnose, treat, or replace professional medical advice. Always consult a healthcare professional for medical concerns.",
  },
  {
    question: "How does the AI generate my health insights?",
    answer:
      "Vitalsy analyzes the data you track — activity, sleep, hydration, habits, and goals — and identifies patterns unique to you. It then translates those patterns into plain-language recommendations, prioritized by what will make the biggest difference to your wellbeing.",
  },
  {
    question: "Is my health data private and secure?",
    answer:
      "Absolutely. Your data is encrypted in transit and at rest with enterprise-grade security. We never sell your personal information, and you can export or permanently delete your data at any time from within the app.",
  },
  {
    question: "Which devices and wearables does Vitalsy support?",
    answer:
      "Vitalsy AI runs on iOS and Android, and Premium integrates with popular wearables and health platforms including Apple Health, Google Fit, and Bluetooth-enabled fitness devices, so your data flows in automatically.",
  },
  {
    question: "Can I use Vitalsy AI for free?",
    answer:
      "Yes! The Free plan includes core tracking, a daily wellness score, and weekly reports — free forever. Premium adds unlimited AI chat, personalized insights, and advanced analytics, with a 14-day free trial and no credit card required.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "You can cancel anytime in two taps from the app's settings or through your app store subscription page. You'll keep Premium access until the end of your billing period, and your data remains safe on the Free plan.",
  },
];

function FaqItem({
  faq,
  open,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[number];
  open: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800"
        >
          <ChevronDown className="h-4 w-4 text-slate-600 dark:text-slate-300" aria-hidden />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={`faq-panel-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {faq.answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding scroll-mt-20">
      <div className="container-tight max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about Vitalsy AI. Can't find an answer? Reach out to our team."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
