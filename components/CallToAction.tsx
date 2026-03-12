"use client";

import {
  Mail,
  FolderOpen,
  Linkedin,
  ArrowRight,
  FileText,
  MessageCircle,
} from "lucide-react";

export default function CallToAction() {
  const contactCards = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "zeshantahir105@gmail.com",
      href: "mailto:zeshantahir105@gmail.com",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      title: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/",
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: "WhatsApp",
      value: "+92 302 5250333",
      href: "https://wa.me/923025250333",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Resume",
      value: "Download CV",
      href: "https://drive.google.com/drive/folders/1sbixgZeyICXZ87MwEzgf4nM_ciDufZYF?usp=drive_link",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Box */}
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-violet-600/15 via-purple-600/10 to-fuchsia-600/15 border border-white/10 overflow-hidden">
            <div className="relative z-10 text-center">
              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
                Ready to Build Your
                <span className="gradient-text"> Next Big Thing?</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
                Let&apos;s turn your vision into a product users love. From MVP
                to scale — I&apos;ve got you covered.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <a
                  href="mailto:zeshantahir105@gmail.com"
                  className="group flex items-center gap-2 px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me Today
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="https://drive.google.com/drive/u/0/folders/1rVK8wrsdExz48sofqZyFO6Ejty__9phD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-neutral-200 rounded-xl font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <FolderOpen className="w-5 h-5" />
                  View My Projects
                </a>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-violet-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://drive.google.com/drive/folders/1sbixgZeyICXZ87MwEzgf4nM_ciDufZYF?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-violet-400 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">Resume</span>
                </a>
                <a
                  href="https://wa.me/923025250333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-violet-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {contactCards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  card.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors duration-200 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                  {card.icon}
                </div>
                <h3 className="text-sm font-medium text-neutral-200 mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-neutral-500 truncate">
                  {card.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
