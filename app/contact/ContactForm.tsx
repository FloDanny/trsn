"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useMemo, useState } from "react";

const submitUrl = process.env.NEXT_PUBLIC_CONVEX_HTTP_URL;

const initialFormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  message: "",
};

type FormState = typeof initialFormState;

type Status = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactFormFields() {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>(
    {},
  );
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  const fieldErrors = useMemo(() => {
    return Object.values(errors).filter(Boolean);
  }, [errors]);

  const validate = (values: FormState) => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!values.name.trim()) {
      nextErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(values.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Context is required.";
    }

    return nextErrors;
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const field = name as keyof FormState;
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
    if (status !== "idle") {
      setStatus("idle");
    }
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const nextErrors = validate(formState);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(submitUrl ?? "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name.trim(),
          email: formState.email.trim(),
          company: formState.company.trim() || undefined,
          role: formState.role.trim() || undefined,
          message: formState.message.trim(),
          source: "contact-page",
        }),
      });

      if (!response.ok) {
        throw new Error(`Convex HTTP error: ${response.status}`);
      }

      setFormState(initialFormState);
      setErrors({});
      setStatus("success");
    } catch (error) {
      console.error("Lead submission failed.", error);
      setStatus("error");
      setErrorMessage(
        "Submission failed. Please retry or email contact@trsnllc.com.",
      );
    }
  };

  return (
    <form
      className="rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Share your context
          </h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Provide enough detail to map the highest-risk workflows. Required
            fields are marked.
          </p>
        </div>

        {isSuccess ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200">
            Submitted. We will reply with a scoped plan within two business
            days.
          </div>
        ) : null}

        {status === "error" && (errorMessage || fieldErrors.length > 0) ? (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-200">
            <p className="font-medium">Review the issues below.</p>
            {errorMessage ? (
              <p className="mt-2">{errorMessage}</p>
            ) : (
              <ul className="mt-2 list-inside list-disc">
                {fieldErrors.map((message) => (
                  <li key={message}>{message}</li>
                ))}
              </ul>
            )}
          </div>
        ) : null}

        <div className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-200">
            Name <span className="text-rose-500">*</span>
            <input
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-black dark:text-zinc-100"
              name="name"
              onChange={handleChange}
              placeholder="Full name"
              required
              value={formState.name}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-200">
            Work email <span className="text-rose-500">*</span>
            <input
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-black dark:text-zinc-100"
              name="email"
              onChange={handleChange}
              placeholder="name@company.com"
              required
              type="email"
              value={formState.email}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-200">
            Company
            <input
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-black dark:text-zinc-100"
              name="company"
              onChange={handleChange}
              placeholder="Company or product"
              value={formState.company}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-200">
            Role
            <input
              className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-black dark:text-zinc-100"
              name="role"
              onChange={handleChange}
              placeholder="CTO, QA Lead, Engineering Manager"
              value={formState.role}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm text-zinc-700 dark:text-zinc-200">
          Context and goals <span className="text-rose-500">*</span>
          <textarea
            className="min-h-[140px] rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-black dark:text-zinc-100"
            name="message"
            onChange={handleChange}
            placeholder="Release cadence, critical workflows, known risks, and what success looks like."
            required
            value={formState.message}
          />
        </label>

        <div className="flex flex-wrap items-center gap-4">
          <button
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Submit context"}
          </button>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            We only use this to scope a QAAS™ engagement.
          </p>
        </div>
      </div>
    </form>
  );
}

export default function ContactForm() {
  if (!submitUrl) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-6 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
        Lead capture is offline because the Convex HTTP endpoint is not
        configured. Set NEXT_PUBLIC_CONVEX_HTTP_URL to enable submissions.
      </div>
    );
  }

  return <ContactFormFields />;
}
