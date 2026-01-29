/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Uyarıları hata olarak görme, geç
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Tip hatalarını görmezden gel
    ignoreBuildErrors: true,
  },
};

export default nextConfig;