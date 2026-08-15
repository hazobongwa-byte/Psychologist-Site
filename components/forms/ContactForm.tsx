"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactValues } from "@/lib/validations";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactValues) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Contact enquiry (placeholder):", values);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="card-premium p-8">
        <h2 className="font-display text-2xl">Thank you</h2>
        <p className="mt-3 text-slate-muted">
          Your message has been noted. This demo form does not send email yet —
          connect your inbox or a form service before launch. We look forward to
          welcoming you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card-premium space-y-5 p-8" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          className="mt-2 w-full rounded-2xl border border-sand bg-white/80 px-4 py-3"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name ? <p className="mt-1 text-sm text-terracotta">{errors.name.message}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-2 w-full rounded-2xl border border-sand bg-white/80 px-4 py-3"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email ? <p className="mt-1 text-sm text-terracotta">{errors.email.message}</p> : null}
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-semibold">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          className="mt-2 w-full rounded-2xl border border-sand bg-white/80 px-4 py-3"
          autoComplete="tel"
          {...register("phone")}
        />
        {errors.phone ? <p className="mt-1 text-sm text-terracotta">{errors.phone.message}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold">
          How can I support you?
        </label>
        <textarea
          id="message"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-sand bg-white/80 px-4 py-3"
          {...register("message")}
        />
        {errors.message ? <p className="mt-1 text-sm text-terracotta">{errors.message.message}</p> : null}
      </div>
      <button type="submit" className="btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
