'use client'
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";


export default function SyntaxCode({ code, language }) {
    return (
      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        customStyle={{
          flex: "1",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    );
  }
  
