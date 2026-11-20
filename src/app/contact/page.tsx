"use client";

import type { FormEvent } from "react";
import { WorshipPanel } from "@/components/WorshipPanel";

function submitToInbox(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();
  const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n");
  const subject = name ? `Booking from ${name}` : "Booking enquiry";
  window.location.href = `mailto:info@theofficesoundz.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const fieldClass =
  "mt-2 w-full border-b border-black bg-transparent py-2 text-[10px] text-black outline-none placeholder:text-black/40";

export default function ContactPage() {
  return (
    <WorshipPanel currentHref="/contact">
      <div className="px-[10px] pb-2 text-[10px] leading-[1.6]">
        <p>
          <a
            href="mailto:info@theofficesoundz.com"
            className="text-[14px] leading-none uppercase"
          >
            info@theofficesoundz.com
          </a>
        </p>
        <p className="mt-4 text-[14px] leading-none uppercase">Leeds</p>
        <p className="mt-4">
          <a
            href="https://www.instagram.com/theofficesoundz/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase hover:opacity-60"
          >
            Instagram
          </a>
        </p>
        <p className="mt-2">
          <a
            href="https://chat.whatsapp.com/J10JggUuroq3DJrfS6hxgT?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase hover:opacity-60"
          >
            WhatsApp
          </a>
        </p>

        <form className="mt-8 space-y-5" onSubmit={submitToInbox}>
          <label className="block uppercase">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className={fieldClass}
            />
          </label>
          <label className="block uppercase">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className={fieldClass}
            />
          </label>
          <label className="block uppercase">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your booking or ideas"
              className={`${fieldClass} resize-none`}
            />
          </label>
          <button
            type="submit"
            className="border border-black px-[2em] py-[10px] leading-[2.5em] uppercase transition-colors duration-300 ease-linear hover:bg-black hover:text-white"
          >
            Send message
          </button>
        </form>
      </div>
    </WorshipPanel>
  );
}
