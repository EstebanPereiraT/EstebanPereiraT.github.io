import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const seoSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

export const collections = { pages };
