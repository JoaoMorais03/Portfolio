"use client";

import { forwardRef, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Zap, Clock, GitPullRequest, TrendingUp, Server } from "lucide-react";

interface Metric {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
}

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const ImpactSection = forwardRef<HTMLElement>(function ImpactSection(props, ref) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const metrics: Metric[] = [
    {
      icon: <Users className="h-6 w-6" />,
      value: 1000,
      suffix: "+",
      label: "Daily Users",
      description: "Serving enterprise PLM software",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: 35,
      suffix: "%",
      label: "Faster Processing",
      description: "Query optimization impact",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Server className="h-6 w-6" />,
      value: 200,
      suffix: "+",
      label: "Concurrent Requests",
      description: "High-load system handling",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      value: 200,
      suffix: "ms",
      label: "Response Time",
      description: "Sub-200ms API responses",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      ref={ref}
      id="impact"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-muted-foreground uppercase tracking-widest"
          >
            Impact & Results
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Numbers That{" "}
            <span className="gradient-text">Speak</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-lg mx-auto"
          >
            Real metrics from building enterprise software at Prozis
          </motion.p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              />
              <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors text-center h-full">
                {/* Icon */}
                <div
                  className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center text-white mb-4`}
                >
                  {metric.icon}
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  <AnimatedCounter
                    value={metric.value}
                    suffix={metric.suffix}
                    isInView={isInView}
                  />
                </div>

                {/* Label */}
                <div className="font-semibold mb-1">{metric.label}</div>

                {/* Description */}
                <div className="text-sm text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-sm">
            <GitPullRequest className="h-4 w-4 text-primary" />
            <span>
              Entrusted with production deployment responsibilities typically reserved for senior engineers
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default ImpactSection;
