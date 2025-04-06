"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ExperienceSection = forwardRef<HTMLElement>(function ExperienceSection(props, ref) {
  return (
    <section ref={ref} className="h-screen px-4 bg-muted/30 flex items-center snap-start">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium">Software Development Intern</h4>
                  <p className="text-sm text-muted-foreground">BRAINSTORM Labs • 2025 - Present</p>
                  <p className="mt-2 text-muted-foreground">
                    Developing a video call feature using React, agora.io, PostgreSQL, Docker, Node.js, and Next.js. Integrated agora.io API for seamless video communication, managing user authentication and session handling.
                  </p>
                </motion.div>
                <Separator />
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium">Hospital Management Software Project</h4>
                  <p className="text-sm text-muted-foreground">Instituto Superior de Engenharia do Porto • 2024-2025</p>
                  <p className="mt-2 text-muted-foreground">
                    As part of the final year project I led a team of four developers in designing and developing a hospital management system using React, Node.js, and MongoDB.
                  </p>
                </motion.div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium">B.S. Informatics Engineer</h4>
                  <p className="text-sm text-muted-foreground">Instituto Superior de Engenharia do Porto • 2025 - Present</p>
                  <p className="mt-2 text-muted-foreground">
                    GPA: 13.06/20.0. Courses include Web Development, Database Systems, Software Engineering, Data Structures and Algorithms.
                  </p>
                </motion.div>
                <Separator />
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">Additional Information</h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-sm font-medium text-muted-foreground">Languages</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Fluent in English</Badge>
                        <Badge variant="secondary">Fluent in Portuguese</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-sm font-medium text-muted-foreground">Work Authorization</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">EU Citizen</Badge>
                        <Badge variant="secondary">U.S. Green Card</Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ExperienceSection; 