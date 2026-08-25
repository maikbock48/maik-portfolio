const title = "Contact – Maik Bock";
const description =
  "Get in touch with Maik Bock. First conversation is free and non-binding — tell me what you're building.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ContactLayout({ children }) {
  return children;
}
