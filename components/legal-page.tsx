import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

type LegalPageProps = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main id="main" className="container-tight max-w-3xl pb-24 pt-32 sm:pt-40">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 2026
        </p>
        <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {intro}
        </p>
        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {section.heading}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
