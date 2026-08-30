"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { success: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-fit border border-gold px-8 py-3 font-body text-xs uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "sending..." : "send message"}
    </button>
  );
}

const fieldClasses =
  "w-full border-b border-stone bg-transparent py-2 text-sm text-ink outline-none placeholder:text-ink/50 focus-visible:border-gold focus-visible:ring-1 focus-visible:ring-gold";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="flex w-full max-w-md flex-col gap-4">
      <h2 className="font-display text-2xl uppercase text-ink">just drop a line!</h2>
      <p className="text-sm text-ink/70">
        Lorem ipsum dolor sit amet consectetur. Vulputate a vitae eget volutpat integer.
      </p>

      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input id="name" name="name" type="text" placeholder="Name" className={fieldClasses} />
        {state.errors?.name && <p className="mt-1 text-xs text-red-600">{state.errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input id="email" name="email" type="email" placeholder="Email" className={fieldClasses} />
        {state.errors?.email && <p className="mt-1 text-xs text-red-600">{state.errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" placeholder="Phone" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={4}
          className={`${fieldClasses} resize-none`}
        />
        {state.errors?.message && (
          <p className="mt-1 text-xs text-red-600">{state.errors.message}</p>
        )}
      </div>

      <SubmitButton />

      {state.message && (
        <p
          role="status"
          className={`text-sm ${state.success ? "text-green-700" : "text-red-600"}`}
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
