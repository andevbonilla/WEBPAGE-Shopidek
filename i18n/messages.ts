import en from "@/messages/en.json";
import es from "@/messages/es.json";

export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
type Messages = typeof en;

// Both catalogs must have the same shape. Missing translations fail the build.
const catalogs: Record<Locale, Messages> = { en, es };
export const localeInfo = {
  en: { openGraph: "en_US", alternateOpenGraph: "es_ES" },
  es: { openGraph: "es_ES", alternateOpenGraph: "en_US" },
} as const;

export function isLocale(value: unknown): value is Locale {
  return locales.some((locale) => locale === value);
}

export function resolveLocale(value: unknown): Locale {
  return isLocale(value) ? value : "en";
}

export function getMessages<N extends keyof Messages>(locale: Locale, namespace: N): Messages[N] {
  return catalogs[locale][namespace];
}

export function getTranslations<N extends keyof Messages>(locale: Locale, namespace: N) {
  const messages = getMessages(locale, namespace);
  return <K extends keyof Messages[N]>(key: K, values: Record<string, string | number> = {}) => {
    const message = messages[key];
    if (typeof message !== "string") throw new Error(`Translation ${String(namespace)}.${String(key)} is not a string`);
    return message.replace(/\{(\w+)\}/g, (match, name: string) => String(values[name] ?? match));
  };
}
