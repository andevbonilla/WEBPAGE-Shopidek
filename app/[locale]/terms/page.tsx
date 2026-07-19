import { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CopyLinkButton from "../../components/CopyLinkButton";
import { Link } from "@/i18n/navigation";
import { Clock } from "lucide-react";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";

  const title = currentLocale === "en"
    ? "Terms of Use | ShopiDeck Shopify SaaS Suite"
    : "Términos de Uso | ShopiDeck Suite de Shopify";

  const description = currentLocale === "en"
    ? "ShopiDeck Terms of Use. Review our e-commerce SaaS licensing, billing rules, Klaviyo API limits, and explicit liability boundaries."
    : "Términos de Uso de ShopiDeck. Revisa nuestras condiciones de licencia SaaS, facturación, límites de API y exclusiones de responsabilidad.";

  const canonicalPath = `/${currentLocale}/terms`;

  return {
    metadataBase: new URL("https://shopideck.com"),
    title,
    description,
    keywords: currentLocale === "en"
      ? "ShopiDeck terms, Shopify SaaS licensing, Klaviyo API limits, merchant contract, deliverability disclaimer"
      : "términos de uso ShopiDeck, licencia SaaS Shopify, límites de API Klaviyo, exención de responsabilidad, contrato comerciantes",
    alternates: {
      canonical: canonicalPath,
      languages: {
        "en": "/en/terms",
        "es": "/es/terms",
        "x-default": "/en/terms"
      }
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const currentLocale = (locale as "en" | "es") || "en";
  const isEn = currentLocale === "en";

  const termsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": isEn ? "Terms of Use of ShopiDeck" : "Términos de Uso de ShopiDeck",
    "description": isEn
      ? "Terms of Use of ShopiDeck. Read our e-commerce SaaS license, billing terms, and liability limits."
      : "Términos de Uso de ShopiDeck. Revisa la licencia de SaaS, facturación y límites de responsabilidad.",
    "publisher": {
      "@type": "Organization",
      "name": "ShopiDeck",
      "url": "https://shopideck.com"
    },
    "dateModified": "2026-06-01"
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      {/* Dynamic JSON-LD Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd).replace(/</g, '\\u003c') }}
      />
      <Navbar />

      {/* SUBNAV / BREADCRUMBS */}
      <div className="bg-brand-cream border-b border-brand-border py-3 mt-16 md:mt-20">
        <div className="layout-container flex items-center justify-between text-xs font-bold text-brand-muted">
          <div className="flex items-center gap-1.5 overflow-hidden">
            <span className="truncate">ShopiDeck Suite</span>
            <span>&gt;</span>
            <span className="text-brand-main truncate">
              {isEn ? "Terms of Use" : "Términos de Uso"}
            </span>
          </div>
          <Link href="/" className="hover:text-brand-main transition-colors flex items-center gap-1 flex-shrink-0">
            ← {isEn ? "Back" : "Volver"}
          </Link>
        </div>
      </div>

      {/* EDITORIAL BLOG-STYLE CONTENT LAYOUT */}
      <main className="py-12 pb-24 bg-brand-card flex-1">
        <div className="layout-container max-w-4xl">
          <article className="space-y-8">
            
            {/* Category and Title */}
            <div className="space-y-4">
              <span className="inline-block text-xs font-extrabold text-brand-main bg-brand-warning px-3 py-1 rounded-md border border-brand-accent/25 uppercase tracking-wider">
                {isEn ? "Legal & Compliance" : "Legal y Cumplimiento"}
              </span>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-brand-main tracking-tight uppercase">
                {isEn ? "Terms of Use" : "Términos de Uso"}
              </h1>
            </div>

            {/* Top Timestamp info bar (Only date and reading time) */}
            <div className="flex items-center gap-4 border-y border-brand-border py-4 mt-2 text-xs font-medium text-brand-muted font-mono">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brand-muted" /> {isEn ? "6 min read" : "6 min de lectura"}
              </span>
              <span>&bull;</span>
              <span>{isEn ? "June 1, 2026" : "1 de Junio, 2026"}</span>
            </div>

            {/* Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-6">
              
              {/* Left Column (Only Legal Support and CopyLinkButton) */}
              <div className="lg:col-span-3 flex flex-col gap-6 lg:sticky lg:top-28 self-start border-t lg:border-t-0 border-brand-border pt-6 lg:pt-0">
                <div>
                  <p className="text-[10px] font-bold text-brand-muted uppercase tracking-wider mb-2">
                    {isEn ? "Legal Support" : "Soporte Legal"}
                  </p>
                  <span className="inline-block text-xs font-semibold text-brand-secondary bg-brand-bg px-2.5 py-0.5 rounded border border-brand-border font-mono break-all">
                    support@shopideck.com
                  </span>
                </div>

                <div className="h-px bg-brand-border/60 w-full" />

                <CopyLinkButton locale={currentLocale} />
              </div>

              {/* Right Column (Rich Terms Content) */}
              <div className="lg:col-span-9 space-y-6 text-brand-secondary text-base leading-[1.8] font-light font-sans">
                {isEn ? (
                  // English Content
                  <>
                    <p className="font-sans">
                      Welcome to the ShopiDeck Suite. By installing, subscribing to, or using any micro-application within the ShopiDeck brand (including ShopiDeck: Klaviyo Bot Cleaner), you agree to be bound by these Terms of Use.
                    </p>
                    <p className="font-sans">
                      These terms govern the relationship between ShopiDeck (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) and you as a registered e-commerce merchant (&quot;merchant&quot; or &quot;you&quot;). If you do not agree to these terms, you must not install or use our applications.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      1. SaaS License &amp; Shopify Integration
                    </h2>
                    <p className="font-sans">
                      By installing, configuring, or subscribing to any software tool within the ShopiDeck suite, you are granted a non-exclusive, non-transferable, revocable SaaS subscription license to use our micro-applications.
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>This SaaS license is tied directly to your active Shopify storefront.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>The license remains active while your subscription remains in good standing and you comply with these terms.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>We reserve the right to restrict or terminate app access if your Shopify account is terminated, compromised, or fails to complete payment cycles.</span>
                      </li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      2. Fair Use Limits &amp; API Throttling
                    </h2>
                    <p className="font-sans">
                      To guarantee optimal platform speed, database index response times, and zero performance impact on other storefronts within our server grids, all software subscriptions are subject to fair use limits.
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Rate Limiting &amp; Throttling:</strong> Our servers may throttle API requests or postpone background analysis until the next billing cycle if transactional boundaries are exceeded.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Overages &amp; Upgrades:</strong> If your monthly active scan volume or subscriber base increases, you will receive automated in-app alerts to upgrade your tier to match your scaling transaction volume.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Abuse Prevention:</strong> Any attempt to reverse-engineer, inject scripts, bypass simulator query security protocols, or access protected routes without valid sessions is grounds for an immediate service ban.
                        </div>
                      </li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      3. Billing, Subscriptions &amp; Cancellations
                    </h2>
                    <p className="font-sans">
                      All billing operations for ShopiDeck suite tools are processed securely through Shopify&apos;s official billing API ecosystem. This ensures native billing directly on your standard Shopify store invoice:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span><strong>Billing Cycle:</strong> Charges are billed on an automated 30-day recurring cycle managed directly by Shopify.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span><strong>Free Trials:</strong> Trial periods, if offered, are valid for new installations only. Uninstalling the application before the trial ends prevents any charges from being processed.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span><strong>Cancellations:</strong> You can cancel your subscription at any time by uninstalling the application from your Shopify Admin panel. No further charges will accrue.</span></li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      4. Explicit Liability Disclaimers
                    </h2>
                    <p className="font-sans">
                      THE SHOPIDECK SUITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SPECIFICALLY DISCLAIM ANY LIABILITY FOR:
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Email Deliverability &amp; Spam Folders:</strong> While Klaviyo Bot Cleaner helps optimize your list hygiene, we cannot guarantee specific inbox delivery placement. Deliverability depends heavily on your own domain authority, message contents, warm-up history, and Klaviyo DNS setup.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Indirect or Transactional Loss:</strong> In no event shall we be liable for lost profits, lost business revenue, or loss of transactional store data due to third-party infrastructure outages (including Shopify or Klaviyo downtime).
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Merchant Autonomy:</strong> You retain complete authority and ultimate responsibility for verifying spambot scores and confirming final contact suppression or deletion actions.
                        </div>
                      </li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      5. Governing Law &amp; Dispute Resolution
                    </h2>
                    <p className="font-sans">
                      These Terms of Use, your subscription, and your relationship with the ShopiDeck software suite shall be governed by, and construed in accordance with, the laws of Spain and the European Union, without regard to conflict of laws principles.
                    </p>
                    <p className="font-sans">
                      Any dispute, claim, or controversy arising out of or relating to your subscription shall be subject to the exclusive jurisdiction of the competent courts of Spain.
                    </p>
                  </>
                ) : (
                  // Spanish Content
                  <>
                    <p className="font-sans">
                      Bienvenido a la suite ShopiDeck. Al instalar, suscribirse o utilizar cualquier microaplicación de la marca ShopiDeck (incluida ShopiDeck: Klaviyo Bot Cleaner), usted acepta quedar vinculado por estos Términos de Uso.
                    </p>
                    <p className="font-sans">
                      Estos términos regulan la relación entre ShopiDeck (&quot;nosotros&quot;) y usted como comerciante de comercio electrónico registrado (&quot;comerciante&quot; o &quot;usted&quot;). Si no está de acuerdo con estos términos, no debe instalar ni utilizar nuestras aplicaciones.
                    </p>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      1. Licencia SaaS e Integración con Shopify
                    </h2>
                    <p className="font-sans">
                      Al instalar, configurar o suscribirse a cualquier herramienta de la suite ShopiDeck, se le otorga una licencia de suscripción SaaS revocable, no exclusiva y no transferible para utilizar nuestras microaplicaciones.
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Esta licencia SaaS está directamente vinculada a su tienda activa de Shopify.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>La licencia permanece activa mientras cumpla con estos términos, complete los ciclos de facturación estándar de Shopify y mantenga nuestras aplicaciones instaladas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                        <span>Nos reservamos el derecho de suspender o restringir el acceso a la aplicación si su cuenta de Shopify es cancelada, se ve comprometida o no completa los ciclos de pago.</span>
                      </li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      2. Límites de Uso Justo y Regulación de la API
                    </h2>
                    <p className="font-sans">
                      Para garantizar una velocidad óptima de la plataforma, tiempos de respuesta rápidos en los índices de la base de datos y un impacto nulo en el rendimiento de otras tiendas que comparten nuestra infraestructura, todas las suscripciones están sujetas a límites mensuales de uso justo.
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Límites de Frecuencia:</strong> Nuestros servidores pueden limitar la frecuencia de solicitudes de API o posponer análisis en segundo plano hasta el próximo ciclo de facturación si se superan los límites transaccionales.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Excesos de Consumo:</strong> Si el volumen mensual de perfiles analizados o transacciones supera los límites de su plan activo, recibirá notificaciones en la aplicación y alertas por correo electrónico para actualizar voluntariamente su plan de suscripción.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Prevención de Abuso:</strong> Cualquier intento de ingeniería inversa, inyección de scripts, elusión de límites de seguridad o acceso a rutas protegidas sin credenciales válidas suspenderá de inmediato el servicio.
                        </div>
                      </li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      3. Facturación, Suscripciones y Cancelaciones
                    </h2>
                    <p className="font-sans">
                      Toda la facturación de las herramientas de la suite ShopiDeck se procesa de forma segura a través de la API oficial de facturación de Shopify. Esto garantiza la máxima seguridad e integración nativa con su factura mensual de Shopify:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span><strong>Ciclo de Facturación:</strong> Los cargos se facturan en un ciclo recurrente automatizado de 30 días administrado directamente por Shopify.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span><strong>Pruebas Gratuitas:</strong> Los períodos de prueba, si se ofrecen, son válidos únicamente para nuevas instalaciones. Desinstalar la aplicación antes de que termine el período de prueba evita cualquier cargo.</span></li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" /><span><strong>Cancelaciones:</strong> Puede cancelar su suscripción en cualquier momento desinstalando la aplicación de su panel de administración de Shopify. No se generarán más cargos a partir de ese momento.</span></li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      4. Exclusión de Responsabilidad Explícita
                    </h2>
                    <p className="font-sans">
                      LA SUITE SHOPIDECK SE SUMINISTRA &quot;TAL CUAL&quot; Y &quot;SEGÚN DISPONIBILIDAD&quot; SIN GARANTÍAS DE NINGÚN TIPO. EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY, EXCLUIMOS CUALQUIER RESPONSABILIDAD POR:
                    </p>
                    <ul className="space-y-3 pl-4">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Entregabilidad de Correos y Carpetas de Spam:</strong> Aunque Klaviyo Bot Cleaner optimiza la higiene de sus listas de correo, no garantizamos una entregabilidad específica en la bandeja de entrada. La entregabilidad depende de la reputación de su dominio, el contenido del mensaje, el historial de envíos y la configuración de Klaviyo.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Daños Indirectos o Transaccionales:</strong> Bajo ninguna circunstancia seremos responsables de la pérdida de ganancias, ingresos comerciales o pérdida de datos por caídas de infraestructura de terceros (incluido el tiempo de inactividad de Shopify o Klaviyo).
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2.5 shrink-0" />
                        <div>
                          <strong>Autonomía del Comerciante:</strong> Usted conserva la total responsabilidad y el control exclusivo para verificar los spambots marcados y confirmar las acciones finales de supresión de contactos.
                        </div>
                      </li>
                    </ul>

                    <h2 className="font-display font-black text-xl text-brand-main uppercase tracking-tight pt-4">
                      5. Ley Aplicable y Resolución de Disputas
                    </h2>
                    <p className="font-sans">
                      Estos Términos de Uso, su suscripción y su relación con la suite de software ShopiDeck se regirán e interpretarán de conformidad con las leyes de España y la Unión Europea, sin dar efecto a sus principios de conflicto de leyes.
                    </p>
                    <p className="font-sans">
                      Cualquier disputa, reclamación o controversia que surja de su suscripción o se relacione con ella estará sujeta a la jurisdicción exclusiva de los tribunales competentes de España.
                    </p>
                  </>
                )}
              </div>

            </div>

          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
