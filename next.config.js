import WithMDX from '@next/mdx'

const withMDX = WithMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
  extension: /\.(md|mdx)$/,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
}

export default withMDX(nextConfig)
