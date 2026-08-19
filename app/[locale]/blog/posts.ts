export interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  authorRole: string;
}

export const postsEN: Post[] = [
  {
    id: "klaviyo-deliverability-hygiene",
    title: "How to Review Suspicious Klaviyo Profiles Safely",
    category: "Klaviyo",
    date: "August 11, 2026",
    readTime: "6 min read",
    excerpt: "A practical guide to reviewing suspicious profile signals, understanding suppression, and keeping merchant-controlled cleanup workflows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    author: "ShopiDeck",
    authorRole: "Product team",
    content: [
      "Profile hygiene matters because suspicious profiles can make contact data harder to review and can distort campaign analysis. A cleaner review process helps merchants understand what is in their Klaviyo account without assuming that every unusual profile is fraudulent or that a cleanup will change an invoice.",
      "A profile audit can point out signals such as a known disposable domain, an unusual email pattern, generic or incomplete profile data, repeated values, a high-volume creation window, or available subscription metadata. These are signals, not proof. A real customer can share one of these characteristics, so the merchant should review the reasons and context before taking action.",
      "Bot Cleaner uses Klaviyo OAuth rather than asking the merchant to paste a private API key. It audits profiles that already exist in the authorized Klaviyo account, runs the scan in the background, and shows a risk score, category, and human-readable reasons. The merchant selects profiles and confirms any suppression batch.",
      "Suppression and deletion are different actions. Suppression prevents marketing sends in Klaviyo. The current product does not permanently delete profiles. This keeps the workflow focused on a confirmed marketing action and makes the merchant's decision visible.",
      "Merchants should also review consent, SPF, DKIM, and DMARC; keep segments current; review campaign audiences; and add form protections if their store needs them. Bot Cleaner does not replace those practices, and it does not guarantee inbox placement or a lower Klaviyo invoice.",
    ],
  },
];

export const postsES: Post[] = [
  {
    id: "klaviyo-deliverability-hygiene",
    title: "Cómo revisar perfiles sospechosos de Klaviyo de forma segura",
    category: "Klaviyo",
    date: "11 de agosto de 2026",
    readTime: "6 min de lectura",
    excerpt: "Una guía práctica para revisar señales de perfiles sospechosos, entender la supresión y mantener flujos de limpieza controlados por el comerciante.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    author: "ShopiDeck",
    authorRole: "Equipo de producto",
    content: [
      "La higiene de perfiles importa porque los perfiles sospechosos pueden dificultar la revisión de los datos de contacto y distorsionar el análisis de campañas. Un proceso de revisión más claro ayuda a entender qué hay en la cuenta de Klaviyo sin asumir que todo perfil inusual es fraudulento ni que una limpieza cambiará la factura.",
      "Una auditoría puede señalar un dominio desechable conocido, un patrón inusual de email, datos genéricos o incompletos, valores repetidos, una ventana de creación de alta actividad o metadatos de suscripción disponibles. Son señales, no pruebas. Un cliente real puede compartir una de esas características, por lo que el comerciante debe revisar las razones y el contexto antes de actuar.",
      "Bot Cleaner usa OAuth de Klaviyo en lugar de pedir que el comerciante pegue una API key privada. Audita perfiles que ya existen en la cuenta autorizada de Klaviyo, ejecuta el escaneo en segundo plano y muestra una puntuación, una categoría y razones en lenguaje claro. El comerciante selecciona perfiles y confirma cada lote de supresión.",
      "Supresión y eliminación son acciones distintas. La supresión evita envíos de marketing en Klaviyo. El producto actual no elimina perfiles permanentemente. Así, el flujo se concentra en una acción de marketing confirmada y deja visible la decisión del comerciante.",
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
