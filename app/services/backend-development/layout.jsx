import { ServiceStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";

const title = "Backend Development – Maik Bock";
const description =
  "Scalable REST APIs and backend systems with Node.js, Python, and SQL — clean, fast, production-ready.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services/backend-development" },
  openGraph: { title, description, url: "/services/backend-development" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BackendDevelopmentLayout({ children }) {
  return (
    <>
      <ServiceStructuredData name="Backend Development" description={description} path="/services/backend-development" />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Backend Development", path: "/services/backend-development" },
        ]}
      />
      {children}
    </>
  );
}
