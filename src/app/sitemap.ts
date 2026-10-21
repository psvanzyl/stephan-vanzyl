import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * De site is één lange pagina met ankers; een sitemap met anker-URL's is niet
 * gebruikelijk, dus we melden alleen de pagina zelf.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.domain,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
