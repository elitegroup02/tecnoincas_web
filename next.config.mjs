/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  // Optional: Add a basePath if you are deploying to a subdirectory on GitHub Pages.
  // basePath: '/your-repo-name',
  // Optional: Change the output directory for static export. Default is 'out'.
  // distDir: 'build',
  images: {
    unoptimized: true, // Required for static export if using next/image
  },
  // Ensure trailing slashes are handled correctly for static export
  trailingSlash: true,
};

export default nextConfig;
