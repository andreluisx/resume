import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["udemy-certificate.s3.amazonaws.com"],
  },
};

export default nextConfig;
