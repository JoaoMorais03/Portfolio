"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "Frontend Developer",
  "Problem Solver",
];

export default function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Typing effect
  useEffect(() => {
    const currentText = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-4 snap-start overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-muted/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-muted/20 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Current position badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-muted-foreground text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/30 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/50"></span>
            </span>
            Full-Stack Developer @ Prozis
          </span>
        </motion.div>

        {/* Name with gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
        >
          Hi, I'm{" "}
          <span className="gradient-text">João Morais</span>
        </motion.h1>

        {/* Typing role with cursor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-12 md:h-16 flex items-center justify-center mb-6"
        >
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-8 md:h-10 bg-primary ml-1 animate-pulse" />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          Building enterprise software at Europe's leading sports nutrition company.
          Passionate about creating high-performance systems that serve thousands of users daily.
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
        >
          <MapPin className="h-4 w-4" />
          <span className="text-sm">Porto, Portugal</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group"
          >
            <span className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              View My Work
            </span>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("experience")}
            className="group"
          >
            <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
            My Experience
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-3 justify-center"
        >
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all"
            asChild
          >
            <a
              href="https://github.com/JoaoMorais03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all"
            asChild
          >
            <a
              href="https://linkedin.com/in/joão-morais-8922782b8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-primary/10 hover:scale-110 transition-all"
            asChild
          >
            <a href="mailto:jp.morais800@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
