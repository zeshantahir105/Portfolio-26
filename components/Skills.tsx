"use client";

import {
  Code2,
  Server,
  Database,
  Shield,
  Sparkles,
  Layers,
  Globe,
  Zap,
} from "lucide-react";

export default function Skills() {
  const mainTech = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: "▲", color: "from-neutral-200 to-neutral-400" },
    { name: "TypeScript", icon: "𝗧𝗦", color: "from-blue-400 to-blue-600" },
    { name: "Node.js", icon: "⬢", color: "from-green-400 to-emerald-500" },
    { name: "NestJS", icon: "🐱", color: "from-red-400 to-rose-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-indigo-500" },
    { name: "GraphQL", icon: "◈", color: "from-pink-400 to-fuchsia-500" },
  ];

  const categories = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Frontend",
      description: "Building responsive, performant UIs",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "Framer Motion",
      ],
      accent: "violet",
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Backend",
      description: "Scalable server-side solutions",
      skills: [
        "Node.js",
        "NestJS",
        "Express",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "RabbitMQ",
      ],
      accent: "emerald",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Database",
      description: "Data modeling & optimization",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Firebase",
        "Prisma",
        "TypeORM",
      ],
      accent: "amber",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Cloud & DevOps",
      description: "Infrastructure & deployment",
      skills: [
        "AWS",
        "GCP",
        "Docker Containerization",
        "CI/CD",
        "GitHub Actions",
        "Vercel",
      ],
      accent: "cyan",
    },
  ];

  const accentColors: Record<string, string> = {
    violet: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-400 group-hover:bg-amber-500/20",
    cyan: "bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20",
  };

  const borderColors: Record<string, string> = {
    violet: "hover:border-violet-500/30",
    emerald: "hover:border-emerald-500/30",
    amber: "hover:border-amber-500/30",
    cyan: "hover:border-cyan-500/30",
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
              What I Work With
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
              My Tech Arsenal
            </h2>
            <p className="text-lg text-neutral-500 max-w-xl mx-auto">
              A curated set of modern tools I use to build exceptional products
            </p>
          </div>

          {/* Main Tech Showcase - Horizontal scroll on mobile */}
          <div className="mb-16">
            <div className="flex flex-wrap justify-center gap-4">
              {mainTech.map((tech, index) => (
                <div key={index} className="group relative">
                  <div
                    className={`
                    relative px-5 py-3 rounded-2xl bg-neutral-900/80 border border-white/5
                    hover:border-white/20 transition-all duration-300
                    flex items-center gap-3
                  `}
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-neutral-200 font-medium">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories Grid - Bento style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`
                  group relative p-6 rounded-2xl
                  bg-gradient-to-br from-white/[0.03] to-transparent
                  border border-white/5 ${borderColors[category.accent]}
                  transition-colors duration-300
                `}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`
                      w-10 h-10 rounded-xl flex items-center justify-center
                      transition-colors duration-300 ${accentColors[category.accent]}
                    `}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-100">
                        {category.title}
                      </h3>
                      <p className="text-xs text-neutral-500">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-neutral-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats/Highlights */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Layers className="w-4 h-4 text-violet-400" />
                <span className="text-2xl font-bold text-neutral-100">15+</span>
              </div>
              <p className="text-xs text-neutral-500">Technologies</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-2xl font-bold text-neutral-100">4</span>
              </div>
              <p className="text-xs text-neutral-500">Years Experience</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-2xl font-bold text-neutral-100">
                  100%
                </span>
              </div>
              <p className="text-xs text-neutral-500">Code Quality</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-2xl font-bold text-neutral-100">AI</span>
              </div>
              <p className="text-xs text-neutral-500">Enhanced Workflow</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
