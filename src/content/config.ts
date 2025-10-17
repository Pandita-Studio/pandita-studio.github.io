import { z, defineCollection, reference } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
	isDraft: z.boolean(),
    title: z.string(),
	excerpt: z.string(),
	author: reference('authors'),
	publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string().default('anon'),
    email: z.string().optional(),
	website: z.string().url().optional()
  })
});

export const collections = { 'blog': blog, 'authors': authors };
