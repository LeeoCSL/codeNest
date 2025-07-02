export const codesToSnippet = [
    {
    text: 'snippets_step_1',
    code: `npm install react-syntax-highlighter`
},

{
    text: 'snippets_step_2',
    code: `// Exemplo com tema escuro
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';`
},

{
    text: 'snippets_step_3',
    code: `const codeString = \`
function saudacao(nome) {
  return 'Olá, ' + nome + '!';
}
\`;

<SyntaxHighlighter language="javascript" style={atomOneDark}>
  {codeString}
</SyntaxHighlighter>`
},

{
    text: 'snippets_step_4',
    code: `<SyntaxHighlighter
  language="javascript"
  style={atomOneDark}
  showLineNumbers
  wrapLongLines
  customStyle={{ borderRadius: '8px', padding: '16px' }}
>
  {codeString}
</SyntaxHighlighter>`
},

]
