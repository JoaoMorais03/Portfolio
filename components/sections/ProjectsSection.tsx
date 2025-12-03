"use client";

import { forwardRef, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Layers, Smartphone, ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "fullstack" | "mobile";
  status: "completed" | "in-progress";
  website?: string;
  github?: string;
  highlights: string[];
}

const ProjectsSection = forwardRef<HTMLElement>(function ProjectsSection(props, ref) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<"all" | "fullstack" | "mobile">("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "Nexus Finance",
      description: "Full-stack personal finance dashboard for tracking investments",
      longDescription: "Built financial dashboard for tracking stock and cryptocurrency portfolios with real-time price updates via Alpha Vantage and CoinGecko APIs",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
      tags: ["Next.js", "TypeScript", "Supabase", "TanStack Query", "Clerk", "Zod"],
      category: "fullstack",
      status: "completed",
      website: "https://www.nexus-finance.live",
      highlights: [
        "Real-time price updates via Alpha Vantage & CoinGecko APIs",
        "Secure OAuth with Clerk (Google, GitHub) and MFA",
        "Type-safe API layer using Zod schema validation",
      ],
    },
    {
      title: "Hospital Management System",
      description: "Healthcare platform with role-based access control",
      longDescription: "Led team of 4 developers building healthcare platform with role-based access control for doctors, nurses, and administrators",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Docker", "Jest"],
      category: "fullstack",
      status: "completed",
      highlights: [
        "Role-based access for doctors, nurses, and admins",
        "Real-time appointment scheduling with conflict detection",
        "Comprehensive test suite with Jest following HIPAA practices",
      ],
    },
    {
      title: "FamilySync",
      description: "Native iOS family management app with offline-first architecture",
      longDescription: "Developing native iOS family management app with offline-first architecture using Core Data and Firebase real-time sync",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
      tags: ["Swift", "SwiftUI", "Firebase", "Core Data"],
      category: "mobile",
      status: "in-progress",
      highlights: [
        "Offline-first architecture with Core Data",
        "Firebase real-time sync",
        "Push notifications via Firebase Cloud Messaging",
      ],
    },
    {
      title: "Video Conferencing Platform",
      description: "Real-time video platform at BRAINSTORM Labs",
      longDescription: "Built real-time video conferencing platform with React and Agora.io SDK supporting 10+ concurrent users",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Agora.io", "PostgreSQL", "Docker", "Node.js"],
      category: "fullstack",
      status: "completed",
      highlights: [
        "99.5% uptime with adaptive bitrate streaming",
        "10+ concurrent users supported",
        "PostgreSQL schema design & Docker containerization",
      ],
    },
    {
      title: "Queima25",
      description: "Interactive drinking game iOS app",
      longDescription: "An interactive drinking game iOS app featuring multiple game modes including timed challenges and never-have-I-ever scenarios",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
      tags: ["Swift", "SwiftUI", "iOS"],
      category: "mobile",
      status: "completed",
      highlights: [
        "Multiple game modes",
        "Timed challenges",
        "Custom rules engine",
      ],
    },
  ];

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const categories = [
    { id: "all", label: "All Projects", icon: <Layers className="h-4 w-4" /> },
    { id: "fullstack", label: "Full Stack", icon: <ExternalLink className="h-4 w-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="h-4 w-4" /> },
  ];

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen px-4 py-20 snap-start overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-b from-blue-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-gradient-to-t from-purple-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-lg mx-auto"
          >
            A selection of projects showcasing my skills in full-stack and mobile development
          </motion.p>
        </div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id as typeof activeCategory)}
              className="gap-2"
            >
              {category.icon}
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="group overflow-hidden flex flex-col h-full card-highlight">
                  {/* Image */}
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      {project.status === "in-progress" ? (
                        <Badge className="bg-amber-500/90 text-white border-0">
                          In Progress
                        </Badge>
                      ) : (
                        <Badge className="bg-emerald-500/90 text-white border-0">
                          Completed
                        </Badge>
                      )}
                    </div>

                    {/* Hover actions */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredProject === project.title ? 1 : 0,
                        y: hoveredProject === project.title ? 0 : 20,
                      }}
                      className="absolute bottom-3 left-3 right-3 flex gap-2"
                    >
                      {project.website && (
                        <Button size="sm" className="gap-1" asChild>
                          <a href={project.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button size="sm" variant="secondary" className="gap-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </Button>
                      )}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1 mb-4">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
                          <span className="text-primary">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <Badge variant="outline" className="text-xs px-2 py-0">
                          +{project.tags.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/JoaoMorais03"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Github className="h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});

export default ProjectsSection;
