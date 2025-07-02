import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownWrapper,
  DropdownButton,
  DropdownMenu,
  Option
} from './styled';

const LANGUAGES = [
  { code: 'pt', label: 'PT', flag: '🇧🇷' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'es', label: 'ES', flag: 'es' }
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang = LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0];

  const handleSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setOpen(!open)}>
       {currentLang.label}
      </DropdownButton>
      {open && (
        <DropdownMenu>
          {LANGUAGES.map(lang => (
            <Option key={lang.code} onClick={() => handleSelect(lang.code)}>
              {lang.label}
            </Option>
          ))}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
}
