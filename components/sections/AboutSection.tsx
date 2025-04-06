"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Layout, Database, Terminal } from "lucide-react";

const AboutSection = forwardRef<HTMLElement>(function AboutSection(props, ref) {
  const skills = [
    { 
      category: "Frontend", 
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      icon: <Layout className="h-5 w-5" />
    },
    { 
      category: "Backend", 
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Python", "Java", "C#", "C++", "C"],
      icon: <Database className="h-5 w-5" />
    },
    { 
      category: "Tools", 
      items: ["Git", "Docker","MySQL", "MongoDB","linux","PostgreSQL"],
      icon: <Terminal className="h-5 w-5" />
    },
  ];

  return (
    <section ref={ref} className="min-h-screen px-4 py-20 bg-muted/30 flex items-center snap-start overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <Card className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground">
                  As a final-year Computer Science student at Instituto Superior de Engenharia do Porto, I bring expertise in full-stack development with a focus on React, JavaScript, and database management. I'm fluent in English and Portuguese, with strong collaboration and leadership skills. I'm passionate about creating innovative solutions and currently gaining hands-on experience as an intern at BRAINSTORM Labs.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4">Technical Skills</h3>
                <div className="space-y-6">
                  {skills.map((skillGroup) => (
                    <motion.div
                      key={skillGroup.category}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {skillGroup.icon}
                        <h4 className="text-sm font-medium text-muted-foreground">{skillGroup.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutSection; 