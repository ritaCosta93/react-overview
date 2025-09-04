import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Popup } from './components/Popup';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='app flex flex-col gap-4 p-4'>
      {/* Grid navigation */}
      <div className='grid grid-cols-5 gap-2'>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/numbers-list'>
          Numbers List
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/users-info'>
          Users Info
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/users-profile'>
          User Profile
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/private-content'>
          Private Content
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/click-me'>
          Click Me
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/theme-switch'>
          Theme Switch
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/update-username'>
          Update Username
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/update-todolist'>
          Update Todo List
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/spaceships'>
          Spaceships
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/starwars'>
          Starwars
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/products'>
          Products
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/do-not-re-render'>
          Do Not Re-render
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/corvettes'>
          Corvettes
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/custom-hook'>
          Custom Hook
        </Link>
        <Link className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs text-center' to='/use-id'>
          UseId Hook
        </Link>

        <button onClick={() => setVisible(true)} className='w-40 h-40 flex items-center justify-center bg-blue-500 text-white rounded text-xs'>
          Show Popup
        </button>

        <Popup visible={visible} onClose={() => setVisible(false)} />
      </div>

      {/* Content outlet */}
      <div className='p-2 border-t'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
