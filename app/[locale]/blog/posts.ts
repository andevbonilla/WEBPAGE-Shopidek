export interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  keywords: string[];
  author: string;
  authorRole: string;
  faq?: { question: string; answer: string }[];
}

export const postsEN: Post[] = [
  {
    id: "clean-fake-klaviyo-profiles-shopify",
    title: "How to Clean Fake Klaviyo Profiles in Shopify Without Deleting Real Customers",
    category: "Klaviyo list hygiene",
    date: "September 15, 2026",
    publishedAt: "2026-09-15T12:00:00.000Z",
    readTime: "8 min read",
    excerpt: "Learn why fake profiles reach Klaviyo, how they affect contact limits and campaign data, and how to review and suppress them safely from Shopify.",
    image: "/brand/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-interface.png",
    imageWidth: 1528,
    imageHeight: 969,
    keywords: [
      "clean Klaviyo profiles",
      "remove fake Klaviyo profiles",
      "Klaviyo bot cleanup",
      "Shopify email list hygiene",
      "suppress Klaviyo profiles",
      "Klaviyo contact limits",
    ],
    author: "ShopiDeck",
    authorRole: "Product team",
    content: [
      "Fake and low-quality profiles can quietly build up in Klaviyo long before a merchant notices a problem. They may come from automated form submissions, disposable inboxes, testing, old imports, or repeated signup attempts. Mixed with real customers, these records make the list harder to understand and maintain.",
      "## Why fake profiles appear in Klaviyo",
      "1. Public signup forms are easy targets for automated submissions. A bot can complete a newsletter or promotional form repeatedly, creating profiles that look like ordinary signups at first glance.",
      "2. Disposable or short-lived email addresses can enter through legitimate-looking forms. The address may stop being useful soon after the signup, but the profile can remain in Klaviyo.",
      "3. Test records, duplicate attempts, old imports, and incomplete profiles can accumulate over time. Not every low-quality profile is a bot, which is why context and merchant review matter.",
      "## Why low-quality profiles are bad for growth",
      "Unnecessary profiles increase the size of the list you have to manage and can move an account closer to its plan's contact limits. Whether that changes a Klaviyo invoice depends on the account, plan, and billing threshold, so cleanup should never be presented as guaranteed savings.",
      "They can also contaminate segments and campaign reporting. When contacts never intended to engage, it becomes harder to understand which audiences are real, which campaigns are working, and where marketing effort should go next.",
      "Sending repeatedly to low-quality contacts can waste message capacity and create more manual work for the team. A review process helps separate useful customer data from profiles that deserve closer inspection.",
      "## A safer way to clean a Klaviyo list",
      "1. Audit profiles that already exist instead of assuming every unusual signup is fraudulent.",
      "2. Review explainable signals such as disposable-domain matches, unusual email patterns, generic or incomplete data, repeated values, and high-volume creation windows.",
      "3. Check the reason and context for each flagged profile. A signal is not proof, and a real customer can share one suspicious characteristic.",
      "4. Select only the profiles you want to act on and confirm the batch before sending a suppression request to Klaviyo.",
      "5. Keep consent, domain authentication, form protection, audience strategy, and campaign hygiene as separate parts of the broader deliverability workflow.",
      "## How ShopiDeck: Klaviyo Bot Cleaner helps",
      "Bot Cleaner connects through Klaviyo OAuth, audits existing profiles in the background, and presents a risk score, category, and human-readable reasons. The merchant stays in control: nothing is suppressed until selected profiles are reviewed and the action is confirmed.",
      "The current workflow uses suppression, not permanent deletion. Suppression prevents future marketing sends to the selected profiles while preserving a review-first process. Install the app from Shopify to run an initial audit and understand what may be hiding inside your Klaviyo list.",
    ],
    faq: [
      {
        question: "Does cleaning fake Klaviyo profiles guarantee a lower bill?",
        answer: "No. Removing contact-count pressure may help some accounts, but any billing impact depends on the Klaviyo plan and billing threshold.",
      },
      {
        question: "Does Klaviyo suppression permanently delete a profile?",
        answer: "No. Suppression prevents marketing sends. ShopiDeck: Klaviyo Bot Cleaner does not permanently delete profiles in its current version.",
      },
      {
        question: "How does Bot Cleaner identify suspicious profiles?",
        answer: "It uses explainable signals such as disposable domains, unusual email patterns, incomplete data, repeated values, creation bursts, and available subscription metadata. Signals require merchant review.",
      },
      {
        question: "Does the app require Shopify theme changes?",
        answer: "No. It operates through Shopify Admin and backend APIs without Liquid edits or storefront scripts.",
      },
    ],
  },
  {
    id: "klaviyo-deliverability-hygiene",
    title: "How to Review Suspicious Klaviyo Profiles Safely",
    category: "Klaviyo",
    date: "August 11, 2026",
    publishedAt: "2026-08-11T12:00:00.000Z",
    readTime: "6 min read",
    excerpt: "A practical guide to reviewing suspicious profile signals, understanding suppression, and keeping merchant-controlled cleanup workflows.",
    image: "/brand/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-interface.png",
    imageWidth: 1528,
    imageHeight: 969,
    keywords: ["Klaviyo profile audit", "Klaviyo suppression", "Shopify list hygiene", "email deliverability"],
    author: "ShopiDeck",
    authorRole: "Product team",
    content: [
      "## Why profile hygiene matters",
      "Profile hygiene matters because suspicious profiles can make contact data harder to review and can distort campaign analysis. A cleaner review process helps merchants understand what is in their Klaviyo account without assuming that every unusual profile is fraudulent or that a cleanup will change an invoice.",
      "## What suspicious signals mean",
      "A profile audit can point out signals such as a known disposable domain, an unusual email pattern, generic or incomplete profile data, repeated values, a high-volume creation window, or available subscription metadata. These are signals, not proof. A real customer can share one of these characteristics, so the merchant should review the reasons and context before taking action.",
      "## A review-first audit workflow",
      "Bot Cleaner uses Klaviyo OAuth rather than asking the merchant to paste a private API key. It audits profiles that already exist in the authorized Klaviyo account, runs the scan in the background, and shows a risk score, category, and human-readable reasons. The merchant selects profiles and confirms any suppression batch.",
      "## Suppression is not deletion",
      "Suppression and deletion are different actions. Suppression prevents marketing sends in Klaviyo. The current product does not permanently delete profiles. This keeps the workflow focused on a confirmed marketing action and makes the merchant's decision visible.",
      "## What Bot Cleaner does not replace",
      "Merchants should also review consent, SPF, DKIM, and DMARC; keep segments current; review campaign audiences; and add form protections if their store needs them. Bot Cleaner does not replace those practices, and it does not guarantee inbox placement or a lower Klaviyo invoice.",
    ],
  },
];

export const postsES: Post[] = [
  {
    id: "clean-fake-klaviyo-profiles-shopify",
    title: "Cómo limpiar perfiles falsos de Klaviyo en Shopify sin borrar clientes reales",
    category: "Higiene de listas en Klaviyo",
    date: "15 de septiembre de 2026",
    publishedAt: "2026-09-15T12:00:00.000Z",
    readTime: "8 min de lectura",
    excerpt: "Descubre por qué llegan perfiles falsos a Klaviyo, cómo afectan los límites y datos de campaña, y cómo revisarlos y suprimirlos de forma segura desde Shopify.",
    image: "/brand/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-interface.png",
    imageWidth: 1528,
    imageHeight: 969,
    keywords: [
      "limpiar perfiles de Klaviyo",
      "eliminar perfiles falsos de Klaviyo",
      "bots en Klaviyo",
      "higiene de listas Shopify",
      "suprimir perfiles de Klaviyo",
      "límites de contactos Klaviyo",
    ],
    author: "ShopiDeck",
    authorRole: "Equipo de producto",
    content: [
      "Los perfiles falsos o de baja calidad pueden acumularse en Klaviyo mucho antes de que un comercio detecte el problema. Pueden llegar mediante formularios automatizados, correos desechables, pruebas, importaciones antiguas o intentos repetidos de registro. Mezclados con clientes reales, hacen que la lista sea más difícil de entender y mantener.",
      "## Por qué aparecen perfiles falsos en Klaviyo",
      "1. Los formularios públicos son objetivos fáciles para envíos automatizados. Un bot puede completar varias veces un formulario de newsletter o promoción y crear perfiles que al principio parecen registros normales.",
      "2. Los correos desechables o de corta duración pueden entrar mediante formularios aparentemente legítimos. La dirección puede dejar de ser útil poco después del registro, pero el perfil permanece en Klaviyo.",
      "3. Los registros de prueba, intentos duplicados, importaciones antiguas y perfiles incompletos se acumulan con el tiempo. No todo perfil de baja calidad es un bot; por eso importan el contexto y la revisión del comerciante.",
      "## Por qué los perfiles de baja calidad perjudican el crecimiento",
      "Los perfiles innecesarios aumentan el tamaño de la lista que debes administrar y pueden acercar la cuenta a los límites de contactos del plan. Que esto cambie la factura de Klaviyo depende de la cuenta, el plan y el umbral de facturación, por lo que una limpieza nunca debe presentarse como ahorro garantizado.",
      "También pueden contaminar los segmentos y los informes de campaña. Cuando hay contactos que nunca tuvieron intención de interactuar, resulta más difícil entender qué audiencias son reales, qué campañas funcionan y dónde conviene invertir el esfuerzo de marketing.",
      "Enviar repetidamente a contactos de baja calidad puede desperdiciar capacidad de envío y generar más trabajo manual para el equipo. Un flujo de revisión ayuda a separar los datos útiles de los perfiles que merecen una inspección más cuidadosa.",
      "## Una forma más segura de limpiar una lista de Klaviyo",
      "1. Audita los perfiles que ya existen en lugar de asumir que todo registro inusual es fraudulento.",
      "2. Revisa señales explicables como dominios desechables, patrones inusuales de email, datos genéricos o incompletos, valores repetidos y ventanas de creación de alto volumen.",
      "3. Comprueba la razón y el contexto de cada perfil marcado. Una señal no es una prueba y un cliente real puede compartir alguna característica sospechosa.",
      "4. Selecciona únicamente los perfiles sobre los que quieres actuar y confirma el lote antes de enviar la solicitud de supresión a Klaviyo.",
      "5. Mantén el consentimiento, la autenticación del dominio, la protección de formularios, la estrategia de audiencias y la higiene de campañas como partes separadas de un flujo más amplio de entregabilidad.",
      "## Cómo ayuda ShopiDeck: Klaviyo Bot Cleaner",
      "Bot Cleaner se conecta mediante OAuth de Klaviyo, audita los perfiles existentes en segundo plano y muestra una puntuación, una categoría y razones fáciles de entender. El comerciante conserva el control: nada se suprime hasta revisar los perfiles seleccionados y confirmar la acción.",
      "El flujo actual utiliza supresión, no eliminación permanente. La supresión evita futuros envíos de marketing a los perfiles seleccionados y mantiene un proceso de revisión previa. Instala la app desde Shopify para ejecutar una auditoría inicial y conocer qué puede estar oculto dentro de tu lista de Klaviyo.",
    ],
    faq: [
      {
        question: "¿Limpiar perfiles falsos de Klaviyo garantiza una factura menor?",
        answer: "No. Reducir la presión sobre el conteo puede ayudar en algunas cuentas, pero cualquier impacto depende del plan y del umbral de facturación de Klaviyo.",
      },
      {
        question: "¿La supresión de Klaviyo elimina permanentemente un perfil?",
        answer: "No. La supresión evita envíos de marketing. ShopiDeck: Klaviyo Bot Cleaner no elimina perfiles permanentemente en su versión actual.",
      },
      {
        question: "¿Cómo identifica Bot Cleaner los perfiles sospechosos?",
        answer: "Utiliza señales explicables como dominios desechables, patrones inusuales de email, datos incompletos, valores repetidos, picos de creación y metadatos de suscripción disponibles. Las señales requieren revisión del comerciante.",
      },
      {
        question: "¿La app requiere cambios en el tema de Shopify?",
        answer: "No. Funciona mediante Shopify Admin y APIs de backend, sin editar Liquid ni añadir scripts al storefront.",
      },
    ],
  },
  {
    id: "klaviyo-deliverability-hygiene",
    title: "Cómo revisar perfiles sospechosos de Klaviyo de forma segura",
    category: "Klaviyo",
    date: "11 de agosto de 2026",
    publishedAt: "2026-08-11T12:00:00.000Z",
    readTime: "6 min de lectura",
    excerpt: "Una guía práctica para revisar señales de perfiles sospechosos, entender la supresión y mantener flujos de limpieza controlados por el comerciante.",
    image: "/brand/products/bot-cleaner/shopideck-klaviyo-bot-cleaner-interface.png",
    imageWidth: 1528,
    imageHeight: 969,
    keywords: ["auditoría de perfiles Klaviyo", "supresión en Klaviyo", "higiene de listas Shopify", "entregabilidad de email"],
    author: "ShopiDeck",
    authorRole: "Equipo de producto",
    content: [
      "## Por qué importa la higiene de perfiles",
      "La higiene de perfiles importa porque los perfiles sospechosos pueden dificultar la revisión de los datos de contacto y distorsionar el análisis de campañas. Un proceso de revisión más claro ayuda a entender qué hay en la cuenta de Klaviyo sin asumir que todo perfil inusual es fraudulento ni que una limpieza cambiará la factura.",
      "## Qué significan las señales sospechosas",
      "Una auditoría puede señalar un dominio desechable conocido, un patrón inusual de email, datos genéricos o incompletos, valores repetidos, una ventana de creación de alta actividad o metadatos de suscripción disponibles. Son señales, no pruebas. Un cliente real puede compartir una de esas características, por lo que el comerciante debe revisar las razones y el contexto antes de actuar.",
      "## Un flujo de auditoría con revisión previa",
      "Bot Cleaner usa OAuth de Klaviyo en lugar de pedir que el comerciante pegue una API key privada. Audita perfiles que ya existen en la cuenta autorizada de Klaviyo, ejecuta el escaneo en segundo plano y muestra una puntuación, una categoría y razones en lenguaje claro. El comerciante selecciona perfiles y confirma cada lote de supresión.",
      "## La supresión no es eliminación",
      "Supresión y eliminación son acciones distintas. La supresión evita envíos de marketing en Klaviyo. El producto actual no elimina perfiles permanentemente. Así, el flujo se concentra en una acción de marketing confirmada y deja visible la decisión del comerciante.",
      "## Lo que Bot Cleaner no reemplaza",
      "También conviene revisar el consentimiento, SPF, DKIM y DMARC; mantener los segmentos actualizados; revisar las audiencias de las campañas; y añadir protección en formularios si la tienda la necesita. Bot Cleaner no reemplaza esas prácticas ni garantiza llegar a la bandeja de entrada o pagar menos en Klaviyo.",
    ],
  },
];

export function getPosts(locale: string): Post[] {
  return locale === "es" ? postsES : postsEN;
}

export function getPostBySlug(slug: string, locale: string): Post | undefined {
  return getPosts(locale).find((post) => post.id === slug);
}

