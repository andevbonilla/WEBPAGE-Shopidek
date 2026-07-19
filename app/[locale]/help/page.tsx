"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getFaqs } from "./faqData";
import es from "@/messages/es.json";
import en from "@/messages/en.json";

const dictionaries = { en, es };

import { 
  Search, 
  HelpCircle, 
  ArrowRight, 
  CheckCircle,
  Clock,
  AlertTriangle
} from "lucide-react";

export default function HelpCenterPage() {
  const params = useParams();
  const locale = (params?.locale as "en" | "es") || "en";
  const dict = dictionaries[locale].Help;

  const t = (key: string, values?: any) => {
    let text = (dict as any)[key] || "";
    if (values) {
      Object.keys(values).forEach((k) => {
        text = text.replace(`{${k}}`, values[k]);
      });
    }
    return text;
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(5);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    app: "general",
    subject: "",
    message: ""
  });

  // Load 30 questions from our separate database
  const allFaqs = getFaqs(locale);



  // Reactive filtering across 30 questions
  const filteredArticles = allFaqs.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFAQToggle = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  // anti-spam rate limiter: max 3 emails per 2 hours (7,200,000 ms)
  const checkRateLimit = (): boolean => {
    try {
      const storageKey = "hb_support_submissions";
      const now = Date.now();
      const raw = localStorage.getItem(storageKey);
      const timestamps: number[] = raw ? JSON.parse(raw) : [];
      
      const twoHoursAgo = now - 7200000;
      const activeTimestamps = timestamps.filter(ts => ts > twoHoursAgo);
      
      if (activeTimestamps.length >= 3) {
        return false; // Rate limit exceeded!
      }
      return true;
    } catch (e) {
      return true; // Fallback if localStorage is disabled
    }
  };

  const registerSubmission = () => {
    try {
      const storageKey = "hb_support_submissions";
      const now = Date.now();
      const raw = localStorage.getItem(storageKey);
      const timestamps: number[] = raw ? JSON.parse(raw) : [];
      const twoHoursAgo = now - 7200000;
      const activeTimestamps = timestamps.filter(ts => ts > twoHoursAgo);
      
      activeTimestamps.push(now);
      localStorage.setItem(storageKey, JSON.stringify(activeTimestamps));
    } catch (e) {
      // Ignore
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setIsSending(true);

    // 1. Check Rate Limit
    if (!checkRateLimit()) {
      setFormError(
        locale === "en" 
          ? "Rate Limit Exceeded: You can submit a maximum of 3 support tickets every 2 hours to prevent spam." 
          : "Límite de envíos excedido: Puedes enviar un máximo de 3 tickets de soporte cada 2 horas para prevenir spam."
      );
      setIsSending(false);
      return;
    }

    // 2. Strict Validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setFormError(locale === "en" ? "Please enter a valid email address." : "Por favor ingresa un correo electrónico válido.");
      setIsSending(false);
      return;
    }
    
    if (contactForm.name.trim().length < 2) {
      setFormError(locale === "en" ? "Name must be at least 2 characters." : "El nombre debe tener al menos 2 caracteres.");
      setIsSending(false);
      return;
    }

    if (contactForm.subject.trim().length < 4) {
      setFormError(locale === "en" ? "Subject must be at least 4 characters." : "El asunto debe tener al menos 4 caracteres.");
      setIsSending(false);
      return;
    }

    if (contactForm.message.trim().length < 10) {
      setFormError(locale === "en" ? "Message must be at least 10 characters." : "El mensaje debe tener al menos 10 caracteres.");
      setIsSending(false);
      return;
    }

    // 3. Forward securely to andresbonilla1256@gmail.com using Web3Forms
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "626887bd-8f4f-4d94-8255-7389c9e8305c", // Secure Access Key forwarding to your target inbox
          name: contactForm.name,
          email: contactForm.email,
          from_name: "ShopiDeck Support",
          subject: `[ShopiDeck Support] ${contactForm.subject}`,
          message: `Application: ${contactForm.app}\n\nClient Message:\n${contactForm.message}`,
          to_email: "andresbonilla1256@gmail.com"
        })
      });

      if (response.ok) {
        // Register token timestamp for spam blocking
        registerSubmission();
        setFormSubmitted(true);
        setContactForm({
          name: "",
          email: "",
          app: "general",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("API submit error");
      }
    } catch (err) {
      setFormError(
        locale === "en"
          ? "Failed to send message. Please contact us directly at andresbonilla1256@gmail.com."
          : "Error al enviar el mensaje. Por favor contáctanos directamente en andresbonilla1256@gmail.com."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <Navbar />

      {/* HERO / SEARCH SECTION */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-brand-bg to-brand-cream/60 overflow-hidden border-b border-brand-border">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full opacity-10 blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full opacity-10 blur-3xl -z-10"></div>

        <div className="layout-container text-center max-w-4xl mx-auto flex flex-col gap-6 items-center">
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl leading-[1.1] text-brand-main tracking-tight uppercase">
            {t("title")}
          </h1>
          <p className="text-sm md:text-base text-brand-secondary max-w-2xl font-light">
            {t("subtitle")}
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-2xl mt-4 relative transform hover:scale-[1.01] transition-transform">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-brand-muted w-5 h-5" />
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setActiveFAQ(null); // Reset active accordion index during search
                setVisibleCount(5); // Reset visible count on new search
              }}
              className="w-full bg-brand-card border border-brand-border p-4.5 pl-12 rounded-2xl text-sm focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25 shadow-premium text-brand-main font-medium"
            />
          </div>
        </div>
      </section>

      {/* POPULAR ARTICLES / SEARCH RESULTS */}
      <section id="articles-anchor" className="py-16 md:py-20 bg-brand-card border-y border-brand-border">
        <div className="layout-container max-w-4xl">
          <div className="text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10">
            <div>
              <h2 className="font-display font-black text-2xl text-brand-main tracking-tight uppercase">
                {searchQuery ? t("searchResults") : t("articlesTitle")}
              </h2>
              <p className="text-xs text-brand-secondary mt-1">
                {searchQuery 
                  ? t("foundResults", { count: filteredArticles.length, query: searchQuery })
                  : t("articlesDesc")
                }
              </p>
            </div>
            {!searchQuery && (
              <span className="text-[10px] bg-brand-warning text-brand-main font-bold px-3 py-1 rounded-full border border-brand-accent/20 self-start md:self-auto flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {t("updatedToday")}
              </span>
            )}
          </div>

          {filteredArticles.length > 0 ? (
            <div className="space-y-6">
              <div className="space-y-4">
                {filteredArticles.slice(0, visibleCount).map((article, index) => {
                  const isOpen = activeFAQ === index;
                  return (
                    <div 
                      key={article.id}
                      className="bg-brand-bg rounded-2xl border border-brand-border overflow-hidden transition-all duration-200"
                    >
                      <button
                        onClick={() => handleFAQToggle(index)}
                        className="w-full text-left p-6 flex justify-between items-center gap-4 font-bold text-brand-main hover:bg-brand-cream/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-brand-accent flex-shrink-0" />
                          <span className="text-sm md:text-base">{article.title}</span>
                        </div>
                        <span className={`text-xs px-2.5 py-0.5 rounded-md font-bold uppercase tracking-wider text-[8px] whitespace-nowrap bg-brand-card border border-brand-border/60 ${
                          article.category === "botcleaner" ? "text-yellow-700 bg-yellow-50 border-yellow-100" :
                          article.category === "cart-recovery" ? "text-indigo-700 bg-indigo-50 border-indigo-100" :
                          article.category === "review-booster" ? "text-emerald-700 bg-emerald-50 border-emerald-100" :
                          "text-brand-muted"
                        }`}>
                          {article.category === "getting-started" ? t("gettingStarted") : article.category}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="p-6 pt-0 border-t border-brand-border/60 text-xs md:text-sm text-brand-secondary leading-relaxed font-light bg-brand-card/50 animate-fadeIn">
                          <p className="mb-4 text-brand-main font-semibold italic">{article.excerpt}</p>
                          <div className="p-4 bg-brand-bg rounded-xl border border-brand-border/60 whitespace-pre-line text-brand-secondary leading-relaxed font-sans font-light">
                            {article.content}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {filteredArticles.length > visibleCount && (
                <div className="flex justify-center pt-4">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    className="bg-brand-accent hover:bg-brand-accent-hover text-brand-main text-xs px-6 py-3 rounded-xl font-bold border border-brand-main/15 shadow-soft transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {locale === "en" ? "See More" : "Ver más"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Custom Support Redirection on Zero Search Matches */
            <div className="bg-brand-bg rounded-2xl border border-brand-border p-12 text-center flex flex-col items-center gap-4">
              <AlertTriangle className="w-12 h-12 text-brand-accent-hover animate-bounce" />
              <h3 className="font-display font-bold text-base text-brand-main uppercase">{t("noResults")}</h3>
              <p className="text-xs text-brand-secondary max-w-md leading-relaxed font-light">
                {locale === "en"
                  ? "We couldn't find any articles matching your search terms. Don't worry! Scroll down or click below to submit a priority support ticket directly to our engineers."
                  : "No pudimos encontrar ningún artículo que coincida con tus términos de búsqueda. ¡No te preocupes! Desplázate hacia abajo o haz clic abajo para enviar un ticket de soporte prioritario directamente a nuestro equipo."}
              </p>
              <div className="flex gap-4 mt-2">
                <button 
                  onClick={() => setSearchQuery("")}
                  className="bg-brand-card hover:bg-zinc-50 text-brand-main text-xs px-4 py-2.5 rounded-xl font-bold border border-brand-border shadow-soft transition-colors"
                >
                  {t("viewAll")}
                </button>
                <a 
                  href="#contact-form-anchor"
                  className="bg-brand-accent hover:bg-brand-accent-hover text-brand-main text-xs px-4 py-2.5 rounded-xl font-bold border border-brand-main/15 shadow-soft transition-all"
                >
                  {locale === "en" ? "Contact Support" : "Contactar Soporte"}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SUPPORT TICKET FORM (RATE LIMITED & EMAIL FORWARDED TO ANDRESBONILLA1256@GMAIL.COM) */}
      <section id="contact-form-anchor" className="py-16 md:py-24 bg-brand-bg relative overflow-hidden">
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-brand-accent rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -top-16 -left-16 w-64 h-64 bg-indigo-300 rounded-full opacity-10 blur-2xl"></div>

        <div className="layout-container max-w-3xl relative z-10">
          <div className="bg-brand-card rounded-3xl border border-brand-border/60 shadow-premium p-8 md:p-12">
            
            {formSubmitted ? (
              <div className="text-center py-10 flex flex-col items-center gap-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-display font-black text-2xl text-brand-main tracking-tight uppercase">
                    {t("formSubmitted")}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-secondary mt-2 max-w-md mx-auto leading-relaxed font-light">
                    {locale === "en"
                      ? "Thank you for getting in touch! A copy of your support ticket has been forwarded to andresbonilla1256@gmail.com. Our typical engineer response time is under 12 hours."
                      : "¡Gracias por ponerte en contacto! Se ha enviado una copia de tu ticket de soporte a andresbonilla1256@gmail.com. Nuestro equipo responderá en un plazo máximo de 12 horas."}
                  </p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-brand-main hover:bg-brand-main/90 text-brand-bg px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-soft mt-4"
                >
                  {t("formSubmittedBtn")}
                </button>
              </div>
            ) : (
              <div>
                <div className="text-center max-w-xl mx-auto flex flex-col gap-3 mb-10">
                  <h2 className="font-display font-black text-2xl md:text-3xl text-brand-main tracking-tight uppercase">
                    {t("formTitle")}
                  </h2>
                  <p className="text-xs md:text-sm text-brand-secondary font-light">
                    {t("formDesc")}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Alert Error Box */}
                  {formError && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-xs text-red-600 font-medium flex items-start gap-2.5 animate-fadeIn">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-brand-main uppercase tracking-wider">
                        {t("fieldName")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={locale === "en" ? "e.g., Andrew Smith" : "Ej. Andrés Bonilla"}
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 text-brand-main font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-brand-main uppercase tracking-wider">
                        {t("fieldEmail")}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={locale === "en" ? "e.g., andrew@yourstore.com" : "Ej. andres@tutienda.com"}
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 text-brand-main font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-brand-main uppercase tracking-wider">
                        {t("fieldApp")}
                      </label>
                      <select
                        value={contactForm.app}
                        onChange={(e) => setContactForm({ ...contactForm, app: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-xs focus:outline-none focus:border-brand-accent text-brand-main font-semibold"
                      >
                        <option value="general">{t("general")}</option>
                        <option value="botcleaner">BotCleaner ({locale === "en" ? "Security & Data" : "Seguridad y Datos"})</option>
                        <option value="cart-recovery">Cart Recovery ({locale === "en" ? "Sales (Beta)" : "Ventas (Beta)"})</option>
                        <option value="review-booster">Review Booster ({locale === "en" ? "Social Proof (Beta)" : "Prueba Social (Beta)"})</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-[11px] font-bold text-brand-main uppercase tracking-wider">
                        {t("fieldSubject")}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={locale === "en" ? "e.g., Issue with Klaviyo integration" : "Ej. Problema con sincronización de Klaviyo"}
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                        className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 text-brand-main font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold text-brand-main uppercase tracking-wider">
                      {t("fieldMessage")}
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder={t("fieldMessagePlaceholder")}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-xs focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/20 text-brand-main font-medium leading-relaxed font-sans"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                    <div className="flex items-center gap-2.5 text-[11px] text-brand-muted font-medium self-start sm:self-auto">
                      <Clock className="w-4 h-4 text-brand-accent" />
                      <span>{t("guaranteed")}</span>
                    </div>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover disabled:bg-zinc-300 text-brand-main font-bold px-8 py-3.5 rounded-xl border border-brand-main/15 shadow-soft hover:-translate-y-0.5 transition-all duration-200 text-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSending ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-brand-main border-t-transparent rounded-full animate-spin"></span>
                          <span>{locale === "en" ? "Sending..." : "Enviando..."}</span>
                        </>
                      ) : (
                        <>
                          <span>{t("submit")}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
