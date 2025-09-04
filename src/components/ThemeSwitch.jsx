import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export const ThemeSwitch = () => {
  const [_, setTheme] = useState('light');

  const handleThemeChange = newTheme => {
    setTheme(newTheme);
    const app = document.getElementById('root');
    if (!app) return;

    app.classList.remove('bg-white', 'bg-gray-800', 'bg-teal-500', 'text-white', 'text-black');

    switch (newTheme) {
      case 'mint':
        app.classList.add('bg-teal-500', 'text-dark');
        break;
      case 'dark':
        app.classList.add('bg-gray-800', 'text-dark');
        break;
      default:
        app.classList.add('bg-white', 'text-black');
        break;
    }
  };

  return (
    <div className='flex flex-col gap-2 p-2'>
      <strong>Theme Switcher</strong>
      <div className='flex flex-row gap-2'>
        <button className='px-3 py-1 bg-teal-300 rounded' onClick={() => handleThemeChange('mint')}>
          Mint Theme
        </button>
        <button className='px-3 py-1 bg-gray-700 text-white rounded' onClick={() => handleThemeChange('dark')}>
          Dark Theme
        </button>
        <button className='px-3 py-1 bg-white border rounded' onClick={() => handleThemeChange('light')}>
          Light Theme
        </button>
      </div>
      <ReactMarkdown>
        **Description**: This component uses the **useState** hook and a **switch structure to change the app main CSS classes**, changing the app color theme,
        choosing from 3 themes that are set clicking on a button.
      </ReactMarkdown>
    </div>
  );
};
