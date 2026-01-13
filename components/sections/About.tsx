"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-accent uppercase tracking-wider mb-2">
            About
          </h2>
          <p className="text-3xl font-bold mb-8">A Bit About Me</p>

          <div className="grid md:grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Full-Stack Developer with a passion for building
                scalable, high-performance applications. Currently working at{" "}
                <span className="text-accent font-medium">Prozis</span>,
                Europe&apos;s leading sports nutrition company, where I develop
                enterprise software serving over 1,000 daily users.
              </p>
              <p>
                As Founder of{" "}
                <span className="text-accent font-medium">Flavibyte</span>, I
                help businesses transform their ideas into reality through
                custom software solutions. From e-commerce platforms to
                reservation systems, I deliver end-to-end solutions that drive
                real business value.
              </p>
              <p>
                My expertise spans the full stack—from crafting responsive UIs
                with React and Vue to architecting robust backends with Node.js
                and Spring Boot. I&apos;m always eager to tackle complex
                problems and learn new technologies.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium">Porto, Portugal</p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Education</p>
                <p className="font-medium">B.Sc. Computer Engineering</p>
                <p className="text-sm text-muted-foreground">
                  ISEP · 2021-2025
                </p>
              </div>
              <div className="p-4 rounded-xl border border-border bg-card">
                <p className="text-sm text-muted-foreground mb-1">Languages</p>
                <p className="font-medium">Portuguese, English</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
