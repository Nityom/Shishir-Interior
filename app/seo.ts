import type { Metadata } from "next";

export const siteUrl = "https://shishir-interior.vercel.app";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  image?: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/images/living-banner.jpg",
  absoluteTitle = false,
}: PageMetadata): Metadata {
  const socialTitle = `${title} | Shishir Consultants`;

  return {
    title: absoluteTitle ? { absolute: socialTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "Shishir Consultants",
      locale: "en_IN",
      type: "website",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}