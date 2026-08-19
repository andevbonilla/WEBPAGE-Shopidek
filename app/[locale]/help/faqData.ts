export interface FAQItem {
  id: string;
  category: "botcleaner" | "getting-started" | "billing";
  title: string;
  excerpt: string;
  content: string;
}

const faqEN: FAQItem[] = [
  {
    id: "oauth",
    category: "getting-started",
    title: "How does Bot Cleaner connect with Klaviyo?",
    excerpt: "Connect from Shopify Admin through Klaviyo OAuth.",
    content: "Open Bot Cleaner inside Shopify Admin, choose Connect Klaviyo, and complete Klaviyo OAuth. The app does not require a private API key. You can disconnect the account from the app settings.",
  },
  {
    id: "existing-profiles",
    category: "botcleaner",
    title: "What profiles does Bot Cleaner audit?",
    excerpt: "The audit reviews profiles already present in the authorized Klaviyo account.",
    content: "Bot Cleaner audits profiles that already exist in the authorized Klaviyo account. It does not block signup forms or checkouts before a profile is created.",
  },
  {
    id: "risk-signals",
    category: "botcleaner",
    title: "How does the current scanner calculate risk?",
    excerpt: "Rule-based, explainable profile signals provide context for merchant review.",
    content: "The current scanner uses a rule-based list of known disposable domains together with email-pattern, profile-data, repeated-value, high-volume creation-window, and available subscription signals. The list is not a guarantee of detection, and a flagged profile always requires merchant review.",
  },
  {
    id: "scope",
    category: "botcleaner",
    title: "Does Bot Cleaner inspect checkout speed or headless browsers?",
    excerpt: "No. The product audits profile data available through Klaviyo.",
    content: "Bot Cleaner does not inspect checkout speed, browser automation, or card-testing activity. It audits profile data available through Klaviyo.",
  },
  {
    id: "review-action",
    category: "botcleaner",
    title: "How do I review and act on results?",
    excerpt: "Review the score and reasons, select profiles, and confirm a suppression batch.",
    content: "Open the results view to review each flagged profile, risk score, category, and reasons. Select only the profiles you want to suppress and confirm the action. No destructive action runs automatically.",
  },
  {
    id: "suppression",
    category: "botcleaner",
    title: "What is the difference between suppression and deletion?",
    excerpt: "Suppression prevents marketing sends; it is not permanent profile deletion.",
    content: "The current product supports merchant-confirmed suppression in Klaviyo. Suppression prevents marketing sends. Permanent profile deletion is not included in the current version.",
  },
  {
    id: "disposable-domains",
    category: "botcleaner",
    title: "What does a disposable email signal mean?",
    excerpt: "A disposable domain can be a useful risk signal, but it is not proof of fraud.",
    content: "Disposable email services are designed for short-lived or low-persistence inboxes. Their presence can be a useful risk signal, but it is not proof that a profile is fraudulent. Review the complete set of reasons before taking action.",
  },
  {
    id: "does-not-do",
    category: "botcleaner",
    title: "What does Bot Cleaner not do?",
    excerpt: "It does not block checkouts, edit themes, apply Shopify tags, or delete profiles permanently.",
    content: "Bot Cleaner does not block Shopify checkouts, signup forms, or registrations. It does not edit Liquid or theme files, apply Shopify customer tags, prove that every flagged profile is a bot, guarantee a lower Klaviyo invoice, or replace SPF, DKIM, or DMARC configuration.",
  },
  {
    id: "billing-impact",
    category: "billing",
    title: "Can suppression change my Klaviyo invoice?",
    excerpt: "Suppression may reduce marketing activity or contact-count pressure, but no invoice change is guaranteed.",
    content: "Bot Cleaner reviews profiles already present in Klaviyo. Suppression may reduce unnecessary marketing activity or contact-count pressure, but the app cannot guarantee a change to your Klaviyo invoice. Any savings shown are estimates based on stated assumptions.",
  },
  {
    id: "plans",
    category: "billing",
    title: "What are the current plan limits?",
    excerpt: "Free Audit, Starter, Growth, and Pro publish scan, profile, and suppression limits.",
    content: "Free Audit includes one initial audit per Shopify store, up to 100,000 unsuppressed profiles, aggregate findings only, and no suppression or CSV export. Starter includes 2 scans, 5,000 profiles, and 500 suppressions per month. Growth includes 5 scans, 25,000 profiles, and 5,000 suppressions per month, with a seven-day trial only for eligible new subscriptions if configured in Shopify. Pro includes 15 scans, 100,000 profiles, and 25,000 suppressions per month.",
  },
  {
    id: "security-data",
    category: "getting-started",
    title: "What data can the app process?",
    excerpt: "The policy lists profile, connection, billing, support, and operational data.",
    content: "Depending on availability and the workflow, data can include the Shopify store domain and shop ID; Klaviyo account ID; encrypted OAuth access and refresh tokens and scopes; profile ID, email, name, phone, city, country, IP, creation and update dates, subscription status, risk score, risk level, score reasons, scan history, suppression history, plan and usage limits, support requests, and security or operational logs. OAuth tokens are encrypted by the application. Connections use HTTPS, protected routes require authentication, and secrets remain server-side.",
  },
  {
    id: "deliverability",
    category: "botcleaner",
    title: "Does Bot Cleaner guarantee inbox placement?",
    excerpt: "No. Deliverability depends on many factors outside the product.",
    content: "Suspicious or invalid profiles can make campaign analysis and list hygiene harder. Deliverability also depends on consent, domain authentication, content, engagement, and sending history. Bot Cleaner does not guarantee inbox placement.",
  },
  {
    id: "theme",
    category: "getting-started",
    title: "Do I need to modify my theme?",
    excerpt: "No. The current app does not require Liquid changes or storefront scripts.",
    content: "No. Bot Cleaner operates from Shopify Admin and backend APIs. It does not require Liquid files, theme edits, or frontend scripts in the storefront.",
  },
  {
    id: "domain-auth",
    category: "getting-started",
    title: "Does the app configure SPF, DKIM, or DMARC?",
    excerpt: "No. Configure domain authentication separately with Klaviyo and your DNS provider.",
    content: "No. Domain authentication must be configured directly according to Klaviyo's instructions and the requirements of your DNS provider.",
  },
  {
    id: "support",
    category: "getting-started",
    title: "How do I contact support?",
    excerpt: "Use the form or email support@shopideck.com during published support hours.",
    content: "Send a request through the form on this page or email support@shopideck.com. Include your store domain, app, steps to reproduce the issue, and relevant screenshots. Do not include API keys, passwords, access tokens, or full customer lists. See the privacy policy for how support data is handled.",
  },
];

const faqES: FAQItem[] = [
  {
    id: "oauth",
    category: "getting-started",
    title: "¿Cómo se conecta Bot Cleaner con Klaviyo?",
    excerpt: "Conecta desde Shopify Admin mediante OAuth de Klaviyo.",
    content: "Abre Bot Cleaner dentro de Shopify Admin, elige Conectar Klaviyo y completa OAuth de Klaviyo. La app no requiere una API key privada. Puedes desconectar la cuenta desde la configuración de la app.",
  },
  {
    id: "existing-profiles",
    category: "botcleaner",
    title: "¿Qué perfiles analiza Bot Cleaner?",
    excerpt: "La auditoría revisa perfiles que ya existen en la cuenta de Klaviyo autorizada.",
    content: "Bot Cleaner analiza perfiles que ya existen en la cuenta de Klaviyo autorizada. No bloquea formularios de registro ni checkouts antes de que se cree un perfil.",
  },
  {
    id: "risk-signals",
    category: "botcleaner",
    title: "¿Cómo calcula el riesgo el escáner actual?",
    excerpt: "Señales explicables basadas en reglas aportan contexto para la revisión del comerciante.",
    content: "El escáner actual usa una lista basada en reglas de dominios desechables conocidos junto con señales de patrón de email, datos del perfil, valores repetidos, ventanas de creación de alta actividad y metadatos de suscripción disponibles. La lista no garantiza la detección y todo perfil marcado requiere revisión del comerciante.",
  },
  {
    id: "scope",
    category: "botcleaner",
    title: "¿Bot Cleaner inspecciona la velocidad del checkout o navegadores headless?",
    excerpt: "No. El producto audita datos de perfil disponibles mediante Klaviyo.",
    content: "Bot Cleaner no inspecciona la velocidad del checkout, la automatización del navegador ni la actividad de card testing. Audita los datos de perfil disponibles mediante Klaviyo.",
  },
  {
    id: "review-action",
    category: "botcleaner",
    title: "¿Cómo reviso y actúo sobre los resultados?",
    excerpt: "Revisa la puntuación y las razones, selecciona perfiles y confirma un lote de supresión.",
    content: "Abre los resultados para revisar cada perfil marcado, su puntuación, categoría y razones. Selecciona solo los perfiles que quieres suprimir y confirma la acción. Ninguna acción destructiva se ejecuta automáticamente.",
  },
  {
    id: "suppression",
    category: "botcleaner",
    title: "¿Cuál es la diferencia entre supresión y eliminación?",
    excerpt: "La supresión evita envíos de marketing; no es una eliminación permanente.",
    content: "El producto actual permite la supresión confirmada por el comerciante en Klaviyo. La supresión evita envíos de marketing. La eliminación permanente de perfiles no está incluida en la versión actual.",
  },
  {
    id: "disposable-domains",
    category: "botcleaner",
    title: "¿Qué significa una señal de email desechable?",
    excerpt: "Un dominio desechable puede ser una señal útil, pero no demuestra fraude.",
    content: "Los servicios de email desechable están diseñados para buzones de corta duración o baja persistencia. Su presencia puede ser una señal útil de riesgo, pero no demuestra que un perfil sea fraudulento. Revisa el conjunto completo de razones antes de actuar.",
  },
  {
    id: "does-not-do",
    category: "botcleaner",
    title: "¿Qué no hace Bot Cleaner?",
    excerpt: "No bloquea checkouts, edita temas, aplica etiquetas de Shopify ni elimina perfiles permanentemente.",
    content: "Bot Cleaner no bloquea checkouts, formularios ni registros de Shopify. No edita archivos Liquid o del tema, no aplica etiquetas de clientes de Shopify, no demuestra que cada perfil marcado sea un bot, no garantiza una factura menor de Klaviyo ni reemplaza la configuración de SPF, DKIM o DMARC.",
  },
  {
    id: "billing-impact",
    category: "billing",
    title: "¿La supresión puede cambiar mi factura de Klaviyo?",
    excerpt: "Puede reducir actividad de marketing o presión sobre el conteo, pero no se garantiza un cambio en la factura.",
    content: "Bot Cleaner revisa perfiles que ya están en Klaviyo. La supresión puede reducir actividad de marketing innecesaria o presión sobre el conteo de contactos, pero la app no puede garantizar un cambio en tu factura de Klaviyo. Cualquier ahorro mostrado es una estimación basada en supuestos publicados.",
  },
  {
    id: "plans",
    category: "billing",
    title: "¿Cuáles son los límites actuales de los planes?",
    excerpt: "Free Audit, Starter, Growth y Pro publican límites de escaneos, perfiles y supresiones.",
    content: "Free Audit incluye una auditoría inicial por tienda Shopify, hasta 100.000 perfiles no suprimidos, hallazgos agregados y no incluye supresión ni exportación CSV. Starter incluye 2 escaneos, 5.000 perfiles y 500 supresiones al mes. Growth incluye 5 escaneos, 25.000 perfiles y 5.000 supresiones al mes, con una prueba de siete días solo para nuevas suscripciones elegibles si está configurada en Shopify. Pro incluye 15 escaneos, 100.000 perfiles y 25.000 supresiones al mes.",
  },
  {
    id: "security-data",
    category: "getting-started",
    title: "¿Qué datos puede procesar la app?",
    excerpt: "La política enumera datos de perfiles, conexiones, facturación, soporte y operación.",
    content: "Según la disponibilidad y el flujo, los datos pueden incluir dominio e ID de la tienda Shopify; ID de cuenta de Klaviyo; tokens OAuth de acceso y renovación cifrados y sus scopes; ID de perfil, email, nombre, teléfono, ciudad, país, IP, fechas de creación y actualización, estado de suscripción, puntuación, nivel y razones de riesgo, historial de escaneos y supresiones, plan y límites de uso, solicitudes de soporte y registros de seguridad u operación. Los tokens OAuth se cifran en la aplicación. Las conexiones usan HTTPS, las rutas protegidas requieren autenticación y los secretos permanecen en el servidor.",
  },
  {
    id: "deliverability",
    category: "botcleaner",
    title: "¿Bot Cleaner garantiza llegar a la bandeja de entrada?",
    excerpt: "No. La entregabilidad depende de muchos factores externos al producto.",
    content: "Los perfiles sospechosos o inválidos pueden dificultar el análisis de campañas y la higiene de listas. La entregabilidad también depende del consentimiento, la autenticación del dominio, el contenido, la interacción y el historial de envío. Bot Cleaner no garantiza la llegada a la bandeja de entrada.",
  },
  {
    id: "theme",
    category: "getting-started",
    title: "¿Necesito modificar el tema?",
    excerpt: "No. La app actual no requiere cambios Liquid ni scripts en el storefront.",
    content: "No. Bot Cleaner opera desde Shopify Admin y APIs de backend. No requiere archivos Liquid, cambios en el tema ni scripts frontend en el storefront.",
  },
  {
    id: "domain-auth",
    category: "getting-started",
    title: "¿La app configura SPF, DKIM o DMARC?",
    excerpt: "No. Configura la autenticación del dominio por separado con Klaviyo y tu proveedor DNS.",
    content: "No. La autenticación del dominio debe configurarse directamente según las instrucciones de Klaviyo y los requisitos de tu proveedor DNS.",
  },
  {
    id: "support",
    category: "getting-started",
    title: "¿Cómo contacto al soporte?",
    excerpt: "Usa el formulario o escribe a support@shopideck.com durante el horario publicado.",
    content: "Envía una solicitud mediante el formulario de esta página o escribe a support@shopideck.com. Incluye el dominio de tu tienda, la app, los pasos para reproducir el problema y capturas relevantes. No incluyas API keys, contraseñas, tokens de acceso ni listas completas de clientes. Consulta la política de privacidad para conocer el tratamiento de los datos de soporte.",
  },
];

export function getFaqs(locale: string): FAQItem[] {
  return locale === "es" ? faqES : faqEN;
}
