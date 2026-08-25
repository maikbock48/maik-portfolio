const title = "Resume – Maik Bock";
const description = "Experience, education, and skills of Maik Bock, Full Stack & AI Engineer.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/resume" },
  openGraph: { title, description, url: "/resume" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ResumeLayout({ children }) {
  return children;
}
