import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// Check out the documentation for more information: https://env.t3.gg/docs/nextjs
export const env = createEnv({
  client: {
    NEXT_PUBLIC_API_URL: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
});
