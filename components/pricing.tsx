"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to start your wellness journey.",
    cta: "Get Started Free",
    featured: false,
    features: [
      "Basic health & activity tracking",
      "Daily wellness score",
      "3 active goals",
      "Weekly summary report",
      "Community support",
    ],
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "per month",
    description: "Unlock the full power of AI-driven health insights.",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Everything in Free",
      "Unlimited AI chat assistant",
      "Personalized AI health insights",
      "Unlimited goals & smart milestones",
      "Advanced analytics & trends",
      "Wearable & device integrations",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "per organization",
    description: "Corporate wellness programs for teams of any size.",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Everything in Premium",
      "Team wellness dashboards",
      "Admin & HR analytics",
      "SSO & advanced security",
      "Dedicated success manager",
      "Custom integrations & SLA",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="section-padding scroll-mt-20 bg-slate-50 dark:bg-slate-900/40"
    >
      <div className="container-tight">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple plans that grow with you"
          description="Start free. Upgrade when you're ready for deeper insights. Cancel anytime."
        />

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.featured
                  ? "border-2 border-transparent bg-white shadow-2xl shadow-brand-600/15 ring-2 ring-brand-500/60 dark:bg-slate-900 lg:-my-4 lg:py-12"
                  : "border border-slate-200/80 bg-white shadow-card dark:border-slate-800 dark:bg-slate-900"
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-teal-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Most Popular
                </span>
              ) : null}

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">/ {plan.period}</span>
              </p>

              <a
                href="#download"
                className={`mt-7 ${plan.featured ? "btn-primary" : "btn-secondary"} w-full`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/10">
                      <Check className="h-3 w-3 text-teal-600 dark:text-teal-400" aria-hidden />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          All plans include bank-level encryption. Premium comes with a 14-day free trial — no credit card required.
        </p>
      </div>
    </section>
  );
}
