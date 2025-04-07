"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 snap-start overflow-y-auto py-20">
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
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-primary to-primary/50 mx-auto mb-6 md:mb-8 flex items-center justify-center"
        >
          <Code2 className="h-12 w-12 md:h-16 md:w-16 text-primary-foreground" />
        </motion.div>
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
          Full-Stack Developer
        </h1>
        <p className="mt-3 md:mt-4 text-sm md:text-xl text-muted-foreground max-w-lg md:max-w-2xl mx-auto">
          My name is João Morais, I'm a full-stack developer with a passion for creating intuitive and impactful solutions that make a difference.
        </p>
        <div className="flex gap-3 md:gap-4 mt-6 md:mt-8 justify-center">
          <Button 
            variant="default" 
            size="sm" 
            className="text-xs md:text-sm"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs md:text-sm"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>
        <div className="flex gap-3 md:gap-4 mt-6 md:mt-8 justify-center">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/JoaoMorais03" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/joão-morais-8922782b8/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:jp.morais800@gmail.com">
              <Mail className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 hidden md:block"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  );
} 