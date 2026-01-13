"use client";

import { motion } from "framer-motion";
import { ExternalLink, Building2, Rocket, Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  icon: typeof Building2;
  description: string[];
  technologies: string[];
  url?: string;
}

const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "Prozis",
    location: "Porto, Portugal",
    period: "July 2025 — Present",
    icon: Building2,
    description: [
      "Core developer on Prozis Hub, one of 2 largest internal systems at Europe's leading sports nutrition company",
      "Building enterprise PLM software with Vue3/Spring Boot serving 1,000+ daily users",
      "Entrusted with production deployment responsibilities typically reserved for senior engineers",
      "Reduced data processing time by 35% through query optimization and indexing strategies",
    ],
    technologies: ["Vue3", "Spring Boot", "SQL Server", "JPA", "Liquibase"],
  },
  {
    title: "Founder & Lead Developer",
    company: "Flavibyte",
    location: "Chaves, Portugal",
    period: "Jan 2025 — Present",
    icon: Rocket,
    description: [
      "Founded software company delivering custom full-stack solutions for SMB clients",
      "Acquired 2 clients through direct outreach and referrals",
      "Building Gráfica Sinal: e-commerce platform with React/Next.js, Node.js backend, and AWS infrastructure",
      "Developing Porfía dos Leitões: restaurant reservation system with real-time availability and analytics",
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    title: "Software Developer Intern",
    company: "BRAINSTORM Labs",
    location: "Remote",
    period: "Jan 2025 — June 2025",
    icon: Briefcase,
    description: [
      "Built real-time video conferencing platform with React and Agora.io SDK",
      "Achieved 99.5% uptime supporting 10+ concurrent users with adaptive bitrate streaming",
      "Designed PostgreSQL schema and Node.js/Express backend",
      "Containerized application with Docker for consistent deployment",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Agora.io"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Experience
          </h2>
          <p className="text-3xl font-bold mb-12">Where I&apos;ve Worked</p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:glow">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit">
                      <exp.icon size={24} />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg flex items-center gap-2">
                            {exp.title}
                            {exp.url && (
                              <a
                                href={exp.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent transition-colors"
                              >
                                <ExternalLink size={14} />
                              </a>
                            )}
                          </h3>
                          <p className="text-accent font-medium">
                            {exp.company}
                            <span className="text-muted-foreground font-normal">
                              {" "}
                              · {exp.location}
                            </span>
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>

                      <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-accent mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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
