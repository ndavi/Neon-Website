import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  coverImage: z.string(),
  date: z.string(),
  category: z.enum(['STAGE DESIGN', 'ON TOUR', 'ARTS NUMERIQUES', 'CONCEPTION 3D']),
  credit: z.string().optional(),
  lienCredit: z.string().optional(),
  alt: z.string().optional(),
  order: z.number().optional(),
});

export const collections = {
  'stage-design': defineCollection({
    loader: glob({ pattern: "*.json", base: "src/content/projects/stage-design" }),
    schema: projectSchema,
  }),
  'on-tour': defineCollection({
    loader: glob({ pattern: "*.json", base: "src/content/projects/on-tour" }),
    schema: projectSchema,
  }),
  'arts-numeriques': defineCollection({
    loader: glob({ pattern: "*.json", base: "src/content/projects/arts-numeriques" }),
    schema: projectSchema,
  }),
  'conception-3d': defineCollection({
    loader: glob({ pattern: "*.json", base: "src/content/projects/conception-3d" }),
    schema: projectSchema,
  }),
};
