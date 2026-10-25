import { legalCatalogs } from "./catalog";

export type { DocumentKind } from "./catalog";
export const LEGAL_UPDATED_ISO = "2026-10-24T00:00:00.000Z";
export const legalDate = {
  en: legalCatalogs.en.general.privacy.lastUpdated,
  es: legalCatalogs.es.general.privacy.lastUpdated,
};
