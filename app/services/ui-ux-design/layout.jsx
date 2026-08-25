import { ServiceStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";

const title = "UI/UX Design – Maik Bock";
const description = "Interfaces that feel natural — simple, intuitive, and next level.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services/ui-ux-design" },
  openGraph: { title, description, url: "/services/ui-ux-design" },
  twitter: { card: "summary_large_image", title, description },
};

export default function UiUxDesignLayout({ children }) {
  return (
    <>
      <ServiceStructuredData name="UI/UX Design" description={description} path="/services/ui-ux-design" />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "UI/UX Design", path: "/services/ui-ux-design" },
        ]}
      />
      {children}
    </>
  );
}
