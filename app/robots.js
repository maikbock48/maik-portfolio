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
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allow AI answer-engine / GEO crawlers (already covered by
      // '*' above, listed explicitly so citations in AI search stay
      // unaffected by any future tightening).
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://codewithmaik.com/sitemap.xml",
  };
}
