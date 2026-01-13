"use client";

import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Database, Cloud } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "Vue3",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "Java",
      "Python",
      "REST APIs",
      "WebSockets",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Swift", "SwiftUI", "iOS Development", "Core Data", "Firebase"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "SQL Server", "MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      "Docker",
      "AWS (EC2, S3, RDS)",
      "Git",
      "CI/CD",
      "Liquibase",
      "Linux",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            Skills
          </h2>
          <p className="text-3xl font-bold mb-12">Technologies I Work With</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full border border-border bg-background hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
