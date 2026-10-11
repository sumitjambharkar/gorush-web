import type { MetadataRoute } from "next";

const SITE = "https://gorush.bike";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/safety", "/contact", "/privacy"].map((path) => ({
    url: `${SITE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
