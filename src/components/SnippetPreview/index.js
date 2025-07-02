import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.text}33;
  border-radius: 8px;
  overflow-x: auto;
  padding: 16px;
  margin-top: 16px;
`;

const Title = styled.h3`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.text};
`;

export default function SnippetPreview({ code, language = 'jsx', title }) {
  return (
    <Wrapper>
      {title && <Title>{title}</Title>}
      <SyntaxHighlighter 
      language={language} 
      style={dracula} 
      wrapLines 
      wrapLongLines
      showLineNumbers={true}
      customStyle={{ borderRadius: '8px', padding: '16px' }}>
        {code}
      </SyntaxHighlighter>
    </Wrapper>
  );
}
