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
    title: "How to Clean Your Klaviyo List and Improve Deliverability by 25%",
    category: "SEO",
    date: "May 27, 2026",
    readTime: "5 min read",
    excerpt: "Discover how disposable temporary emails and spambots sabotage your email campaigns and how to fix it step by step without hurting your real leads.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    author: "Andres Bonilla",
    authorRole: "CEO",
    content: [
      "If you run an e-commerce brand on Shopify, you already know that email marketing through platforms like Klaviyo is your highest-margin channel. But there's a silent threat eating away at your ROI: poor data quality and spam email signups.",
      "Every single day, malicious spambots and automated scripts target public checkout forms and newsletter inputs. They register accounts using temporary disposable emails (like @tempmail.org, @generator.net, or @throwawaymail.com). These addresses are designed to self-destruct within minutes to hours. When Klaviyo attempts to deliver your flows and campaigns to these non-existent addresses, they immediately bounce.",
      "Why is this bounce rate so toxic? Internet Service Providers (ISPs) like Google, Yahoo, and Outlook strictly monitor your sender reputation. If your bounce rate exceeds 2%, or if your campaign open rates plunge below 15%, ISP spam filters automatically flag your sender domain. As a direct consequence, even your most valuable, highly-engaged customer emails get routed straight into the SPAM folder.",
      "To safeguard your deliverability and maintain a clean email database, we suggest integrating these three key practices into your growth operations:",
      "1. Real-Time Domain Scans: Avoid hard bounces before they happen. Cross-reference form submissions against a dynamic blacklist of verified temporary disposable domain extensions, blocking them right at the storefront register.",
      "2. Tag & Validate Suspicious Registrations: Don't let machines bloat your segments. Flag customer profiles that exhibit strange heuristic characteristics (e.g. extremely long strings of random letters or suspicious characters) for validation.",
      "3. Use Non-Intrusive Server-Side Protection: Avoid heavy frontend Javascript widgets or annoying Captchas that cause layout shifts and lower your store checkout conversion rates. Utilize server-side API webhooks that screen profiles in the background.",
      "Regularly sanitizing your list and stopping fake accounts from entering your funnel is the easiest way to increase your open rates by over 25% within weeks. Best of all, it keeps your Klaviyo active profile count clean, directly saving you money on your monthly software plans."
    ]
  }
];

export const postsES: Post[] = [
  {
    id: "klaviyo-deliverability-hygiene",
    title: "Cómo limpiar tu lista de Klaviyo y mejorar un 25% la entregabilidad",
    category: "SEO",
    date: "27 de Mayo, 2026",
    readTime: "5 min de lectura",
    excerpt: "Descubre cómo los correos temporales desechables y los registros falsos sabotean tus campañas de correo electrónico y cómo solucionarlo paso a paso sin dañar tus leads reales.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    author: "Andres Bonilla",
    authorRole: "CEO",
    content: [
      "Si haces marketing de comercio electrónico en Shopify, seguramente ya sabes que Klaviyo es una de las herramientas más potentes para generar ingresos recurrentes. Sin embargo, hay un enemigo silencioso que podría estar destruyendo el rendimiento de tus campañas: la mala calidad de tus datos.",
      "Cada día, decenas de bots de checkout y usuarios maliciosos se registran en las tiendas utilizando correos temporales desechables (como @tempmail.org o @generator.net). Estos correos están diseñados para expirar en pocas horas. Cuando envías tus newsletters o flujos automatizados a estas direcciones, tus mensajes rebotan de inmediato.",
      "¿Por qué es esto tan peligroso? Los proveedores de correo como Gmail y Outlook miden estrictamente tu reputación de remitente. Si tu tasa de rebotes supera el 2%, o si tus tasas de apertura caen por debajo del 15%, estos servidores asumirán que envías SPAM. Como consecuencia, comenzarán a desviar todos tus correos legítimos —incluso los de tus compradores reales— directamente a la carpeta de correo no deseado.",
      "Para solucionar este problema de inmediato, te recomendamos aplicar estas tres estrategias clave:",
      "1. Filtra los dominios de desecho: Mantén una lista actualizada de dominios de correos temporales conocidos y bloquéalos en tu formulario de registro para evitar que se unan a tus flujos principales.",
      "2. Implementa workflows de doble confirmación (Double Opt-in): Aunque agrega un paso adicional, asegura que el 100% de tus suscriptores tengan bandejas de entrada reales en las que estén interesados.",
      "3. Utiliza herramientas especializadas de higiene de datos: Aplicaciones como BotCleaner de ShopiDeck analizan los perfiles en tiempo real durante el registro o checkout. Marcan los registros sospechosos y te permiten archivarlos de forma segura en un panel de revisión simple, garantizando que tu base de datos permanezca pura.",
      "Limpiar de forma regular tus perfiles inactivos y bloquear cuentas falsas puede aumentar tus tasas de apertura en más de un 25% en menos de 30 días, protegiendo tu dominio y maximizando el retorno de tu inversión en marketing."
    ]
  }
];

export function getPosts(locale: string): Post[] {
  return locale === "es" ? postsES : postsEN;
}

export function getPostBySlug(slug: string, locale: string): Post | undefined {
  const posts = getPosts(locale);
  return posts.find((post) => post.id === slug);
}
