import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DeleteAccountForm } from "./delete-account-form";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "Permanently delete your Vitalsy AI account and all associated health data.",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="container-tight max-w-2xl pb-24 pt-32 sm:pt-40">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Delete Your Account
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          You can permanently delete your Vitalsy AI account here. This removes
          your profile and all associated data — health records, reminders,
          medications, dependants, and step history. This action is{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            permanent and cannot be undone
          </span>
          .
        </p>

        <DeleteAccountForm />

        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
          <p className="font-semibold text-slate-900 dark:text-white">
            Prefer to delete from the app?
          </p>
          <p className="mt-1">
            Open Vitalsy AI → Account → “Delete All Data”. You can also email us
            at{" "}
            <a
              href="mailto:helpdesk@hitek.ai"
              className="font-medium text-violet-600 underline dark:text-violet-400"
            >
              helpdesk@hitek.ai
            </a>{" "}
            and we’ll remove your data within 30 days.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
