"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ExperienceSection = forwardRef<HTMLElement>(function ExperienceSection(props, ref) {
  return (
    <section ref={ref} id="experience" className="min-h-screen px-4 py-20 bg-muted/30 flex items-center snap-start overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <Briefcase className="h-5 w-5" />
                <h3 className="text-lg md:text-xl font-semibold">Experience</h3>
              </div>
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium">Software Developer Intern</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">BRAINSTORM Labs • 2025 - Present</p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Developing a video call feature using React, agora.io, PostgreSQL, Docker, Node.js, and Next.js, enhancing real-time communication for users. Integrated agora.io API for seamless video communication, managing user authentication and session handling. Collaborated with the development team to ensure smooth integration into the existing platform.
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
                  <p className="text-xs md:text-sm text-muted-foreground">Instituto Superior de Engenharia do Porto • 2024-2025</p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    Led a team of four in designing and developing a hospital management system using React, Node.js, and MongoDB. Managed two backend systems to ensure data consistency and delivered functional modules (patient registration, appointment scheduling, medical records) on time. Utilized Git for version control and coordinated with team members to meet project deadlines.
                  </p>
                </motion.div>
              </div>
            </Card>
            <Card className="p-4 md:p-6">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-lg md:text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-medium">B.S. Informatics Engineer</h4>
                  <p className="text-xs md:text-sm text-muted-foreground">Instituto Superior de Engenharia do Porto • 2021 - Present</p>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    GPA: 13.06/20.0. Courses include Web Development, Database Systems, Software Engineering, Data Structures and Algorithms.
                  </p>
                </motion.div>
                <Separator />
                <div className="flex items-center gap-2 mb-4 md:mb-6">
                  <GraduationCap className="h-5 w-5" />
                  <h3 className="text-lg md:text-xl font-semibold">Additional Information</h3>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xs md:text-sm font-medium text-muted-foreground">Languages</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">Fluent in English</Badge>
                        <Badge variant="secondary" className="text-xs">Fluent in Portuguese</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xs md:text-sm font-medium text-muted-foreground">Work Authorization</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">EU Citizen</Badge>
                        <Badge variant="secondary" className="text-xs">U.S. Green Card</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xs md:text-sm font-medium text-muted-foreground">GitHub</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          <a href="https://github.com/JoaoMorais03" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            github.com/JoaoMorais03
                          </a>
                        </Badge>
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