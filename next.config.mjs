// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disable optimization for static export
  },
  basePath: '/repo-name', // Adjust this if necessary
};

export default nextConfig;
