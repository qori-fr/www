import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    image: z.string().optional(),
    author: z.string().optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false),
    lang: z.enum(['fr', 'es']),
    bg_image: z.string().optional(),
    // urlSlug: used for URL when file is e.g. cv-frances-fr.md -> url /fr/blog/cv-frances/
    urlSlug: z.string().optional(),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    lang: z.enum(['fr', 'es']),
    path: z.string().optional(), // e.g. "about", "estudia/estudios_superiores" - for routing (slug reserved by Astro)
  }),
});

export const collections = {
  blog: blogCollection,
  pages: pagesCollection,
};
