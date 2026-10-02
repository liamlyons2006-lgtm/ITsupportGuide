import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Extend Starlight's docs schema with the Field Guide frontmatter.
// A malformed page fails `astro build` instead of shipping.
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // One of the five page types. Required.
        type: z
          .enum(['troubleshooting', 'howto', 'concept', 'cheatsheet', 'checklist'])
          .optional(),
        // Matches a sidebar section slug.
        category: z
          .enum([
            'start-here',
            'accounts',
            'windows',
            'macos',
            'networking',
            'microsoft-365',
            'hardware',
            'security',
            'reference',
          ])
          .optional(),
        // Lowercase, hyphenated tags. Drives tag pages.
        tags: z.array(z.string()).optional(),
        // Which platforms the article applies to.
        platform: z
          .array(z.enum(['windows', 'macos', 'ios', 'android', 'any']))
          .optional(),
        // Who normally handles it.
        tier: z.enum(['L1', 'L2', 'L3']).optional(),
        // Human-readable fix-time estimate, e.g. "5-10 min".
        time_to_fix: z.string().optional(),
        // ISO date; drives the freshness stamp and "recently updated".
        last_reviewed: z.date().optional(),
      }),
    }),
  }),
};
