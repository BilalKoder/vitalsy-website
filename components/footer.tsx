import Link from "next/link";
import { Activity, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press Kit", href: "#" },
  { label: "Contact", href: "mailto:hello@vitalsy.ai" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Delete Account", href: "/delete-account" },
  { label: "Cookie Policy", href: "#" },
  { label: "HIPAA Compliance", href: "#" },
];

const socials = [
  { label: "Twitter / X", href: "https://twitter.com", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="container-tight py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5" aria-label="Vitalsy AI home">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-teal-500 shadow-md">
                <Activity className="h-5 w-5 text-white" aria-hidden />
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                Vitalsy<span className="gradient-text"> AI</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Your personal AI health companion. Understand your health, build better habits,
              and live well — powered by intelligent, private, secure AI.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-brand-600 hover:shadow-md dark:bg-slate-900 dark:text-slate-400 dark:hover:text-teal-400"
                >
                  <social.icon className="h-4 w-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Product">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-400 dark:hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-center dark:border-slate-800 sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Vitalsy AI, Inc. All rights reserved.
          </p>
          <p className="max-w-md text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
            Vitalsy AI provides wellness guidance and is not a substitute for professional
            medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
