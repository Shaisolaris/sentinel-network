/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sentinel-network',
  assetPrefix: '/sentinel-network/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig
