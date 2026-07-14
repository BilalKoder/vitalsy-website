"use client";

import { useState } from "react";

// Public Supabase values (safe to expose — same as the mobile app; Row Level
// Security + the delete_current_user RPC enforce that a user can only delete
// their OWN account after signing in).
const SUPABASE_URL = "https://paqrskuxjkjzomqlvgae.supabase.co";
const SUPABASE_KEY = "sb_publishable_3Ib0FWPNJ4bRuPZX4s0H6g_aj0B7B-k";

type Status = "idle" | "working" | "done" | "error";

export function DeleteAccountForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setStatus("working");

    try {
      // 1. Sign in to prove ownership of the account.
      const tokenRes = await fetch(
        `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!tokenRes.ok) {
        setError("Incorrect email or password. Please try again.");
        setStatus("error");
        return;
      }

      const { access_token } = await tokenRes.json();

      // 2. Delete the account (RPC runs as the signed-in user, cascades to all data).
      const delRes = await fetch(
        `${SUPABASE_URL}/rest/v1/rpc/delete_current_user`,
        {
          method: "POST",
          headers: {
            apikey: SUPABASE_KEY,
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
          body: "{}",
        }
      );

      if (!delRes.ok) {
        setError(
          "We couldn't delete your account. Please email bilalaly1122@gmail.com and we'll remove it for you."
        );
        setStatus("error");
        return;
      }

      setStatus("done");
    } catch {
      setError("Something went wrong. Please check your connection and retry.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/40">
        <h2 className="text-lg font-bold text-emerald-800 dark:text-emerald-300">
          Account deleted
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-emerald-700 dark:text-emerald-400">
          Your Vitalsy AI account and all associated data have been permanently
          removed. We&apos;re sorry to see you go.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
        <span className="font-semibold">Warning:</span> Deleting your account is
        permanent. All your data will be erased and cannot be recovered.
      </div>

      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-violet-900"
        />
      </label>

      <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
        Password
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-violet-900"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
        <input
          type="checkbox"
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
        />
        <span>
          I understand this will permanently delete my account and all my health
          data, and cannot be undone.
        </span>
      </label>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-600 dark:text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!confirmed || status === "working"}
        className="mt-6 w-full rounded-lg bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "working" ? "Deleting…" : "Permanently delete my account"}
      </button>
    </form>
  );
}
