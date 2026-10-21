import { ProductLegalPage, productMetadata, productStaticParams, type ProductPageProps } from "@/app/legal/productPage";

export const dynamicParams = false;
export const generateStaticParams = productStaticParams;
export const generateMetadata = (props: ProductPageProps) => productMetadata(props, "privacy");
export default function Page(props: ProductPageProps) {
  return <ProductLegalPage {...props} kind="privacy" />;
}
