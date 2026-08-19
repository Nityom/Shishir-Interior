import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shishir Consultants | Interior Design & Architecture in Patna",
    template: "%s | Shishir Consultants",
  },
  description:
    "Interior design, architecture, construction, and maintenance services for residential and commercial spaces in Patna, Bihar.",
  applicationName: "Shishir Consultants",
  keywords: [
    "interior designer in Patna",
    "architecture firm in Patna",
    "residential interior design",
    "commercial interior design",
    "construction services in Patna",
  ],
  authors: [{ name: "Shishir Consultants" }],
  creator: "Shishir Consultants",
  publisher: "Shishir Consultants",
  formatDetection: { email: false, address: false, telephone: false },
  robots: { index: true, follow: true },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Shishir Consultants Pvt. Ltd.",
  description: "Interior design, architecture, construction, and project execution for residential and commercial spaces in Patna, Bihar.",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  image: `${siteUrl}/images/living-banner.jpg`,
  email: "info@shishirconsultants.in",
  telephone: "+91-8603009912",
  sameAs: ["https://www.instagram.com/shishir_consultants_pvt.ltd/"],
  hasMap: "https://www.google.com/maps?q=Kriti+Apartment+New+Patliputra+Colony+Patna",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.6270676,
    longitude: 85.1074781,
  },
  areaServed: {
    "@type": "City",
    name: "Patna",
  },
  knowsAbout: [
    "Interior Design",
    "Residential Interior Design",
    "Commercial Interior Design",
    "Architecture",
    "Construction",
    "Space Planning",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Flat No- 33/A, Kriti Apartment, Road No. 3H, New Patliputra Colony, Patliputra Colony",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "800013",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
