"use client";

import { forwardRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Layout,
  Database,
  Terminal,
  Smartphone,
  Server,
  Cloud,
  Zap,
  Code2
} from "lucide-react";
import { useRef } from "react";

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

const AboutSection = forwardRef<HTMLElement>(function AboutSection(props, ref) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const skills: SkillCategory[] = [
    {
      category: "Backend",
      icon: <Server className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-500",
      items: ["Java", "Spring Boot", "Node.js", "Express.js", "Python", "REST APIs", "WebSockets"],
    },
    {
      category: "Frontend",
      icon: <Layout className="h-5 w-5" />,
      color: "from-purple-500 to-pink-500",
      items: ["Vue3", "React", "Next.js", "TypeScript", "JavaScript", "Swift/SwiftUI", "Tailwind CSS"],
    },
    {
      category: "Data & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      color: "from-emerald-500 to-teal-500",
      items: ["PostgreSQL", "SQL Server", "MongoDB", "Docker", "AWS", "Git", "CI/CD", "Liquibase"],
    },
  ];

  const highlights = [
    { icon: <Zap className="h-5 w-5" />, text: "High-performance systems" },
    { icon: <Code2 className="h-5 w-5" />, text: "Clean code advocate" },
    { icon: <Database className="h-5 w-5" />, text: "Database optimization" },
    { icon: <Terminal className="h-5 w-5" />, text: "Enterprise solutions" },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen px-4 py-20 flex items-center snap-start overflow-hidden relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mt-2"
            >
              Passionate About{" "}
              <span className="gradient-text">Building Excellence</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Bio section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-6 md:p-8 h-full glass card-highlight">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <Code2 className="h-4 w-4 text-white" />
                  </span>
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a <strong className="text-foreground">Full-Stack Developer at Prozis</strong>,
                    Europe's leading sports nutrition company. As a core developer on Prozis Hub,
                    I help build enterprise PLM software serving <strong className="text-foreground">1000+ daily users</strong>.
                  </p>
                  <p>
                    Currently completing my <strong className="text-foreground">B.S. in Computer Engineering</strong> at
                    Instituto Superior de Engenharia do Porto (ISEP), I bring a strong foundation in
                    software architecture and a passion for high-performance systems.
                  </p>
                  <p>
                    I thrive on challenges - from architecting RESTful APIs to optimizing database queries.
                    My focus is on writing clean, maintainable code that makes a real impact.
                  </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="text-primary">{highlight.icon}</span>
                      <span>{highlight.text}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-6 md:p-8 h-full glass card-highlight">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Terminal className="h-4 w-4 text-white" />
                  </span>
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skillGroup, groupIndex) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + groupIndex * 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`w-6 h-6 rounded-md bg-gradient-to-r ${skillGroup.color} flex items-center justify-center text-white`}>
                          {skillGroup.icon}
                        </span>
                        <h4 className="text-sm font-semibold">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              duration: 0.3,
                              delay: 0.6 + groupIndex * 0.1 + index * 0.05,
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="hover:bg-primary/10 hover:scale-105 transition-all cursor-default"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Languages */}
                <div className="mt-6 pt-6 border-t border-border/50">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium">Languages:</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Portuguese (Native)</Badge>
                      <Badge variant="outline">English (Fluent)</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutSection;
