"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { AlertTriangle, ArrowRight, CheckCircle, Clock, HelpCircle, Search } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { getFaqs } from "./faqData";
import es from "@/messages/es.json";
import en from "@/messages/en.json";
import { PRIVACY_EMAIL, PRODUCT_NAME, SUPPORT_EMAIL } from "../../config";

const dictionaries = { en, es };
type Locale = "en" | "es";

export default function HelpCenterPage() {
  const params = useParams();
  const locale: Locale = params?.locale === "es" ? "es" : "en";
  const dict = dictionaries[locale].Help as Record<string, string>;
  const t = (key: string, values?: Record<string, string | number>) => {
    let value = dict[key] || "";
    Object.entries(values || {}).forEach(([keyName, replacement]) => {
      value = value.replace(`{${keyName}}`, String(replacement));
    });
    return value;
  };

  const allFaqs = getFaqs(locale);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    app: "general",
    subject: "",
    message: "",
  });

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return allFaqs;
    return allFaqs.filter((article) =>
      `${article.title} ${article.excerpt} ${article.content} ${article.category}`.toLowerCase().includes(query),
    );
  }, [allFaqs, searchQuery]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      setFormError(locale === "en" ? "Please enter a valid email address." : "Ingresa un email válido.");
      return;
    }
    if (contactForm.name.trim().length < 2 || contactForm.subject.trim().length < 4 || contactForm.message.trim().length < 10) {
      setFormError(locale === "en" ? "Please complete the name, subject, and message fields." : "Completa los campos de nombre, asunto y mensaje.");
      return;
    }

    const body = [
      `Name: ${contactForm.name}`,
      `Reply-to: ${contactForm.email}`,
      `Product: ${contactForm.app}`,
      "",
      contactForm.message,
      "",
      "Please do not send API keys, passwords, access tokens, or full customer lists.",
    ].join("\n");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(`[ShopiDeck] ${contactForm.subject}`)}&body=${encodeURIComponent(body)}`;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col font-sans">
      <Navbar />
      <main className="flex-1">
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-brand-bg to-brand-cream/60 border-b border-brand-border">
          <div className="layout-container max-w-4xl mx-auto text-center flex flex-col gap-6 items-center">
            <span className="rounded-full bg-brand-main text-brand-accent px-4 py-1.5 text-xs font-bold uppercase tracking-widest">{t("badge")}</span>
            <h1 className="font-display font-black text-3xl sm:text-5xl leading-tight tracking-tight">{t("title")}</h1>
            <p className="text-sm md:text-base text-brand-secondary max-w-2xl leading-relaxed">{t("subtitle")}</p>
            <div className="w-full max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted w-5 h-5" />
              <input
                type="search"
                aria-label={t("searchPlaceholder")}
                placeholder={t("searchPlaceholder")}
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setActiveFAQ(null);
                }}
                className="w-full bg-brand-card border border-brand-border p-4 pl-12 rounded-2xl text-sm focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25 shadow-soft"
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-card">
          <div className="layout-container max-w-5xl">
            <div className="mb-10">
              <p className="text-xs font-bold text-brand-muted uppercase tracking-widest">{t("articlesTitle")}</p>
              <h2 className="font-display font-black text-2xl md:text-3xl mt-3">{searchQuery ? t("searchResults") : t("categoriesTitle")}</h2>
              <p className="text-sm text-brand-secondary mt-3">{searchQuery ? t("foundResults", { count: filteredArticles.length, query: searchQuery }) : t("categoriesDesc")}</p>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="rounded-3xl border border-brand-border bg-brand-bg p-8 text-center">
                <h3 className="font-display font-black text-xl">{t("noResults")}</h3>
                <p className="text-sm text-brand-secondary mt-3">{t("noResultsDesc")}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredArticles.map((article) => {
                  const isOpen = activeFAQ === article.id;
                  return (
                    <article key={article.id} className="rounded-2xl border border-brand-border bg-brand-bg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setActiveFAQ(isOpen ? null : article.id)}
                        aria-expanded={isOpen}
                        className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 hover:bg-brand-cream/60 transition-colors"
                      >
                        <span className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-brand-accent-hover flex-shrink-0 mt-0.5" />
                          <span>
                            <span className="block font-bold text-brand-main">{article.title}</span>
                            <span className="block text-sm text-brand-secondary mt-1">{article.excerpt}</span>
                          </span>
                        </span>
                        <ArrowRight className={`w-5 h-5 text-brand-muted flex-shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`} />
                      </button>
                      {isOpen && <div className="border-t border-brand-border px-5 md:px-14 pb-6 pt-5 text-sm text-brand-secondary leading-relaxed whitespace-pre-line">{article.content}</div>}
                    </article>
                  );
                })}
              </div>
            )}
            <p className="text-xs text-brand-muted mt-6">{t("updatedToday")}</p>
          </div>
        </section>

        <section id="contact-form-anchor" className="py-16 md:py-24 bg-brand-bg border-t border-brand-border">
          <div className="layout-container max-w-3xl">
            <div className="bg-brand-card rounded-3xl border border-brand-border shadow-premium p-8 md:p-12">
              {formSubmitted ? (
                <div className="text-center py-8 flex flex-col items-center gap-5">
                  <CheckCircle className="w-12 h-12 text-emerald-600" />
                  <h2 className="font-display font-black text-2xl">{t("formSubmitted")}</h2>
                  <p className="text-sm text-brand-secondary max-w-md leading-relaxed">{t("formSubmittedDesc")}</p>
                  <button type="button" onClick={() => setFormSubmitted(false)} className="bg-brand-main text-brand-bg px-6 py-3 rounded-xl text-sm font-bold">{t("formSubmittedBtn")}</button>
                </div>
              ) : (
                <>
                  <div className="text-center max-w-xl mx-auto mb-10">
                    <h2 className="font-display font-black text-2xl md:text-3xl">{t("formTitle")}</h2>
                    <p className="text-sm text-brand-secondary mt-3 leading-relaxed">{t("formDesc")}</p>
                  </div>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {formError && <div role="alert" className="bg-red-50 border border-red-200 p-4 rounded-xl text-sm text-red-700 flex items-start gap-2"><AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />{formError}</div>}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="space-y-2"><span className="block text-xs font-bold uppercase tracking-wider">{t("fieldName")}</span><input required value={contactForm.name} onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })} className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-accent" /></label>
                      <label className="space-y-2"><span className="block text-xs font-bold uppercase tracking-wider">{t("fieldEmail")}</span><input required type="email" value={contactForm.email} onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })} className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-accent" /></label>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <label className="space-y-2"><span className="block text-xs font-bold uppercase tracking-wider">{t("fieldApp")}</span><select value={contactForm.app} onChange={(event) => setContactForm({ ...contactForm, app: event.target.value })} className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-accent"><option value="general">{t("general")}</option><option value="botcleaner">{PRODUCT_NAME}</option><option value="cart-recovery">Cart Recovery</option><option value="review-booster">Review Booster</option></select></label>
                      <label className="space-y-2"><span className="block text-xs font-bold uppercase tracking-wider">{t("fieldSubject")}</span><input required value={contactForm.subject} onChange={(event) => setContactForm({ ...contactForm, subject: event.target.value })} className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-accent" /></label>
                    </div>
                    <label className="space-y-2 block"><span className="block text-xs font-bold uppercase tracking-wider">{t("fieldMessage")}</span><textarea required rows={6} value={contactForm.message} placeholder={t("fieldMessagePlaceholder")} onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })} className="w-full bg-brand-bg border border-brand-border p-3.5 rounded-xl text-sm focus:outline-none focus:border-brand-accent" /></label>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2"><span className="flex items-center gap-2 text-xs text-brand-muted"><Clock className="w-4 h-4 text-brand-accent-hover" />{t("supportHours")}</span><button type="submit" className="w-full sm:w-auto bg-brand-accent hover:bg-brand-accent-hover text-brand-main font-bold px-7 py-3.5 rounded-xl border border-brand-main/15">{t("submit")}</button></div>
                    <p className="text-xs text-brand-muted border-t border-brand-border pt-4">{locale === "en" ? "Do not include API keys, passwords, access tokens, or full customer lists in this form. See " : "No incluyas API keys, contraseñas, tokens de acceso ni listas completas de clientes. Consulta "}<Link href="/privacy" className="underline hover:text-brand-main">{locale === "en" ? "our privacy policy" : "nuestra política de privacidad"}</Link>{locale === "en" ? ` or contact ${PRIVACY_EMAIL} for privacy questions.` : ` o escribe a ${PRIVACY_EMAIL} para preguntas de privacidad.`}</p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
