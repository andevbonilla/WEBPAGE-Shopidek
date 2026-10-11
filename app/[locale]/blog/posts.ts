import { resolveLocale, type Locale } from "@/i18n/messages";

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
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageCredit: { name: string; url: string };
  sources: { title: string; url: string }[];
  keywords: string[];
  author: string;
  authorRole: string;
  cta: { product: "botcleaner" | "less-time-marketing"; title: string; description: string; label: string };
  faq?: { question: string; answer: string }[];
}

type ArticleCopy = Pick<Post, "id" | "title" | "category" | "excerpt" | "content" | "imageAlt" | "keywords" | "cta">;
const sharedArticles: Record<string, Pick<Post, "image" | "imageCredit" | "sources">> = {
  "save-money-klaviyo-marketing": {
    image: "https://images.unsplash.com/photo-1710488350873-392a99d1da5d?auto=format&fit=crop&w=1600&h=1000&q=85",
    imageCredit: { name: "Jakub Żerdzicki / Unsplash", url: "https://unsplash.com/photos/fgNgbnMdgBM" },
    sources: [
      { title: "Klaviyo: Smart Sending", url: "https://help.klaviyo.com/hc/en-us/articles/115002779311" },
      { title: "Klaviyo: engagement and sending frequency", url: "https://help.klaviyo.com/hc/en-us/articles/360037527052" },
      { title: "SD: Klaviyo Bot Cleaner", url: "/botcleaner" },
    ],
  },
  "sell-more-with-klaviyo": {
    image: "https://images.unsplash.com/photo-1559163330-c30bac8c5031?auto=format&fit=crop&w=1600&h=1000&q=85",
    imageCredit: { name: "Unsplash", url: "https://unsplash.com/photos/wAZ8pS2D_OA" },
    sources: [
      { title: "Klaviyo: getting started with flows", url: "https://help.klaviyo.com/hc/en-us/articles/115002774932" },
      { title: "Klaviyo: A/B testing campaigns", url: "https://help.klaviyo.com/hc/en-us/articles/115005228148" },
      { title: "Klaviyo: improving email conversion", url: "https://help.klaviyo.com/hc/en-us/articles/360058104671" },
    ],
  },
  "sell-more-on-shopify": {
    image: "https://images.unsplash.com/photo-1770013413878-2530e2c3d82b?auto=format&fit=crop&w=1600&h=1000&q=85",
    imageCredit: { name: "Rifki Kurniawan / Unsplash", url: "https://unsplash.com/photos/k63Or81F8-M" },
    sources: [
      { title: "Shopify: product page optimization", url: "https://www.shopify.com/blog/expert-advice-improve-product-pages" },
      { title: "Shopify: reducing cart abandonment", url: "https://www.shopify.com/enterprise/blog/44272899-how-to-reduce-shopping-cart-abandonment-by-optimizing-the-checkout" },
      { title: "SD: Less Time Marketing", url: "/social-marketing" },
    ],
  },
};

const articlesES: ArticleCopy[] = [
  {
    id: "save-money-klaviyo-marketing",
    title: "5 estrategias para ahorrar más dinero con tus campañas de marketing en Klaviyo",
    category: "Marketing rentable",
    excerpt: "Reduce envíos innecesarios, revisa la calidad de tu lista y cuida el margen de cada promoción con cinco acciones que puedes empezar a aplicar hoy.",
    imageAlt: "Portátil y calculadora sobre un escritorio para revisar el presupuesto de marketing",
    keywords: ["ahorrar en Klaviyo", "reducir costos email marketing", "campañas Klaviyo", "limpiar lista Klaviyo"],
    content: [
      "Ahorrar en Klaviyo empieza por entender dónde se va tu presupuesto. Puede estar en contactos que nunca interactúan, campañas que se solapan o descuentos que generan pedidos pero dejan poco margen. La meta es dedicar tus recursos a mensajes que tengan una razón clara para llegar a cada persona.",
      "Estas cinco estrategias te ayudan a revisar tu operación sin frenar el marketing de tu tienda. Empieza con los datos de tu cuenta y compara periodos similares antes de decidir qué cambiar.",
      "## 1. Revisa los perfiles que ocupan espacio en tu lista",
      "Separa los perfiles sospechosos de los clientes que simplemente compran con poca frecuencia. Un correo extraño o meses sin actividad no bastan para concluir que alguien es un bot. Revisa el origen del registro, los datos disponibles y el comportamiento antes de actuar.",
      "SD: Klaviyo Bot Cleaner audita los perfiles existentes y muestra señales de riesgo con razones comprensibles. Tú seleccionas los perfiles y confirmas cuáles quieres suprimir. La supresión evita envíos de marketing y no elimina permanentemente el perfil.",
      "La auditoría inicial gratuita permite conocer los hallazgos agregados. Una limpieza puede reducir actividad innecesaria, pero una factura menor depende del plan y de los umbrales de facturación de tu cuenta. Cualquier ahorro mostrado es una estimación.",
      "## 2. Ajusta la frecuencia al interés de cada audiencia",
      "Distingue a los suscriptores recientes de quienes llevan tiempo sin interactuar. Usa clics y compras, junto con el contexto de tu tienda, para decidir a quién enviar cada campaña y con qué frecuencia. Las aperturas por sí solas no cuentan toda la historia.",
      "Por ejemplo, una campaña sobre un accesorio puede dirigirse primero a quienes compraron el producto compatible. Revisa si los pedidos obtenidos justifican el volumen enviado antes de ampliar el alcance.",
      "## 3. Evita que campañas y automatizaciones se amontonen",
      "Una persona puede entrar en un flujo de bienvenida y recibir además tu promoción semanal. Revisa el calendario completo, las exclusiones y las reglas de los flujos para evitar mensajes repetidos o contradictorios.",
      "Smart Sending permite limitar mensajes dentro de una ventana de tiempo. Comprueba su configuración en cada envío: los mensajes omitidos no se reprograman automáticamente y cada canal tiene su propia ventana. Úsalo como apoyo a una planificación clara.",
      "## 4. Calcula el costo de tus descuentos",
      "Antes de lanzar un cupón, considera el margen del producto, el envío que asumes y otros costos variables. Una promoción puede elevar las ventas y aun así dejar menos dinero disponible para el negocio.",
      "Prueba también argumentos que no dependan del precio: una guía de uso, una comparación útil o una respuesta a una duda frecuente. Si ofreces un incentivo, define para quién tiene sentido y revisa el margen del pedido resultante.",
      "## 5. Mide el resultado completo de cada campaña",
      "Registra la audiencia, el volumen enviado, los clics, los pedidos y los descuentos utilizados. Añade una estimación del margen para comparar campañas con más contexto que el ingreso atribuido. Mantén criterios de medición consistentes.",
      "Elige una mejora cada vez: revisar perfiles, ajustar una frecuencia o cambiar una oferta. Si modificas todo a la vez, será difícil saber qué ayudó. Repite lo que aporte valor y reduce lo que consume presupuesto sin una contribución clara.",
      "## Tu próximo paso",
      "Revisa esta semana una audiencia, el calendario de envíos y una promoción reciente. Si sospechas que tu lista contiene registros de baja calidad, empieza por conocerlos con Bot Cleaner y confirma cualquier supresión después de revisar las señales.",
    ],
    cta: { product: "botcleaner", title: "¿Qué perfiles están ocupando espacio en tu lista?", description: "Empieza con la auditoría inicial gratuita de Bot Cleaner. Conoce los hallazgos y decide si necesitas un plan para revisar perfiles en detalle y confirmar supresiones.", label: "Instalar Bot Cleaner" },
  },
  {
    id: "sell-more-with-klaviyo",
    title: "Cómo vender más con Klaviyo: 7 mejoras para convertir tus emails en pedidos",
    category: "Email marketing",
    excerpt: "Una oferta clara, mensajes relevantes y mejores páginas de destino pueden ayudarte a convertir el interés de tus suscriptores en compras.",
    imageAlt: "Persona trabajando en un portátil para preparar una campaña de email marketing",
    keywords: ["vender más con Klaviyo", "email marketing Shopify", "aumentar conversiones email", "flujos Klaviyo"],
    content: [
      "Un email puede conseguir clics y aun así no generar compras. Quizá la oferta no encaja con la persona, el mensaje promete algo que la página no explica o el cliente encuentra una duda al pagar. Vender más con Klaviyo requiere revisar el recorrido completo.",
      "Estas siete mejoras son puntos de partida para probar en tu tienda. Los resultados dependen de tu audiencia, tus productos y la experiencia de compra. Compara cada cambio con tus propios datos.",
      "## 1. Cada email necesita un motivo para comprar",
      "Antes de diseñar, escribe qué vendes, a quién le sirve y por qué merece atención ahora. Un producto nuevo puede resolver una necesidad concreta. Una reposición puede ser relevante para alguien que ya lo utiliza. El mensaje debe dejar claro ese motivo.",
      "Evita juntar todo el catálogo en una campaña sin prioridad. Presenta un beneficio principal y propone un siguiente paso fácil de reconocer. Una llamada a la acción específica ayuda más que varios botones compitiendo entre sí.",
      "## 2. Habla según el momento del cliente",
      "Una persona que acaba de suscribirse necesita conocer tu marca. Quien ya compró puede valorar instrucciones de uso o un complemento compatible. Usa los datos disponibles para adaptar el contenido, sin asumir preferencias que no conoces.",
      "Presenta una guía de tallas a quien considera su primera compra y recomendaciones de cuidado a quien ya recibió el producto. La relevancia depende de la necesidad del cliente, no solo de poner su nombre en el asunto.",
      "## 3. Revisa tus flujos de bienvenida y recuperación",
      "Klaviyo ofrece flujos para momentos como la suscripción, el abandono y la poscompra. Empieza por el recorrido que tenga una oportunidad clara y revisa sus condiciones antes de activarlo. Personaliza las plantillas para que describan tu oferta real.",
      "En una recuperación, comprueba los filtros para evitar recordatorios a quienes ya compraron. Revisa también los incentivos que recibe cada persona y conserva los controles de consentimiento y baja de tu configuración.",
      "## 4. El asunto y el contenido deben cumplir la misma promesa",
      "Si el asunto anuncia una guía, el email debe entregar esa guía. Si presenta una oferta, muestra sus condiciones con claridad. La urgencia solo tiene sentido cuando existe una fecha o disponibilidad real.",
      "Lee juntos el asunto, el texto de vista previa y la primera pantalla del mensaje. Deberían contar la misma historia sin obligar al cliente a buscar qué estás ofreciendo.",
      "## 5. La página de destino también forma parte de la campaña",
      "Envía a la ficha del producto o a una colección que coincida con el email. Comprueba precio, stock, variantes y entrega antes de enviar. Una diferencia entre el mensaje y la página puede interrumpir una compra que ya tenía intención.",
      "Haz el recorrido desde tu teléfono. Revisa la lectura del email, el tamaño del botón y los pasos para comprar. Si necesitas ampliar la pantalla o volver atrás varias veces, identifica qué puedes simplificar.",
      "## 6. Prueba una variable cada vez",
      "Las pruebas A/B de Klaviyo permiten comparar versiones de una campaña. Elige una pregunta concreta: qué asunto resulta más relevante, qué argumento genera más interés o qué horario encaja mejor con la audiencia.",
      "Mantén el resto lo más parecido posible y decide de antemano qué resultado evaluarás. Una diferencia pequeña con pocos destinatarios no basta para una conclusión firme. Guarda lo aprendido para la siguiente campaña.",
      "## 7. Busca pedidos útiles, no solo aperturas",
      "Relaciona clics y pedidos con la oferta, el segmento y el margen. Revisa también las bajas. Un envío que vende hoy a costa de una mala experiencia repetida puede perjudicar campañas futuras.",
      "Si tu lista contiene perfiles sospechosos, revisa su calidad antes de interpretar los resultados. Bot Cleaner puede ayudarte a encontrar señales para revisión, mientras tú sigues decidiendo la estrategia de tus campañas.",
      "## Una mejora para tu próximo envío",
      "Elige una campaña y comprueba su promesa, su audiencia y su página de destino. Anota qué cambiarás y cómo lo medirás. Esa rutina te dará más información útil que copiar una fórmula sin probarla en tu negocio.",
    ],
    cta: { product: "botcleaner", title: "Una audiencia más clara para tus próximas campañas", description: "Bot Cleaner te ayuda a revisar perfiles sospechosos de Klaviyo con señales explicables. Instálalo en Shopify para comenzar con una auditoría inicial gratuita.", label: "Probar Bot Cleaner" },
  },
  {
    id: "sell-more-on-shopify",
    title: "Cómo vender más en Shopify: mejoras para tu tienda y un marketing más constante",
    category: "Crecimiento en Shopify",
    excerpt: "Mejora las fichas de producto, reduce dudas al comprar y organiza tu marketing. Conoce Less Time Marketing y únete a la lista de espera para obtener tu primer mes gratis.",
    imageAlt: "Comerciante revisando un paquete junto a un portátil y cajas de pedidos",
    keywords: ["cómo vender más en Shopify", "mejorar tienda Shopify", "Less Time Marketing", "marketing redes sociales Shopify"],
    content: [
      "Conseguir más visitas puede ayudar, pero primero conviene revisar qué ocurre cuando alguien llega a tu tienda. ¿Entiende el producto? ¿Confía en la entrega? ¿Encuentra una razón para comprar? El crecimiento requiere cuidar tanto la tienda como la forma de atraer y acompañar al cliente.",
      "Empieza por el punto donde ves más dudas o abandono y comprueba el efecto con tus datos. Una sola herramienta no resuelve todo, pero un plan de mejoras te ayuda a decidir dónde dedicar tu tiempo.",
      "## Las fichas de producto deben responder preguntas de compra",
      "Muestra qué incluye el producto, sus medidas o variantes y para quién resulta útil. Combina fotos claras con explicaciones concretas. Si vendes ropa, detalla el ajuste. Si vendes un accesorio, explica su compatibilidad y cómo se utiliza.",
      "Añade reseñas auténticas cuando las tengas y deja visibles las políticas que ayuden a decidir. Una buena descripción reduce incertidumbre. Revisa primero las preguntas que más recibe tu soporte.",
      "## El costo y la entrega deben quedar claros a tiempo",
      "Explica los gastos de envío y los plazos antes del último paso. Comprueba que las condiciones de devolución se entiendan y que los métodos de pago encajen con tu mercado.",
      "Prueba la compra desde el móvil. Busca campos innecesarios, botones difíciles de encontrar o variantes confusas. Si alguien abandona el carrito, considera qué duda quedó sin resolver antes de ofrecer un descuento.",
      "## Las ofertas deben tener sentido para el cliente y para tu margen",
      "Destaca una selección útil de productos y explica por qué combinan. Puedes proponer un complemento compatible o una solución para una ocasión concreta. Comprueba que el precio y los costos de la oferta dejen un margen razonable.",
      "La fecha límite, el stock y las reseñas deben ser reales. La confianza forma parte de la experiencia de compra y merece el mismo cuidado que el diseño de una promoción.",
      "## El marketing necesita continuidad y una idea clara",
      "Publicar solo cuando tienes tiempo hace más difícil mantener un mensaje coherente. Prepara un calendario con demostraciones, respuestas a preguntas y usos del producto. Cada contenido debe ayudar a entender algo o proponer una acción concreta.",
      "Organiza una campaña alrededor de un producto y una necesidad, en lugar de empezar desde cero cada día. Revisa qué visitas y pedidos aporta, y ajusta el siguiente periodo. La constancia es más útil cuando el contenido tiene una dirección.",
      "## Estamos creando SD: Less Time Marketing para ayudarte con ese trabajo",
      "Less Time Marketing es una app de ShopiDeck en desarrollo para preparar campañas de redes sociales adaptadas a tu marca y a tus productos. El flujo previsto te permitirá definir la audiencia y el tono, elegir productos y un periodo, y revisar el contenido antes de aprobar su publicación.",
      "La idea es ayudarte a planificar semanas o meses de contenido sin dedicar el mismo esfuerzo manual a cada publicación. Queremos que puedas explicar mejor lo que vendes y mantener una comunicación constante mientras atiendes tu tienda.",
      "Las funciones e integraciones finales se confirmarán al lanzamiento. La herramienta busca ahorrar trabajo de planificación y creación, pero las ventas seguirán dependiendo de tu oferta, tu audiencia y la experiencia de compra.",
      "## Únete a la lista de espera y obtén tu primer mes gratis",
      "Si te interesa Less Time Marketing, puedes inscribirte en nuestra lista de espera. Quienes se unan recibirán su primer mes de uso gratis cuando la app esté disponible. Es una invitación para conocer la herramienta con tu propia tienda desde el lanzamiento.",
      "Usa el botón al final del artículo para dejar tus datos en el formulario de acceso anticipado. La inscripción no instala la app ni inicia una suscripción. Te contactaremos con las novedades y las instrucciones para activar tu mes gratuito.",
      "## Qué puedes mejorar hoy",
      "Elige una ficha y responde las dudas que aún no resuelve. Revisa el recorrido de compra desde el teléfono y prepara una pequeña campaña con un mensaje claro. Mientras construimos Less Time Marketing, esas mejoras te ayudarán a preparar una base más sólida.",
    ],
    cta: { product: "less-time-marketing", title: "Tu primer mes de Less Time Marketing, gratis", description: "Únete a la lista de espera y recibe tu primer mes de uso gratis cuando lancemos la app. Inscribirte no instala la herramienta ni inicia una suscripción.", label: "Unirme a la lista de espera" },
  },
];

const articlesEN: ArticleCopy[] = [
  {
    id: "save-money-klaviyo-marketing",
    title: "5 ways to save money on your Klaviyo marketing campaigns",
    category: "Marketing efficiency",
    excerpt: "Reduce unnecessary sends, review your list quality, and protect promotional margins with five changes you can start making today.",
    imageAlt: "A laptop and calculator on a desk for reviewing a marketing budget",
    keywords: ["save money on Klaviyo", "reduce email marketing costs", "Klaviyo campaigns", "Klaviyo list hygiene"],
    content: [
      "Saving money on Klaviyo starts with understanding where your budget goes. It might be contacts who never engage, overlapping campaigns, or discounts that bring orders but leave little margin. Spend your resources on messages that have a clear reason to reach each person.",
      "These five strategies help you review your operation while keeping your store's marketing moving. Start with your account data and compare similar periods before deciding what to change.",
      "## 1. Review the profiles taking up space in your list",
      "Separate suspicious profiles from customers who simply buy infrequently. An unusual address or months without activity do not prove that someone is a bot. Review the signup source, available data, and behavior before acting.",
      "SD: Klaviyo Bot Cleaner audits existing profiles and explains the risk signals it finds. You select profiles and confirm which ones to suppress. Suppression prevents marketing sends without permanently deleting the profile.",
      "The free initial audit gives you aggregate findings before you choose a paid plan. Cleanup may reduce unnecessary activity, but a lower invoice depends on your plan and billing thresholds. Any savings displayed are estimates.",
      "## 2. Match sending frequency to audience interest",
      "Distinguish recent subscribers from people who have not interacted for some time. Use clicks and purchases, alongside your store's context, to decide who should receive a campaign and how often. Opens alone do not tell the whole story.",
      "For example, send an accessory campaign first to people who bought the compatible product. Check whether the resulting orders justify the sending volume before expanding your reach.",
      "## 3. Keep campaigns and automations from piling up",
      "A subscriber might enter a welcome flow and also receive your weekly promotion. Review the full calendar, exclusions, and flow rules so customers do not get repeated or conflicting messages.",
      "Smart Sending can limit messages within a time window. Check its configuration for each send: skipped messages are not automatically rescheduled, and each channel has its own window. Use it to support a considered schedule.",
      "## 4. Calculate the cost of your discounts",
      "Before launching a coupon, consider product margin, shipping you cover, and other variable costs. A promotion can increase sales while leaving less money available to the business.",
      "Try reasons to buy that do not depend on price: a useful guide, a product comparison, or an answer to a common question. If you offer an incentive, define who it is for and review the margin on the resulting order.",
      "## 5. Measure the whole campaign result",
      "Record the audience, sends, clicks, orders, and discounts used. Add an estimate of margin so you can compare campaigns with more context than attributed revenue. Keep measurement criteria consistent.",
      "Choose one improvement at a time: profile review, sending frequency, or an offer. Changing everything at once makes it difficult to understand what helped. Repeat what contributes value and reduce what consumes budget without a clear contribution.",
      "## Your next step",
      "Review one audience, your sending calendar, and a recent promotion this week. If you suspect low-quality records, start by understanding them with Bot Cleaner and confirm suppressions only after reviewing the signals.",
    ],
    cta: { product: "botcleaner", title: "Which profiles are taking up space in your list?", description: "Start with Bot Cleaner's free initial audit. Review findings and decide whether you need a plan for detailed profile review and confirmed suppression.", label: "Install Bot Cleaner" },
  },
  {
    id: "sell-more-with-klaviyo",
    title: "How to sell more with Klaviyo: 7 ways to turn emails into orders",
    category: "Email marketing",
    excerpt: "A clear offer, relevant messages, and better landing pages can help turn subscriber interest into purchases.",
    imageAlt: "A person working on a laptop to prepare an email marketing campaign",
    keywords: ["sell more with Klaviyo", "Shopify email marketing", "improve email conversions", "Klaviyo flows"],
    content: [
      "An email can get clicks without bringing purchases. The offer might not fit the person, the landing page might fail to explain the email's promise, or a question might stop the customer at checkout. Selling more with Klaviyo means reviewing the whole journey.",
      "These seven improvements are starting points to test. Results depend on your audience, products, and buying experience. Compare each change with your own data.",
      "## 1. Give each email a reason to buy",
      "Before designing, write down what you are selling, who it helps, and why it deserves attention now. A new product might solve a specific need. A restock might matter to someone who already uses it. Make that reason clear.",
      "Avoid putting your entire catalog into a campaign without a priority. Explain one main benefit and offer an easy next step. A specific call to action is easier to follow than several competing buttons.",
      "## 2. Match the message to the customer's situation",
      "A new subscriber needs to understand your brand. A returning customer might appreciate care instructions or a compatible accessory. Use available data to adapt content without assuming preferences you do not know.",
      "Offer a size guide to someone considering a first purchase and care advice to someone who already received the product. Relevance comes from the customer's need, rather than simply adding their name to a subject line.",
      "## 3. Review your welcome and recovery flows",
      "Klaviyo offers flows for moments such as signup, abandonment, and post-purchase. Start with a journey that presents a clear opportunity and review its conditions before turning it on. Customize templates to describe your real offer.",
      "For recovery, check filters to avoid reminders to people who already bought. Review the incentives each person receives, and keep the consent and unsubscribe controls appropriate to your setup.",
      "## 4. Keep the subject and content aligned",
      "If the subject promises a guide, deliver that guide. If it announces an offer, explain the terms clearly. Urgency only makes sense when there is a real deadline or availability limit.",
      "Read the subject, preview text, and first screen together. They should tell the same story without making customers search for what you are offering.",
      "## 5. Treat the landing page as part of the campaign",
      "Send people to the product page or collection that matches the email. Check price, stock, variants, and delivery before sending. A mismatch between the message and page can interrupt a purchase that already had intent.",
      "Try the journey on your phone. Check readability, button size, and checkout steps. If you need to zoom in or keep going back, identify what you can simplify.",
      "## 6. Test one variable at a time",
      "Klaviyo's campaign A/B tests let you compare variations. Choose a specific question: which subject is more relevant, which argument creates more interest, or which sending time suits the audience.",
      "Keep everything else as similar as possible and decide in advance what outcome matters. A small difference with few recipients is not enough for a firm conclusion. Record what you learn for the next campaign.",
      "## 7. Look for useful orders, beyond opens",
      "Connect clicks and orders with the offer, segment, and margin. Review unsubscribes too. A send that sells today at the cost of a repeatedly poor experience can hurt future campaigns.",
      "If your list contains suspicious profiles, review its quality before interpreting results. Bot Cleaner can surface signals for review while you keep deciding your campaign strategy.",
      "## One improvement for your next send",
      "Choose a campaign and check its promise, audience, and landing page. Write down what you will change and how you will measure it. That routine provides more useful information than copying an untested formula.",
    ],
    cta: { product: "botcleaner", title: "A clearer audience for your next campaigns", description: "Bot Cleaner helps you review suspicious Klaviyo profiles with explainable signals. Install it on Shopify to start with a free initial audit.", label: "Try Bot Cleaner" },
  },
  {
    id: "sell-more-on-shopify",
    title: "How to sell more on Shopify: a better store and more consistent marketing",
    category: "Shopify growth",
    excerpt: "Improve product pages, answer buying questions, and organize your marketing. Discover Less Time Marketing and join the waitlist for your first month free.",
    imageAlt: "A merchant checking a package beside a laptop and shipping boxes",
    keywords: ["how to sell more on Shopify", "improve Shopify store", "Less Time Marketing", "Shopify social media marketing"],
    content: [
      "More visitors can help, but first review what happens when someone reaches your store. Do they understand the product? Do they trust the delivery? Can they find a reason to buy? Growth requires attention both to the store and to how you attract and support customers.",
      "Start where you see the most questions or abandonment, and measure the effect using your own data. A single tool will not handle everything, but a plan helps you decide where to spend your time.",
      "## Product pages should answer buying questions",
      "Show what is included, the product's dimensions or variants, and who it suits. Combine clear photos with specific explanations. For clothing, explain the fit. For an accessory, explain compatibility and how to use it.",
      "Include authentic reviews when you have them and make useful policies visible. A good description reduces uncertainty. Start with the questions your support team receives most often.",
      "## Explain costs and delivery early",
      "Explain shipping costs and timing before the final step. Check that return terms are understandable and that payment methods suit your market.",
      "Test a purchase on mobile. Look for unnecessary fields, hard-to-find buttons, and confusing variants. If someone leaves a cart behind, consider what question remained unanswered before offering a discount.",
      "## Offers should work for the customer and your margin",
      "Highlight a useful selection and explain why products belong together. Suggest a compatible accessory or a solution for a specific occasion. Check that the price and costs leave a reasonable margin.",
      "Deadlines, stock claims, and reviews should be real. Trust is part of the buying experience and deserves the same attention as the design of a promotion.",
      "## Marketing needs consistency and a clear idea",
      "Posting only when you find spare time makes it harder to keep a consistent message. Prepare a calendar with demonstrations, answers to questions, and product use cases. Each piece should explain something useful or suggest a clear next step.",
      "Instead of starting from scratch every day, organize a campaign around one product and need. Review the visits and orders it brings, then adjust the next period. Consistency is more useful when content has a direction.",
      "## We are building SD: Less Time Marketing to help with that work",
      "Less Time Marketing is a ShopiDeck app in development for preparing social campaigns tailored to your brand and products. The planned workflow lets you define your audience and tone, choose products and a period, and review content before approving publication.",
      "The idea is to help you plan weeks or months of content without repeating the same manual effort for every post. We want to make it easier to explain what you sell and keep communicating while you run your store.",
      "Final features and integrations will be confirmed at launch. The tool aims to reduce planning and creation work, while sales will still depend on your offer, audience, and buying experience.",
      "## Join the waitlist for your first month free",
      "If you are interested in Less Time Marketing, join our waitlist. People who sign up will receive their first month of use free when the app becomes available. It is an invitation to explore the tool with your own store at launch.",
      "Use the button at the end of this article to leave your details in the early access form. Signing up does not install the app or start a subscription. We will contact you with availability updates and instructions to activate your free month.",
      "## What you can improve today",
      "Choose one product page and answer the questions it still leaves open. Review the buying journey on your phone and prepare a small campaign with a clear message. While we build Less Time Marketing, these improvements can give your next efforts a stronger foundation.",
    ],
    cta: { product: "less-time-marketing", title: "Your first month of Less Time Marketing, free", description: "Join the waitlist and get your first month of use free when we launch. Signing up does not install the app or start a subscription.", label: "Join the waitlist" },
  },
];

function buildPosts(articles: ArticleCopy[], locale: Locale): Post[] {
  return articles.map((article) => ({
    ...sharedArticles[article.id],
    ...article,
    date: locale === "es" ? "10 de octubre de 2026" : "October 10, 2026",
    publishedAt: "2026-10-10T12:00:00.000Z",
    readTime: `${Math.ceil(article.content.join(" ").split(/\s+/).length / 200)} ${locale === "es" ? "min de lectura" : "min read"}`,
    imageWidth: 1600,
    imageHeight: 1000,
    author: "ShopiDeck",
    authorRole: locale === "es" ? "Equipo de producto" : "Product team",
  }));
}
export const postsEN: Post[] = buildPosts(articlesEN, "en");
export const postsES: Post[] = buildPosts(articlesES, "es");
const postsByLocale = { en: postsEN, es: postsES };
export function getPosts(locale: string): Post[] {
  return postsByLocale[resolveLocale(locale)];
}
export function getPostBySlug(slug: string, locale: string): Post | undefined {
  return getPosts(locale).find((post) => post.id === slug);
}
