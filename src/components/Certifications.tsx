"use client";

import { useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Certifications() {
  const certificates = [
    {
      id: 1,
      title: "Certification Name 1",
      issuer: "Issuing Organization",
      date: "2024",
      description: "Brief description of what you learned",
      image: "Cert 1",
    },
    {
      id: 2,
      title: "Certification Name 2",
      issuer: "Issuing Organization",
      date: "2024",
      description: "Brief description of what you learned",
      image: "Cert 2",
    },
    {
      id: 3,
      title: "Certification Name 3",
      issuer: "Issuing Organization",
      date: "2023",
      description: "Brief description of what you learned",
      image: "Cert 3",
    },
    {
      id: 4,
      title: "Certification Name 4",
      issuer: "Issuing Organization",
      date: "2023",
      description: "Brief description of what you learned",
      image: "Cert 4",
    },
  ];

  const [expandedCert, setExpandedCert] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          <span className="text-cyan-400">Verified</span> Credentials
        </h2>
        <p className="text-center text-gray-400 mb-16">
          Certifications and achievements that validate my skills
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
              className="relative bg-slate-900 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500 transition cursor-pointer"
            >
              <GlowingEffect
                spread={30}
                glow={false}
                disabled={false}
                proximity={50}
                inactiveZone={0.01}
                borderWidth={1.5}
                className="opacity-50"
              />

              {/* Certificate Image */}
              <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-gray-400">
                {cert.image}
              </div>

              {/* Certificate Info */}
              <div className="p-4">
                <h3 className="font-bold text-white text-sm line-clamp-2">{cert.title}</h3>
                <p className="text-xs text-gray-400 mt-1">{cert.issuer}</p>
                <p className="text-xs text-cyan-400 mt-2">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
