import { Apple, Play } from "lucide-react";

/* App store download badges, rendered as accessible styled buttons. */
export function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-3 sm:flex-row ${className}`}>
      <a
        href="#"
        aria-label="Download Vitalsy AI on the App Store"
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:w-auto"
      >
        <Apple className="h-7 w-7" aria-hidden />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium opacity-80">Download on the</span>
          <span className="block text-base font-bold">App Store</span>
        </span>
      </a>
      <a
        href="#"
        aria-label="Get Vitalsy AI on Google Play"
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:w-auto"
      >
        <Play className="h-6 w-6 fill-current" aria-hidden />
        <span className="text-left leading-tight">
          <span className="block text-[10px] font-medium opacity-80">Get it on</span>
          <span className="block text-base font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
