import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CopyLinkButton from "../../components/CopyLinkButton";
import { SITE_URL, localizedPath } from "../../config";

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const path = localizedPath(currentLocale, "/terms");
  const title = currentLocale === "en" ? "Terms of Use | ShopiDeck" : "Términos de Uso | ShopiDeck";
  const description = currentLocale === "en" ? "Terms for using ShopiDeck and Klaviyo Bot Cleaner." : "Términos para usar ShopiDeck y Klaviyo Bot Cleaner.";
  return { metadataBase: new URL(SITE_URL), title, description, alternates: { canonical: path, languages: { en: "/terms", es: "/es/terms", "x-default": "/terms" } }, openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: "ShopiDeck", type: "article" } };
}

const en = {
  title: "Terms of Use",
  date: "August 11, 2026",
  intro: "These terms govern use of the ShopiDeck public website and Klaviyo Bot Cleaner. By using the service, you agree to use it lawfully and to review product results before taking action.",
  service: "Service scope",
  serviceText: "Klaviyo Bot Cleaner audits profiles that already exist in a merchant-authorized Klaviyo account. It uses OAuth, runs background audits, shows explainable risk signals, and supports merchant-confirmed suppression. It does not block checkouts or forms, edit themes, apply Shopify tags, or permanently delete profiles in the current version.",
  limits: "Plans and limits",
  limitsText: "Free Audit: one initial audit per Shopify store, up to 100,000 unsuppressed profiles in that audit, aggregate findings only, no profile suppression, and no CSV export. Starter: 2 scans, 5,000 profiles scanned, and 500 suppressions per month. Growth: 5 scans, 25,000 profiles scanned, and 5,000 suppressions per month. Pro: 15 scans, 100,000 profiles scanned, and 25,000 suppressions per month. Limits are enforced in the backend and may prevent another action until the next period or a plan change.",
  billing: "Billing and trial",
  billingText: "Prices and billing terms are displayed in Shopify App Pricing. Trial periods apply only to the plan and eligibility rules shown there. The current Growth plan may include a seven-day trial for eligible new subscriptions. Do not rely on a general trial statement unless Shopify displays it for the specific subscription.",
  cancellation: "Cancellation and account changes",
  cancellationText: "Cancel or change a plan from the app's billing section or through Shopify when applicable. Access may change after cancellation, downgrade, or uninstall. Historical results may remain available for the published retention period. Disconnecting Klaviyo stops the active connection and removes or disables tokens according to the privacy policy. Shopify billing behavior, proration, and invoice timing are governed by Shopify's applicable terms and the billing screen shown to you.",
  suppression: "Suppression and deletion",
  suppressionText: "The current product supports merchant-confirmed suppression in Klaviyo. Permanent profile deletion is not included unless explicitly announced in a future version with separate permissions and confirmation. You are responsible for reviewing and confirming selected suppressions.",
  estimates: "Estimates and deliverability",
  estimatesText: "Any savings shown are estimates. We do not guarantee a lower Klaviyo invoice, a lower billing tier, inbox placement, deliverability improvement, or that every flagged profile is fraudulent. Deliverability depends on consent, authentication, content, engagement, sending history, and other factors.",
  responsibility: "Merchant responsibility",
  responsibilityText: "You are responsible for your Shopify and Klaviyo accounts, lawful consent, domain authentication, segmentation, campaign review, and the decisions you make from audit results. Do not submit secrets or full customer lists through support forms.",
  availability: "Availability and changes",
  availabilityText: "We may change, suspend, or discontinue a feature, plan, or product. Product status and limits will be updated on the public site when known. Upcoming suite products are coming soon and are not included in Klaviyo Bot Cleaner unless stated otherwise.",
  jurisdiction: "Legal entity and governing law",
  jurisdictionText: "The registered legal entity, address, country, and governing jurisdiction must be confirmed with legal counsel before publication. No specific country or court is designated by these terms until that verification is complete.",
};

const es = {
  title: "Términos de Uso",
  date: "11 de agosto de 2026",
  intro: "Estos términos regulan el uso del sitio público de ShopiDeck y Klaviyo Bot Cleaner. Al usar el servicio, aceptas utilizarlo legalmente y revisar los resultados antes de actuar.",
  service: "Alcance del servicio",
  serviceText: "Klaviyo Bot Cleaner audita perfiles que ya existen en una cuenta de Klaviyo autorizada por el comerciante. Usa OAuth, ejecuta auditorías en segundo plano, muestra señales de riesgo explicables y permite la supresión confirmada por el comerciante. No bloquea checkouts ni formularios, edita temas, aplica etiquetas de Shopify ni elimina perfiles permanentemente en la versión actual.",
  limits: "Planes y límites",
  limitsText: "Free Audit: una auditoría inicial por tienda Shopify, hasta 100.000 perfiles no suprimidos en esa auditoría, solo hallazgos agregados, sin supresión de perfiles y sin exportación CSV. Starter: 2 escaneos, 5.000 perfiles analizados y 500 supresiones al mes. Growth: 5 escaneos, 25.000 perfiles analizados y 5.000 supresiones al mes. Pro: 15 escaneos, 100.000 perfiles analizados y 25.000 supresiones al mes. Los límites se aplican en backend y pueden impedir otra acción hasta el siguiente periodo o un cambio de plan.",
  billing: "Facturación y prueba",
  billingText: "Los precios y las condiciones de facturación se muestran en Shopify App Pricing. Las pruebas aplican únicamente al plan y a las reglas de elegibilidad mostradas allí. El plan Growth actual puede incluir una prueba de siete días para nuevas suscripciones elegibles. No dependas de una afirmación general de prueba si Shopify no la muestra para la suscripción específica.",
  cancellation: "Cancelación y cambios de cuenta",
  cancellationText: "Cancela o cambia el plan desde la sección de facturación de la app o desde Shopify cuando corresponda. El acceso puede cambiar después de cancelar, bajar de plan o desinstalar. Los resultados históricos pueden permanecer disponibles durante el periodo publicado de retención. Al desconectar Klaviyo, se detiene la conexión activa y los tokens se eliminan o deshabilitan según la política de privacidad. El comportamiento de la facturación, prorrateos y tiempos de factura de Shopify se rige por los términos aplicables de Shopify y por la pantalla de facturación que se te muestre.",
  suppression: "Supresión y eliminación",
  suppressionText: "El producto actual permite la supresión confirmada por el comerciante en Klaviyo. La eliminación permanente de perfiles no está incluida salvo que se anuncie expresamente en una versión futura con permisos y confirmación independientes. Eres responsable de revisar y confirmar las supresiones seleccionadas.",
  estimates: "Estimaciones y entregabilidad",
  estimatesText: "Cualquier ahorro mostrado es una estimación. No garantizamos una factura menor de Klaviyo, bajar de nivel de facturación, llegar a la bandeja de entrada, mejorar la entregabilidad ni que cada perfil marcado sea fraudulento. La entregabilidad depende del consentimiento, autenticación, contenido, interacción, historial de envío y otros factores.",
  responsibility: "Responsabilidad del comerciante",
  responsibilityText: "Eres responsable de tus cuentas de Shopify y Klaviyo, el consentimiento legal, la autenticación del dominio, la segmentación, la revisión de campañas y las decisiones que tomes a partir de los resultados. No envíes secretos ni listas completas de clientes mediante los formularios de soporte.",
  availability: "Disponibilidad y cambios",
  availabilityText: "Podemos cambiar, suspender o descontinuar una función, plan o producto. El estado y los límites se actualizarán en el sitio público cuando se conozcan. Los próximos productos de la suite estarán disponibles próximamente y no están incluidos en Klaviyo Bot Cleaner salvo que se indique lo contrario.",
  jurisdiction: "Entidad legal y ley aplicable",
  jurisdictionText: "La entidad legal registrada, dirección, país y jurisdicción aplicable deben confirmarse con asesoría legal antes de publicar. Estos términos no designan un país o tribunal específico hasta completar esa verificación.",
};

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = locale === "es" ? "es" : "en";
  const content = currentLocale === "es" ? es : en;
  const sections = [
    [content.service, content.serviceText],
    [content.limits, content.limitsText],
    [content.billing, content.billingText],
    [content.cancellation, content.cancellationText],
    [content.suppression, content.suppressionText],
    [content.estimates, content.estimatesText],
    [content.responsibility, content.responsibilityText],
    [content.availability, content.availabilityText],
    [content.jurisdiction, content.jurisdictionText],
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <Navbar />
      <main className="py-12 pb-24 bg-brand-card flex-1"><div className="layout-container max-w-4xl"><article className="space-y-8"><div className="space-y-4"><span className="inline-block text-xs font-extrabold bg-brand-warning px-3 py-1 rounded-md border border-brand-accent/25 uppercase tracking-wider">{currentLocale === "en" ? "Legal" : "Legal"}</span><h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight">{content.title}</h1></div><div className="flex items-center gap-4 border-y border-brand-border py-4 text-xs text-brand-muted"><span>{content.date}</span><span>•</span><span>{currentLocale === "en" ? "Version for public website" : "Versión para el sitio público"}</span></div><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4"><aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-28 self-start"><div><p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-2">{currentLocale === "en" ? "Privacy policy" : "Política de privacidad"}</p><Link href="/privacy" className="text-sm underline">{currentLocale === "en" ? "Read privacy policy" : "Leer política de privacidad"}</Link></div><CopyLinkButton locale={currentLocale} /></aside><div className="lg:col-span-9 space-y-8 text-brand-secondary leading-relaxed"><p>{content.intro}</p>{sections.map(([heading, text]) => <section key={heading}><h2>{heading}</h2><p>{text}</p></section>)}</div></div></article></div></main>
      <Footer />
    </div>
  );
}


