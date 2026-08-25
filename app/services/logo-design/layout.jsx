import { ServiceStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";

const title = "Logo Design – Maik Bock";
const description = "Bold, memorable identities — crafted with a custom logo-generator tool.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services/logo-design" },
  openGraph: { title, description, url: "/services/logo-design" },
  twitter: { card: "summary_large_image", title, description },
};

export default function LogoDesignLayout({ children }) {
  return (
    <>
      <ServiceStructuredData name="Logo Design" description={description} path="/services/logo-design" />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Logo Design", path: "/services/logo-design" },
        ]}
      />
      {children}
    </>
  );
}
