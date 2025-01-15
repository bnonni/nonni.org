import { meta } from "@/data/site-metadata";
import { Metadata } from "next";

interface OwnProps {
  title: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

export function generatePageMetadata({
  title,
  description,
  image,
  ...rest
}: OwnProps): Metadata {
  return {
    title,
    openGraph: {
      title: `${title} | ${meta.title}`,
      description: description || meta.description,
      url: "./",
      siteName: meta.title,
      images: image ? [image] : [meta.socialBanner],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: `${title} | ${meta.title}`,
      card: "summary_large_image",
      images: image ? [image] : [meta.socialBanner],
    },
    ...rest,
  };
}
