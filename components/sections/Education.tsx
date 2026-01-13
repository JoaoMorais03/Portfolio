'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-12">
            Education
          </h2>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-md bg-secondary">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Bachelor of Science in Computer Engineering
              </h3>
              <p className="text-muted-foreground mb-2">
                Instituto Superior de Engenharia do Porto (ISEP) · Porto, Portugal
              </p>
              <p className="text-sm text-muted-foreground">
                Sept 2021 — Sept 2025
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Software Engineering', 'Database Systems', 'Distributed Systems', 'Computer Networks'].map((course) => (
                  <span
                    key={course}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
