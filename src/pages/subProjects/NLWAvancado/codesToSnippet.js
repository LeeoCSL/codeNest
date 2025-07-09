export const codesToSnippet = [
    {
    text: 'dark_mode_step_1',
    code: `export const lightTheme = {
  background: '#ffffff',
  text: '#111111',
  primary: '#007bff',
};

export const darkTheme = {
  background: '#121212',
  text: '#f5f5f5',
  primary: '#1e90ff',
};`
},

{
    text: 'dark_mode_step_2',
    code: `import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle\`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
\`;`
},

{
    text: 'dark_mode_step_3',
    code: `<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
  <GlobalStyle />
  {/* resto do app */}
</ThemeProvider>`
},

{
    text: 'dark_mode_step_4',
    code: `const [isDarkMode, setIsDarkMode] = useState(false);

useEffect(() => {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') setIsDarkMode(true);
}, []);

useEffect(() => {
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}, [isDarkMode]);`
},

{
    text: 'dark_mode_step_5',
    code: `<button onClick={() => setIsDarkMode(prev => !prev)}>
  {isDarkMode ? '☀️ Claro' : '🌙 Escuro'}
</button>`
}

]
