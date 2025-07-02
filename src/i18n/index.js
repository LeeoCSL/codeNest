import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// importa os arquivos de tradução
import pt from './pt.json';
import en from './en.json';
import es from './es.json';

// inicializa o i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    lng: localStorage.getItem('lang') || 'pt',            // idioma padrão inicial
    fallbackLng: 'pt',     // se faltar algo, cai pro pt
    interpolation: {
      escapeValue: false,  // segurança pra não escapar tags no React
    },
  });

export default i18n;
