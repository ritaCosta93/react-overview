import { useState } from 'react';

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = newTheme => {
    setTheme(newTheme);
    const app = document.getElementById('root');
    if (!app) return;

    app.classList.remove('bg-white', 'bg-gray-800', 'bg-teal-500', 'text-white', 'text-black');

    switch (newTheme) {
      case 'mint':
        app.classList.add('bg-teal-500', 'text-white');
        break;
      case 'dark':
        app.classList.add('bg-gray-800', 'text-white');
        break;
      default:
        app.classList.add('bg-white', 'text-black');
        break;
    }
  };

  return (
    <div className='flex flex-col gap-2 p-2 border-t'>
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
    </div>
  );
};
