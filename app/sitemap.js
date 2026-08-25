const baseUrl = "https://codewithmaik.com";

const routes = [
  "",
  "/services",
  "/services/web-development",
  "/services/ui-ux-design",
  "/services/logo-design",
  "/services/seo",
  "/services/backend-development",
  "/services/ai-engineering",
  "/work",
  "/resume",
  "/contact",
  "/datenschutz",
];

// Fixed snapshot date rather than `new Date()` computed on every request -
// claiming every page was "just modified" on every crawl is a known
// anti-pattern that can make freshness signals less trustworthy.
const lastModified = "2026-08-25";

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
