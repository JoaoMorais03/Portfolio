"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/effects/AnimatedBackground";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Refs for scroll tracking
  const aboutRef = useRef<HTMLElement>(null);
  const impactRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", ref: null },
        { id: "about", ref: aboutRef },
        { id: "impact", ref: impactRef },
        { id: "projects", ref: projectsRef },
        { id: "experience", ref: experienceRef },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (!section.ref && scrollPosition < window.innerHeight) {
          setActiveSection("home");
          break;
        }
        if (section.ref?.current) {
          const sectionTop = section.ref.current.offsetTop;
          const sectionBottom = sectionTop + section.ref.current.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }

      // Calculate scroll progress
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / windowHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const sections = [
      { id: "home", ref: null, position: 0 },
      { id: "about", ref: aboutRef },
      { id: "impact", ref: impactRef },
      { id: "projects", ref: projectsRef },
      { id: "experience", ref: experienceRef },
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const currentIndex = sections.findIndex(section => section.id === activeSection);
        const nextIndex = Math.min(currentIndex + 1, sections.length - 1);

        if (nextIndex !== currentIndex) {
          const nextSection = sections[nextIndex];
          if (nextSection.ref?.current) {
            const headerOffset = 0;
            const elementPosition = nextSection.ref.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else if (nextSection.id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const currentIndex = sections.findIndex(section => section.id === activeSection);
        const prevIndex = Math.max(currentIndex - 1, 0);

        if (prevIndex !== currentIndex) {
          const prevSection = sections[prevIndex];
          if (prevSection.ref?.current) {
            const headerOffset = 0;
            const elementPosition = prevSection.ref.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          } else if (prevSection.id === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Navigation */}
      <Navbar scrollProgress={scrollProgress} activeSection={activeSection} />

      {/* Sections */}
      <HeroSection />
      <AboutSection ref={aboutRef} />
      <ImpactSection ref={impactRef} />
      <ProjectsSection ref={projectsRef} />
      <ExperienceSection ref={experienceRef} />

      {/* Footer */}
      <Footer />
    </main>
  );
}
