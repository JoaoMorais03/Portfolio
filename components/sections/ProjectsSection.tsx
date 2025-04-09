"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = forwardRef<HTMLElement>(function ProjectsSection(props, ref) {
  const projects = [
    {
      title: "Hospital Management System",
      description: "Led team of four in designing and developing a comprehensive hospital management solution.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Git"],
      category: "fullstack",
      status: "Completed"
    },
    {
      title: "Video Call Feature",
      description: "Developed a video call feature enhancing real-time communication for BRAINSTORM Labs users.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "agora.io", "PostgreSQL", "Docker", "Node.js", "Next.js"],
      category: "fullstack",
      status: "in-progress"
    },
    {
      title: "Shared Life Organizer",
      description: "A full-stack app to help families manage tasks, schedules, and expenses in one place.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop",
      tags: ["React", "Node.js", "Next.js", "Git","SupaBase"],
      category: "fullstack",
      status: "in-progress"
    }
  ];

  return (
    <section ref={ref} id="projects" className="min-h-screen px-4 py-20 overflow-y-auto snap-start">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-3 max-w-xs mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group overflow-hidden flex flex-col h-[400px] md:h-[500px]">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-4 md:p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
                          {project.status === "in-progress" ? (
                            <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                              In Progress
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                              Completed
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="frontend" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === "frontend")
                  .map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group overflow-hidden flex flex-col h-[400px] md:h-[500px]">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-4 md:p-6 flex flex-col flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
                            {project.status === "in-progress" ? (
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                                In Progress
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                                Completed
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="fullstack" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === "fullstack")
                  .map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="group overflow-hidden flex flex-col h-[400px] md:h-[500px]">
                        <div className="aspect-video bg-muted relative overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="p-4 md:p-6 flex flex-col flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
                            {project.status === "in-progress" ? (
                              <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                                In Progress
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                                Completed
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground mb-4 flex-grow text-sm md:text-base">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
});

export default ProjectsSection; 