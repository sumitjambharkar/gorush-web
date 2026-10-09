"use client";

import { useEffect, useState, type FocusEvent, type FormEvent } from "react";

const TOPICS = [
  "Customer support",
  "Become a courier",
  "Delivery partner support",
  "Business enquiry",
  "Technical / API support",
  "Report a safety concern",
  "Complaint",
];

// Lets links like /contact?type=business preselect a topic
const TYPE_MAP: Record<string, string> = {
  customer: "Customer support",
  courier: "Become a courier",
  partner: "Delivery partner support",
  business: "Business enquiry",
  api: "Technical / API support",
  safety: "Report a safety concern",
};

type Field = "name" | "email" | "type" | "message";
type Control = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export default function ContactForm() {
  const [invalid, setInvalid] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState("");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("type");
    if (t && TYPE_MAP[t]) setTopic(TYPE_MAP[t]);
  }, []);

  const check = (el: Control) => {
    const ok = el.checkValidity();
    setInvalid((prev) => ({ ...prev, [el.name]: !ok }));
    return ok;
  };

  const onBlur = (e: FocusEvent<Control>) => {
    if (e.target.value) check(e.target);
  };

  const fieldClass = (name: Field) => (invalid[name] ? "field invalid" : "field");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    let firstBad: Control | null = null;
    form.querySelectorAll<Control>("[required]").forEach((el) => {
      if (!check(el) && !firstBad) firstBad = el;
    });
    if (firstBad) {
      (firstBad as Control).focus();
      setStatus("");
      return;
    }

    // TODO: send the form data to your backend or an API route here.
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    setStatus(`Message sent. We'll reply to ${email} as soon as we can.`);
    form.reset();
    setTopic("");
    setInvalid({});
  };

  return (
    <form id="contactForm" noValidate onSubmit={onSubmit}>
      <div className="field-row">
        <div className={fieldClass("name")}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required onBlur={onBlur} />
          <p className="error">Enter your name.</p>
        </div>
        <div className={fieldClass("email")}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required onBlur={onBlur} />
          <p className="error">Enter a valid email address, like name@example.com.</p>
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="phone">
            Mobile number <span className="opt">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field">
          <label htmlFor="order">
            Order number <span className="opt">(optional)</span>
          </label>
          <input id="order" name="order" type="text" placeholder="e.g. GR-2048" />
        </div>
      </div>
      <div className={fieldClass("type")}>
        <label htmlFor="type">What do you need help with?</label>
        <select
          id="type"
          name="type"
          required
          value={topic}
          onChange={(e) => {
            setTopic(e.target.value);
            if (invalid.type) check(e.target);
          }}
          onBlur={onBlur}
        >
          <option value="">Choose a topic</option>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <p className="error">Choose a topic so we can send your message to the right team.</p>
      </div>
      <div className={fieldClass("message")}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what happened or what you'd like to know."
          required
          onBlur={onBlur}
        />
        <p className="error">Write a short message so we know how to help.</p>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Send message
      </button>
      <p className={status ? "form-status show" : "form-status"} role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
