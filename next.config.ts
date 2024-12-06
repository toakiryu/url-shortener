import type { NextConfig } from "next";
import { links } from "./links";

const nextConfig: NextConfig = {
  async redirects() {
    return links
      .filter((link) => link.path !== "/") // ルートのリンクはリダイレクトしない
      .map(({ path, href, permanent }) => ({
        source: path,
        destination: href,
        permanent,
      }));
  },
};

export default nextConfig;
