import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

import { translations, languages, Language } from './translations';

/**
 * Base translation type (FR is source of truth)
 */
export type TranslationSet = typeof translations.fr;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSet;
  languages: typeof languages;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'fr';

  try {
    const saved = localStorage.getItem('fondation-mariam-lang');
    const supported: Language[] = ['fr', 'en', 'rn', 'sw'];

    if (saved && supported.includes(saved as Language)) {
      return saved as Language;
    }

    const browserLang = navigator.language?.toLowerCase() || '';

    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('rn')) return 'rn';
    if (browserLang.startsWith('sw')) return 'sw';

    return 'fr';
  } catch {
    return 'fr';
  }
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('fondation-mariam-lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language] as TranslationSet;

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
}