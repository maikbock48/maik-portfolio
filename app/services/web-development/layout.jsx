import { ServiceStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";

const title = "Web Development – Maik Bock";
const description =
  "Fast, reliable web experiences built with modern frameworks and clean architecture.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services/web-development" },
  openGraph: { title, description, url: "/services/web-development" },
  twitter: { card: "summary_large_image", title, description },
};

export default function WebDevelopmentLayout({ children }) {
  return (
    <>
      <ServiceStructuredData name="Web Development" description={description} path="/services/web-development" />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "/services/web-development" },
        ]}
      />
      {children}
    </>
  );
}
