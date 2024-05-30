import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createJITI from "jiti";
import { fileURLToPath } from "url";

const jiti = createJITI(fileURLToPath(import.meta.url));
jiti("./src/env");

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // for test
      },
      {
        protocol: "https",
        hostname: "sparcs-newara.s3.amazonaws.com",
      },
    ],
  },
};

export default withVanillaExtract(nextConfig);
