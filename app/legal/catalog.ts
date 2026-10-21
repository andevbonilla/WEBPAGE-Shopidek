import en from "@/messages/legal/en.json";
import es from "@/messages/legal/es.json";
import type { LegalDocument, Locale, Subprocessor } from "./types";

export type DocumentKind = "privacy" | "terms" | "dpa";
type AppLegal = { name: string; documents: Record<DocumentKind, LegalDocument> };
type LegalCatalog = {
  general: Record<DocumentKind, LegalDocument>;
  products: Record<string, AppLegal>;
  providers: Subprocessor[];
  dataDeletion: LegalDocument;
};

// JSON stays in Server Components; it is not a client-fetched translation bundle.
export const legalCatalogs = { en, es } satisfies Record<Locale, LegalCatalog>;

// Fail early for missing app translations, mismatched anchors, or duplicate IDs.
function checkSections(name: string, english: LegalDocument, spanish: LegalDocument) {
  const ids = english.sections.map(({ id }) => id);
  if (new Set(ids).size !== ids.length || ids.join("|") !== spanish.sections.map(({ id }) => id).join("|")) {
    throw new Error(`Legal sections differ between languages or repeat: ${name}`);
  }
}

const enSlugs = Object.keys(en.products).sort();
if (enSlugs.join("|") !== Object.keys(es.products).sort().join("|")) {
  throw new Error("Legal app translations are missing.");
}
for (const kind of ["privacy", "terms", "dpa"] as const) {
  checkSections(kind, en.general[kind], es.general[kind]);
  for (const slug of enSlugs) {
    checkSections(`${kind}/${slug}`, (en as LegalCatalog).products[slug].documents[kind], (es as LegalCatalog).products[slug].documents[kind]);
  }
}
checkSections("data-deletion", en.dataDeletion, es.dataDeletion);
