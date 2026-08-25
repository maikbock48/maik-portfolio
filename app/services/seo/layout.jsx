import { ServiceStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";

const title = "SEO – Maik Bock";
const description = "Content and structure optimization so search engines — and people — actually click.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services/seo" },
  openGraph: { title, description, url: "/services/seo" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SeoLayout({ children }) {
  return (
    <>
      <ServiceStructuredData name="SEO" description={description} path="/services/seo" />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "SEO", path: "/services/seo" },
        ]}
      />
      {children}
    </>
  );
}
