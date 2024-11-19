export const parsePrompt = (prompt) => {
    const lowerPrompt = prompt.toLowerCase();
  
    if (lowerPrompt.includes('button')) {
      return {
        type: 'button',
        text: prompt.match(/button (.*)/)?.[1] || 'Click Me',
        options: {
          color: prompt.match(/color: (\w+)/)?.[1],
          textColor: prompt.match(/text color: (\w+)/)?.[1],
          borderRadius: prompt.match(/border radius: (\d+px)/)?.[1],
          padding: prompt.match(/padding: (\d+px)/)?.[1],
        },
      };
    }
  
    if (lowerPrompt.includes('card')) {
      return {
        type: 'card',
        text: prompt.match(/card title: (.*)/)?.[1] || 'Card Title',
        options: {
          description: prompt.match(/description: (.*)/)?.[1],
          backgroundColor: prompt.match(/background color: (\w+)/)?.[1],
          borderColor: prompt.match(/border color: (\w+)/)?.[1],
          borderRadius: prompt.match(/border radius: (\d+px)/)?.[1],
        },
      };
    }
  
    return { type: 'unknown' };
  };
  