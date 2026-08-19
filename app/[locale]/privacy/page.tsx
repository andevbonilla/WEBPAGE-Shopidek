import type { Metadata } from "next";
import { Clock } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CopyLinkButton from "../../components/CopyLinkButton";
import { PRIVACY_EMAIL, SITE_URL, localizedPath } from "../../config";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  const path = localizedPath(isEs ? "es" : "en", "/privacy");
  const title = isEs ? "Política de Privacidad | ShopiDeck" : "Privacy Policy | ShopiDeck";
  const description = isEs
    ? "Cómo ShopiDeck procesa datos de tiendas Shopify, cuentas de Klaviyo y solicitudes de soporte."
    : "How ShopiDeck processes Shopify store data, Klaviyo account data, and support requests.";
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: path, languages: { en: "/privacy", es: "/es/privacy", "x-default": "/privacy" } },
    openGraph: { title, description, url: `${SITE_URL}${path}`, siteName: "ShopiDeck", type: "article" },
  };
}

const en = {
  title: "Privacy Policy",
  category: "Legal and compliance",
  date: "August 11, 2026",
  contactLabel: "Privacy contact",
  intro: "This policy explains how ShopiDeck processes merchant, Shopify, Klaviyo, support, and operational data for the public website and Klaviyo Bot Cleaner.",
  responsible: "Responsible entity and jurisdiction",
  responsibleText: "Responsible entity: ShopiDeck. The registered legal name, legal address, country, and governing jurisdiction must be confirmed and published before production launch. This policy does not designate a formal DPO.",
  requests: "For access, correction, deletion, portability, or privacy questions, email team@shopideck.com. Include the store domain and enough information to identify the request, but do not send passwords, API keys, or access tokens.",
  roles: "Roles",
  rolesText: "When processing end-customer profile data at a merchant's direction, the merchant generally acts as controller and ShopiDeck acts as processor. ShopiDeck may act as controller for merchant accounts, billing, support, security, and direct product usage.",
  data: "Specific data processed by Klaviyo Bot Cleaner",
  dataItems: [
    "Shopify store domain and Shopify shop ID.",
    "Klaviyo account ID, OAuth scopes, and encrypted OAuth access and refresh tokens.",
    "Profile ID, email, first name, last name, phone number when available, city and country when available, and IP when available.",
    "Creation and update timestamps, email marketing subscription status, risk score, risk level, and score reasons.",
    "Scan history, suppression history, billing plan, usage limits, support requests, and security or operational logs.",
  ],
  purpose: "Purposes and detection limits",
  purposeText: "We use this data to connect the merchant's Klaviyo account, audit profiles that already exist in Klaviyo, show explainable profile-level risk signals, store results, submit merchant-confirmed suppressions, enforce plan limits, provide support, secure the service, and meet legal obligations.",
  detectionText: "The current version uses explainable signals such as known disposable-domain matches, unusual email patterns, generic or incomplete names, repeated values, high-volume creation windows, and available subscription metadata. These signals are not proof of fraud. The app does not consult open, click, purchase, or browsing events to label a profile inactive.",
  actionsText: "The merchant reviews results and selects profiles. The app does not suppress automatically. Suppression prevents marketing sends; the current version does not permanently delete profiles.",
  security: "Security",
  securityText: "OAuth tokens are encrypted by the application. Connections use HTTPS, protected routes require authentication, and secrets are kept server-side. No security statement in this policy is a guarantee that risk can never occur.",
  processors: "Processors and service providers",
  processorsText: "Depending on the service used, data may be processed by Shopify, Vercel, Supabase, Klaviyo, and the email provider used to receive support requests. Monitoring or other providers will be listed here if enabled. Klaviyo profile data is processed on the merchant's instructions and through the merchant-authorized connection.",
  retention: "Retention",
  retentionRows: [
    ["OAuth state", "Minutes"],
    ["Klaviyo tokens", "While the connection is active or until disconnection"],
    ["Staged scan data", "Only during processing, followed by cleanup"],
    ["Scan results", "Up to 365 days, unless a shorter period is required"],
    ["Failed scan records", "Short recovery and audit period"],
    ["Privacy exports", "Up to 30 days"],
    ["Audit logs", "As needed for security, legal, and operational obligations"],
    ["Data after uninstall", "Deletion or anonymization according to Shopify requirements and applicable law"],
  ],
  cookies: "Cookies and analytics",
  cookiesText: "As of this policy date, the public site does not intentionally use non-essential analytics, pixels, marketing cookies, or Vercel Analytics. If that changes, the site will provide any consent choices required by applicable law and this policy will be updated.",
  rights: "Your choices and rights",
  rightsText: "Depending on the applicable law, you may request access, correction, deletion, restriction, portability, or information about processing. You may also disconnect Klaviyo from the app. Some records may need to be retained for security, billing, dispute resolution, or legal obligations.",
  changes: "Changes",
  changesText: "We may update this policy when the service, data flows, or legal requirements change. The date at the top indicates the latest version.",
};

const es = {
  title: "Política de Privacidad",
  category: "Legal y cumplimiento",
  date: "11 de agosto de 2026",
  contactLabel: "Contacto de privacidad",
  intro: "Esta política explica cómo ShopiDeck procesa datos del comerciante, Shopify, Klaviyo, soporte y operación para el sitio público y Klaviyo Bot Cleaner.",
  responsible: "Entidad responsable y jurisdicción",
  responsibleText: "Entidad responsable: ShopiDeck. El nombre legal registrado, la dirección legal, el país y la jurisdicción aplicable deben confirmarse y publicarse antes del lanzamiento en producción. Esta política no designa un DPO formal.",
  requests: "Para solicitudes de acceso, corrección, borrado, portabilidad o preguntas de privacidad, escribe a team@shopideck.com. Incluye el dominio de la tienda y la información necesaria para identificar la solicitud, pero no envíes contraseñas, API keys ni tokens de acceso.",
  roles: "Roles",
  rolesText: "Cuando procesa datos de perfiles de clientes finales siguiendo las instrucciones del comerciante, el comerciante normalmente actúa como responsable y ShopiDeck como encargado. ShopiDeck puede actuar como responsable para cuentas del comerciante, facturación, soporte, seguridad y uso directo del producto.",
  data: "Datos específicos procesados por Klaviyo Bot Cleaner",
  dataItems: [
    "Dominio de la tienda Shopify e ID de la tienda Shopify.",
    "ID de cuenta de Klaviyo, scopes OAuth y tokens OAuth de acceso y renovación cifrados.",
    "ID de perfil, email, nombre, apellido, teléfono cuando existe, ciudad y país cuando existen, e IP cuando está disponible.",
    "Fechas de creación y actualización, estado de suscripción de email marketing, puntuación de riesgo, nivel de riesgo y razones de puntuación.",
    "Historial de escaneos, historial de supresiones, plan de facturación, límites de uso, solicitudes de soporte y registros de seguridad u operación.",
  ],
  purpose: "Finalidades y límites de detección",
  purposeText: "Usamos estos datos para conectar la cuenta de Klaviyo del comerciante, auditar perfiles que ya existen en Klaviyo, mostrar señales de riesgo explicables a nivel de perfil, guardar resultados, enviar supresiones confirmadas por el comerciante, aplicar límites del plan, prestar soporte, proteger el servicio y cumplir obligaciones legales.",
  detectionText: "La versión actual utiliza señales explicables como coincidencias con dominios desechables conocidos, patrones inusuales de email, nombres genéricos o incompletos, valores repetidos, ventanas de creación de alta actividad y metadatos de suscripción disponibles. Estas señales no prueban fraude. La app no consulta eventos de apertura, clic, compra o navegación para etiquetar un perfil como inactivo.",
  actionsText: "El comerciante revisa los resultados y selecciona perfiles. La app no suprime automáticamente. La supresión evita envíos de marketing; la versión actual no elimina perfiles permanentemente.",
  security: "Seguridad",
  securityText: "Los tokens OAuth se cifran en la aplicación. Las conexiones usan HTTPS, las rutas protegidas requieren autenticación y los secretos permanecen en el servidor. Ninguna declaración de seguridad de esta política garantiza que el riesgo nunca pueda ocurrir.",
  processors: "Procesadores y proveedores de servicio",
  processorsText: "Según el servicio utilizado, los datos pueden ser procesados por Shopify, Vercel, Supabase, Klaviyo y el proveedor de email utilizado para recibir solicitudes de soporte. Los proveedores de monitorización u otros se añadirán si se habilitan. Los datos de perfiles de Klaviyo se procesan por instrucciones del comerciante y mediante la conexión autorizada por él.",
  retention: "Retención",
  retentionRows: [
    ["Estado OAuth", "Minutos"],
    ["Tokens de Klaviyo", "Mientras la conexión esté activa o hasta desconectarla"],
    ["Datos de escaneo en proceso", "Solo durante el procesamiento y posterior limpieza"],
    ["Resultados de escaneo", "Hasta 365 días, salvo que se requiera un plazo menor"],
    ["Registros de escaneos fallidos", "Periodo corto de recuperación y auditoría"],
    ["Exportaciones de privacidad", "Hasta 30 días"],
    ["Registros de auditoría", "Según necesidades de seguridad, legales y operativas"],
    ["Datos después de desinstalar", "Borrado o anonimización según requisitos de Shopify y la ley aplicable"],
  ],
  cookies: "Cookies y analítica",
  cookiesText: "A la fecha de esta política, el sitio público no utiliza intencionalmente analítica no esencial, píxeles, cookies de marketing ni Vercel Analytics. Si esto cambia, el sitio ofrecerá las opciones de consentimiento exigidas por la ley aplicable y actualizará esta política.",
  rights: "Tus opciones y derechos",
  rightsText: "Según la ley aplicable, puedes solicitar acceso, corrección, borrado, restricción, portabilidad o información sobre el tratamiento. También puedes desconectar Klaviyo de la app. Algunos registros pueden conservarse por seguridad, facturación, resolución de disputas u obligaciones legales.",
  changes: "Cambios",
  changesText: "Podemos actualizar esta política cuando cambien el servicio, los flujos de datos o los requisitos legales. La fecha superior indica la versión más reciente.",
};

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const content = locale === "es" ? es : en;
  const currentLocale = locale === "es" ? "es" : "en";

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <Navbar />
      <main className="py-12 pb-24 bg-brand-card flex-1">
        <div className="layout-container max-w-4xl">
          <article className="space-y-8">
            <div className="space-y-4"><span className="inline-block text-xs font-extrabold bg-brand-warning px-3 py-1 rounded-md border border-brand-accent/25 uppercase tracking-wider">{content.category}</span><h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight">{content.title}</h1></div>
            <div className="flex items-center gap-4 border-y border-brand-border py-4 text-xs font-medium text-brand-muted"><span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{content.date}</span><span>•</span><span>{currentLocale === "en" ? "Last updated" : "Última actualización"}</span></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-4">
              <aside className="lg:col-span-3 space-y-6 lg:sticky lg:top-28 self-start"><div><p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-2">{content.contactLabel}</p><span className="inline-block text-xs font-semibold bg-brand-bg px-2.5 py-1 rounded border border-brand-border font-mono break-all">{PRIVACY_EMAIL}</span></div><CopyLinkButton locale={currentLocale} /></aside>
              <div className="lg:col-span-9 space-y-8 text-brand-secondary leading-relaxed">
                <p>{content.intro}</p>
                <section><h2>{content.responsible}</h2><p>{content.responsibleText}</p><p className="mt-3">{content.requests}</p></section>
                <section><h2>{content.roles}</h2><p>{content.rolesText}</p></section>
                <section><h2>{content.data}</h2><ul className="list-disc pl-5 space-y-2">{content.dataItems.map((item) => <li key={item}>{item}</li>)}</ul></section>
                <section><h2>{content.purpose}</h2><p>{content.purposeText}</p><p className="mt-3">{content.detectionText}</p><p className="mt-3">{content.actionsText}</p></section>
                <section><h2>{content.security}</h2><p>{content.securityText}</p></section>
                <section><h2>{content.processors}</h2><p>{content.processorsText}</p></section>
                <section><h2>{content.retention}</h2><div className="overflow-x-auto border border-brand-border rounded-2xl"><table className="w-full text-sm"><thead className="bg-brand-bg"><tr><th className="text-left p-3 font-bold">{currentLocale === "en" ? "Data" : "Dato"}</th><th className="text-left p-3 font-bold">{currentLocale === "en" ? "Recommended retention" : "Retención recomendada"}</th></tr></thead><tbody>{content.retentionRows.map(([data, retention]) => <tr key={data} className="border-t border-brand-border"><td className="p-3 align-top">{data}</td><td className="p-3 align-top">{retention}</td></tr>)}</tbody></table></div></section>
                <section><h2>{content.cookies}</h2><p>{content.cookiesText}</p></section>
                <section><h2>{content.rights}</h2><p>{content.rightsText}</p></section>
                <section><h2>{content.changes}</h2><p>{content.changesText}</p></section>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

