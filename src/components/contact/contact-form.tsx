"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { budgetOptions, projectTypes } from "@/data/contact";
import { cn } from "@/lib/cn";

type FormValues = {
  budget: string;
  company: string;
  contact: string;
  description: string;
  name: string;
  projectType: string;
  projectUrl: string;
  website: string;
};

type FieldName = keyof FormValues;
type FieldErrors = Partial<Record<FieldName, string>>;
type FormStatus =
  | { message: string; type: "error" | "success" }
  | null;

const initialValues: FormValues = {
  budget: "",
  company: "",
  contact: "",
  description: "",
  name: "",
  projectType: "",
  projectUrl: "",
  website: "",
};

function isValidUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.contact.trim()) {
    errors.contact = "Please provide an email or Telegram username.";
  }

  if (!values.projectType) {
    errors.projectType = "Please select a project type.";
  }

  if (!values.budget) {
    errors.budget = "Please select an estimated budget.";
  }

  if (values.projectUrl.trim() && !isValidUrl(values.projectUrl.trim())) {
    errors.projectUrl = "Enter a full URL starting with http:// or https://.";
  }

  if (!values.description.trim()) {
    errors.description = "Please describe what you would like to build or improve.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Please add at least 20 characters so I can understand the project.";
  }

  return errors;
}

function inputClassName(hasError: boolean) {
  return cn(
    "mt-2 block w-full rounded-lg border bg-[var(--background)] px-3 py-3 text-sm text-[var(--foreground)] placeholder:text-[color:color-mix(in_srgb,var(--muted-foreground)_72%,transparent)] transition-colors focus-visible:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
    hasError && "border-[#f28b82]",
  );
}

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);
  const [values, setValues] = useState<FormValues>(initialValues);

  const updateValue = (field: FieldName, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setStatus(null);
    setErrors((current) => {
      const remaining = { ...current };
      delete remaining[field];
      return remaining;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({ message: "Please review the highlighted fields.", type: "error" });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });
      const result = (await response.json().catch(() => null)) as {
        error?: string;
        fields?: FieldErrors;
        success?: boolean;
      } | null;

      if (!response.ok || !result?.success) {
        if (result?.fields) {
          setErrors(result.fields);
        }
        setStatus({
          message: result?.error ?? "Unable to send your request right now.",
          type: "error",
        });
        return;
      }

      setValues(initialValues);
      setErrors({});
      setStatus({
        message: "Project request sent. Thanks. Your project details have been sent successfully.",
        type: "success",
      });
    } catch {
      setStatus({ message: "Unable to send your request right now.", type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} className="rounded-2xl border bg-[var(--surface)] p-5 sm:p-7">
      <div className="flex items-baseline justify-between gap-4 border-b pb-5">
        <div>
          <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">PROJECT BRIEF</p>
          <h3 className="mt-2 text-xl font-medium tracking-[-0.03em] text-[var(--foreground)]">Tell me about the work</h3>
        </div>
        <span className="font-mono text-[10px] tracking-[0.12em] text-[var(--muted-foreground)]">REQUIRED *</span>
      </div>

      <div className="absolute left-[-9999px] top-auto size-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </div>

      <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor="contact-name" className="text-sm font-medium text-[var(--foreground)]">Name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            maxLength={100}
            required
            placeholder="Your name"
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClassName(Boolean(errors.name))}
          />
          {errors.name ? <p id="contact-name-error" className="mt-2 text-xs leading-5 text-[#f28b82]">{errors.name}</p> : null}
        </div>

        <div className="min-w-0">
          <label htmlFor="contact-contact" className="text-sm font-medium text-[var(--foreground)]">Email or Telegram *</label>
          <input
            id="contact-contact"
            name="contact"
            type="text"
            autoComplete="email"
            maxLength={150}
            required
            placeholder="you@example.com or @username"
            value={values.contact}
            onChange={(event) => updateValue("contact", event.target.value)}
            aria-invalid={Boolean(errors.contact)}
            aria-describedby={errors.contact ? "contact-contact-error" : undefined}
            className={inputClassName(Boolean(errors.contact))}
          />
          {errors.contact ? <p id="contact-contact-error" className="mt-2 text-xs leading-5 text-[#f28b82]">{errors.contact}</p> : null}
        </div>

        <div className="min-w-0">
          <label htmlFor="contact-company" className="text-sm font-medium text-[var(--foreground)]">Company</label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={150}
            placeholder="Company or project name"
            value={values.company}
            onChange={(event) => updateValue("company", event.target.value)}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            className={inputClassName(Boolean(errors.company))}
          />
          {errors.company ? <p id="contact-company-error" className="mt-2 text-xs leading-5 text-[#f28b82]">{errors.company}</p> : null}
        </div>

        <div className="min-w-0">
          <label htmlFor="contact-project-type" className="text-sm font-medium text-[var(--foreground)]">Project Type *</label>
          <select
            id="contact-project-type"
            name="projectType"
            required
            value={values.projectType}
            onChange={(event) => updateValue("projectType", event.target.value)}
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={errors.projectType ? "contact-project-type-error" : undefined}
            className={inputClassName(Boolean(errors.projectType))}
          >
            <option value="" disabled>Select a project type</option>
            {projectTypes.map((projectType) => <option key={projectType} value={projectType}>{projectType}</option>)}
          </select>
          {errors.projectType ? <p id="contact-project-type-error" className="mt-2 text-xs leading-5 text-[#f28b82]">{errors.projectType}</p> : null}
        </div>

        <div className="min-w-0">
          <label htmlFor="contact-budget" className="text-sm font-medium text-[var(--foreground)]">Budget *</label>
          <select
            id="contact-budget"
            name="budget"
            required
            value={values.budget}
            onChange={(event) => updateValue("budget", event.target.value)}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "contact-budget-error" : undefined}
            className={inputClassName(Boolean(errors.budget))}
          >
            <option value="" disabled>Select an estimated budget</option>
            {budgetOptions.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
          {errors.budget ? <p id="contact-budget-error" className="mt-2 text-xs leading-5 text-[#f28b82]">{errors.budget}</p> : null}
        </div>

        <div className="min-w-0">
          <label htmlFor="contact-project-url" className="text-sm font-medium text-[var(--foreground)]">Current website / project URL</label>
          <input
            id="contact-project-url"
            name="projectUrl"
            type="url"
            inputMode="url"
            maxLength={500}
            placeholder="https://..."
            value={values.projectUrl}
            onChange={(event) => updateValue("projectUrl", event.target.value)}
            aria-invalid={Boolean(errors.projectUrl)}
            aria-describedby={errors.projectUrl ? "contact-project-url-error" : undefined}
            className={inputClassName(Boolean(errors.projectUrl))}
          />
          {errors.projectUrl ? <p id="contact-project-url-error" className="mt-2 text-xs leading-5 text-[#f28b82]">{errors.projectUrl}</p> : null}
        </div>

        <div className="min-w-0 sm:col-span-2">
          <label htmlFor="contact-description" className="text-sm font-medium text-[var(--foreground)]">What do you want to build or improve? *</label>
          <textarea
            id="contact-description"
            name="description"
            required
            minLength={20}
            maxLength={4000}
            rows={6}
            placeholder="Describe the problem, current process and what you would like the finished system to do."
            value={values.description}
            onChange={(event) => updateValue("description", event.target.value)}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "contact-description-error" : "contact-description-hint"}
            className={cn(inputClassName(Boolean(errors.description)), "resize-y")}
          />
          {errors.description ? (
            <p id="contact-description-error" className="mt-2 text-xs leading-5 text-[#f28b82]">{errors.description}</p>
          ) : (
            <p id="contact-description-hint" className="mt-2 text-xs leading-5 text-[var(--muted-foreground)]">At least 20 characters.</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-[var(--muted-foreground)]">Your project details are used only to review and respond to your request.</p>
        <Button type="submit" disabled={isSubmitting} className="w-full shrink-0 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto">
          {isSubmitting ? "Sending..." : "Send Project"}
        </Button>
      </div>

      {status ? (
        <p
          aria-live="polite"
          className={cn(
            "mt-5 rounded-lg border px-3 py-3 text-sm leading-6",
            status.type === "success"
              ? "border-[color:color-mix(in_srgb,var(--accent)_48%,var(--border))] bg-[color:color-mix(in_srgb,var(--accent)_8%,transparent)] text-[var(--foreground)]"
              : "border-[#f28b82] bg-[color:color-mix(in_srgb,#f28b82_8%,transparent)] text-[#ffc7c2]",
          )}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
