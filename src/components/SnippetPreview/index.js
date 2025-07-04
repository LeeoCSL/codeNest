import { Card, Typography } from 'antd';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'styled-components';
const { Title } = Typography;

export default function SnippetPreview({ code, language = 'jsx', title }) {
  return (
    <Card
      style={{
        background: '#1e1e2f',
        borderRadius: 12,
        overflowX: 'auto',
        marginTop: 16,
      }}
      bodyStyle={{
        padding: 16,
      }}
    >
      {title && (
        <Title level={5} style={{ color: '#fff', marginBottom: 16 }}>
          {title}
        </Title>
      )}

      <div style={{ overflowX: 'auto' }}>
        <SyntaxHighlighter
          language={language}
          style={dracula}
          wrapLongLines
          showLineNumbers
          customStyle={{
            borderRadius: '8px',
            padding: '16px',
            minWidth: '300px', // pra não colapsar no mobile
            fontSize: '0.85rem',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </Card>
  );
}
