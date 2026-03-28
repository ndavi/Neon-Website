import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    coverImage: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    category: z.enum(['STAGE DESIGN', 'ON TOUR', 'ARTS NUMERIQUES', 'CONCEPTION 3D']),
    credit: z.string().optional(),
    lienCredit: z.string().optional(),
    alt: z.string().optional(),
  }),
});

export const collections = { projects };
