'use client'
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark, vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";


export default function SyntaxCode({ code, language}) {
  const design = language === 'javascript' ? vs2015 : atomOneDark;
    return (
      <SyntaxHighlighter
        language={language}
        style={design}
        customStyle={{
          flex: "1",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    );
  }
  
