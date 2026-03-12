"use client";

import {
  Heart,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  Github,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Why Me", href: "#why-work" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Mail className="w-4 h-4" />,
      href: "mailto:zeshantahir105@gmail.com",
      label: "Email",
    },
    {
      icon: <Linkedin className="w-4 h-4" />,
      href: "https://www.linkedin.com/in/muhammad-zeshan-tahir-638423179/",
      label: "LinkedIn",
    },
    {
      icon: <MessageCircle className="w-4 h-4" />,
      href: "https://wa.me/923025250333",
      label: "WhatsApp",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      href: "https://drive.google.com/drive/folders/1sbixgZeyICXZ87MwEzgf4nM_ciDufZYF?usp=drive_link",
      label: "Resume",
    },
  ];

  return (
    <footer className="relative border-t border-neutral-200 bg-neutral-50/80">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <h3 className="text-xl font-bold mb-3">
                <span className="gradient-text">Zeshan Tahir</span>
              </h3>
              <p className="text-sm text-neutral-600 mb-4 max-w-sm">
                Full Stack Developer with 4 years of experience crafting
                high-performance web applications. Let&apos;s build something
                amazing together.
              </p>
              <div className="flex items-center gap-2 text-neutral-500 text-sm">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>Islamabad, Pakistan • Available Worldwide</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-semibold text-neutral-800 mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-violet-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-4">
              <h4 className="text-sm font-semibold text-neutral-800 mb-4">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="p-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent mb-8" />

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-neutral-500">
              © {currentYear} Muhammad Zeshan Tahir. All rights reserved.
            </p>
            <p className="text-xs text-neutral-500 flex items-center gap-1.5">
              Built with{" "}
              <Heart className="w-3 h-3 text-rose-500 fill-current" /> using
              Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
