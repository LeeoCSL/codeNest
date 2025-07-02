import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import DarkModePage from './pages/DarkModePage'
import TranslationPage from './pages/TranslationPage'
import SentryPage from './pages/SentryPage'
import SnippetsPage from './pages/SnippetsPage'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* {/* <Route path="/snippets" element={<Snippets />} /> */}
      <Route path="/docDarkMode" element={<DarkModePage />} />
      <Route path="/docTranslate" element={<TranslationPage />} />
      <Route path="/docSentry" element={<SentryPage />} />
      <Route path="/docSnippets" element={<SnippetsPage />} />
    </Routes>
  );
}