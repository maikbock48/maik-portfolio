const title = "Work – Maik Bock";
const description =
  "A selection of projects built by Maik Bock — presence sites, online shops, and AI-powered applications.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/work" },
  openGraph: { title, description, url: "/work" },
  twitter: { card: "summary_large_image", title, description },
};

export default function WorkLayout({ children }) {
  return children;
}
