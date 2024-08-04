// next.config.mjs
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true // Disable optimization for static export
  }
};

export default nextConfig;
