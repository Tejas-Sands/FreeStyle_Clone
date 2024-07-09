import React from 'react';
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Adjust CodeBlockProps to match SyntaxHighlighter's children prop type
interface CodeBlockProps extends Omit<SyntaxHighlighterProps, 'children'> {
  language: string;
  children: string; // Ensure children is a string
}

// Define the CodeBlock component
const CodeBlock: React.FC<CodeBlockProps> = ({ language, children, ...props }) => {
  return (
    <SyntaxHighlighter
      style={atomDark as unknown as { [key: string]: React.CSSProperties }} // Type assertion for styles
      language={language}
      PreTag="pre"
      className="rounded-md overflow-x-auto max-w-4xl text-[0.6rem] sm:text-sm md:text-base lg:text-base xl:text-base w-full max-h-full p-5"
      {...props} // Spread any additional props
    >
      {children} // Render children directly
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
