/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/about-me',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/sluzby',
        permanent: true,
      },
      {
        source: '/courses',
        destination: '/kurzy',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/kontakty',
        permanent: true,
      },
      {
        source: '/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
