"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "next-themes";

interface NavbarProps {
  scrollProgress: number;
  activeSection?: string;
}

export default function Navbar({ scrollProgress, activeSection }: NavbarProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-lg md:text-xl font-bold"
        >
          Portfolio
        </motion.div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className={activeSection === "home" ? "text-primary" : ""}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className={activeSection === "about" ? "text-primary" : ""}
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className={activeSection === "projects" ? "text-primary" : ""}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: 'smooth' })}
            >
              Projects
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className={activeSection === "experience" ? "text-primary" : ""}
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: 'smooth' })}
            >
              Experience
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 md:h-10 md:w-10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4 md:h-5 md:w-5" />
            ) : (
              <Moon className="h-4 w-4 md:h-5 md:w-5" />
            )}
          </Button>
        </div>
      </div>
      {/* Scroll Progress */}
      <Progress value={scrollProgress} className="h-0.5 md:h-1" />
    </nav>
  );
} 