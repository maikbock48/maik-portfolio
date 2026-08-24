const baseUrl = "https://codewithmaik.vercel.app";

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

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
