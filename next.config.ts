import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://fun117.dev",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/Fun117",
        permanent: true,
      },
      {
        source: "/npm",
        destination: "https://www.npmjs.com/~fun117",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.com/users/990984460365365258",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/fun_117",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/fun_117",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/fun.s117",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCT34DhsVlYoyV8Y4c-MTTrQ",
        permanent: true,
      },
      {
        source: "/spotify",
        destination:
          "https://open.spotify.com/user/31d3l7cul3sq3i2snz3yplut7asa",
        permanent: true,
      },
      {
        source: "/patreon",
        destination:
          "https://patreon.com/Fun117?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink",
        permanent: true,
      },
      {
        source: "/opencollective",
        destination: "https://opencollective.com/fun117",
        permanent: true,
      },
      {
        source: "/amazon-ls",
        destination:
          "https://www.amazon.jp/hz/wishlist/ls/LTA4L8N54WNP?ref_=wl_share",
        permanent: true,
      },
      {
        source: "/scratch",
        destination: "https://scratch.mit.edu/users/Fun_117",
        permanent: true,
      },
      {
        source: "/duolingo",
        destination: "https://www.duolingo.com/profile/Fun_117",
        permanent: true,
      },
      {
        source: "/roblox",
        destination: "https://www.roblox.com/ja/users/3415074295/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
