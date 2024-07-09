import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css'; // Import the Dracula theme
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { EditorConfiguration } from 'codemirror';

// Import the JavaScript mode for CodeMirror
import 'codemirror/mode/javascript/javascript';

interface CodeMirrorComponentProps {
  content: string; // Content to display
}

const CodeMirrorComponent: React.FC<CodeMirrorComponentProps> = ({ content }) => {
  const options: EditorConfiguration = {
    mode: 'javascript', // Set the language mode to JavaScript
    theme: 'dracula', // Set the CodeMirror theme to Dracula
    lineNumbers: true, // Show line numbers
    readOnly: 'nocursor', // Make the editor read-only
  };

  return (
    <div className="w-full h-full">
      <CodeMirror
        value={content}
        options={options}
        className="text-base md:text-lg bg-white rounded-md shadow-md w-full h-full"
        onChange={(editor, data, value) => {
          // Read-only, so no change handling is needed
        }}
      />
    </div>
  );
};

export default CodeMirrorComponent;

