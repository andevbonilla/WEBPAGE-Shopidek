import LegalDocumentPage from "@/app/components/LegalDocumentPage";
import { dataDeletion } from "@/app/legal/dataDeletion";
import { legalMetadata } from "@/app/legal/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  return legalMetadata(dataDeletion[currentLocale], currentLocale, "/data-deletion");
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  return <LegalDocumentPage document={dataDeletion[currentLocale]} locale={currentLocale} />;
}
