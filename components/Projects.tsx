"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  X,
  ZoomIn,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
} from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  contributions: string[];
  link: string;
  images: string[];
  accent: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<{
    images: string[];
    title: string;
    currentIndex: number;
  } | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      title: "NutriDIY",
      subtitle: "Health & Wellness",
      description:
        "AI-powered nutrition platform helping thousands create personalized meal plans. Features real-time analytics and data-driven health insights.",
      tech: ["MongoDB", "Express", "React", "Node.js", "AWS S3"],
      contributions: [
        "Built entire platform from scratch",
        "Automated CI/CD pipeline",
        "Real-time analytics dashboard",
      ],
      link: "https://nutridiy.com/",
      images: ["/projects/nutridiy.png"],
      accent: "from-emerald-500 to-teal-500",
    },
    {
      title: "Lua Group",
      subtitle: "Corporate Platform",
      description:
        "High-performance corporate website with stunning visuals, optimized SEO, and blazing-fast load times under 2 seconds.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
      contributions: [
        "Pixel-perfect responsive design",
        "Database architecture",
        "Cloud infrastructure setup",
      ],
      link: "http://luagroup.com",
      images: [
        "/projects/luagroup.png",
        "/projects/Lua (1).png",
        "/projects/Lua (2).png",
        "/projects/Lua (3).png",
        "/projects/Lua (4).png",
        "/projects/Lua (5).png",
        "/projects/Lua (6).png",
        "/projects/Lua (7).png",
        "/projects/Lua (8).png",
      ],
      accent: "from-blue-500 to-cyan-500",
    },
    {
      title: "JomSmart",
      subtitle: "eCommerce",
      description:
        "Feature-rich eCommerce platform processing thousands of orders. Includes smart cart, payment integration, and inventory management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "CI/CD"],
      contributions: [
        "Full eCommerce architecture",
        "Automated deployment pipeline",
        "Cloud storage optimization",
      ],
      link: "http://www.jomsmart.com",
      images: [
        "/projects/Jomsmart (2).png",
        "/projects/Jomsmart (3).png",
        "/projects/Jomsmart (4).png",
        "/projects/Jomsmart (5).png",
        "/projects/Jomsmart (6).png",
        "/projects/Jomsmart (7).png",
      ],
      accent: "from-violet-500 to-purple-500",
    },
    {
      title: "Barena",
      subtitle: "Real Estate",
      description:
        "Modern property marketplace with advanced search, interactive maps, and admin dashboard for seamless property management.",
      tech: ["MongoDB", "Express", "React", "Node.js", "AWS S3"],
      contributions: [
        "Smart property search engine",
        "Interactive filtering system",
        "Admin management portal",
      ],
      link: "https://barena.altitudeprojects.net/",
      images: ["/projects/Barena (1).png"],
      accent: "from-orange-500 to-amber-500",
    },
    {
      title: "MARi",
      subtitle: "EdTech LMS",
      description:
        "Enterprise learning platform serving 10,000+ students. GraphQL-powered for lightning-fast data fetching and real-time progress tracking.",
      tech: ["React", "NestJS", "TypeScript", "GraphQL", "Firebase"],
      contributions: [
        "Designed GraphQL API layer",
        "Firebase & GCP integration",
        "Real-time notifications",
      ],
      link: "http://mari.com",
      images: [
        "/projects/mari.png",
        "/projects/MARi (1).png",
        "/projects/MARi (2).png",
        "/projects/MARi (3).png",
        "/projects/MARi (4).png",
        "/projects/MARi (5).png",
      ],
      accent: "from-pink-500 to-rose-500",
    },
    {
      title: "Ayeron",
      subtitle: "Business Platform",
      description:
        "Enterprise business application with advanced workflows, comprehensive reporting, and seamless integrations.",
      tech: ["PHP", "JavaScript", "MySQL", "REST API"],
      contributions: [
        "Full-stack development",
        "Custom business logic",
        "Database optimization",
      ],
      link: "#",
      images: [
        "/projects/ayeron.png",
        "/projects/Ayeron (1).png",
        "/projects/Ayeron (2).png",
        "/projects/Ayeron (3).png",
        "/projects/Ayeron (4).png",
      ],
      accent: "from-cyan-500 to-blue-500",
    },
    {
      title: "MishMash",
      subtitle: "Custom Solution",
      description:
        "Bespoke business application with complex workflows, role-based access, and detailed reporting capabilities.",
      tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      contributions: [
        "Custom business logic",
        "Responsive interface",
        "Optimized database queries",
      ],
      link: "#",
      images: ["/projects/mishmash.png", "/projects/MishMash (1).png"],
      accent: "from-indigo-500 to-blue-500",
    },
  ];

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth * 0.28;
      carouselRef.current.scrollTo({
        left: index * (cardWidth + 16),
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : projects.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < projects.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth * 0.28 + 16;
      const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth);
      setActiveIndex(Math.max(0, Math.min(newIndex, projects.length - 1)));
    }
  };

  const openGallery = (project: Project, startIndex: number = 0) => {
    setSelectedProject({
      images: project.images,
      title: project.title,
      currentIndex: startIndex,
    });
  };

  const navigateGallery = useCallback((direction: "prev" | "next") => {
    setSelectedProject((prev) => {
      if (!prev) return null;
      const { images, currentIndex } = prev;
      let newIndex: number;
      if (direction === "prev") {
        newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
      } else {
        newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
      }
      return { ...prev, currentIndex: newIndex };
    });
  }, []);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      } else if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, navigateGallery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-violet-400 text-sm font-medium tracking-wider uppercase mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-100 mb-4">
            Projects That Deliver Results
          </h2>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto">
            From concept to deployment — real products serving thousands of
            users
          </p>
        </div>

        {/* Navigation Buttons - Desktop */}
        <div className="hidden md:flex justify-end gap-3 mb-6 max-w-7xl mx-auto">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-violet-500/50 transition-all duration-300"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onScroll={handleScroll}
          >
            {/* Spacer for centering first card */}
            <div className="flex-shrink-0 w-[1%] md:w-[2%]" />

            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[75%] sm:w-[45%] md:w-[32%] lg:w-[28%] snap-start"
              >
                <div className="group relative bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden hover:border-violet-500/30 transition-colors duration-200 h-full">
                  {/* Gradient accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.accent} opacity-80`}
                  />

                  {/* Image Section */}
                  <div
                    className="relative h-36 overflow-hidden cursor-pointer"
                    onClick={() => openGallery(project)}
                  >
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} Preview`}
                      fill
                      className="object-cover object-top"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />

                    {/* Floating badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-2 py-1 bg-gradient-to-r ${project.accent} rounded-full text-[10px] text-white font-semibold shadow-lg`}
                      >
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Image count badge */}
                    {project.images.length > 1 && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full flex items-center gap-1">
                        <ImageIcon className="w-3 h-3 text-white" />
                        <span className="text-[10px] text-white font-medium">
                          {project.images.length}
                        </span>
                      </div>
                    )}

                    {/* Zoom Icon */}
                    <div className="absolute bottom-3 right-3 p-1.5 bg-black/40 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ZoomIn className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4">
                    {/* Title */}
                    <h3 className="text-base font-bold text-neutral-100 mb-1.5 group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-500 text-xs mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] text-neutral-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] text-neutral-600">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Link */}
                    {project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors group/btn"
                      >
                        View Project
                        <ArrowUpRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="text-xs text-neutral-600">
                        Private Project
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Spacer for centering last card */}
            <div className="flex-shrink-0 w-[1%] md:w-[2%]" />
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 bg-violet-500"
                  : "w-2 bg-neutral-700 hover:bg-neutral-600"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="md:hidden text-center text-neutral-600 text-sm mt-4">
          ← Swipe to explore →
        </p>
      </div>

      {/* Gallery Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors z-10"
            onClick={() => setSelectedProject(null)}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="absolute top-6 left-6 z-10">
            <p className="text-neutral-300 text-lg font-medium">
              {selectedProject.title}
            </p>
            <p className="text-neutral-500 text-sm">
              {selectedProject.currentIndex + 1} /{" "}
              {selectedProject.images.length}
            </p>
          </div>

          {/* Navigation Arrows */}
          {selectedProject.images.length > 1 && (
            <>
              <button
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-violet-600 text-white transition-all duration-200 z-20 border border-white/10 hover:border-violet-500"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery("prev");
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-violet-600 text-white transition-all duration-200 z-20 border border-white/10 hover:border-violet-500"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateGallery("next");
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Main Image */}
          <div
            className="relative w-full max-w-5xl max-h-[80vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedProject.images[selectedProject.currentIndex]}
              alt={`${selectedProject.title} - Image ${selectedProject.currentIndex + 1}`}
              fill
              className="object-contain rounded-xl"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>

          {/* Thumbnail Strip */}
          {selectedProject.images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-xl max-w-[90%] overflow-x-auto">
              {selectedProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject({
                      ...selectedProject,
                      currentIndex: idx,
                    });
                  }}
                  className={`relative w-16 h-10 rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 ${
                    idx === selectedProject.currentIndex
                      ? "ring-2 ring-violet-500 opacity-100"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
