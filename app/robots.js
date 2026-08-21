export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://codewithmaik.vercel.app/sitemap.xml",
  };
}
