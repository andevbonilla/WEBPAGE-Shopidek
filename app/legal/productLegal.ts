import { legalCatalogs, type DocumentKind } from "./catalog";
import type { LegalDocument, Locale } from "./types";

type ProductLegal = {
  slug: string;
  name: string;
  documents: Record<DocumentKind, Record<Locale, LegalDocument>>;
};

// Add a product only after its own bilingual privacy, terms, and DPA schedules exist.
// A concept product does not inherit an existing app's permissions or legal terms.
const englishApps: Record<string, { name: string; documents: Record<DocumentKind, LegalDocument> }> = legalCatalogs.en.products;
const spanishApps: typeof englishApps = legalCatalogs.es.products;
export const legalProducts: ProductLegal[] = Object.entries(englishApps).map(([slug, app]) => ({
  slug,
  name: app.name,
  documents: {
    privacy: { en: app.documents.privacy, es: spanishApps[slug].documents.privacy },
    terms: { en: app.documents.terms, es: spanishApps[slug].documents.terms },
    dpa: { en: app.documents.dpa, es: spanishApps[slug].documents.dpa },
  },
}));

export function getLegalProduct(slug: string) {
  return legalProducts.find((product) => product.slug === slug);
}
