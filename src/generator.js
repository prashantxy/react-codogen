import { parsePrompt } from './parser'; // Optional parser helper

export const generateReactComponent = (prompt) => {
  const { type, text, options } = parsePrompt(prompt);

  switch (type) {
    case 'button':
      return `
        import React from 'react';

        const GeneratedButton = () => (
          <button style={{
            padding: '${options.padding || '10px'}',
            backgroundColor: '${options.color || '#007bff'}',
            color: '${options.textColor || '#fff'}',
            borderRadius: '${options.borderRadius || '5px'}'
          }}>
            ${text || 'Click Me'}
          </button>
        );

        export default GeneratedButton;
      `;

    case 'card':
      return `
        import React from 'react';

        const GeneratedCard = () => (
          <div style={{
            border: '1px solid ${options.borderColor || '#ddd'}',
            padding: '${options.padding || '20px'}',
            borderRadius: '${options.borderRadius || '10px'}',
            backgroundColor: '${options.backgroundColor || '#fff'}'
          }}>
            <h2>${text || 'Card Title'}</h2>
            <p>${options.description || 'Card content goes here.'}</p>
          </div>
        );

        export default GeneratedCard;
      `;

    default:
      return `
        import React from 'react';

        const GeneratedComponent = () => (
          <div>
            <p>Unrecognized component type. Prompt: "${prompt}".</p>
          </div>
        );

        export default GeneratedComponent;
      `;
  }
};
