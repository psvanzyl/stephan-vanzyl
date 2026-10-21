import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Eén pagina, dus de robotsregels zijn kort: alles mag geïndexeerd worden en de
 * sitemap staat op de vaste plek. De live-URL gaf eerder 404 op /robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.domain}/sitemap.xml`,
    host: site.domain,
  };
}
