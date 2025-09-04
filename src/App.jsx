import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Popup } from './components/Popup';

// icons from react-icons
import {
  FaAdjust,
  FaBan,
  FaBoxOpen,
  FaCogs,
  FaIdCard,
  FaJediOrder,
  FaListOl,
  FaLock,
  FaMousePointer,
  FaRocket,
  FaTasks,
  FaUser,
  FaUserEdit,
  FaUserShield,
  FaWindowRestore
} from 'react-icons/fa';

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='app flex flex-col gap-4 p-4 content-center'>
      {/* Grid navigation */}
      <div className='grid grid-cols-5 gap-2'>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/numbers-list'>
          <FaListOl size={28} />
          Numbers List
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/users-info'>
          <FaUser size={28} />
          Users Info
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/users-profile'>
          <FaUserShield size={28} />
          User Profile
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/private-content'>
          <FaLock size={28} />
          Private Content
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/click-me'>
          <FaMousePointer size={28} />
          Click Me
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/theme-switch'>
          <FaAdjust size={28} />
          Theme Switch
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/update-username'>
          <FaUserEdit size={28} />
          Update Username
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/update-todolist'>
          <FaTasks size={28} />
          Update Todo List
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/spaceships'>
          <FaRocket size={28} />
          Spaceships
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/starwars'>
          <FaJediOrder size={28} />
          Starwars
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/products'>
          <FaBoxOpen size={28} />
          Products
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/do-not-re-render'>
          <FaBan size={28} />
          Do Not Re-render
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/corvettes'>
          <FaRocket size={28} />
          Corvettes
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/custom-hook'>
          <FaCogs size={28} />
          Custom Hook
        </Link>
        <Link className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2' to='/use-id'>
          <FaIdCard size={28} />
          UseId Hook
        </Link>

        <button onClick={() => setVisible(true)} className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm gap-2'>
          <FaWindowRestore size={28} />
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
