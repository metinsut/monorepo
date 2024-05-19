import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export enum SupportedLangs {
  TR = 'tr',
  EN = 'en',
}

export function initializeLanguage({
  languages: { tr, en },
  lang = SupportedLangs.TR,
  onLanguageChanged,
}: {
  languages: { tr: object; en: object };
  lang?: SupportedLangs;
  onLanguageChanged?(lang: SupportedLangs): void;
}) {
  i18n.use(initReactI18next).init({
    lng: lang,
    fallbackLng: SupportedLangs.EN,
    debug: true,
    resources: {
      tr: {
        translation: tr,
      },
      en: {
        translation: en,
      },
    },
  });

  if (onLanguageChanged) {
    i18n.on('languageChanged', onLanguageChanged);
  }
}

export function addFeatureLanguages(
  records: Record<SupportedLangs, Record<string, unknown>>,
  namespace = 'translation'
) {
  setTimeout(() => {
    Object.entries(records).forEach(([lang, json]) => {
      i18n.addResourceBundle(lang, namespace, json, true, true);
    });
  });
}

export function changeLanguage(lang?: SupportedLangs) {
  lang =
    lang ??
    (i18n.language === SupportedLangs.EN
      ? SupportedLangs.TR
      : SupportedLangs.EN);
  i18n.changeLanguage(lang);
}
