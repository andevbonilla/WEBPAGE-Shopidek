import { notFound } from "next/navigation";
import LegalDocumentPage from "../components/LegalDocumentPage";
import { legalMetadata } from "./metadata";
import { getLegalProduct, legalProducts } from "./productLegal";
import type { DocumentKind } from "./shared";

export type ProductPageProps = { params: Promise<{ locale: string; product: string }> };

export function productStaticParams() {
  return legalProducts.flatMap(({ slug }) => ["en", "es"].map((locale) => ({ locale, product: slug })));
}

async function resolveProduct({ params }: ProductPageProps, kind: DocumentKind) {
  const { locale, product: slug } = await params;
  const product = getLegalProduct(slug);
  if (!product) notFound();
  const currentLocale = locale === "es" ? "es" : "en";
  return { locale: currentLocale, slug, document: product.documents[kind][currentLocale] } as const;
}

export async function productMetadata(props: ProductPageProps, kind: DocumentKind) {
  const { locale, slug, document } = await resolveProduct(props, kind);
  return legalMetadata(document, locale, `/${kind}/${slug}`);
}

export async function ProductLegalPage(props: ProductPageProps & { kind: DocumentKind }) {
  const { locale, document } = await resolveProduct(props, props.kind);
  return <LegalDocumentPage document={document} locale={locale} />;
}
