import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

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
});

const stageDesign = defineCollection({
  loader: file("src/content/projects/stage-design.json"),
  schema: projectSchema,
});

const onTour = defineCollection({
  loader: file("src/content/projects/on-tour.json"),
  schema: projectSchema,
});

const artsNumeriques = defineCollection({
  loader: file("src/content/projects/arts-numeriques.json"),
  schema: projectSchema,
});

const conception3d = defineCollection({
  loader: file("src/content/projects/conception-3d.json"),
  schema: projectSchema,
});

export const collections = { 
  'stage-design': stageDesign,
  'on-tour': onTour,
  'arts-numeriques': artsNumeriques,
  'conception-3d': conception3d
};
