export default function robots() {
  if (process.env.SITE_LOCKED === "true") {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://codewithmaik.vercel.app/sitemap.xml",
  };
}
