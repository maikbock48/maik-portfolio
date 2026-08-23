import { Poppins } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import ContactFab from "@/components/ContactFab";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/lib/language-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = "https://codewithmaik.vercel.app";
const title = "Maik Bock – Software Developer";
const description =
  "Portfolio of Maik Bock, Full Stack & AI Engineer building fast, standout web apps end-to-end — presence sites, online shops, AI integrations, and consumer apps.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Maik Bock",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport = {
  themeColor: "#1c1c22",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maik Bock",
  url: siteUrl,
  jobTitle: "Full Stack Engineer & AI Developer",
  sameAs: [
    "https://github.com/embe-coding",
    "https://www.linkedin.com/in/maik-m-bock-874a93392",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={poppins.variable}>
        <LanguageProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <ContactFab />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
