"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowDown,
  X,
  Download,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/JoaoMorais03",
    icon: Github,
    label: "GitHub",
    tooltip: "View GitHub Profile",
  },
  {
    href: "https://www.linkedin.com/in/joão-pedro-de-morais-8922782b8",
    icon: Linkedin,
    label: "LinkedIn",
    tooltip: "Connect on LinkedIn",
  },
  {
    href: "mailto:jp.morais800@gmail.com",
    icon: Mail,
    label: "Email",
    tooltip: "Send Email",
  },
];

export function Hero() {
  const [showResume, setShowResume] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showResume) {
      // Save current scroll position and lock body
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position and unlock body
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [showResume]);

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-5xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-muted-foreground">
                Available for opportunities
              </span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
              João <span className="gradient-text">Morais</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground">
              Full-Stack Developer
            </h2>

            <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
              Building enterprise software at{" "}
              <span className="text-foreground font-medium">Prozis</span>.
              Founder of{" "}
              <span className="text-accent font-medium">Flavibyte</span>,
              delivering custom software solutions for businesses.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative p-3 rounded-xl border border-border bg-card hover:border-accent hover:bg-accent/5 hover:glow transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {link.tooltip}
                  </span>
                </motion.a>
              ))}

              {/* Resume Button */}
              <motion.button
                onClick={() => setShowResume(true)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="group relative p-3 rounded-xl border border-border bg-card hover:border-accent hover:bg-accent/5 hover:glow transition-all duration-300"
                aria-label="View Resume"
              >
                <FileText size={20} />
                {/* Tooltip */}
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded-md bg-foreground text-background opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  View Resume
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <span className="text-sm">Scroll</span>
              <ArrowDown size={16} className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm overflow-hidden"
            onClick={() => setShowResume(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl h-[85vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h3 className="font-semibold">Resume - João Morais</h3>
                <div className="flex items-center gap-2">
                  <a
                    href="/cv.pdf"
                    download="Joao_Morais_CV.pdf"
                    className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-border hover:border-accent hover:text-accent transition-all"
                  >
                    <Download size={16} />
                    Download
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="h-[calc(85vh-65px)] overflow-hidden">
                <iframe
                  src="/cv.pdf"
                  className="w-full h-full border-0"
                  title="Resume PDF"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
