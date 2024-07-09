import React from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactMarkdown from 'react-markdown';
// Extend SyntaxHighlighterProps to include language and children
interface CodeBlockProps extends SyntaxHighlighterProps {
  language: string;
  children: React.ReactNode;
}

// CodeBlock component
const CodeBlock: React.FC<CodeBlockProps> = ({ language, children, ...props }) => {
  return (
    <SyntaxHighlighter
      style={atomDark as unknown as { [key: string]: React.CSSProperties }}
      language={language} // Pass the language prop
      PreTag="pre" // Specify the tag for preformatted text
      className="rounded-md overflow-x-auto max-w-4xl text-[0.6rem] sm:text-sm md:text-base lg:text-base xl:text-base w-full max-h-full p-5"
      {...props}  // Spread any additional props
    >
      {String(children).replace(/\n$/, '')} // Render children with a line break removed
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
