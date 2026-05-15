"use client";

import { useState } from "react";
import Botanical from "./Botanical";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <Botanical
        flip
        className="absolute top-10 right-0 w-80 text-teal/15 hidden md:block"
      />
      <Botanical className="absolute bottom-0 left-0 w-72 text-teal/15 hidden md:block" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow">Let&apos;s talk</p>
        <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
          Tell me about your day.
        </h2>
        <p className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          A few details to start, I&apos;ll write back soon with availability
          and next steps.
        </p>

        {status === "sent" ? (
          <div className="mt-12 rounded-3xl border border-teal/30 bg-cream-deep/50 p-10 text-center">
            <h3 className="font-display text-3xl text-teal-deep">
              Note received.
            </h3>
            <p className="mt-3 text-muted">
              Thank you. I&apos;ll be in touch soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm tracking-wide text-teal-deep underline underline-offset-4"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-12 grid gap-5 text-left"
            noValidate
          >
            <div
              aria-hidden
              className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
            >
              <label>
                Website
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field
                label="Your name"
                name="name"
                placeholder="Jamie Doe"
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field
                label="Wedding date (or season)"
                name="date"
                placeholder="Fall 2026"
              />
              <Field
                label="Location"
                name="location"
                placeholder="Hudson Valley, NY"
              />
            </div>
            <label className="block">
              <span className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
                A little about your vision
                <span className="text-teal/60"> *</span>
              </span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="What are you imagining? What feels important?"
                className="w-full rounded-2xl border border-teal/25 bg-cream/60 px-5 py-4 text-ink placeholder:text-muted/60 focus:outline-none focus:border-teal focus:bg-cream transition-colors"
              />
            </label>

            {status === "error" && (
              <p
                role="alert"
                className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
              >
                {errorMsg}
              </p>
            )}

            <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted">
                Prefer email? Write to{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-teal-deep underline underline-offset-4"
                >
                  {siteConfig.email}
                </a>
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-teal px-8 py-3 text-sm font-medium tracking-wide text-cream hover:bg-teal-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send inquiry"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
        {label}
        {required && <span className="text-teal/60"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-full border border-teal/25 bg-cream/60 px-5 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-teal focus:bg-cream transition-colors"
      />
    </label>
  );
}
