/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ];
  },
};

export default nextConfig;
