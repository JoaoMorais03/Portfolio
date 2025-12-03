"use client";

import { forwardRef, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "current" | "past";
  description: string[];
  technologies: string[];
}

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  details: string;
}

const ExperienceSection = forwardRef<HTMLElement>(function ExperienceSection(props, ref) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const experiences: Experience[] = [
    {
      title: "Full-Stack Developer",
      company: "Prozis",
      location: "Porto, Portugal",
      period: "July 2025 - Present",
      type: "current",
      description: [
        "Core developer on Prozis Hub, one of the 2 largest internal systems at Europe's leading sports nutrition company, building enterprise PLM software with Vue3/Spring Boot serving 1000+ daily users",
        "Entrusted with production deployment responsibilities typically reserved for senior engineers, independently shipping features across product development, QA, and operations teams",
        "Architected RESTful APIs and optimized SQL Server queries, reducing data processing time by 35% through JPA native queries, indexing strategies, and Liquibase migrations",
        "Engineered high-performance systems handling 200+ concurrent requests with sub-200ms response times; led code reviews and helped senior developers on architecture patterns",
      ],
      technologies: ["Vue3", "Spring Boot", "SQL Server", "REST APIs", "Liquibase", "Docker"],
    },
    {
      title: "Software Developer Intern",
      company: "BRAINSTORM Labs",
      location: "Remote",
      period: "Jan 2025 - June 2025",
      type: "past",
      description: [
        "Built real-time video conferencing platform with React and Agora.io SDK supporting 10+ concurrent users with 99.5% uptime and adaptive bitrate streaming",
        "Designed PostgreSQL schema and Node.js/Express backend; containerized with Docker",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Agora.io", "Express.js"],
    },
  ];

  const education: Education = {
    degree: "Bachelor of Science in Computer Engineering",
    school: "Instituto Superior de Engenharia do Porto (ISEP)",
    location: "Porto, Portugal",
    period: "Sept 2021 - Sept 2025",
    details: "Courses include Web Development, Database Systems, Software Engineering, Data Structures and Algorithms",
  };

  return (
    <section
      ref={ref}
      id="experience"
      className="min-h-screen px-4 py-20 flex items-center snap-start overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-muted/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto w-full">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
          >
            Career Path
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Experience &{" "}
            <span className="gradient-text">Education</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-border" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-muted border border-border">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    {exp.type === "current" && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/30 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-foreground/50"></span>
                      </span>
                    )}
                  </div>

                  <Card className="p-6 glass card-highlight">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-lg font-semibold">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      {exp.type === "current" && (
                        <Badge variant="outline">
                          Current
                        </Badge>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Info */}
          <div className="space-y-6">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>

              <Card className="p-6 glass card-highlight">
                <h4 className="font-semibold mb-1">{education.degree}</h4>
                <p className="text-primary font-medium text-sm mb-3">{education.school}</p>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {education.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {education.period}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{education.details}</p>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="p-6 glass card-highlight">
                <h4 className="font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Portuguese (Native)</Badge>
                      <Badge variant="outline">English (Fluent)</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Work Authorization</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">
                        EU Citizen
                      </Badge>
                      <Badge variant="outline">
                        U.S. Green Card
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Interests</p>
                    <p className="text-sm">
                      Always learning, problem-solving, building high-performance systems
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ExperienceSection;
