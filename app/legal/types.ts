export type Locale = "en" | "es";

export type LegalTable = {
  headers: string[];
  rows: string[][];
};

export type LegalLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: LegalTable;
  links?: LegalLink[];
  productIndex?: string;
};

export type LegalDocument = {
  title: string;
  category: string;
  effectiveDate: string;
  lastUpdated: string;
  intro: string;
  sections: LegalSection[];
};

export type Subprocessor = {
  scope: string;
  name: string;
  service: string;
  purpose: string;
  data: string;
  role: string;
  region: string;
  links: LegalLink[];
};

