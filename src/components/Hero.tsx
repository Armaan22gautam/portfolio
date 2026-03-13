"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div>
          <p className="text-lg text-cyan-400 font-semibold mb-2">Nice to meet you!</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            I&apos;m <span className="text-cyan-400">Armaan Gautam</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Based in Ropar, Punjab, I craft exceptional digital experiences—from scalable web applications to Java backend solutions.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold rounded-lg transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-1">
            <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden flex items-center justify-center">
              <Image
                src="/images/profile.jpeg"
                alt="Armaan Gautam"
                width={300}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
