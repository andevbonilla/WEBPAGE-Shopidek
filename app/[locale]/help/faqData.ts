export interface FAQItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
}

export const faqEN: FAQItem[] = [
  {
    id: "1",
    category: "botcleaner",
    title: "How do I integrate BotCleaner with my Klaviyo account?",
    excerpt: "Sync your Klaviyo lists and flows in less than 2 minutes using your private API key securely.",
    content: "To sync BotCleaner with Klaviyo:\n1. Open the BotCleaner panel in your Shopify dashboard.\n2. Navigate to Settings > Integrations.\n3. Paste your Klaviyo Private API Key (generate this in Klaviyo under Settings > API Keys).\n4. Select the specific lists you want BotCleaner to keep clean.\nSuspicious profiles flagged by BotCleaner can be reviewed and suppressed manually in your dashboard, preventing bounces."
  },
  {
    id: "2",
    category: "getting-started",
    title: "Do the apps slow down my Shopify store's loading times?",
    excerpt: "Our performance standards guarantee that our tools do not affect your Google Lighthouse scores.",
    content: "No. All ShopiDeck applications are built using server-side webhook pipelines. All heavy validation processing occurs in background workers, completely isolated from your storefront. Frontend scripts load asynchronously via global CDNs, meaning your buyer page loads primary contents first, preserving a 100/100 Lighthouse score."
  },
  {
    id: "3",
    category: "botcleaner",
    title: "How does BotCleaner identify bot accounts?",
    excerpt: "We use global blacklists, heuristic username scans, and behavior markers.",
    content: "BotCleaner uses a triple-layered security verification engine:\n1. Global Blacklists: Real-time checks against a compiled database of 12,000+ temporary disposable domains.\n2. Heuristics: Scanning usernames for randomized characters (e.g., 'k89asdf1') or odd syntax patterns.\n3. Behavior: Scraping speed of checkout operations to flag automated headless browsers."
  },
  {
    id: "4",
    category: "botcleaner",
    title: "Will it block my real customers?",
    excerpt: "No. Our 'Review First' philosophy ensures legitimate buyers are never blocked.",
    content: "We never delete customer profiles or lock them out of shopping. By default, BotCleaner simply flags suspicious accounts with secure tags in Shopify. You can review them in a simple manual admin panel first. You have full control to approve or suppress each flagged profile directly from the dashboard."
  },
  {
    id: "5",
    category: "billing",
    title: "How does cleaning lists help my Klaviyo monthly billing?",
    excerpt: "Save hundreds of dollars by preventing spam accounts from bloating your Klaviyo subscription limits.",
    content: "Klaviyo plans bill you based on the total count of active subscriber profiles in your database. Automated checkout bots and fake email registrations can easily bloat your subscriber count by hundreds or thousands of fake contacts a month. By filtering these profiles out before they sync to Klaviyo, BotCleaner keeps your billing brackets clean and saves you from paying unnecessary fees."
  },
  {
    id: "6",
    category: "botcleaner",
    title: "How do I scan and review profiles?",
    excerpt: "Launch a manual scan from the dashboard and review flagged profiles in the logs table.",
    content: "To audit your list:\n1. Open BotCleaner inside your Shopify Admin.\n2. Click the 'Start Scan' button to let the app analyze your profiles.\n3. Navigate to the logs table to inspect the flagged accounts.\n4. Review the suspicion scores and click 'Suppress' to secure your list in Klaviyo."
  },
  {
    id: "7",
    category: "botcleaner",
    title: "Can I manually review flagged emails before they are archived?",
    excerpt: "Absolutely. The review dashboard displays flagged details and one-tap confirmations.",
    content: "Yes, this is our recommended setup. Go to the BotCleaner dashboard inside Shopify and select the 'Manual Review' tab. You'll see a complete logs array of tagged registrations. You can review their spam scores, check technical patterns, and choose to 'Approve' (which removes tags and syncs to Klaviyo) or 'Archive' (which keeps them out of your lists) in one tap."
  },
  {
    id: "8",
    category: "botcleaner",
    title: "What is a temporary disposable email address?",
    excerpt: "A short-lived throwaway inbox designed to self-destruct after use.",
    content: "Temporary disposable emails (e.g. from 10Minutemail, TempMail, Generator) are short-lived inboxes created by users to grab discount coupons or bypass registration forms without providing real details. These inboxes self-destruct within minutes to hours. If you send marketing emails to them later, they immediately cause hard bounces, destroying your sender domain reputation."
  },
  {
    id: "9",
    category: "botcleaner",
    title: "What is a heuristic sequence check?",
    excerpt: "An algorithm that scans usernames and formats to detect robotic patterns.",
    content: "Bots usually generate emails automatically using random character strings (e.g., 'z718a9q0@outlook.com') or machine-made formats. Heuristic analysis scans patterns of letters, digits, and character ratios to detect these synthetic, bot-made strings in milliseconds, flagging them with high spam scores even if they use standard email domains."
  },
  {
    id: "10",
    category: "getting-started",
    title: "How do I get my Klaviyo Private API key?",
    excerpt: "Generate it in your Klaviyo account under Settings > API Keys.",
    content: "To create an API key:\n1. Log into your Klaviyo Account.\n2. Click on your profile avatar in the bottom-left and select Settings.\n3. Navigate to the API Keys tab.\n4. Click 'Create Private API Key'.\n5. Select 'Custom Permissions' (or 'Full Access') and ensure 'Lists' and 'Profiles' have write access.\n6. Copy the private key and paste it securely into your BotCleaner dashboard."
  },
  {
    id: "11",
    category: "getting-started",
    title: "Is my store's customer data secure with ShopiDeck?",
    excerpt: "We protect all data using secure database encryption and native Shopify webhooks.",
    content: "Absolutely. ShopiDeck does not store your customers' private billing, credit card, or tracking details. We only process email domains, creation timestamps, and heuristic tags. All communication is conducted over highly secure, encrypted HTTPS channels, and our database employs enterprise-grade AES-256 encryption."
  },
  {
    id: "12",
    category: "getting-started",
    title: "Does BotCleaner require editing theme files or liquid code?",
    excerpt: "No. Integration is fully automated and runs server-side through background APIs.",
    content: "No liquid theme editing is required. BotCleaner operates entirely via Shopify webhooks and background server APIs. This means it integrates seamlessly with any standard or customized Shopify storefront, headless setup, or checkout layout without changing your source code or theme files."
  },
  {
    id: "13",
    category: "getting-started",
    title: "What is a checkout bot and why are they dangerous?",
    excerpt: "Automated bots that register accounts to hoarde inventory or run card-testing attacks.",
    content: "Checkout bots are automated scripts designed to target e-commerce checkouts. They hoard high-demand inventory, slow down storefront performance with traffic spikes, test stolen credit card details, and register hundreds of fake accounts. BotCleaner detects these automated registration spikes and blocks bot checkouts before they compromise your inventory or gateway."
  },
  {
    id: "14",
    category: "botcleaner",
    title: "Why are fake email registrations bad for my deliverability?",
    excerpt: "They increase bounce rates and trigger Gmail & Yahoo spam filters.",
    content: "Gmail, Yahoo, and other ISPs monitor your sender reputation closely. If your email bounce rates exceed 2% (due to sending messages to dead, temporary, or fake addresses), ISPs begin to assume you are sending SPAM. As a result, they route all your legitimate marketing emails—even to highly engaged buyers—straight into the junk folder, ruining your ROI."
  },
  {
    id: "15",
    category: "botcleaner",
    title: "Can I authenticate my sender domain using BotCleaner?",
    excerpt: "Our app provides clean lists, but domain records must be authenticated in your DNS.",
    content: "BotCleaner optimizes list hygiene, which is half of the deliverability equation. The other half is domain authentication. You must configure your SPF, DKIM, and DMARC records in your DNS provider (GoDaddy, Cloudflare, etc.) to match Klaviyo's recommended settings. Combined with BotCleaner, this ensures maximum deliverability."
  },
  {
    id: "16",
    category: "billing",
    title: "How do I change plans or cancel an app subscription?",
    excerpt: "All billing and subscription adjustments are managed directly through Shopify.",
    content: "ShopiDeck is fully integrated with Shopify Official Billing. Subscription adjustments are unified directly on your monthly Shopify invoice. To upgrade, downgrade, or cancel, go to the 'Plans' tab in the app dashboard. If you decide to uninstall the app, billing stops automatically and is prorated for your current cycle."
  },
  {
    id: "17",
    category: "billing",
    title: "Does BotCleaner support multiple Shopify store connections?",
    excerpt: "Each Shopify store requires a separate app installation to map tags accurately.",
    content: "Yes, you can run BotCleaner on multiple stores. However, since the app hooks into Shopify's native webhooks and tags customer databases individually, each storefront requires its own separate installation from the Shopify App Store. Billing for each store is processed independently via its respective Shopify invoice."
  },
  {
    id: "18",
    category: "botcleaner",
    title: "How often is the global temporary email database updated?",
    excerpt: "Our database is dynamically synced and updated every 24 hours.",
    content: "Our system is connected to multiple global domain registers and security databases. We update our disposable email blacklists every 24 hours to automatically include newly created temporary domain hosts, ensuring that your storefront is protected against even the newest throwaway email providers."
  },
  {
    id: "19",
    category: "botcleaner",
    title: "What should I do if a legitimate buyer gets flagged by accident?",
    excerpt: "Simply click 'Approve & Sync' in your manual dashboard to restore their status.",
    content: "Because BotCleaner uses a 'Review First' methodology, legitimate buyers are never deleted or blocked from checkout. If a real customer (perhaps with an unusual username sequence) gets flagged as suspicious, simply go to your dashboard, select their profile, and click 'Approve'. This immediately removes the tag and triggers the Klaviyo sync."
  },
  {
    id: "20",
    category: "billing",
    title: "What are the differences between the Free Audit, Starter, Growth, and Pro plans?",
    excerpt: "Select plans based on your monthly signup volumes.",
    content: "1. Free Audit ($0): Up to 1,000 profiles scanned. Aggregated counts, no suppression or table access.\n2. Starter ($9/mo): Up to 5,000 scanned profiles and 500 manual suppressions/mo.\n3. Growth ($19/mo): Up to 25,000 scanned profiles and 5,000 suppressions/mo.\n4. Pro ($49/mo): Up to 100,000 scanned profiles and 25,000 suppressions/mo."
  },
  {
    id: "21",
    category: "botcleaner",
    title: "Does BotCleaner protect checkout inventory from bot reservation attacks?",
    excerpt: "Yes, by flagging automated checkout attempts and preventing inventory locks.",
    content: "Spambots frequently add high-demand items to checkout carts and hold them, locking up your inventory and preventing real buyers from checking out. BotCleaner detects these rapid checkout reservation spikes, blocks automated bot checkouts, and immediately releases the inventory back to your active stock."
  },
  {
    id: "22",
    category: "botcleaner",
    title: "Can I export blocked and flagged email logs to a CSV?",
    excerpt: "Yes. CSV exports of detailed analysis histories are supported on the Pro plan.",
    content: "Absolutely. Pro plan users can easily export their complete security logs, including filtered emails, spam scores, risk levels, and timestamps, to a CSV file. Navigate to the Logs tab in your BotCleaner panel and click 'Export to CSV' to analyze your data offline."
  },
  {
    id: "23",
    category: "getting-started",
    title: "Is BotCleaner GDPR and CCPA compliant?",
    excerpt: "Yes. We process data strictly according to Shopify's official privacy API rules.",
    content: "ShopiDeck is fully GDPR and CCPA compliant. We only process data necessary for security checks, and we comply natively with Shopify's customer data privacy webhooks (including mandatory redaction requests). We never sell, lease, or distribute your store's customer database."
  },
  {
    id: "24",
    category: "botcleaner",
    title: "How does spam filtering improve Gmail and Yahoo deliverability?",
    excerpt: "It maintains a clean sender reputation by avoiding spam traps and hard bounces.",
    content: "In 2024, Gmail and Yahoo introduced strict sender requirements requiring bulk senders to keep spam complaint rates below 0.3% and bounce rates extremely low. By filtering out temporary domains and bot profiles that generate bounce loops and high spam reports, BotCleaner ensures you meet these deliverability standards perfectly."
  },
  {
    id: "25",
    category: "botcleaner",
    title: "What are the symptoms of a damaged sender reputation?",
    excerpt: "Spiking bounce rates, low open rates, and emails landing directly in SPAM.",
    content: "If your campaign open rates have dropped below 15%, your bounce rates are climbing above 2%, or your sales from email flows have sharply decreased, your domain sender reputation is likely damaged. This means ISPs have flagged your email domain and are routing your campaigns directly to the spam folder. List cleaning is the first step to recovery."
  },
  {
    id: "26",
    category: "getting-started",
    title: "Why are traditional Google reCAPTCHAs failing to stop bots?",
    excerpt: "Bots use headless browsers and cheap solver services to easily bypass them.",
    content: "Modern spambots bypass reCAPTCHAs by utilizing headless browsers that simulate human cursor movements, or by sending CAPTCHA challenges to automated solver farms in milliseconds behind the scenes. More importantly, CAPTCHAs add massive friction to real human buyers. BotCleaner works silently in the background with zero buyer friction."
  },
  {
    id: "27",
    category: "botcleaner",
    title: "Can I filter profiles by top-level domains?",
    excerpt: "Identify and review flagged profiles from specific country extensions in the logs.",
    content: "Yes. The dashboard logs table allows you to sort and search profiles by their email domains (such as .ru, .cn, .pl), making it easy to identify international spam patterns and suppress them manually with a single click."
  },
  {
    id: "28",
    category: "getting-started",
    title: "How do I contact customer support?",
    excerpt: "Submit a ticket in the Help Center form or email us at support@shopideck.com.",
    content: "We provide dedicated, personal technical support in English and Spanish. You can submit a support ticket using our contact form at the bottom of the Help Center, or send an email directly to support@shopideck.com. Our typical response time is less than 12 hours."
  },
  {
    id: "29",
    category: "billing",
    title: "What happens after my 7-day free trial ends?",
    excerpt: "You will be billed for your selected plan on your next Shopify invoice.",
    content: "If you select the Growth or Pro plan, you enjoy a 7-day fully functional free trial. If you do not uninstall the app or downgrade to the Free plan before the trial ends, Shopify will automatically activate your subscription and include the plan charge on your next monthly Shopify invoice."
  },
  {
    id: "30",
    category: "getting-started",
    title: "Does BotCleaner support custom checkout integrations on Shopify Plus?",
    excerpt: "Yes. The app works natively with Shopify Plus Custom Checkout pages.",
    content: "Absolutely. BotCleaner's server-side API integrates flawlessly with standard Shopify checkouts as well as customized checkouts on Shopify Plus. Because we hook into Shopify's core customer APIs in the backend rather than theme files, we protect customized flows without requiring custom programming."
  }
];

export const faqES: FAQItem[] = [
  {
    id: "1",
    category: "botcleaner",
    title: "¿Cómo integro BotCleaner con mi cuenta de Klaviyo?",
    excerpt: "Sincroniza tus listas y flujos de Klaviyo en menos de 2 minutos utilizando tu API key privada de forma segura.",
    content: "Para sincronizar BotCleaner con Klaviyo:\n1. Abre el panel de BotCleaner en tu dashboard de Shopify.\n2. Ve a Configuración > Integraciones.\n3. Pega tu API Key Privada de Klaviyo (genérala en tu cuenta de Klaviyo en Configuración > API Keys).\n4. Selecciona las listas que deseas que BotCleaner mantenga limpias.\nLos perfiles sospechosos identificados por la app se pueden revisar y suprimir manualmente en el dashboard, previniendo rebotes."
  },
  {
    id: "2",
    category: "getting-started",
    title: "¿Las aplicaciones ralentizan los tiempos de carga de mi tienda Shopify?",
    excerpt: "Nuestros estándares de rendimiento garantizan que nuestras herramientas no afecten tu velocidad.",
    content: "No. Todas las aplicaciones de ShopiDeck operan del lado del servidor. El procesamiento pesado de validación ocurre en segundo plano de forma aislada a tu tienda. Los scripts de visualización del frontend se cargan asíncronamente desde CDNs globales, lo que significa que el navegador del comprador cargará el contenido principal primero, manteniendo tu velocidad de carga perfecta."
  },
  {
    id: "3",
    category: "botcleaner",
    title: "¿Cómo identifica BotCleaner las cuentas de bots?",
    excerpt: "Utilizamos listas negras globales, análisis heurísticos y patrones de comportamiento.",
    content: "BotCleaner utiliza un motor de verificación en tres capas:\n1. Listas Negras Globales: Chequeos en tiempo real contra una base de datos activa de más de 12,000 dominios de correos temporales desechables.\n2. Heurística: Análisis del nombre de usuario para detectar caracteres aleatorios (como 'k89asdf1') o sintaxis sospechosa.\n3. Comportamiento: Registro de la velocidad de operaciones en checkout para detectar navegadores automatizados."
  },
  {
    id: "4",
    category: "botcleaner",
    title: "¿Bloquea a mis clientes reales?",
    excerpt: "No. Nuestra filosofía de 'Revisión Primero' asegura que ningún comprador legítimo sea afectado.",
    content: "Nunca borramos cuentas de clientes ni bloqueamos su proceso de compra. Por defecto, BotCleaner solo asigna etiquetas de advertencia en Shopify para que los revises manualmente. Tienes el control absoluto en el dashboard para revisar cada perfil y decidir si deseas suprimirlo o aprobarlo con un clic."
  },
  {
    id: "5",
    category: "billing",
    title: "¿Cómo ayuda limpiar las listas a mis costos mensuales de Klaviyo?",
    excerpt: "Ahorra dinero evitando que cuentas falsas inflen tus límites de suscripción en Klaviyo.",
    content: "Klaviyo te cobra según la cantidad de suscriptores activos en tu cuenta. Los registros masivos de bots y cuentas temporales pueden inflar tu base de datos de manera artificial en cientos de contactos al mes. Al filtrarlos antes de que se sincronicen, BotCleaner mantiene limpio tu conteo de leads, evitando que saltes a planes mensuales más caros."
  },
  {
    id: "6",
    category: "botcleaner",
    title: "¿Cómo realizo un escaneo y reviso los perfiles?",
    excerpt: "Inicia un escaneo manual desde el dashboard y revisa los perfiles marcados en la tabla de logs.",
    content: "Para auditar tu lista:\n1. Abre BotCleaner dentro de tu administrador de Shopify.\n2. Haz clic en el botón 'Start Scan' para que la app analice tus perfiles.\n3. Ve a la tabla de logs para inspeccionar las cuentas marcadas.\n4. Revisa los puntajes de sospecha y haz clic en 'Suprimir' para asegurar tu lista en Klaviyo."
  },
  {
    id: "7",
    category: "botcleaner",
    title: "¿Puedo revisar manualmente los correos marcados antes de archivarlos?",
    excerpt: "Por supuesto. El dashboard te muestra las razones del marcado y te permite aprobarlos en un clic.",
    content: "Sí, esta es la configuración recomendada. Accede al dashboard de BotCleaner dentro de tu panel de Shopify y haz clic en la pestaña de 'Revisión Manual'. Verás el listado de correos marcados con sus respectivos puntajes de riesgo. Puedes aprobarlos para quitarles la etiqueta y sincronizarlos, o archivarlos permanentemente."
  },
  {
    id: "8",
    category: "botcleaner",
    title: "¿Qué es un correo temporal desechable?",
    excerpt: "Un buzón de correo electrónico de corta duración diseñado para autodestruirse.",
    content: "Los correos temporales (como los de 10Minutemail o TempMail) son cuentas de usar y tirar creadas para obtener cupones o descargar recursos sin dar datos reales. Estos buzones expiran a los pocos minutos. Cuando les envías campañas de marketing más adelante, causan rebotes duros inmediatos, dañando tu reputación como remitente."
  },
  {
    id: "9",
    category: "botcleaner",
    title: "¿Qué es el escaneo de secuencias heurísticas?",
    excerpt: "Un algoritmo que detecta patrones tipográficos y robóticos al registrarse.",
    content: "Los spambots suelen generar nombres de usuario aleatorios (ej. 'z718a9q0@outlook.com') o basados en estructuras mecánicas. Nuestro motor heurístico analiza la proporción de letras, números y secuencias de teclado en milisegundos para detectar estas cadenas artificiales y asignarles un puntaje de riesgo preciso."
  },
  {
    id: "10",
    category: "getting-started",
    title: "¿Cómo consigo mi Klaviyo Private API Key?",
    excerpt: "Genérala en tu cuenta de Klaviyo bajo Configuración > API Keys.",
    content: "Para crear tu clave API:\n1. Inicia sesión en tu cuenta de Klaviyo.\n2. Haz clic en tu perfil en la esquina inferior izquierda y ve a Settings.\n3. Entra en la pestaña de API Keys.\n4. Haz clic en 'Create Private API Key'.\n5. Elige permisos personalizados (o acceso total) asegurando que 'Lists' y 'Profiles' tengan acceso de escritura.\n6. Copia la API key y pégala de forma segura en tu panel de BotCleaner."
  },
  {
    id: "11",
    category: "getting-started",
    title: "¿Es seguro el manejo de datos de mis clientes con ShopiDeck?",
    excerpt: "Protegemos tus datos mediante encriptación HTTPS y almacenamiento cifrado.",
    content: "Totalmente. ShopiDeck nunca almacena información privada de pagos, tarjetas de crédito o direcciones de tus clientes. Solo procesamos correos electrónicos, marcas de tiempo y etiquetas de seguridad. Toda la transferencia ocurre por HTTPS encriptado y las bases de datos cuentan con cifrado estándar AES-256."
  },
  {
    id: "12",
    category: "getting-started",
    title: "¿BotCleaner requiere modificar archivos de código o plantillas liquid?",
    excerpt: "No. Se integra de forma automatizada por APIs en segundo plano.",
    content: "No necesitas editar archivos liquid ni plantillas de tu tema. BotCleaner opera en segundo plano a través de webhooks nativos y APIs de Shopify. Por ello, se integra a la perfección con cualquier plantilla estándar, personalizada o checkout de Shopify Plus sin afectar tu código fuente."
  },
  {
    id: "13",
    category: "getting-started",
    title: "¿Qué es un bot de checkout y cuáles son sus peligros?",
    excerpt: "Bots automatizados que retienen tu inventario o hacen fraudes de pruebas de tarjetas.",
    content: "Los bots de checkout son scripts que realizan compras falsas de forma masiva. Agotan tu stock reteniéndolo en carritos fantasmas, realizan ataques de fraude probando tarjetas de crédito robadas y registran cientos de clientes falsos. BotCleaner detiene este comportamiento previniendo bloqueos de inventario."
  },
  {
    id: "14",
    category: "botcleaner",
    title: "¿Por qué los registros falsos dañan mi entregabilidad?",
    excerpt: "Aumentan las tasas de rebote y activan las carpetas de SPAM de Gmail y Yahoo.",
    content: "Los servidores de correo miden estrictamente tu reputación de envío. Si envías correos a cuentas muertas o temporales, tu tasa de rebote superará el 2%, lo que indica a Gmail o Yahoo que envías SPAM. En consecuencia, comenzarán a desviar todas tus campañas legítimas directamente a la carpeta de correo no deseado."
  },
  {
    id: "15",
    category: "botcleaner",
    title: "¿Puedo autenticar mi dominio de remitente con BotCleaner?",
    excerpt: "Limpiamos tus listas, pero la configuración DNS de tu dominio debe realizarse aparte.",
    content: "BotCleaner mantiene tu base de datos pura, pero debes realizar la autenticación técnica de tu dominio en tu proveedor de DNS (Cloudflare, GoDaddy, etc.) configurando los registros SPF, DKIM y DMARC sugeridos por Klaviyo. Ambos pasos en conjunto te garantizarán la máxima entregabilidad posible."
  },
  {
    id: "16",
    category: "billing",
    title: "¿Cómo gestiono mi suscripción o cambio de plan?",
    excerpt: "Toda la facturación y la gestión de planes se unifica directamente a través de Shopify.",
    content: "ShopiDeck está totalmente integrado en la facturación técnica de Shopify. Todos tus cargos mensuales se unifican directamente en tu factura de Shopify. Para realizar un cambio de plan o darte de baja, ve a la pestaña 'Planes' en el dashboard de la app. Si la desinstalas, el cobro se detiene prorrateado de forma inmediata."
  },
  {
    id: "17",
    category: "billing",
    title: "¿BotCleaner tiene soporte para múltiples tiendas Shopify?",
    excerpt: "Cada tienda requiere su propia instalación para gestionar las etiquetas de forma correcta.",
    content: "Sí, puedes utilizar BotCleaner en varias tiendas. No obstante, dado que la aplicación debe conectarse individualmente a la base de datos de clientes y webhooks de cada store, requerirás realizar una instalación independiente en cada una de ellas desde la Shopify App Store."
  },
  {
    id: "18",
    category: "botcleaner",
    title: "¿Con qué frecuencia se actualiza la lista global de correos temporales?",
    excerpt: "Nuestra lista de dominios temporales se actualiza automáticamente cada 24 horas.",
    content: "Nuestros servidores están sincronizados con registros internacionales de dominios y bases de datos de seguridad web. Actualizamos nuestras listas negras de correos temporales cada 24 horas para incluir nuevos dominios desechables y proteger tu checkout incluso contra los buzones de spam de reciente creación."
  },
  {
    id: "19",
    category: "botcleaner",
    title: "¿Qué hago si se marca por error a un cliente real como sospechoso?",
    excerpt: "Simplemente pulsa 'Aprobar y Sincronizar' en tu panel de revisión manual.",
    content: "Gracias a nuestro principio de 'Revisión Primero', tus clientes reales nunca serán eliminados ni bloqueados. Si un cliente legítimo es marcado debido a un nombre de usuario inusual, ve a la pestaña de Revisión en tu panel de Shopify, seleccionalo y haz clic en 'Aprobar'. Esto removerá la etiqueta y lo enviará a Klaviyo."
  },
  {
    id: "20",
    category: "billing",
    title: "¿Cuáles son las diferencias entre el plan Free Audit, Starter, Growth y Pro?",
    excerpt: "Elige tu plan según el volumen mensual de perfiles en tu base de datos.",
    content: "1. Free Audit ($0): Hasta 1,000 perfiles escaneados. Muestra conteos agregados sin supresión ni acceso a la tabla completa.\n2. Starter ($9/mes): Hasta 5,000 perfiles escaneados y 500 supresiones manuales al mes.\n3. Growth ($19/mes): Hasta 25,000 perfiles escaneados y 5,000 supresiones al mes.\n4. Pro ($49/mes): Hasta 100,000 perfiles escaneados y 25,000 supresiones al mes."
  },
  {
    id: "21",
    category: "botcleaner",
    title: "¿Protege BotCleaner el inventario de mi tienda frente a bots?",
    excerpt: "Sí, al impedir que compras automáticas bloqueen el inventario activo.",
    content: "Los spambots suelen añadir gran cantidad de productos al carrito para bloquear el inventario de las tiendas impidiendo compras reales. BotCleaner detecta la rapidez de estos checkouts falsos, impidiendo que completen registros y liberando el stock retenido de forma inmediata en tu inventario activo."
  },
  {
    id: "22",
    category: "botcleaner",
    title: "¿Puedo exportar el historial de logs y bloqueos a un archivo CSV?",
    excerpt: "Sí, la exportación de historiales a CSV está disponible en el plan Pro.",
    content: "Por supuesto. Los comerciantes en el plan Pro pueden exportar de forma sencilla todo el historial de seguridad de la app a un archivo CSV para análisis local. Simplemente ve a la pestaña de 'Logs' en el dashboard de BotCleaner dentro de tu Shopify y haz clic en el botón de 'Exportar a CSV'."
  },
  {
    id: "23",
    category: "getting-started",
    title: "¿Cumple BotCleaner con las normativas GDPR y CCPA?",
    excerpt: "Sí, procesamos datos de forma segura bajo las políticas de privacidad de Shopify.",
    content: "ShopiDeck cumple en su totalidad con GDPR y CCPA. Solo procesamos los datos necesarios para realizar validaciones de seguridad de correo y respondemos nativamente a las directivas de eliminación de datos de clientes de Shopify. Nunca vendemos ni distribuimos la base de datos de tu tienda."
  },
  {
    id: "24",
    category: "botcleaner",
    title: "¿Cómo mejora la entregabilidad en Gmail y Yahoo con la limpieza?",
    excerpt: "Evita caer en trampas de spam y rebotes masivos manteniendo una reputación sana.",
    content: "Gmail y Yahoo introdujeron reglas estrictas que obligan a los remitentes de volumen a mantener sus rebotes bajos y las quejas de spam por debajo del 0.3%. Al limpiar dominios falsos que generan rebotes y spam loops automáticos, BotCleaner te ayuda a mantenerte dentro de los límites de entregabilidad de forma perfecta."
  },
  {
    id: "25",
    category: "botcleaner",
    title: "¿Cuáles son los síntomas de una reputación de remitente dañada?",
    excerpt: "Tasas de apertura muy bajas, rebotes altos y correos directos a la carpeta de SPAM.",
    content: "Si tus tasas de apertura de campañas de correo han caído por debajo del 15%, tus rebotes superan el 2% o notas una caída drástica en las ventas generadas por tus flujos automáticos, es muy probable que tu reputación esté dañada. Esto significa que los ISPs envían tus campañas directamente a la carpeta de SPAM."
  },
  {
    id: "26",
    category: "getting-started",
    title: "¿Por qué los CAPTCHAs convencionales de Google fallan para detener bots?",
    excerpt: "Los bots usan navegadores sin cabeza y resolvedores automáticos de bajo costo.",
    content: "Los spambots de checkout modernos evaden CAPTCHAs emulando el movimiento del ratón o enviando los desafíos a granjas de resolución en milisegundos. Lo más grave es que los CAPTCHAs molestan a los compradores reales y bajan tu conversión de checkout. BotCleaner funciona silenciosamente en segundo plano sin fricción."
  },
  {
    id: "27",
    category: "botcleaner",
    title: "¿Puedo buscar perfiles con extensiones de dominio específicas?",
    excerpt: "Identifica y revisa perfiles marcados de extensiones de países específicos en tus logs.",
    content: "Sí. La tabla de logs del dashboard te permite ordenar y buscar perfiles por sus dominios de correo (como .ru, .cn, .pl), lo que facilita identificar patrones de spam internacional y suprimirlos manualmente con un solo clic."
  },
  {
    id: "28",
    category: "getting-started",
    title: "¿Cómo contacto al soporte técnico?",
    excerpt: "Envía un ticket en el formulario de la pestaña de Ayuda o escríbenos a support@shopideck.com.",
    content: "Ofrecemos asistencia personalizada en español e inglés. Puedes enviar una solicitud en el formulario de soporte al fondo de esta página de Ayuda o escribirnos por correo electrónico directamente a support@shopideck.com. Nuestro tiempo de respuesta habitual es de menos de 12 horas."
  },
  {
    id: "29",
    category: "billing",
    title: "¿Qué sucede al terminar mi prueba de 7 días gratis?",
    excerpt: "Se activará la facturación del plan seleccionado en tu siguiente recibo de Shopify.",
    content: "Si seleccionas los planes Crecimiento o Pro, disfrutarás de 7 días de prueba completamente gratis. Si no desinstalas la aplicación ni bajas al plan Básico (Gratuito) antes de terminar esos 7 días, Shopify activará tu suscripción e incluirá el cargo en tu siguiente factura de Shopify."
  },
  {
    id: "30",
    category: "getting-started",
    title: "¿Soporta BotCleaner integraciones de checkout personalizadas en Shopify Plus?",
    excerpt: "Sí. Nuestra app funciona nativamente en checkouts avanzados de Shopify Plus.",
    content: "¡Por supuesto! La infraestructura del lado del servidor de BotCleaner interactúa de forma nativa con los checkouts convencionales y también con páginas avanzadas de Shopify Plus. Al capturar las creaciones a nivel de base de datos de Shopify, aseguramos tu tienda sin requerir código a medida."
  }
];

export function getFaqs(locale: string): FAQItem[] {
  return locale === "es" ? faqES : faqEN;
}
