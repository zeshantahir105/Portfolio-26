"use client";

import Image from "next/image";
import {
  MapPin,
  Linkedin,
  FileText,
  ChevronDown,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Static background orbs - no animations for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-fuchsia-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-slide-up">
                <span className="text-neutral-900">I Build</span>
                <br />
                <span className="gradient-text">Digital Experiences</span>
              </h1>

              {/* Name */}
              <div
                className="mb-8 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <p className="text-xl md:text-2xl text-neutral-600">
                  Hey, I&apos;m{" "}
                  <span className="text-neutral-900 font-semibold">Zeshan</span>{" "}
                  — a solution-driven Full Stack Web Developer
                </p>
              </div>

              {/* Description */}
              <div
                className="max-w-2xl mx-auto lg:mx-0 space-y-4 mb-12 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-lg text-neutral-600 leading-relaxed">
                  I design the{" "}
                  <span className="text-violet-400 font-medium">
                    architecture, data flow, and user experience
                  </span>{" "}
                  while using AI as a power tool to move faster, not a
                  replacement for careful engineering.
                </p>
                <p className="text-neutral-500 flex items-center justify-center lg:justify-start gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  4 years shipping production-ready products using React,
                  Next.js, Node.js &amp; TypeScript.
                </p>
              </div>

              {/* Location */}
              <div
                className="flex items-center justify-center lg:justify-start gap-2 mb-10 text-neutral-600 animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  Islamabad, Pakistan • Remote Worldwide
                </span>
              </div>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up"
                style={{ animationDelay: "0.5s" }}
              >
                <a
                  href="#contact"
                  className="group flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-400/25"
                >
                  Let&apos;s Talk
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 hover:border-violet-300 text-neutral-700 hover:text-neutral-900 rounded-lg font-medium transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1sbixgZeyICXZ87MwEzgf4nM_ciDufZYF?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 hover:border-violet-300 text-neutral-700 hover:text-neutral-900 rounded-lg font-medium transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className="flex-shrink-0 order-1 lg:order-2 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                {/* Glow effect behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 blur-3xl scale-110" />

                {/* Image container - large fixed size */}
                <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[450px]">
                  <Image
                    src="/hero-image.png"
                    alt="Zeshan - Full Stack Developer"
                    width={450}
                    height={675}
                    className="object-contain w-full h-auto -scale-x-100"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <a
          href="#skills"
             className="flex flex-col items-center gap-2 text-neutral-500 hover:text-neutral-700 transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
