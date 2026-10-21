import { legalCatalogs } from "./catalog";

export type { LegalDocument, LegalLink, LegalSection, LegalTable, Locale, Subprocessor } from "./types";

export const legalDocuments = {
  privacy: { en: legalCatalogs.en.general.privacy, es: legalCatalogs.es.general.privacy },
  terms: { en: legalCatalogs.en.general.terms, es: legalCatalogs.es.general.terms },
  dpa: { en: legalCatalogs.en.general.dpa, es: legalCatalogs.es.general.dpa },
};
export const subprocessors = { en: legalCatalogs.en.providers, es: legalCatalogs.es.providers };
