"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, "", message].join("\n");
    const mailto = `mailto:info@shishirconsultants.in?subject=${encodeURIComponent(`New Enquiry from ${name || "Website"}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    form.reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name<input type="text" name="name" placeholder="Your name" required /></label>
        <label>Email<input type="email" name="email" placeholder="Your email" required /></label>
        <label>Phone<input type="tel" name="phone" placeholder="Your phone" required /></label>
        <label>Message<textarea name="message" placeholder="Tell us about your project" required /></label>
        <button type="submit">Send Message ↗</button>
      </form>
      {sent && <p className="contact-form-status">Thanks! Your email app should now open with your message ready to send.</p>}
    </>
  );
}
