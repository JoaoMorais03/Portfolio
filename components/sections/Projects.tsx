"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Building2,
  Utensils,
  LineChart,
  Heart,
  Gamepad2,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "Gráfica Sinal",
    description:
      "E-commerce platform for a printing company. Features product catalog, shopping cart, payment integration, and admin dashboard for order management.",
    icon: Building2,
    type: "Flavibyte Client",
    technologies: ["Next.js", "React", "Node.js", "AWS", "PostgreSQL"],
    status: "In Development",
    featured: true,
  },
  {
    title: "Porfía dos Leitões",
    description:
      "Restaurant reservation system with real-time table availability, automated email confirmations, and customer analytics dashboard.",
    icon: Utensils,
    type: "Flavibyte Client",
    technologies: ["Next.js", "React", "Node.js", "AWS", "PostgreSQL"],
    status: "In Development",
    featured: true,
  },
  {
    title: "Nexus Finance",
    description:
      "Financial dashboard for tracking stock and cryptocurrency portfolios with real-time price updates, OAuth authentication, and MFA support.",
    icon: LineChart,
    type: "Personal",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Clerk",
      "TanStack Query",
    ],
    url: "https://nexus-finance.live",
    github: "https://github.com/JoaoMorais03/nexus-finance",
    status: "Live",
    featured: true,
  },
  {
    title: "Hospital Management System",
    description:
      "Healthcare platform with role-based access control for doctors, nurses, and administrators. Features appointment scheduling with conflict detection.",
    icon: Users,
    type: "University Project",
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Jest"],
    github: "https://github.com/JoaoMorais03/hospital-management",
    status: "Completed",
    featured: false,
  },
  {
    title: "FamilySync",
    description:
      "Native iOS family management app with offline-first architecture, Firebase real-time sync, and push notifications for task coordination.",
    icon: Heart,
    type: "Personal",
    technologies: ["Swift", "SwiftUI", "Firebase", "Core Data"],
    status: "In Progress",
    featured: false,
  },
  {
    title: "Queima25",
    description:
      "iOS game developed for the university festival, featuring engaging gameplay mechanics and leaderboard integration.",
    icon: Gamepad2,
    type: "Personal",
    technologies: ["Swift", "SpriteKit", "iOS"],
    status: "Completed",
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.02] via-transparent to-accent/[0.02] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Projects
          </h2>
          <p className="text-3xl font-bold mb-12">What I&apos;ve Built</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative ${project.featured ? "md:col-span-1" : ""}`}
              >
                <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:glow flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-accent/10 text-accent">
                      <project.icon size={24} />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-accent transition-colors"
                          aria-label="View on GitHub"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-muted-foreground hover:text-accent transition-colors"
                          aria-label="View live site"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-accent font-medium">
                      {project.type}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500/10 text-green-500"
                          : project.status === "In Development" ||
                              project.status === "In Progress"
                            ? "bg-yellow-500/10 text-yellow-500"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-secondary text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
