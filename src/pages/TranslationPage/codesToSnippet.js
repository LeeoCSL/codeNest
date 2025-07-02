export const codesToSnippet = [
    {
    text: 'translation_step_1',
    code: `yarn add i18next react-i18next`
},

{
    text: 'translation_step_2',
    code: `// pt.json
{
  "title": "Bem-vindo ao CodeNest",
  "dark_mode": "Modo Escuro"
}

// en.json
{
  "title": "Welcome to CodeNest",
  "dark_mode": "Dark Mode"
}
`
},

{
    text: 'translation_step_3',
    code: `import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import pt from './pt.json';
import en from './en.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en }
    },
    lng: localStorage.getItem('lang') || 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
`
},

{
    text: 'translation_step_4',
    code: `// No index.js
import './i18n';
`
},

{
    text: 'translation_step_5',
    code: `import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return <h1>{t('title')}</h1>;
}
`
},

{
    text: 'translation_step_6',
    code: `import i18n from 'i18next';

const mudarIdioma = (lang) => {
  i18n.changeLanguage(lang);
  localStorage.setItem('lang', lang);
};
`
}

]
