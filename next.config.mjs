import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  // BASE_PATH is injected by actions/configure-pages in CI.
  // For a custom domain leave it empty; for username.github.io/repo set it to /repo.
  basePath: process.env.BASE_PATH ?? '',
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
