"use client";

import {
  CheckCircle2,
  Award,
  MessageSquare,
  Clock,
  Users,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function WhyWorkWithMe() {
  const reasons = [
    {
      icon: <Award className="w-5 h-5" />,
      text: "4 years building production systems",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      text: "Code that scales & stands the test of time",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "Clear communication, zero surprises",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Deadlines met, every single time",
    },
    {
      icon: <Users className="w-5 h-5" />,
      text: "Team player & mentor to junior devs",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Obsessed with performance optimization",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "AI-enhanced development workflow",
    },
  ];

  const stats = [
    { value: "4+", label: "Years of Experience" },
    { value: "25+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="why-work" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
              The Difference
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
              Why Clients Choose Me
            </h2>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto">
              More than code — I deliver results that move the needle
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                  {reason.icon}
                </div>
                <p className="text-sm text-neutral-300 font-medium">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-neutral-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
