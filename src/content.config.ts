import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['personal', 'client', 'university']),
    status: z.enum(['live', 'in-development', 'completed', 'in-progress']),
    technologies: z.array(z.string()),
    featured: z.boolean().default(false),
    url: z.string().optional(),
    github: z.string().optional(),
    order: z.number(),
  }),
});

const experience = defineCollection({
  loader: file('src/data/experience.json'),
  schema: z.object({
    id: z.string(),
    role: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    bullets: z.array(z.string()),
    technologies: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: file('src/data/education.json'),
  schema: z.object({
    id: z.string(),
    degree: z.string(),
    institution: z.string(),
    location: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    courses: z.array(z.string()),
  }),
});

export const collections = { projects, experience, education };
