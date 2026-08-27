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
  name: string;
  service: string;
  purpose: string;
  region: string;
  links: LegalLink[];
};

const LEGAL_EMAIL = "team@shopideck.com";
const ADDRESS = "Cra. 79A # 6-04, Bogotá D.C., Colombia";
const PRODUCT = "ShopiDeck: Klaviyo Bot Cleaner";
const APP_URL = "https://klaviyobotcleaner.shopideck.com";
const SIC_DATA_PROTECTION_URL = "https://www.sic.gov.co/que-es-la-delegatura-datos-personales";
const SIC_PQRS_URL = "https://servicioslinea.sic.gov.co/servilinea/pqrsf";

const providerLinks = {
  shopify: [
    { label: "Terms", href: "https://www.shopify.com/legal/terms", external: true },
    { label: "Privacy", href: "https://www.shopify.com/legal/privacy", external: true },
    { label: "DPA", href: "https://www.shopify.com/legal/dpa", external: true },
  ],
  klaviyo: [
    { label: "Terms", href: "https://www.klaviyo.com/legal/terms-of-use", external: true },
    { label: "Privacy", href: "https://www.klaviyo.com/legal/privacy-notice", external: true },
    { label: "DPA", href: "https://www.klaviyo.com/legal/data-processing-agreement", external: true },
  ],
  supabase: [
    { label: "Terms", href: "https://supabase.com/terms", external: true },
    { label: "Privacy", href: "https://supabase.com/privacy", external: true },
    { label: "DPA", href: "https://supabase.com/legal/dpa", external: true },
  ],
  vercel: [
    { label: "Terms", href: "https://vercel.com/legal/terms", external: true },
    { label: "Privacy", href: "https://vercel.com/legal/privacy-policy", external: true },
    { label: "DPA", href: "https://vercel.com/legal/dpa", external: true },
  ],
  resend: [
    { label: "Terms", href: "https://resend.com/legal/terms-of-service", external: true },
    { label: "Privacy", href: "https://resend.com/legal/privacy-policy", external: true },
    { label: "DPA", href: "https://resend.com/legal/dpa", external: true },
  ],
} satisfies Record<string, LegalLink[]>;

const privacyEn: LegalDocument = {
  title: "Privacy Policy",
  category: "Legal and privacy",
  effectiveDate: "September 1, 2026",
  lastUpdated: "September 1, 2026",
  intro: `This Privacy Policy explains how ${PRODUCT} processes personal data through the public website at https://shopideck.com and the embedded Shopify app at ${APP_URL}. It describes the current product, its limits, the parties' privacy roles, and the choices available to individuals and merchants.`,
  sections: [
    {
      id: "scope",
      title: "1. Scope and effective date",
      paragraphs: [
        `This policy applies to the ShopiDeck public website, the embedded Shopify app, merchant and administrator accounts, support and privacy requests, and the operation and security of the service. It is effective on ${"September 1, 2026"} and was last updated on ${"September 1, 2026"}.`,
        "The English text is a translation. The Spanish version is the prevailing version. Where legally permitted and there is a contradiction, the Spanish version prevails without removing mandatory rights applicable to the merchant or any individual.",
      ],
    },
    {
      id: "identity",
      title: "2. Controller identity and contact",
      paragraphs: [
        `ShopiDeck is a trade name operated by Andres Camilo Bonilla Carreño, a Colombian individual merchant based at ${ADDRESS}.`,
        `Privacy, legal, support, and security incident contact: ${LEGAL_EMAIL}. The internal privacy contact is Andres Camilo Bonilla Carreño at ${LEGAL_EMAIL}; this contact is not described as a formal DPO.`,
      ],
    },
    {
      id: "definitions",
      title: "3. Definitions",
      paragraphs: [
        "In this policy, merchant means the Shopify merchant or business that installs or uses the app; administrator means an authorized Shopify user; profile means a Klaviyo contact record made available through the authorized account; suppression means the Klaviyo action that prevents marketing sends and is not permanent profile deletion; and ShopiDeck, we, or us means the operator identified above.",
      ],
    },
    {
      id: "roles",
      title: "4. Privacy roles",
      paragraphs: [
        "ShopiDeck acts as controller for merchant and administrator data, account administration, billing, product use, support, security, abuse prevention, contractual administration, and legal compliance.",
        "ShopiDeck acts as processor for Klaviyo profiles processed on the merchant's documented instructions, including scoring, results, confirmed suppressions, and privacy requests submitted through Shopify. The merchant generally acts as controller for its customers' data and determines the applicable legal basis for that processing.",
      ],
      bullets: [
        "The merchant must have a legal basis to store customer profiles in Klaviyo and give lawful instructions to ShopiDeck.",
        "The merchant must provide its own privacy notices and handle customer rights requests when it acts as controller.",
        "The merchant must review profiles and confirm a suppression before ShopiDeck sends that action to Klaviyo.",
        "The merchant must have authority to connect the Shopify and Klaviyo accounts and must not use the app for incompatible purposes.",
      ],
    },
    {
      id: "people",
      title: "5. People affected",
      bullets: [
        "Shopify merchants, owners, administrators, and other authorized users.",
        "Customers and contacts represented by profiles in the merchant's authorized Klaviyo account.",
        "People who submit support, privacy, or security incident requests.",
        "People whose data appears in technical, security, or operational records created while the service runs.",
      ],
    },
    {
      id: "sources",
      title: "6. Sources of data",
      bullets: [
        "Shopify, including installation, authentication, store and administrator identity, App Store, billing, webhooks, and privacy requests.",
        "Klaviyo, through the OAuth connection authorized by the merchant and data available in that account.",
        "The merchant or administrator directly, including support and privacy request forms.",
        "The service's operation, security controls, and limited technical or error records.",
      ],
    },
    {
      id: "categories",
      title: "7. Categories of data processed",
      bullets: [
        "Shopify and merchant data: myshopify.com domain, Shopify Shop ID, Shopify access token, session information, administrator user ID, administrator first and last name and email when Shopify provides them, locale, account-owner status, scopes, plan, billing cycle, usage limits, monthly consumption, support requests, and limited technical and operational records.",
        "Klaviyo account data: Klaviyo Account ID, OAuth scopes, and encrypted access and refresh tokens.",
        "Klaviyo profile data: Profile ID, email, first name, last name, phone when present, city when present, country when present, IP when available, creation date, update date, marketing subscription status, and email domain.",
        "Derived data: normalized patterns used for detection, risk score, risk level, explainable detection reasons, suppression result, audit history, and suppression history.",
        "Support, privacy, security, and operational data needed to receive requests, verify them proportionately, protect the service, and respond.",
      ],
    },
    {
      id: "unrequested-data",
      title: "8. Data not requested",
      paragraphs: [
        "The app is not designed to intentionally request or process health data, biometric data, religion, sexual orientation, political opinions, financial information, card numbers, passwords, or equivalent special categories. Merchants must not submit sensitive data through fields that the app may process unless they have an appropriate legal basis and the use is lawful.",
        "ShopiDeck does not store payment card information, sell personal data, share data for behavioral advertising, use profiles for its own advertising, create advertising audiences, or use data to train artificial-intelligence models.",
      ],
    },
    {
      id: "purposes",
      title: "9. Purposes and legal bases",
      paragraphs: [
        "The following table describes the purpose framework for the current processing. In Colombia, authorization is obtained when required, subject to the legal exceptions that apply. For Klaviyo profiles, the merchant determines its own legal basis and gives documented instructions. A legal basis listed for one purpose may not apply in every jurisdiction or circumstance.",
      ],
      table: {
        headers: ["Purpose", "Legal basis or instruction"],
        rows: [
          ["Providing the app", "Performance of the contract."],
          ["Authentication", "Performance of the contract and security."],
          ["Account administration", "Performance of the contract."],
          ["Billing", "Performance of the contract and applicable legal, accounting, or tax obligations."],
          ["Support", "Performance of the contract and management of requests."],
          ["Security and abuse prevention", "Legitimate interest and applicable legal obligations."],
          ["Privacy requests", "Legal obligation."],
          ["Klaviyo profiles and scoring", "The merchant's documented instructions as controller; the merchant determines its legal basis."],
          ["Future non-essential cookies", "Consent where legally required."],
        ],
      },
    },
    {
      id: "shopify",
      title: "10. Shopify",
      paragraphs: [
        "Shopify provides installation, authentication, store and administrator identity, App Store and billing functions, webhooks, and privacy request mechanisms. Shopify is an independent platform and its own terms and privacy information also apply. Shopify may send privacy webhooks to ShopiDeck for the relevant store and customer records.",
      ],
      links: [{ label: "Shopify terms, privacy, and DPA", href: "https://www.shopify.com/legal", external: true }],
    },
    {
      id: "klaviyo",
      title: "11. Klaviyo connection and permissions",
      paragraphs: [
        "The app connects to Klaviyo through OAuth, reads existing profiles and subscription information, applies rule-based scoring, and sends a suppression only after the merchant selects profiles and confirms the action. Current permissions are accounts:read, profiles:read, profiles:write, subscriptions:read, and subscriptions:write. The app does not request permission for permanent profile deletion.",
        "Klaviyo OAuth access and refresh tokens are encrypted before storage. The merchant can disconnect Klaviyo from Settings. Disconnecting revokes and removes the OAuth tokens and connection while retained audit and suppression history remains for its retention period.",
      ],
      links: [{ label: "Klaviyo terms, privacy, and DPA", href: "https://www.klaviyo.com/legal", external: true }],
    },
    {
      id: "scoring",
      title: "12. Scoring and automated evaluation",
      paragraphs: [
        "The app performs an automated assessment based on explainable rules. Possible signals include disposable email domains, unusual or apparently generated email formats, generic or incomplete names, missing data, repeated values, bursts of profile creation, shared email patterns, shared name patterns, shared IP patterns, shared phone patterns, and available subscription status.",
        "The score is an estimate and does not prove fraud or that a profile is a bot. False positives and false negatives are possible. The result may classify a profile as low risk, needs review, or probable bot and shows understandable reasons for the classification.",
      ],
    },
    {
      id: "human-review",
      title: "13. Human review and significant decisions",
      paragraphs: [
        "The score does not create an automatic suppression. The merchant keeps the final decision, reviews the profile and its reasons, selects profiles, and confirms any suppression. ShopiDeck does not make legal or similarly significant decisions about an individual solely from the scoring. Results are not used for advertising, credit, employment, insurance, or eligibility decisions.",
        "The app does not use opens, clicks, purchases, or browsing activity to declare a profile inactive.",
      ],
    },
    {
      id: "providers",
      title: "14. Providers and subprocessors",
      paragraphs: [
        "ShopiDeck uses the following providers for the current service. They may process data as needed to provide their services and under their applicable contracts. Prisma is an ORM library and is not an independent subprocessor.",
      ],
      bullets: [
        "Shopify: installation, authentication, store and administrator identity, App Store, billing, webhooks, and privacy requests.",
        "Klaviyo: OAuth, account and profile queries, subscription information, and merchant-confirmed suppression.",
        "Supabase: PostgreSQL database and application storage; region US East, United States.",
        "Vercel: hosting and serverless functions; processing in the United States.",
        "Resend: email communications and support when applicable.",
      ],
      links: [{ label: "View the full subprocessor list", href: "/subprocessors" }],
    },
    {
      id: "transfers",
      title: "15. International transfers",
      paragraphs: [
        `The controller is established in Colombia. Data may be processed in the United States and other countries where Shopify, Klaviyo, Supabase, Vercel, and Resend operate. ShopiDeck does not represent that all data stays in Colombia.`,
        "ShopiDeck uses the contracts and safeguards made available by the relevant providers when applicable. A merchant or individual may request additional information about applicable safeguards by contacting " + LEGAL_EMAIL + ". The provider's terms, privacy notice, DPA, and any applicable transfer mechanism may also apply.",
      ],
      links: [{ label: "View provider transfer information", href: "/subprocessors" }],
    },
    {
      id: "retention",
      title: "16. Retention",
      paragraphs: [
        "ShopiDeck retains data for the periods below, subject to earlier deletion where required by law or the implemented deletion flows. Retention applies to local ShopiDeck records; Shopify and Klaviyo may retain data independently under their own policies and instructions.",
      ],
      table: {
        headers: ["Data or record", "Retention"],
        rows: [
          ["Klaviyo OAuth state", "10 minutes."],
          ["Klaviyo tokens", "Until disconnect, uninstall, account deletion, or revocation."],
          ["Temporary scan data", "During processing."],
          ["Temporary data for completed jobs", "Approximately 24 hours."],
          ["Failed or cancelled scans", "30 days."],
          ["Scan history", "365 days."],
          ["Results", "365 days."],
          ["Suppression history", "365 days."],
          ["Privacy requests and exports", "30 days."],
          ["Shopify sessions", "While the app is installed or until removed."],
          ["Redaction HMAC hashes", "While the store record exists."],
          ["Legally necessary records", "For the period required by applicable law."],
        ],
      },
    },
    {
      id: "redaction-hashes",
      title: "17. Redaction HMAC hashes",
      paragraphs: [
        "Redaction HMAC hashes are pseudonymized values, not completely anonymous data. They are used to prevent an identifier that was previously redacted from being stored again. They are deleted when the store record is permanently deleted.",
      ],
    },
    {
      id: "cookies",
      title: "18. Cookies",
      paragraphs: [
        "The embedded app uses the functional or necessary cookie shopideck_locale to remember the language selected inside the embedded app. It lasts one year and has Secure, HttpOnly, and SameSite=None attributes. It is not used for advertising or analytics.",
        "ShopiDeck does use cookies. Any future non-essential cookie will be used only with the consent or other legal basis required by applicable law and this policy will be updated where necessary.",
      ],
    },
    {
      id: "analytics",
      title: "19. Analytics and advertising",
      paragraphs: [
        "The current service does not use Google Analytics, Meta Pixel, Sentry, Vercel Analytics, advertising analytics, behavioral advertising, advertising audiences, or profile data for ShopiDeck advertising. ShopiDeck does not use personal data to train artificial-intelligence models.",
      ],
    },
    {
      id: "security",
      title: "20. Security measures",
      bullets: [
        "Klaviyo tokens are encrypted.",
        "Connections use HTTPS.",
        "Secrets are kept on the server.",
        "Shopify authentication and protected routes are used.",
        "Webhooks are verified and backend input is validated.",
        "Critical actions include ownership verification and confirmation before suppression.",
        "Usage limits are enforced in the backend.",
        "Privacy requests and exports are encrypted.",
      ],
      paragraphs: ["These measures reduce risk but do not guarantee absolute security."],
    },
    {
      id: "incidents",
      title: "21. Security incidents",
      paragraphs: [
        `ShopiDeck investigates suspected security incidents and notifies affected parties or authorities when the law requires it. Merchants must report compromised credentials or suspected unauthorized access to ${LEGAL_EMAIL}. Do not send passwords, API keys, OAuth tokens, or other secrets by email.`,
      ],
    },
    {
      id: "rights",
      title: "22. Rights",
      paragraphs: [
        "Subject to applicable law and the relevant privacy role, individuals may have the right to know about processing, access data, update or correct it, request proof of authorization where applicable, be informed about its use, submit inquiries and complaints, request deletion or suppression, revoke authorization where legally available, and request review of automated processing.",
        "The merchant generally handles rights concerning its customer data as controller. ShopiDeck assists the merchant as processor through documented instructions and responds directly where ShopiDeck is the controller.",
      ],
    },
    {
      id: "requests",
      title: "23. Privacy requests",
      paragraphs: [`Send a request to ${LEGAL_EMAIL}. Include:`, "Do not send passwords, API keys, tokens, or full customer lists."],
      bullets: [
        "Your name.",
        "Your relationship with the store.",
        "The myshopify.com domain.",
        "The right you want to exercise.",
        "A description of the request.",
        "Proportionate information needed to verify identity and authority.",
      ],
    },
    {
      id: "complaints",
      title: "24. Inquiries and complaints",
      paragraphs: [
        `Please contact ${LEGAL_EMAIL} first so ShopiDeck can review the request. The request should identify the store, the relevant data or processing, and the outcome sought. ShopiDeck will handle it under the applicable law and role of the parties.`,
      ],
    },
    {
      id: "colombia",
      title: "25. Colombia",
      paragraphs: [
        "For processing subject to Colombian law, ShopiDeck requests authorization when required and relies on applicable legal exceptions when an exception applies. Individuals may exercise the rights described above by contacting the privacy address. Requests and complaints may be submitted through the applicable procedure before approaching the Colombian authority.",
      ],
    },
    {
      id: "eea",
      title: "26. European Economic Area",
      paragraphs: [
        "ShopiDeck is not established in the European Union or the United Kingdom and does not currently have a formal representative in either jurisdiction. Andres Camilo Bonilla Carreño is the internal privacy contact and is not a formal DPO. Where EEA law applies, individuals may have rights under that law, including access, correction, deletion, restriction, portability, objection, and review of automated processing, subject to the applicable conditions and limits. This policy does not claim universal compliance or appoint a representative that does not exist.",
      ],
    },
    {
      id: "uk",
      title: "27. United Kingdom",
      paragraphs: [
        "ShopiDeck is not established in the United Kingdom and does not currently have a formal UK representative. Andres Camilo Bonilla Carreño is the internal privacy contact and is not a formal DPO. Where UK law applies, individuals may exercise the rights available under that law, subject to its conditions and limits. This policy does not claim universal compliance or appoint a representative that does not exist.",
      ],
    },
    {
      id: "minors",
      title: "28. Children",
      paragraphs: [
        "The app is directed exclusively to Shopify merchants and authorized business users; it is not directed to children. Merchants must not provide children's data or sensitive data in a way that is incompatible with applicable law.",
      ],
    },
    {
      id: "disconnect",
      title: "29. Disconnecting Klaviyo",
      paragraphs: [
        "When Klaviyo is disconnected, ShopiDeck revokes and deletes the OAuth tokens and removes the Klaviyo connection. Audit and suppression history remains during its retention period unless an applicable deletion request or account-deletion flow removes it.",
      ],
    },
    {
      id: "uninstall",
      title: "30. Uninstalling Shopify",
      paragraphs: [
        "When the app is uninstalled, sessions are removed, Klaviyo credentials are revoked or deleted, and the store is marked inactive. Shopify sends shop/redact approximately 48 hours later. shop/redact deletes the local store record and related data. Shopify or Klaviyo may retain data independently under their own policies.",
      ],
    },
    {
      id: "delete-account",
      title: "31. Delete account",
      paragraphs: [
        "Only the store owner can use Delete account. The app is uninstalled, sessions and tokens are removed, the local store record is deleted, and local relationships are removed through cascading deletion. ShopiDeck does not claim to delete data that Shopify or Klaviyo retain independently.",
      ],
    },
    {
      id: "webhooks",
      title: "32. Privacy webhooks",
      bullets: [
        "customers/data_request: locates data using email or phone, creates an encrypted export, allows the store owner to download the completed request, and keeps the request for 30 days.",
        "customers/redact: deletes related results and temporary related data, while retaining an HMAC hash to prevent reintroduction of the identifier.",
        "shop/redact: deletes the local store data.",
        "app/uninstalled: supports uninstall cleanup.",
        "app/scopes_update: records and supports scope changes.",
      ],
    },
    {
      id: "changes",
      title: "33. Changes to this policy",
      paragraphs: [
        "ShopiDeck may update this policy when the service, data flows, providers, legal requirements, or retention practices change. The effective-date and last-updated labels identify the current version. Material changes will be communicated through an appropriate channel when required.",
      ],
    },
    {
      id: "contact",
      title: "34. Contact",
      paragraphs: [`For privacy, legal, support, or security questions, contact ${LEGAL_EMAIL}. Legal-notice address: ${ADDRESS}.`],
    },
    {
      id: "authority",
      title: "35. Supervisory authority",
      paragraphs: [
        "The Colombian personal-data authority is the Superintendencia de Industria y Comercio — Delegatura para la Protección de Datos Personales. Where applicable, a person may submit a complaint through the authority's official channels after the relevant direct request process.",
      ],
      links: [
        { label: "SIC Delegatura para la Protección de Datos Personales", href: SIC_DATA_PROTECTION_URL, external: true },
        { label: "SIC online requests and complaints", href: SIC_PQRS_URL, external: true },
      ],
    },
  ],
};

const privacyEs: LegalDocument = {
  title: "Política de Privacidad",
  category: "Legal y privacidad",
  effectiveDate: "1 de septiembre de 2026",
  lastUpdated: "1 de septiembre de 2026",
  intro: `Esta Política de Privacidad explica cómo ${PRODUCT} trata datos personales a través del sitio público https://shopideck.com y de la aplicación incrustada en Shopify en ${APP_URL}. Describe el producto actual, sus límites, los roles de privacidad de las partes y las opciones disponibles para titulares y comerciantes.`,
  sections: [
    {
      id: "scope",
      title: "1. Alcance y entrada en vigor",
      paragraphs: [
        "Esta política aplica al sitio público de ShopiDeck, la aplicación incrustada en Shopify, las cuentas de comerciantes y administradores, las solicitudes de soporte y privacidad y la operación y seguridad del servicio. Entra en vigor el 1 de septiembre de 2026 y fue actualizada por última vez el 1 de septiembre de 2026.",
        "El texto inglés es una traducción. La versión en español prevalece. Cuando legalmente sea posible y exista una contradicción, prevalece la versión española sin eliminar derechos imperativos aplicables al comerciante o a cualquier titular.",
      ],
    },
    {
      id: "identity",
      title: "2. Identidad del responsable y contacto",
      paragraphs: [
        `ShopiDeck es un nombre comercial operado por Andres Camilo Bonilla Carreño, persona natural comerciante colombiana domiciliada en ${ADDRESS}.`,
        `Contacto de privacidad, legal, soporte e incidentes de seguridad: ${LEGAL_EMAIL}. El contacto interno de privacidad es Andres Camilo Bonilla Carreño en ${LEGAL_EMAIL}; este contacto no se describe como DPO formal.`,
      ],
    },
    {
      id: "definitions",
      title: "3. Definiciones",
      paragraphs: [
        "En esta política, comerciante es el comerciante o negocio de Shopify que instala o usa la app; administrador es un usuario autorizado de Shopify; perfil es un registro de contacto de Klaviyo disponible mediante la cuenta autorizada; supresión es la acción de Klaviyo que evita envíos de marketing y no equivale a eliminar permanentemente un perfil; y ShopiDeck, nosotros o nos significa el operador identificado arriba.",
      ],
    },
    {
      id: "roles",
      title: "4. Roles de privacidad",
      paragraphs: [
        "ShopiDeck actúa como responsable respecto de datos del comerciante y administradores, administración de cuentas, facturación, uso del producto, soporte, seguridad, prevención de abuso, administración contractual y cumplimiento legal.",
        "ShopiDeck actúa como encargado respecto de perfiles de Klaviyo tratados siguiendo las instrucciones documentadas del comerciante, incluidos el scoring, los resultados, las supresiones confirmadas y las solicitudes de privacidad presentadas mediante Shopify. El comerciante normalmente actúa como responsable de los datos de sus clientes y determina la base jurídica aplicable a ese tratamiento.",
      ],
      bullets: [
        "El comerciante debe contar con una base jurídica para almacenar perfiles de clientes en Klaviyo y dar instrucciones lícitas a ShopiDeck.",
        "El comerciante debe proporcionar sus propios avisos de privacidad y atender las solicitudes de sus clientes cuando actúe como responsable.",
        "El comerciante debe revisar los perfiles y confirmar una supresión antes de que ShopiDeck envíe esa acción a Klaviyo.",
        "El comerciante debe tener autoridad para conectar las cuentas de Shopify y Klaviyo y no usar la app para finalidades incompatibles.",
      ],
    },
    {
      id: "people",
      title: "5. Personas afectadas",
      bullets: [
        "Comerciantes, propietarios, administradores y otros usuarios autorizados de Shopify.",
        "Clientes y contactos representados por perfiles en la cuenta de Klaviyo autorizada por el comerciante.",
        "Personas que presentan solicitudes de soporte, privacidad o incidentes de seguridad.",
        "Personas cuyos datos aparecen en registros técnicos, de seguridad u operación generados mientras funciona el servicio.",
      ],
    },
    {
      id: "sources",
      title: "6. Fuentes de los datos",
      bullets: [
        "Shopify, incluida la instalación, autenticación, identidad de la tienda y administradores, App Store, facturación, webhooks y solicitudes de privacidad.",
        "Klaviyo, mediante la conexión OAuth autorizada por el comerciante y los datos disponibles en esa cuenta.",
        "El comerciante o administrador directamente, incluidos los formularios de soporte y privacidad.",
        "La operación del servicio, los controles de seguridad y los registros técnicos o de errores limitados.",
      ],
    },
    {
      id: "categories",
      title: "7. Categorías de datos tratados",
      bullets: [
        "Datos de Shopify y del comerciante: dominio myshopify.com, Shopify Shop ID, token de acceso de Shopify, información de sesión, User ID del administrador, nombre, apellido y email del administrador cuando Shopify los proporcione, locale, condición de propietario de la cuenta, scopes, plan, ciclo de facturación, límites de uso, consumo mensual, solicitudes de soporte y registros técnicos y operativos limitados.",
        "Datos de la cuenta de Klaviyo: Klaviyo Account ID, scopes OAuth y tokens de acceso y refresh cifrados.",
        "Datos de perfiles de Klaviyo: Profile ID, email, nombre, apellido, teléfono cuando exista, ciudad cuando exista, país cuando exista, IP cuando esté disponible, fecha de creación, fecha de actualización, estado de suscripción de marketing y dominio del email.",
        "Datos derivados: patrones normalizados usados para detección, score de riesgo, nivel de riesgo, razones explicables de detección, resultado de la supresión, historial de auditorías e historial de supresiones.",
        "Datos de soporte, privacidad, seguridad y operación necesarios para recibir solicitudes, verificarlas proporcionalmente, proteger el servicio y responder.",
      ],
    },
    {
      id: "unrequested-data",
      title: "8. Datos no solicitados",
      paragraphs: [
        "La app no está diseñada para solicitar o tratar intencionalmente datos de salud, datos biométricos, religión, orientación sexual, opiniones políticas, información financiera, números de tarjetas, contraseñas o categorías especiales equivalentes. Los comerciantes no deben enviar datos sensibles a través de campos que la app pueda tratar salvo que cuenten con una base jurídica apropiada y el uso sea lícito.",
        "ShopiDeck no almacena información de tarjetas de pago, vende datos personales, comparte datos para publicidad conductual, usa perfiles para publicidad propia, crea audiencias publicitarias ni usa datos para entrenar modelos de inteligencia artificial.",
      ],
    },
    {
      id: "purposes",
      title: "9. Finalidades y bases jurídicas",
      paragraphs: [
        "La siguiente tabla describe el marco de finalidades del tratamiento actual. En Colombia, se solicita autorización cuando corresponde, sujeta a las excepciones legales aplicables. Para los perfiles de Klaviyo, el comerciante determina su propia base jurídica y entrega instrucciones documentadas. Una base jurídica indicada para una finalidad no necesariamente aplica a toda jurisdicción o circunstancia.",
      ],
      table: {
        headers: ["Finalidad", "Base jurídica o instrucción"],
        rows: [
          ["Prestación de la app", "Ejecución del contrato."],
          ["Autenticación", "Ejecución del contrato y seguridad."],
          ["Administración de cuenta", "Ejecución del contrato."],
          ["Facturación", "Ejecución del contrato y obligaciones legales, contables o fiscales aplicables."],
          ["Soporte", "Ejecución del contrato y gestión de solicitudes."],
          ["Seguridad y prevención de abuso", "Interés legítimo y obligaciones legales aplicables."],
          ["Solicitudes de privacidad", "Obligación legal."],
          ["Perfiles de Klaviyo y scoring", "Instrucciones documentadas del comerciante como responsable; el comerciante determina su base jurídica."],
          ["Cookies no esenciales futuras", "Consentimiento cuando la ley lo exija."],
        ],
      },
    },
    {
      id: "shopify",
      title: "10. Shopify",
      paragraphs: [
        "Shopify proporciona instalación, autenticación, identidad de la tienda y de los administradores, funciones de App Store y facturación, webhooks y mecanismos de solicitudes de privacidad. Shopify es una plataforma independiente y también aplican sus propios términos y políticas de privacidad. Shopify puede enviar a ShopiDeck webhooks de privacidad para los registros relevantes de la tienda y sus clientes.",
      ],
      links: [{ label: "Términos, privacidad y DPA de Shopify", href: "https://www.shopify.com/legal", external: true }],
    },
    {
      id: "klaviyo",
      title: "11. Conexión y permisos de Klaviyo",
      paragraphs: [
        "La app se conecta a Klaviyo mediante OAuth, consulta perfiles existentes y datos de suscripción, aplica scoring basado en reglas y envía una supresión únicamente después de que el comerciante selecciona perfiles y confirma la acción. Los permisos actuales son accounts:read, profiles:read, profiles:write, subscriptions:read y subscriptions:write. La app no solicita permisos para eliminar perfiles permanentemente.",
        "Los tokens de acceso y refresh de Klaviyo se cifran antes de almacenarse. El comerciante puede desconectar Klaviyo desde Settings. Al desconectar, se revocan y eliminan los tokens OAuth y la conexión, mientras el historial de auditorías y supresiones permanece durante su periodo de retención.",
      ],
      links: [{ label: "Términos, privacidad y DPA de Klaviyo", href: "https://www.klaviyo.com/legal", external: true }],
    },
    {
      id: "scoring",
      title: "12. Scoring y evaluación automatizada",
      paragraphs: [
        "La app realiza una evaluación automatizada basada en reglas explicables. Las señales posibles incluyen dominios de email desechables, formatos de email inusuales o aparentemente generados, nombres genéricos o incompletos, datos faltantes, valores repetidos, ráfagas de creación de perfiles, patrones compartidos de email, nombre, IP o teléfono y estado disponible de suscripción.",
        "El score es una estimación y no demuestra fraude ni que un perfil sea un bot. Puede haber falsos positivos y falsos negativos. El resultado puede clasificar un perfil como low risk, needs review o probable bot y muestra razones comprensibles para la clasificación.",
      ],
    },
    {
      id: "human-review",
      title: "13. Revisión humana y decisiones significativas",
      paragraphs: [
        "El score no produce una supresión automática. El comerciante conserva la decisión final, revisa el perfil y sus razones, selecciona perfiles y confirma cualquier supresión. ShopiDeck no toma decisiones legales o de efecto similar sobre una persona basadas exclusivamente en el scoring. Los resultados no se usan para publicidad, crédito, empleo, seguros ni elegibilidad.",
        "La app no consulta aperturas, clics, compras ni navegación para declarar inactivo un perfil.",
      ],
    },
    {
      id: "providers",
      title: "14. Proveedores y subencargados",
      paragraphs: [
        "ShopiDeck utiliza los siguientes proveedores para el servicio actual. Pueden tratar datos según sea necesario para prestar sus servicios y conforme a sus contratos aplicables. Prisma es una biblioteca ORM y no se presenta como subencargado independiente.",
      ],
      bullets: [
        "Shopify: instalación, autenticación, identidad de la tienda y administradores, App Store, facturación, webhooks y solicitudes de privacidad.",
        "Klaviyo: OAuth, consultas de cuenta y perfiles, información de suscripción y supresión confirmada por el comerciante.",
        "Supabase: base de datos PostgreSQL y almacenamiento de la aplicación; región US East, Estados Unidos.",
        "Vercel: hosting y funciones serverless; procesamiento en Estados Unidos.",
        "Resend: comunicaciones por email y soporte cuando corresponda.",
      ],
      links: [{ label: "Ver la lista completa de subencargados", href: "/es/subprocessors" }],
    },
    {
      id: "transfers",
      title: "15. Transferencias internacionales",
      paragraphs: [
        `El responsable está establecido en Colombia. Los datos pueden tratarse en Estados Unidos y en otros países donde operen Shopify, Klaviyo, Supabase, Vercel y Resend. ShopiDeck no afirma que todos los datos permanezcan en Colombia.`,
        "ShopiDeck utiliza los contratos y salvaguardas que ofrecen los proveedores correspondientes cuando aplica. Un comerciante o titular puede solicitar información adicional sobre las salvaguardas escribiendo a " + LEGAL_EMAIL + ". También pueden aplicar los términos, avisos de privacidad, DPA y mecanismos de transferencia del proveedor.",
      ],
      links: [{ label: "Ver la información de transferencias de proveedores", href: "/es/subprocessors" }],
    },
    {
      id: "retention",
      title: "16. Conservación",
      paragraphs: [
        "ShopiDeck conserva los datos durante los periodos siguientes, sujetos a eliminación anterior cuando la ley o los flujos de eliminación implementados lo exijan. La conservación se refiere a registros locales de ShopiDeck; Shopify y Klaviyo pueden conservar datos de forma independiente conforme a sus propias políticas e instrucciones.",
      ],
      table: {
        headers: ["Dato o registro", "Conservación"],
        rows: [
          ["Estado OAuth de Klaviyo", "10 minutos."],
          ["Tokens de Klaviyo", "Hasta la desconexión, desinstalación, eliminación de cuenta o revocación."],
          ["Datos temporales del escaneo", "Durante el procesamiento."],
          ["Datos temporales de trabajos terminados", "Aproximadamente 24 horas."],
          ["Escaneos fallidos o cancelados", "30 días."],
          ["Historial de escaneos", "365 días."],
          ["Resultados", "365 días."],
          ["Historial de supresiones", "365 días."],
          ["Solicitudes y exportaciones de privacidad", "30 días."],
          ["Sesiones de Shopify", "Mientras la app esté instalada o hasta su eliminación."],
          ["Hashes HMAC de redacción", "Mientras exista el registro de la tienda."],
          ["Registros legalmente necesarios", "Durante el periodo exigido por la ley aplicable."],
        ],
      },
    },
    {
      id: "redaction-hashes",
      title: "17. Hashes HMAC de redacción",
      paragraphs: [
        "Los hashes HMAC de redacción son valores seudonimizados, no datos completamente anónimos. Se utilizan para impedir que un identificador previamente redactado vuelva a almacenarse. Se eliminan cuando se elimina definitivamente el registro de la tienda.",
      ],
    },
    {
      id: "cookies",
      title: "18. Cookies",
      paragraphs: [
        "La app incrustada utiliza la cookie funcional o necesaria shopideck_locale para recordar el idioma seleccionado dentro de la app incrustada. Tiene una duración de un año y los atributos Secure, HttpOnly y SameSite=None. No se utiliza para publicidad ni analítica.",
        "ShopiDeck sí utiliza cookies. Cualquier cookie futura no esencial se usará únicamente con el consentimiento u otra base jurídica exigida por la ley aplicable y esta política se actualizará cuando sea necesario.",
      ],
    },
    {
      id: "analytics",
      title: "19. Analítica y publicidad",
      paragraphs: [
        "El servicio actual no utiliza Google Analytics, Meta Pixel, Sentry, Vercel Analytics, analítica publicitaria, publicidad conductual, audiencias publicitarias ni perfiles para publicidad de ShopiDeck. ShopiDeck no usa datos personales para entrenar modelos de inteligencia artificial.",
      ],
    },
    {
      id: "security",
      title: "20. Medidas de seguridad",
      bullets: [
        "Los tokens de Klaviyo se cifran.",
        "Las conexiones utilizan HTTPS.",
        "Los secretos permanecen en el servidor.",
        "Se utilizan autenticación de Shopify y rutas protegidas.",
        "Los webhooks se verifican y las entradas del backend se validan.",
        "Las acciones críticas incluyen verificación de propiedad y confirmación antes de la supresión.",
        "Los límites de uso se aplican en el backend.",
        "Las solicitudes y exportaciones de privacidad se cifran.",
      ],
      paragraphs: ["Estas medidas reducen riesgos, pero no garantizan seguridad absoluta."],
    },
    {
      id: "incidents",
      title: "21. Incidentes de seguridad",
      paragraphs: [
        `ShopiDeck investiga los incidentes de seguridad sospechados y notifica a las personas afectadas o autoridades cuando la ley lo exige. Los comerciantes deben reportar credenciales comprometidas o accesos no autorizados sospechados a ${LEGAL_EMAIL}. No envíes contraseñas, API keys, tokens OAuth ni otros secretos por email.`,
      ],
    },
    {
      id: "rights",
      title: "22. Derechos",
      paragraphs: [
        "Sujeto a la ley aplicable y al rol de privacidad correspondiente, los titulares pueden tener derecho a conocer el tratamiento, acceder a los datos, actualizarlos o rectificarlos, solicitar prueba de la autorización cuando corresponda, ser informados sobre su uso, presentar consultas y reclamos, solicitar supresión, revocar la autorización cuando proceda y pedir revisión del tratamiento automatizado.",
        "El comerciante normalmente atiende los derechos relacionados con los datos de sus clientes como responsable. ShopiDeck lo asiste como encargado mediante instrucciones documentadas y responde directamente cuando actúa como responsable.",
      ],
    },
    {
      id: "requests",
      title: "23. Solicitudes de privacidad",
      paragraphs: [`Envía la solicitud a ${LEGAL_EMAIL}. Incluye:`, "No envíes contraseñas, API keys, tokens ni listas completas de clientes."],
      bullets: [
        "Tu nombre.",
        "Tu relación con la tienda.",
        "El dominio myshopify.com.",
        "El derecho que deseas ejercer.",
        "Una descripción de la solicitud.",
        "La información proporcional necesaria para verificar identidad y autoridad.",
      ],
    },
    {
      id: "complaints",
      title: "24. Consultas y reclamos",
      paragraphs: [
        `Contacta primero a ${LEGAL_EMAIL} para que ShopiDeck pueda revisar la solicitud. Debe identificar la tienda, los datos o tratamiento relevante y el resultado que buscas. ShopiDeck la gestionará conforme a la ley aplicable y al rol de las partes.`,
      ],
    },
    {
      id: "colombia",
      title: "25. Colombia",
      paragraphs: [
        "Para tratamientos sujetos a la ley colombiana, ShopiDeck solicita autorización cuando corresponde y aplica las excepciones legales cuando resulten aplicables. Los titulares pueden ejercer los derechos descritos arriba contactando al correo de privacidad. Las consultas y reclamos pueden presentarse mediante el procedimiento aplicable antes de acudir a la autoridad colombiana.",
      ],
    },
    {
      id: "eea",
      title: "26. Espacio Económico Europeo",
      paragraphs: [
        "ShopiDeck no está establecido en la Unión Europea ni tiene actualmente un representante formal allí. Tampoco se designa un DPO formal: Andres Camilo Bonilla Carreño es el contacto interno de privacidad. Cuando aplique la ley del EEE, los titulares pueden tener derechos como acceso, rectificación, supresión, limitación, portabilidad, oposición y revisión del tratamiento automatizado, sujetos a sus condiciones y límites. Esta política no afirma cumplimiento universal ni designa un representante inexistente.",
      ],
    },
    {
      id: "uk",
      title: "27. Reino Unido",
      paragraphs: [
        "ShopiDeck no está establecido en el Reino Unido y no tiene actualmente un representante formal en ese país. Andres Camilo Bonilla Carreño es el contacto interno de privacidad y no un DPO formal. Cuando aplique la ley del Reino Unido, los titulares pueden ejercer los derechos disponibles bajo esa ley, sujetos a sus condiciones y límites. Esta política no afirma cumplimiento universal ni designa un representante inexistente.",
      ],
    },
    {
      id: "minors",
      title: "28. Menores",
      paragraphs: [
        "La app está dirigida exclusivamente a comerciantes de Shopify y usuarios empresariales autorizados; no está dirigida a menores. Los comerciantes no deben proporcionar datos de menores ni datos sensibles de forma incompatible con la ley aplicable.",
      ],
    },
    {
      id: "disconnect",
      title: "29. Desconexión de Klaviyo",
      paragraphs: [
        "Al desconectar Klaviyo, ShopiDeck revoca y elimina los tokens OAuth y elimina la conexión con Klaviyo. El historial de auditorías y supresiones permanece durante su periodo de conservación salvo que una solicitud de eliminación o el flujo de eliminación de cuenta lo elimine.",
      ],
    },
    {
      id: "uninstall",
      title: "30. Desinstalación de Shopify",
      paragraphs: [
        "Al desinstalar la app, se eliminan las sesiones, se revocan o eliminan las credenciales de Klaviyo y la tienda se marca como inactiva. Shopify envía shop/redact aproximadamente 48 horas después. shop/redact elimina el registro local de la tienda y los datos relacionados. Shopify o Klaviyo pueden conservar datos de forma independiente conforme a sus propias políticas.",
      ],
    },
    {
      id: "delete-account",
      title: "31. Eliminar cuenta",
      paragraphs: [
        "Solo el propietario de la tienda puede usar Delete account. La app se desinstala, se eliminan las sesiones y tokens, se elimina el registro local de la tienda y se eliminan las relaciones locales mediante eliminación en cascada. ShopiDeck no afirma eliminar datos que Shopify o Klaviyo conserven de forma independiente.",
      ],
    },
    {
      id: "webhooks",
      title: "32. Webhooks de privacidad",
      bullets: [
        "customers/data_request: localiza datos mediante email o teléfono, crea una exportación cifrada, permite al propietario de la tienda descargar la solicitud terminada y conserva la solicitud durante 30 días.",
        "customers/redact: elimina resultados relacionados y datos temporales relacionados, conservando un hash HMAC para evitar la reintroducción del identificador.",
        "shop/redact: elimina los datos locales de la tienda.",
        "app/uninstalled: apoya la limpieza de la desinstalación.",
        "app/scopes_update: registra y apoya cambios de scopes.",
      ],
    },
    {
      id: "changes",
      title: "33. Cambios en esta política",
      paragraphs: [
        "ShopiDeck puede actualizar esta política cuando cambien el servicio, los flujos de datos, los proveedores, los requisitos legales o las prácticas de conservación. Las fechas de entrada en vigor y de última actualización identifican la versión actual. Los cambios materiales se comunicarán mediante un canal apropiado cuando sea necesario.",
      ],
    },
    {
      id: "contact",
      title: "34. Contacto",
      paragraphs: [`Para preguntas de privacidad, asuntos legales, soporte o seguridad, escribe a ${LEGAL_EMAIL}. Dirección para notificaciones legales: ${ADDRESS}.`],
    },
    {
      id: "authority",
      title: "35. Autoridad de control",
      paragraphs: [
        "La autoridad colombiana de protección de datos personales es la Superintendencia de Industria y Comercio — Delegatura para la Protección de Datos Personales. Cuando corresponda, una persona puede presentar un reclamo por los canales oficiales de la autoridad después del proceso directo aplicable.",
      ],
      links: [
        { label: "SIC — Delegatura para la Protección de Datos Personales", href: SIC_DATA_PROTECTION_URL, external: true },
        { label: "SIC — solicitudes y reclamos en línea", href: SIC_PQRS_URL, external: true },
      ],
    },
  ],
};

const termsEn: LegalDocument = {
  title: "Terms of Use",
  category: "Legal and service terms",
  effectiveDate: "September 1, 2026",
  lastUpdated: "September 1, 2026",
  intro: `These Terms govern access to and use of ${PRODUCT} by Shopify merchants. The service is available through Shopify Admin and the embedded app at ${APP_URL}.`,
  sections: [
    { id: "identity", title: "1. Provider identity", paragraphs: [`These Terms form an agreement between the merchant and Andres Camilo Bonilla Carreño, a Colombian individual merchant operating under the ShopiDeck trade name and based at ${ADDRESS}. Contact: ${LEGAL_EMAIL}.`] },
    { id: "effective", title: "2. Effective date", paragraphs: ["These Terms are effective on September 1, 2026 and were last updated on September 1, 2026."] },
    { id: "acceptance", title: "3. Acceptance", paragraphs: ["By installing, accessing, or using the app, the merchant accepts these Terms, the Privacy Policy, the applicable Shopify App Pricing information, and any terms expressly incorporated into the service. If the merchant does not agree, it must not use the app."] },
    { id: "capacity", title: "4. Capacity and authority", paragraphs: ["The person accepting these Terms represents that they can bind the merchant and have authority over the Shopify store and the Klaviyo account connected to the service. The merchant must keep its account information accurate and authorize only appropriate users."] },
    { id: "service", title: "5. Service description", paragraphs: [`${PRODUCT} connects a merchant-authorized Klaviyo account through OAuth, consults existing profiles, audits unsuppressed profiles, detects potentially suspicious signals, applies explainable rule-based scoring, classifies profiles as low risk, needs review, or probable bot, shows reasons, allows merchant review and selection, requests confirmation, sends confirmed suppressions to Klaviyo, keeps audit and suppression history, exports CSV on eligible plans, and shows approximate savings estimates.`, "The app does not permanently delete Klaviyo profiles, automatically suppress profiles, block checkouts, modify the Shopify theme, guarantee that a profile is a bot, guarantee savings, guarantee a lower Klaviyo invoice, guarantee deliverability, or replace merchant review. Suppression prevents marketing sends according to Klaviyo's operation and may be reversed from Klaviyo."] },
    { id: "license", title: "6. Limited license", paragraphs: ["Subject to these Terms and the applicable Shopify App Pricing terms, ShopiDeck grants the merchant a limited, non-exclusive, non-transferable, revocable right to access and use the service for its internal Shopify operations. The merchant must not resell, sublicense, copy, modify, reverse engineer, extract, or create a competing service from the app except where a restriction cannot legally be enforced."] },
    { id: "shopify", title: "7. Shopify requirements", paragraphs: ["Use requires a compatible Shopify store, a Shopify account with permission to install and use the app, and compliance with Shopify's terms, policies, permissions, platform rules, billing rules, and applicable API limits. Shopify is an independent third-party platform."] },
    { id: "klaviyo", title: "8. Klaviyo requirements", paragraphs: ["The merchant must have authority to connect the Klaviyo account and must authorize the OAuth permissions required by the current workflow: accounts:read, profiles:read, profiles:write, subscriptions:read, and subscriptions:write. Klaviyo is an independent third-party platform and its terms, policies, account status, permissions, and API limits may affect the service."] },
    { id: "merchant-obligations", title: "9. Merchant obligations", bullets: ["Have authority over the Shopify store.", "Have authority over the Klaviyo account.", "Keep Shopify and Klaviyo accounts and credentials secure.", "Have a legal basis for the data supplied to the service.", "Provide appropriate privacy notices and respond to data-subject rights.", "Review scores and reasons before acting.", "Confirm suppressions before submitting them.", "Do not evade plan limits or authentication.", "Do not use the app unlawfully or provide sensitive data incompatibly with applicable law.", "Do not treat a result as conclusive proof of fraud." ] },
    { id: "customer-data", title: "10. Customer data", paragraphs: ["The merchant remains responsible for customer and Klaviyo profile data, its instructions, its privacy notices, its legal bases, and its decisions about suppression. The merchant grants ShopiDeck only the rights reasonably necessary to operate the service on its documented instructions and under the Privacy Policy."] },
    { id: "compliance", title: "11. Merchant compliance", paragraphs: ["The merchant must comply with applicable privacy, marketing, consumer, platform, and other laws; Shopify and Klaviyo terms; and the rights of the people represented in its data. The merchant must not use the app for an incompatible purpose or provide data it is not authorized to process."] },
    { id: "scoring", title: "12. Rule-based scoring", paragraphs: ["The service uses explainable, automated rules to produce signals and classifications. A score is an estimate for review, not proof of fraud, identity, inactivity, or unlawful conduct. The service does not use opens, clicks, purchases, or browsing activity to declare a profile inactive. False positives and false negatives are possible."] },
    { id: "review", title: "13. Human review", paragraphs: ["The merchant must review the score, classification, and reasons. ShopiDeck does not make legal or similarly significant decisions solely from scoring, and the merchant retains the final decision. Results are not intended for advertising, credit, employment, insurance, or eligibility decisions."] },
    { id: "suppression", title: "14. Suppression", paragraphs: ["The service does not suppress profiles automatically. The merchant selects profiles and confirms the action before ShopiDeck sends the suppression to Klaviyo. Suppression is not permanent profile deletion. ShopiDeck cannot guarantee that a suppression will succeed if Klaviyo, permissions, account status, API limits, or another third-party limitation prevents it."] },
    { id: "plans", title: "15. Plans", paragraphs: ["The current plans are listed below. The Shopify approval screen and the app interface are the final reference for the price and plan conditions.", "Free Audit: USD 0; one initial audit per store; up to 100,000 unsuppressed profiles; no suppression; no CSV. Starter: USD 9 per month; 2 scans per month; 5,000 profiles per month; 500 suppressions per month; detailed table and history. Growth: USD 19 per month; a 7-day trial through Shopify App Pricing; 5 scans per month; 25,000 profiles per month; 5,000 suppressions per month; CSV and history. Pro: USD 49 per month; 15 scans per month; 100,000 profiles per month; 25,000 suppressions per month; CSV, history, and priority support."] },
    { id: "limits", title: "16. Limits", paragraphs: ["Scan, profile, suppression, CSV, and history availability depends on the plan shown in Shopify App Pricing and enforced by the app. The Free Audit does not reset when Klaviyo is disconnected. ShopiDeck may apply backend limits to protect the service and keep usage aligned with the selected plan."] },
    { id: "billing", title: "17. Billing", paragraphs: ["Shopify App Pricing administers approval, charges, billing cycle, trial, cancellation, and invoice. ShopiDeck does not store payment card information. Taxes, renewals, billing dates, and charges are governed by the information presented by Shopify."] },
    { id: "trials", title: "18. Trials", paragraphs: ["The Growth plan may include a 7-day trial through Shopify App Pricing. Eligibility, duration, conversion, charges, and cancellation follow the Shopify approval flow and the conditions shown at signup. No trial condition outside those sources is promised."] },
    { id: "cancellation", title: "19. Cancellation", paragraphs: ["The merchant may cancel from Settings, through uninstallation, or according to the billing cycle administered by Shopify App Pricing. The merchant should review Shopify's billing information before cancelling. Disconnecting or uninstalling may stop future access and processing but does not necessarily delete data at the same moment."] },
    { id: "refunds", title: "20. Refunds", paragraphs: [`Requests for billing adjustments or refunds should be sent to ${LEGAL_EMAIL}. Each request will be evaluated according to Shopify App Pricing billing, service use, applicable law, and the authority available to ShopiDeck within Shopify. Unless required by law, submitting a request does not guarantee a refund.`] },
    { id: "third-parties", title: "21. Third-party services", paragraphs: ["The service uses Shopify, Klaviyo, Supabase, Vercel, and Resend. Third-party outages, changes, limits, security incidents, or policy decisions may affect the service and are outside ShopiDeck's direct control. Prisma is an ORM library and is not an independent subprocessor."] },
    { id: "acceptable-use", title: "22. Acceptable use", bullets: ["Do not violate law or third-party rights.", "Do not access a store or Klaviyo account without authorization.", "Do not submit malicious code or attack the service.", "Do not evade authentication, plan limits, or usage controls.", "Do not misrepresent a score as a verified fact.", "Do not use the app for a decision requiring accuracy or legal effect that the service does not provide.", "Do not send passwords, API keys, tokens, or other secrets in support forms."] },
    { id: "security", title: "23. Security and credentials", paragraphs: ["The merchant must protect its Shopify and Klaviyo accounts, authorize suitable users, keep credentials confidential, and promptly report suspected unauthorized access. OAuth tokens are encrypted, protected routes require authentication, and secrets remain server-side. These measures do not guarantee absolute security."] },
    { id: "ip", title: "24. Intellectual property", paragraphs: ["ShopiDeck owns or has the right to use the service, software, documentation, public-site content, brand, and related materials, except for merchant data and third-party materials. These Terms transfer no ownership. Shopify, Klaviyo, and other third-party names and marks belong to their respective owners."] },
    { id: "feedback", title: "25. Feedback", paragraphs: ["If the merchant sends suggestions or feedback, ShopiDeck may use them to improve the service without compensation, provided it does not need to disclose the merchant's confidential information or customer data. Feedback is voluntary and does not change the merchant's ownership of its data."] },
    { id: "availability", title: "26. Availability", paragraphs: ["The service may be affected by Shopify, Klaviyo, hosting, database, email, network, or other dependencies. ShopiDeck does not promise uninterrupted or error-free availability."] },
    { id: "maintenance", title: "27. Maintenance", paragraphs: ["ShopiDeck may perform maintenance, security work, updates, or other operational work. Maintenance may temporarily limit or change access. ShopiDeck will communicate when required by applicable law or the circumstances of the service."] },
    { id: "modifications", title: "28. Modifications", paragraphs: ["ShopiDeck may add, remove, or change features, plans, limits, or functionality when allowed by law and platform rules. Material changes will be communicated through an appropriate channel when required."] },
    { id: "suspension", title: "29. Suspension", paragraphs: ["Access may be suspended when reasonably necessary for security, abuse prevention, non-payment through Shopify, breach of these Terms, a third-party platform requirement, legal compliance, or service protection. Where appropriate, ShopiDeck will make reasonable efforts to provide notice and an opportunity to address the issue."] },
    { id: "termination", title: "30. Termination", paragraphs: ["Access may be terminated for the same reasons as suspension or if the service is discontinued. Termination does not remove obligations that by their nature continue, including payment obligations already incurred, intellectual-property provisions, confidentiality, disclaimers, and limitations to the extent legally enforceable."] },
    { id: "data-effects", title: "31. Effects on data", paragraphs: ["When Klaviyo is disconnected, tokens are revoked and removed while retained history may remain. Account deletion removes the local store record and related local data through the implemented deletion flow. Uninstall and privacy webhooks support deletion and export processes. ShopiDeck does not claim to delete data that Shopify or Klaviyo retain independently. The Privacy Policy describes retention periods and the relevant deletion flows."] },
    { id: "warranties", title: "32. Warranty disclaimers", paragraphs: ["To the maximum extent permitted by applicable law, the service is provided as available and as described. ShopiDeck does not warrant that scoring is complete or accurate, that every bot will be identified, that every suppression will succeed, or that the service will produce revenue, cost, deliverability, compliance, or other business results. Mandatory legal rights are not excluded."] },
    { id: "liability", title: "33. Limitation of liability", paragraphs: ["To the maximum extent permitted by applicable law, ShopiDeck is not liable for indirect, incidental, special, consequential, exemplary, or punitive loss, or lost profits, revenue, goodwill, data, or business opportunities arising from or related to the service. Nothing in these Terms excludes liability or rights that cannot legally be excluded or limited."] },
    { id: "law", title: "34. Governing law", paragraphs: ["These Terms are governed by the laws of the Republic of Colombia. The choice of law does not limit mandatory rights that cannot be excluded contractually."] },
    { id: "jurisdiction", title: "35. Jurisdiction", paragraphs: ["The competent courts of Bogotá D.C., Colombia have jurisdiction over disputes subject to these Terms. The choice of jurisdiction does not limit mandatory rights that cannot be excluded contractually."] },
    { id: "communications", title: "36. Communications", paragraphs: [`Operational, support, privacy, and legal communications may be sent through the app, Shopify, or ${LEGAL_EMAIL}. The merchant must keep its account and contact information current and monitor those channels.`] },
    { id: "assignment", title: "37. Assignment", paragraphs: ["The merchant may not assign these Terms in a way that violates applicable law or Shopify platform rules. ShopiDeck may assign or transfer its rights and obligations as part of operating the service, subject to applicable law."] },
    { id: "severability", title: "38. Severability", paragraphs: ["If a provision is unenforceable, it will be adjusted to the minimum extent necessary and the remaining provisions will continue, subject to mandatory law."] },
    { id: "waiver", title: "39. No waiver", paragraphs: ["A failure to enforce a provision is not a waiver of the right to enforce it later."] },
    { id: "entire-agreement", title: "40. Entire agreement", paragraphs: ["These Terms, the Privacy Policy, the applicable Shopify App Pricing information, and terms expressly incorporated in writing describe the service agreement. No unlisted promise is added by implication."] },
    { id: "language", title: "41. Prevailing language", paragraphs: ["The Spanish version is the prevailing version. The English version is a translation. Where legally permitted and there is a contradiction, the Spanish version prevails without removing mandatory rights applicable to the merchant."] },
    { id: "contact", title: "42. Contact", paragraphs: [`For questions about these Terms, contact ${LEGAL_EMAIL}. Legal-notice address: ${ADDRESS}.`] },
  ],
};

const termsEs: LegalDocument = {
  title: "Términos de Uso",
  category: "Términos legales y del servicio",
  effectiveDate: "1 de septiembre de 2026",
  lastUpdated: "1 de septiembre de 2026",
  intro: `Estos Términos regulan el acceso y uso de ${PRODUCT} por comerciantes de Shopify. El servicio está disponible desde Shopify Admin y la app incrustada en ${APP_URL}.`,
  sections: [
    { id: "identity", title: "1. Identidad del proveedor", paragraphs: [`Estos Términos constituyen un acuerdo entre el comerciante y Andres Camilo Bonilla Carreño, persona natural comerciante colombiana que opera bajo el nombre comercial ShopiDeck y tiene domicilio en ${ADDRESS}. Contacto: ${LEGAL_EMAIL}.`] },
    { id: "effective", title: "2. Fecha de vigencia", paragraphs: ["Estos Términos entran en vigor el 1 de septiembre de 2026 y fueron actualizados por última vez el 1 de septiembre de 2026."] },
    { id: "acceptance", title: "3. Aceptación", paragraphs: ["Al instalar, acceder o usar la app, el comerciante acepta estos Términos, la Política de Privacidad, la información aplicable de Shopify App Pricing y los términos incorporados expresamente al servicio. Si no está de acuerdo, no debe usar la app."] },
    { id: "capacity", title: "4. Capacidad y autoridad", paragraphs: ["La persona que acepta estos Términos declara que puede obligar al comerciante y que tiene autoridad sobre la tienda Shopify y la cuenta Klaviyo conectada al servicio. El comerciante debe mantener actualizada la información de su cuenta y autorizar únicamente a usuarios apropiados."] },
    { id: "service", title: "5. Descripción del servicio", paragraphs: [`${PRODUCT} conecta mediante OAuth una cuenta Klaviyo autorizada por el comerciante, consulta perfiles existentes, audita perfiles no suprimidos, detecta señales potencialmente sospechosas, aplica scoring basado en reglas explicables, clasifica perfiles como low risk, needs review o probable bot, muestra razones, permite revisar y seleccionar perfiles, solicita confirmación, envía supresiones confirmadas a Klaviyo, conserva historial de auditorías y supresiones, exporta CSV en planes elegibles y muestra estimaciones aproximadas de ahorro.`, "La app no elimina permanentemente perfiles de Klaviyo, no suprime perfiles automáticamente, no bloquea checkouts, no modifica el tema de Shopify, no garantiza que un perfil sea un bot, no garantiza ahorro, no garantiza una factura menor de Klaviyo, no garantiza entregabilidad ni sustituye la revisión del comerciante. La supresión evita envíos de marketing conforme al funcionamiento de Klaviyo y puede revertirse desde Klaviyo."] },
    { id: "license", title: "6. Licencia limitada", paragraphs: ["Sujeto a estos Términos y a los términos aplicables de Shopify App Pricing, ShopiDeck concede al comerciante un derecho limitado, no exclusivo, no transferible y revocable para acceder y usar el servicio en sus operaciones internas de Shopify. El comerciante no debe revender, sublicenciar, copiar, modificar, hacer ingeniería inversa, extraer ni crear un servicio competidor a partir de la app salvo cuando una restricción no pueda hacerse valer legalmente."] },
    { id: "shopify", title: "7. Requisitos de Shopify", paragraphs: ["El uso requiere una tienda Shopify compatible, una cuenta Shopify con permiso para instalar y usar la app y el cumplimiento de los términos, políticas, permisos, reglas de plataforma, reglas de facturación y límites de API aplicables de Shopify. Shopify es una plataforma independiente de terceros."] },
    { id: "klaviyo", title: "8. Requisitos de Klaviyo", paragraphs: ["El comerciante debe tener autoridad para conectar la cuenta de Klaviyo y autorizar los permisos OAuth requeridos por el flujo actual: accounts:read, profiles:read, profiles:write, subscriptions:read y subscriptions:write. Klaviyo es una plataforma independiente de terceros y sus términos, políticas, estado de cuenta, permisos y límites de API pueden afectar el servicio."] },
    { id: "merchant-obligations", title: "9. Obligaciones del comerciante", bullets: ["Tener autoridad sobre la tienda Shopify.", "Tener autoridad sobre la cuenta Klaviyo.", "Mantener seguras las cuentas y credenciales de Shopify y Klaviyo.", "Contar con una base jurídica para los datos proporcionados al servicio.", "Proporcionar avisos de privacidad apropiados y responder a los derechos de los titulares.", "Revisar los scores y las razones antes de actuar.", "Confirmar las supresiones antes de enviarlas.", "No evadir límites del plan ni la autenticación.", "No usar la app ilegalmente ni proporcionar datos sensibles de forma incompatible con la ley aplicable.", "No tratar un resultado como prueba definitiva de fraude."] },
    { id: "customer-data", title: "10. Datos de clientes", paragraphs: ["El comerciante sigue siendo responsable de los datos de clientes y perfiles de Klaviyo, sus instrucciones, avisos de privacidad, bases jurídicas y decisiones sobre supresión. El comerciante concede a ShopiDeck únicamente los derechos razonablemente necesarios para operar el servicio según sus instrucciones documentadas y la Política de Privacidad."] },
    { id: "compliance", title: "11. Cumplimiento del comerciante", paragraphs: ["El comerciante debe cumplir las leyes aplicables de privacidad, marketing, consumo, plataforma y demás normas; los términos de Shopify y Klaviyo; y los derechos de las personas representadas en sus datos. No debe usar la app para una finalidad incompatible ni proporcionar datos que no esté autorizado a tratar."] },
    { id: "scoring", title: "12. Scoring basado en reglas", paragraphs: ["El servicio utiliza reglas automatizadas y explicables para producir señales y clasificaciones. Un score es una estimación para revisión, no una prueba de fraude, identidad, inactividad o conducta ilegal. El servicio no usa aperturas, clics, compras ni navegación para declarar inactivo un perfil. Puede haber falsos positivos y falsos negativos."] },
    { id: "review", title: "13. Revisión humana", paragraphs: ["El comerciante debe revisar el score, la clasificación y las razones. ShopiDeck no toma decisiones legales o de efecto similar basadas exclusivamente en scoring y el comerciante conserva la decisión final. Los resultados no están destinados a decisiones de publicidad, crédito, empleo, seguros o elegibilidad."] },
    { id: "suppression", title: "14. Supresión", paragraphs: ["El servicio no suprime perfiles automáticamente. El comerciante selecciona perfiles y confirma la acción antes de que ShopiDeck envíe la supresión a Klaviyo. La supresión no es una eliminación permanente del perfil. ShopiDeck no puede garantizar que una supresión tenga éxito si Klaviyo, los permisos, el estado de la cuenta, los límites de API u otra limitación de terceros lo impide."] },
    { id: "plans", title: "15. Planes", paragraphs: ["Los planes actuales se indican abajo. La pantalla de aprobación de Shopify y la interfaz de la app son la referencia final del precio y de las condiciones del plan.", "Free Audit: USD 0; una auditoría inicial por tienda; hasta 100.000 perfiles no suprimidos; sin supresión; sin CSV. Starter: USD 9 al mes; 2 escaneos al mes; 5.000 perfiles al mes; 500 supresiones al mes; tabla detallada e historial. Growth: USD 19 al mes; prueba de 7 días mediante Shopify App Pricing; 5 escaneos al mes; 25.000 perfiles al mes; 5.000 supresiones al mes; CSV e historial. Pro: USD 49 al mes; 15 escaneos al mes; 100.000 perfiles al mes; 25.000 supresiones al mes; CSV, historial y soporte prioritario."] },
    { id: "limits", title: "16. Límites", paragraphs: ["La disponibilidad de escaneos, perfiles, supresiones, CSV e historial depende del plan mostrado en Shopify App Pricing y aplicado por la app. Free Audit no se reinicia al desconectar Klaviyo. ShopiDeck puede aplicar límites en el backend para proteger el servicio y mantener el uso alineado con el plan elegido."] },
    { id: "billing", title: "17. Facturación", paragraphs: ["Shopify App Pricing administra la aprobación, cobro, ciclo de facturación, prueba, cancelación y factura. ShopiDeck no almacena información de tarjetas de pago. Los impuestos, renovaciones, fechas de facturación y cargos se rigen por la información presentada por Shopify."] },
    { id: "trials", title: "18. Pruebas", paragraphs: ["El plan Growth puede incluir una prueba de 7 días mediante Shopify App Pricing. La elegibilidad, duración, conversión, cargos y cancelación siguen el flujo de aprobación de Shopify y las condiciones mostradas al registrarse. No se promete una condición de prueba distinta de esas fuentes."] },
    { id: "cancellation", title: "19. Cancelación", paragraphs: ["El comerciante puede cancelar desde Settings, mediante desinstalación o conforme al ciclo de facturación administrado por Shopify App Pricing. Debe revisar la información de facturación de Shopify antes de cancelar. Desconectar o desinstalar puede detener el acceso y tratamiento futuros, pero no necesariamente elimina los datos en ese mismo momento."] },
    { id: "refunds", title: "20. Reembolsos", paragraphs: [`Las solicitudes de ajustes o reembolsos deben enviarse a ${LEGAL_EMAIL}. Cada solicitud se evaluará de acuerdo con la facturación de Shopify App Pricing, el uso del servicio, la legislación aplicable y las facultades disponibles para ShopiDeck dentro de Shopify. Salvo obligación legal, la presentación de una solicitud no garantiza un reembolso.`] },
    { id: "third-parties", title: "21. Servicios de terceros", paragraphs: ["El servicio utiliza Shopify, Klaviyo, Supabase, Vercel y Resend. Las caídas, cambios, límites, incidentes de seguridad o decisiones de política de terceros pueden afectar el servicio y están fuera del control directo de ShopiDeck. Prisma es una biblioteca ORM y no se presenta como subencargado independiente."] },
    { id: "acceptable-use", title: "22. Uso aceptable", bullets: ["No infringir la ley ni derechos de terceros.", "No acceder sin autorización a una tienda o cuenta de Klaviyo.", "No enviar código malicioso ni atacar el servicio.", "No evadir autenticación, límites del plan ni controles de uso.", "No presentar un score como un hecho verificado.", "No usar la app para decisiones que requieran una precisión o efecto jurídico que el servicio no ofrece.", "No enviar contraseñas, API keys, tokens ni otros secretos en formularios de soporte."] },
    { id: "security", title: "23. Seguridad y credenciales", paragraphs: ["El comerciante debe proteger sus cuentas de Shopify y Klaviyo, autorizar usuarios adecuados, mantener confidenciales las credenciales y reportar rápidamente accesos no autorizados sospechados. Los tokens OAuth se cifran, las rutas protegidas requieren autenticación y los secretos permanecen en el servidor. Estas medidas no garantizan seguridad absoluta."] },
    { id: "ip", title: "24. Propiedad intelectual", paragraphs: ["ShopiDeck es titular o tiene derecho de uso sobre el servicio, software, documentación, contenido del sitio público, marca y materiales relacionados, salvo los datos del comerciante y materiales de terceros. Estos Términos no transfieren propiedad. Shopify, Klaviyo y los demás nombres y marcas de terceros pertenecen a sus respectivos titulares."] },
    { id: "feedback", title: "25. Comentarios", paragraphs: ["Si el comerciante envía sugerencias o comentarios, ShopiDeck puede usarlos para mejorar el servicio sin compensación, siempre que no tenga que revelar información confidencial del comerciante ni datos de sus clientes. Los comentarios son voluntarios y no cambian la propiedad del comerciante sobre sus datos."] },
    { id: "availability", title: "26. Disponibilidad", paragraphs: ["El servicio puede verse afectado por Shopify, Klaviyo, hosting, base de datos, correo, red u otras dependencias. ShopiDeck no promete disponibilidad ininterrumpida ni libre de errores."] },
    { id: "maintenance", title: "27. Mantenimiento", paragraphs: ["ShopiDeck puede realizar mantenimiento, trabajos de seguridad, actualizaciones u otras tareas operativas. El mantenimiento puede limitar o cambiar temporalmente el acceso. ShopiDeck comunicará cuando lo exija la ley aplicable o las circunstancias del servicio."] },
    { id: "modifications", title: "28. Modificaciones", paragraphs: ["ShopiDeck puede añadir, retirar o cambiar funciones, planes, límites o funcionalidades cuando la ley y las reglas de la plataforma lo permitan. Los cambios materiales se comunicarán mediante un canal adecuado cuando sea necesario."] },
    { id: "suspension", title: "29. Suspensión", paragraphs: ["El acceso puede suspenderse cuando sea razonablemente necesario por seguridad, prevención de abuso, falta de pago mediante Shopify, incumplimiento de estos Términos, requisito de una plataforma de terceros, cumplimiento legal o protección del servicio. Cuando corresponda, ShopiDeck hará esfuerzos razonables para notificar y permitir corregir el problema."] },
    { id: "termination", title: "30. Terminación", paragraphs: ["El acceso puede terminarse por las mismas razones de suspensión o si se descontinúa el servicio. La terminación no elimina las obligaciones que por su naturaleza deban continuar, incluidas obligaciones de pago ya causadas, propiedad intelectual, confidencialidad, descargos y limitaciones en la medida legalmente exigible."] },
    { id: "data-effects", title: "31. Efectos sobre los datos", paragraphs: ["Al desconectar Klaviyo, los tokens se revocan y eliminan mientras el historial conservado puede permanecer. Eliminar la cuenta elimina el registro local de la tienda y los datos locales relacionados mediante el flujo implementado. La desinstalación y los webhooks de privacidad apoyan los procesos de eliminación y exportación. ShopiDeck no afirma eliminar datos que Shopify o Klaviyo conserven de forma independiente. La Política de Privacidad describe los periodos de conservación y los flujos de eliminación."] },
    { id: "warranties", title: "32. Descargos de garantía", paragraphs: ["En la máxima medida permitida por la ley aplicable, el servicio se proporciona según disponibilidad y descripción. ShopiDeck no garantiza que el scoring sea completo o exacto, que se identifique cada bot, que toda supresión tenga éxito ni que el servicio produzca resultados de ingresos, costos, entregabilidad, cumplimiento u otros resultados comerciales. No se excluyen los derechos legales obligatorios."] },
    { id: "liability", title: "33. Limitación de responsabilidad", paragraphs: ["En la máxima medida permitida por la ley aplicable, ShopiDeck no será responsable por pérdidas indirectas, incidentales, especiales, consecuenciales, ejemplares o punitivas, ni por lucro cesante, ingresos, reputación, datos u oportunidades de negocio perdidas, que surjan del servicio o se relacionen con él. Nada en estos Términos excluye responsabilidad o derechos que legalmente no puedan excluirse o limitarse."] },
    { id: "law", title: "34. Ley aplicable", paragraphs: ["Estos Términos se rigen por las leyes de la República de Colombia. La elección de ley no limita derechos imperativos que no puedan excluirse contractualmente."] },
    { id: "jurisdiction", title: "35. Jurisdicción", paragraphs: ["Los tribunales competentes de Bogotá D.C., Colombia tienen jurisdicción sobre las controversias sujetas a estos Términos. La elección de jurisdicción no limita derechos imperativos que no puedan excluirse contractualmente."] },
    { id: "communications", title: "36. Comunicaciones", paragraphs: [`Las comunicaciones operativas, de soporte, privacidad y legales pueden enviarse mediante la app, Shopify o ${LEGAL_EMAIL}. El comerciante debe mantener actualizada la información de su cuenta y contacto y revisar esos canales.`] },
    { id: "assignment", title: "37. Cesión", paragraphs: ["El comerciante no puede ceder estos Términos de una forma que infrinja la ley aplicable o las reglas de la plataforma Shopify. ShopiDeck puede ceder o transferir sus derechos y obligaciones como parte de la operación del servicio, sujeto a la ley aplicable."] },
    { id: "severability", title: "38. Divisibilidad", paragraphs: ["Si una disposición es inexigible, se ajustará en la medida mínima necesaria y las demás disposiciones continuarán, sujeto a la ley obligatoria."] },
    { id: "waiver", title: "39. No renuncia", paragraphs: ["No hacer valer una disposición no implica renunciar al derecho de hacerla valer posteriormente."] },
    { id: "entire-agreement", title: "40. Acuerdo completo", paragraphs: ["Estos Términos, la Política de Privacidad, la información aplicable de Shopify App Pricing y los términos incorporados expresamente por escrito describen el acuerdo del servicio. Ninguna promesa no incluida se agrega por implicación."] },
    { id: "language", title: "41. Idioma prevalente", paragraphs: ["La versión en español prevalece. La versión en inglés es una traducción. Cuando legalmente sea posible y exista una contradicción, prevalece la versión española sin eliminar derechos imperativos aplicables al comerciante."] },
    { id: "contact", title: "42. Contacto", paragraphs: [`Para preguntas sobre estos Términos, escribe a ${LEGAL_EMAIL}. Dirección para notificaciones legales: ${ADDRESS}.`] },
  ],
};

const dpaEn: LegalDocument = {
  title: "Data Processing Addendum",
  category: "Data processing",
  effectiveDate: "September 1, 2026",
  lastUpdated: "September 1, 2026",
  intro: `This Data Processing Addendum (DPA) applies when ShopiDeck processes Klaviyo profile data for a merchant using ${PRODUCT}. It supplements the Terms of Use and the Privacy Policy.`,
  sections: [
    { id: "object", title: "1. Object and roles", paragraphs: ["The merchant is the controller and ShopiDeck is the processor for personal data processed through the merchant's authorized Klaviyo account and documented instructions. This DPA describes the processing needed to provide the service, including profile auditing, scoring, results, merchant-confirmed suppression, audit history, and privacy-request assistance."] },
    { id: "duration", title: "2. Duration", paragraphs: ["This DPA begins when the merchant accepts the Terms or uses the service and continues while ShopiDeck processes personal data for the merchant. It ends when that processing ends, subject to retention required by law, security, dispute, or the documented deletion flows."] },
    { id: "instructions", title: "3. Instructions", paragraphs: ["ShopiDeck processes personal data only on the merchant's documented instructions, the Terms, the Privacy Policy, and the configuration and actions the merchant takes in the app. The merchant must ensure that its instructions are lawful and that it has authority to connect Klaviyo and provide the data."] },
    { id: "data", title: "4. Categories of data", bullets: ["Klaviyo Account ID, scopes, and encrypted OAuth access and refresh tokens.", "Profile ID, email, name, phone, city, country, IP when available, creation and update dates, email domain, and marketing subscription status.", "Normalized detection patterns, risk score, risk level, reasons, suppression results, audit history, and suppression history.", "Shopify store identifiers, session and account information, plan and usage information, support requests, and limited technical records needed for the service."] },
    { id: "subjects", title: "5. Categories of data subjects", bullets: ["Customers and contacts represented by Klaviyo profiles.", "The merchant's owners, administrators, and authorized users.", "People whose information appears in support, privacy, security, or operational records."] },
    { id: "confidentiality", title: "6. Confidentiality", paragraphs: ["ShopiDeck will restrict access to personal data to people and providers who need it to provide, secure, support, or comply with the service and who are subject to confidentiality obligations or an appropriate legal duty."] },
    { id: "security", title: "7. Security", paragraphs: ["ShopiDeck applies the technical and organizational measures described in the Privacy Policy, including encrypted Klaviyo tokens, HTTPS, server-side secrets, authenticated routes, webhook verification, backend validation, ownership checks, merchant confirmation before suppression, backend limits, and encrypted privacy requests. No measure guarantees absolute security."] },
    { id: "subprocessors", title: "8. Subprocessors", paragraphs: ["The merchant authorizes the subprocessors listed on the public subprocessor page: Shopify, Klaviyo, Supabase, Vercel, and Resend. ShopiDeck will use them only for the purposes described there and will keep the list current when the service changes."], links: [{ label: "View the subprocessor list", href: "/subprocessors" }] },
    { id: "transfers", title: "9. International transfers", paragraphs: ["Processing may occur in the United States and other countries where the listed providers operate. Supabase uses the US East region and Vercel processes in the United States. ShopiDeck uses provider contracts and safeguards when applicable. The merchant may request additional information about transfer safeguards at team@shopideck.com."] },
    { id: "rights", title: "10. Assistance with rights", paragraphs: ["ShopiDeck assists the merchant with documented privacy requests received through Shopify and with the implemented customer data-request and redaction webhooks. The merchant remains responsible for responding to its customers and deciding whether a request is valid and how it should be fulfilled."] },
    { id: "incidents", title: "11. Incidents", paragraphs: ["ShopiDeck investigates suspected security incidents and notifies the merchant when required by law or appropriate to the relevant incident. The merchant must promptly report compromised credentials or suspected unauthorized access to team@shopideck.com and must not send secrets by email."] },
    { id: "audits", title: "12. Audits and information", paragraphs: ["ShopiDeck will make the information in the Privacy Policy, this DPA, and the public subprocessor list available to help the merchant assess the processing. Any additional audit or information request must be proportionate to the service, protect confidential information, and be sent to team@shopideck.com."] },
    { id: "deletion", title: "13. Deletion or return", paragraphs: ["When the merchant disconnects Klaviyo, the OAuth tokens and connection are removed while retained history may remain. On uninstall, account deletion, and shop/redact, ShopiDeck follows the implemented deletion flows. Local records are removed according to the retention periods and flows in the Privacy Policy. Shopify and Klaviyo may retain data independently."] },
    { id: "merchant", title: "14. Merchant obligations", bullets: ["Maintain a lawful basis and appropriate notices for customer data.", "Give lawful and documented instructions.", "Have authority over the Shopify and Klaviyo accounts.", "Review and confirm suppressions.", "Respond to data-subject requests and complaints as controller.", "Do not send sensitive data, credentials, API keys, or passwords through the service or support channels inappropriately."] },
    { id: "measures", title: "15. Technical and organizational measures", paragraphs: ["The service's measures include access control through Shopify authentication, protected routes, encrypted OAuth tokens, HTTPS, server-side secret handling, webhook verification, backend validation, ownership verification for critical actions, backend usage limits, suppression confirmation, and encrypted privacy-request exports. These measures may be updated as the service evolves without reducing the obligations of the parties under applicable law."] },
    { id: "contact", title: "16. Contact", paragraphs: [`For this DPA, contact ${LEGAL_EMAIL} or write to ${ADDRESS}.`] },
  ],
};

const dpaEs: LegalDocument = {
  title: "Anexo de Tratamiento de Datos",
  category: "Tratamiento de datos",
  effectiveDate: "1 de septiembre de 2026",
  lastUpdated: "1 de septiembre de 2026",
  intro: `Este Anexo de Tratamiento de Datos (DPA) aplica cuando ShopiDeck trata datos de perfiles de Klaviyo para un comerciante que usa ${PRODUCT}. Complementa los Términos de Uso y la Política de Privacidad.`,
  sections: [
    { id: "object", title: "1. Objeto y roles", paragraphs: ["El comerciante es el responsable y ShopiDeck es el encargado respecto de los datos personales tratados mediante la cuenta de Klaviyo autorizada por el comerciante y sus instrucciones documentadas. Este DPA describe el tratamiento necesario para prestar el servicio, incluidos la auditoría de perfiles, el scoring, los resultados, la supresión confirmada por el comerciante, el historial de auditorías y la asistencia con solicitudes de privacidad."] },
    { id: "duration", title: "2. Duración", paragraphs: ["Este DPA comienza cuando el comerciante acepta los Términos o usa el servicio y continúa mientras ShopiDeck trate datos personales para el comerciante. Termina cuando finaliza ese tratamiento, sujeto a las conservaciones exigidas por ley, seguridad, controversias o flujos documentados de eliminación."] },
    { id: "instructions", title: "3. Instrucciones", paragraphs: ["ShopiDeck trata datos personales únicamente siguiendo las instrucciones documentadas del comerciante, los Términos, la Política de Privacidad y la configuración y acciones que el comerciante realice en la app. El comerciante debe asegurar que sus instrucciones sean lícitas y que tiene autoridad para conectar Klaviyo y proporcionar los datos."] },
    { id: "data", title: "4. Categorías de datos", bullets: ["Klaviyo Account ID, scopes y tokens de acceso y refresh OAuth cifrados.", "Profile ID, email, nombre, teléfono, ciudad, país, IP cuando esté disponible, fechas de creación y actualización, dominio del email y estado de suscripción de marketing.", "Patrones normalizados de detección, score de riesgo, nivel de riesgo, razones, resultados de supresión, historial de auditorías e historial de supresiones.", "Identificadores de la tienda Shopify, información de sesión y cuenta, plan y uso, solicitudes de soporte y registros técnicos limitados necesarios para el servicio."] },
    { id: "subjects", title: "5. Categorías de titulares", bullets: ["Clientes y contactos representados por perfiles de Klaviyo.", "Propietarios, administradores y usuarios autorizados del comerciante.", "Personas cuya información aparece en registros de soporte, privacidad, seguridad u operación."] },
    { id: "confidentiality", title: "6. Confidencialidad", paragraphs: ["ShopiDeck limitará el acceso a datos personales a las personas y proveedores que necesiten tratarlos para prestar, proteger, soportar u operar el servicio y que estén sujetos a obligaciones de confidencialidad o deber legal apropiado."] },
    { id: "security", title: "7. Seguridad", paragraphs: ["ShopiDeck aplica las medidas técnicas y organizativas descritas en la Política de Privacidad, incluidos tokens de Klaviyo cifrados, HTTPS, secretos en el servidor, rutas autenticadas, verificación de webhooks, validación de backend, comprobaciones de propiedad, confirmación del comerciante antes de la supresión, límites en backend y solicitudes de privacidad cifradas. Ninguna medida garantiza seguridad absoluta."] },
    { id: "subprocessors", title: "8. Subencargados", paragraphs: ["El comerciante autoriza los subencargados listados en la página pública de subencargados: Shopify, Klaviyo, Supabase, Vercel y Resend. ShopiDeck los utilizará para las finalidades descritas allí y mantendrá la lista actualizada cuando cambie el servicio."], links: [{ label: "Ver la lista de subencargados", href: "/es/subprocessors" }] },
    { id: "transfers", title: "9. Transferencias internacionales", paragraphs: ["El tratamiento puede ocurrir en Estados Unidos y otros países donde operen los proveedores listados. Supabase utiliza la región US East y Vercel procesa en Estados Unidos. ShopiDeck utiliza contratos y salvaguardas de los proveedores cuando corresponde. El comerciante puede solicitar información adicional sobre salvaguardas escribiendo a team@shopideck.com."] },
    { id: "rights", title: "10. Asistencia con derechos", paragraphs: ["ShopiDeck asiste al comerciante con solicitudes documentadas de privacidad recibidas mediante Shopify y con los webhooks implementados de solicitud y redacción de datos de clientes. El comerciante sigue siendo responsable de responder a sus clientes y decidir si una solicitud es válida y cómo debe atenderse."] },
    { id: "incidents", title: "11. Incidentes", paragraphs: ["ShopiDeck investiga incidentes de seguridad sospechados y notifica al comerciante cuando la ley lo exige o cuando resulte apropiado para el incidente. El comerciante debe reportar rápidamente credenciales comprometidas o acceso no autorizado sospechado a team@shopideck.com y no enviar secretos por email."] },
    { id: "audits", title: "12. Auditorías e información", paragraphs: ["ShopiDeck pondrá a disposición la información de la Política de Privacidad, este DPA y la lista pública de subencargados para ayudar al comerciante a evaluar el tratamiento. Cualquier solicitud adicional de auditoría o información debe ser proporcional al servicio, proteger la información confidencial y enviarse a team@shopideck.com."] },
    { id: "deletion", title: "13. Eliminación o devolución", paragraphs: ["Al desconectar Klaviyo, se eliminan los tokens OAuth y la conexión, mientras puede permanecer el historial conservado. Durante la desinstalación, eliminación de cuenta y shop/redact, ShopiDeck sigue los flujos de eliminación implementados. Los registros locales se eliminan según los periodos y flujos de la Política de Privacidad. Shopify y Klaviyo pueden conservar datos de forma independiente."] },
    { id: "merchant", title: "14. Obligaciones del comerciante", bullets: ["Mantener una base jurídica y avisos apropiados para los datos de clientes.", "Dar instrucciones lícitas y documentadas.", "Tener autoridad sobre las cuentas de Shopify y Klaviyo.", "Revisar y confirmar las supresiones.", "Atender solicitudes y reclamos de titulares como responsable.", "No enviar datos sensibles, credenciales, API keys ni contraseñas mediante el servicio o canales de soporte de forma inapropiada."] },
    { id: "measures", title: "15. Medidas técnicas y organizativas", paragraphs: ["Las medidas del servicio incluyen control de acceso mediante autenticación de Shopify, rutas protegidas, tokens OAuth cifrados, HTTPS, gestión de secretos en servidor, verificación de webhooks, validación de backend, verificación de propiedad para acciones críticas, límites de uso en backend, confirmación de supresiones y exportaciones de solicitudes de privacidad cifradas. Estas medidas pueden actualizarse a medida que evolucione el servicio sin reducir las obligaciones de las partes bajo la ley aplicable."] },
    { id: "contact", title: "16. Contacto", paragraphs: [`Para este DPA, escribe a ${LEGAL_EMAIL} o usa la dirección ${ADDRESS}.`] },
  ],
};

const subprocessorsEn: Subprocessor[] = [
  { name: "Shopify", service: "Commerce platform and app platform", purpose: "Installation, authentication, store and administrator identity, App Store, billing, webhooks, and privacy requests.", region: "Countries or regions where Shopify operates or processes data; international transfers may occur.", links: providerLinks.shopify },
  { name: "Klaviyo", service: "Marketing platform and profile API", purpose: "OAuth, account and profile queries, subscription information, and merchant-confirmed suppression.", region: "Countries or regions where Klaviyo operates or processes data; international transfers may occur.", links: providerLinks.klaviyo },
  { name: "Supabase", service: "PostgreSQL database and application storage", purpose: "Store application records, audit results, suppression history, and related service data.", region: "US East, United States.", links: providerLinks.supabase },
  { name: "Vercel", service: "Hosting and serverless functions", purpose: "Host the public website and run server-side application functions.", region: "United States.", links: providerLinks.vercel },
  { name: "Resend", service: "Email delivery", purpose: "Send support and service communications when applicable.", region: "The region is not specified in the information available for this policy; international processing may occur.", links: providerLinks.resend },
];

const subprocessorsEs: Subprocessor[] = [
  { name: "Shopify", service: "Plataforma de comercio y de apps", purpose: "Instalación, autenticación, identidad de la tienda y administradores, App Store, facturación, webhooks y solicitudes de privacidad.", region: "Países o regiones donde Shopify opera o trata datos; pueden existir transferencias internacionales.", links: providerLinks.shopify },
  { name: "Klaviyo", service: "Plataforma de marketing y API de perfiles", purpose: "OAuth, consultas de cuenta y perfiles, información de suscripción y supresión confirmada por el comerciante.", region: "Países o regiones donde Klaviyo opera o trata datos; pueden existir transferencias internacionales.", links: providerLinks.klaviyo },
  { name: "Supabase", service: "Base de datos PostgreSQL y almacenamiento de la aplicación", purpose: "Almacenar registros de la aplicación, resultados de auditoría, historial de supresiones y datos relacionados del servicio.", region: "US East, Estados Unidos.", links: providerLinks.supabase },
  { name: "Vercel", service: "Hosting y funciones serverless", purpose: "Alojar el sitio público y ejecutar funciones de la aplicación en el servidor.", region: "Estados Unidos.", links: providerLinks.vercel },
  { name: "Resend", service: "Entrega de email", purpose: "Enviar comunicaciones de soporte y del servicio cuando corresponda.", region: "La región no está especificada en la información disponible para esta política; puede existir tratamiento internacional.", links: providerLinks.resend },
];

export const legalDocuments = {
  privacy: { en: privacyEn, es: privacyEs },
  terms: { en: termsEn, es: termsEs },
  dpa: { en: dpaEn, es: dpaEs },
} satisfies Record<string, Record<Locale, LegalDocument>>;

export const subprocessors = {
  en: subprocessorsEn,
  es: subprocessorsEs,
} satisfies Record<Locale, Subprocessor[]>;

function assertMatchingSections(name: string, documents: Record<Locale, LegalDocument>) {
  const enIds = documents.en.sections.map((section) => section.id).join("|");
  const esIds = documents.es.sections.map((section) => section.id).join("|");
  if (enIds !== esIds) throw new Error(`${name} legal sections are out of sync between locales.`);
}

assertMatchingSections("Privacy", legalDocuments.privacy);
assertMatchingSections("Terms", legalDocuments.terms);
assertMatchingSections("DPA", legalDocuments.dpa);
