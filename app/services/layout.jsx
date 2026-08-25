const title = "Services – Maik Bock";
const description =
  "Web development, UI/UX design, logo design, SEO, backend development, and AI engineering services by Maik Bock.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services" },
  openGraph: { title, description, url: "/services" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesLayout({ children }) {
  return children;
}
