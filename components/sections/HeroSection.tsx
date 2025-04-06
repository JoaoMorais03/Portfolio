"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative px-4 snap-start">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 160 }}
          className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-primary/50 mx-auto mb-8 flex items-center justify-center"
        >
          <Code2 className="h-16 w-16 text-primary-foreground" />
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Full-Stack Developer
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          My name is João Morais, I'm a full-stack developer with a passion for creating intuitive and impactful solutions that make a difference.
        </p>
        <div className="flex gap-4 mt-8 justify-center">
          <Button variant="default" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        <div className="flex gap-4 mt-8 justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/JoaoMorais03" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/joão-morais-8922782b8/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:jp.morais800@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
} 