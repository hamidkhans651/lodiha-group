import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextVideo(nextConfig);

// next.config.js
module.exports = {
    images: {
      domains: ['img.icons8.com'], // Add your domain(s) here
    },
  };
  