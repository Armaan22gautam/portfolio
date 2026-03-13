"use client";

import { useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send email)
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Let&apos;s <span className="text-cyan-400">Connect</span>
        </h2>
        <p className="text-center text-gray-300 mb-16">
          Have a question or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">Email</p>
                  <a
                    href="mailto:armaangautm001@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 transition text-lg"
                  >
                    armaangautm001@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">Phone</p>
                  <a
                    href="tel:+918847466235"
                    className="text-cyan-400 hover:text-cyan-300 transition text-lg"
                  >
                    +91 8847466235
                  </a>
                </div>

                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">Location</p>
                  <p className="text-cyan-400 text-lg">Ropar, Punjab</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Armaan22gautam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-700 hover:bg-cyan-500 flex items-center justify-center transition text-white font-bold"
                >
                  GH
                </a>
                <a
                  href="https://linkedin.com/in/armaan-gautam-936a43297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-700 hover:bg-cyan-500 flex items-center justify-center transition text-white font-bold"
                >
                  LI
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <GlowingEffect
              spread={40}
              glow={false}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={2}
              className="opacity-50"
            />
            <form onSubmit={handleSubmit} className="relative space-y-6 bg-slate-800/50 p-8 rounded-lg border border-slate-700/50">
              <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 text-white rounded-lg focus:border-cyan-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 text-white rounded-lg focus:border-cyan-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 text-white rounded-lg focus:border-cyan-500 focus:outline-none resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition"
            >
              Send Message
            </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
