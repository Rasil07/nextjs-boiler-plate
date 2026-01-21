import { z } from 'zod';

const clientSchema = z.object({
  NEXT_PUBLIC_APP_ENV: z.enum(['local', 'dev', 'staging', 'prod']).default('local'),
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default('Next Boilerplate'),
});

// Only validate client env here (safe to import in client components).
export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
});
