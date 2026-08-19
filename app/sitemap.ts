import type { MetadataRoute } from "next";
import { projects } from "./project-data";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/service", "/contact", "/project/gallery", "/project/list"];
  const projectRoutes = projects.map(({ slug }) => `/project/${slug}`);

  return [...staticRoutes, ...projectRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path.startsWith("/project/") ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/project/gallery" ? 0.9 : 0.8,
  }));
}