import { defineCollection, z } from 'astro:content';

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    venue: z.string(),
    description: z.string(),
    speakers: z.array(z.string()).default([]),
    sponsors: z.array(z.string()).default([]),
    youtubePlaylist: z.string().optional(),
    youtubeVideos: z.array(z.object({
      title: z.string(),
      videoId: z.string(),
    })).default([]),
    registrationUrl: z.string().optional(),
    isPast: z.boolean().default(false),
    resources: z.array(z.object({
      title: z.string(),
      url: z.string(),
      type: z.enum(['slides', 'video', 'github', 'other']).default('other'),
    })).default([]),
  }),
});

const speakersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string().optional(),
    bio: z.string(),
    image: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
    isOrganizer: z.boolean().default(false),
  }),
});

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['presentation', 'video', 'article', 'tool', 'guide']),
    url: z.string().optional(),
    youtubeUrl: z.string().optional(),
    event: z.string().optional(),
    speaker: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

export const collections = {
  events: eventsCollection,
  speakers: speakersCollection,
  resources: resourcesCollection,
  blog: blogCollection,
};
