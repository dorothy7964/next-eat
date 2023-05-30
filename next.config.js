const API_KEY = process.env.API_KEY;

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["s3.ap-northeast-2.amazonaws.com"]
  },

  async redirects() {
    return [
      {
        source: "/old-blog/:path*",
        destination: "/new-sexy-blog/:path*",
        permanent: false
      }
    ];
  }
  // async rewrites() {
  //   return [
  //     {
  //       source: "/store/:name/:id",
  //       destination: `http://localhost:9000/stores/:id`
  //     }
  //   ];
  // }
};
