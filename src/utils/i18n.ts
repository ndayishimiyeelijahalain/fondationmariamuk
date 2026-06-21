import { useI18n } from '../i18n';

/**
 * Safe translation helper - returns fallback value if translation key is missing
 */
export function useSafeT() {
  const { t } = useI18n();
  
  const safeT = (key: string, defaultValue: string): string => {
    const keys = key.split('.');
    let value: any = t;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return defaultValue;
      }
    }
    
    return typeof value === 'string' ? value : defaultValue;
  };
  
  return safeT;
}

/**
 * Safe translation helper for use outside React components
 */
export function safeTranslation(t: any, key: string, defaultValue: string): string {
  const keys = key.split('.');
  let value: any = t;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return defaultValue;
    }
  }
  
  return typeof value === 'string' ? value : defaultValue;
}