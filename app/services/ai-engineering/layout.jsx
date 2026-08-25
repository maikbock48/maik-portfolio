import { ServiceStructuredData, BreadcrumbStructuredData } from "@/components/StructuredData";

const title = "AI Engineering – Maik Bock";
const description = "LLM integrations, RAG pipelines, and automations woven into real business workflows.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services/ai-engineering" },
  openGraph: { title, description, url: "/services/ai-engineering" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AiEngineeringLayout({ children }) {
  return (
    <>
      <ServiceStructuredData name="AI Engineering" description={description} path="/services/ai-engineering" />
      <BreadcrumbStructuredData
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "AI Engineering", path: "/services/ai-engineering" },
        ]}
      />
      {children}
    </>
  );
}
