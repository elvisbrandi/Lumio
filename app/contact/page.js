"use client";

import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {sent ? (
        <p className="text-green-600 font-medium">
          Thanks for reaching out! We'll get back to you within 24 hours.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-4"
        >
          <input placeholder="Your Name" required className="w-full border rounded-xl px-4 py-3" />
          <input type="email" placeholder="Your Email" required className="w-full border rounded-xl px-4 py-3" />
          <textarea placeholder="Your Message" required rows={4} className="w-full border rounded-xl px-4 py-3" />
          <button className="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-3 rounded-full transition">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
