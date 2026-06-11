"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const stats: Stat[] = [
  { value: 250, suffix: "K+", label: "Active Users" },
  { value: 12, suffix: "M+", label: "Health Insights Generated" },
  { value: 1.8, suffix: "M+", label: "Goals Achieved", decimals: 1 },
  { value: 98, suffix: "%", label: "User Satisfaction Rate" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate(latest) {
        el.textContent = latest.toFixed(stat.decimals ?? 0);
      },
    });
    return () => controls.stop();
  }, [inView, stat]);

  return (
    <>
      <span ref={ref}>0</span>
      {stat.suffix}
    </>
  );
}

export function Stats() {
  return (
    <section aria-label="Vitalsy AI statistics" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-700 via-brand-600 to-teal-600" aria-hidden />
      <div className="bg-grid absolute inset-0 -z-10 opacity-40" aria-hidden />

      <div className="container-tight grid grid-cols-2 gap-10 py-16 sm:py-20 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              <Counter stat={stat} />
            </p>
            <p className="mt-2 text-sm font-medium text-white/80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
