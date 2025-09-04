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
    <div className='app flex flex-col gap-4 p-2 content-center'>
      <div className='flex flex-row justify-center border-b border-gray-200 py-4'>
        <h1 className='text-2xl font-bold '>React.js - Mega Overview</h1>
      </div>
      {/* Grid navigation */}
      <div className='justify-center flex'>
        <div className='grid grid-cols-4 gap-2 my-4 bg-gray-200 p-4 rounded drop-shadow'>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/numbers-list'
          >
            <FaListOl size={28} />
            Numbers List
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/users-info'
          >
            <FaUser size={28} />
            Users Info
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/users-profile'
          >
            <FaUserShield size={28} />
            User Profile
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/private-content'
          >
            <FaLock size={28} />
            Private Content
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/click-me'
          >
            <FaMousePointer size={28} />
            Click Me
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/theme-switch'
          >
            <FaAdjust size={28} />
            Theme Switch
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/update-username'
          >
            <FaUserEdit size={28} />
            Update Username
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/update-todolist'
          >
            <FaTasks size={28} />
            Update Todo List
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/spaceships'
          >
            <FaRocket size={28} />
            Spaceships
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/starwars'
          >
            <FaJediOrder size={28} />
            Starwars
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/products'
          >
            <FaBoxOpen size={28} />
            Products
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/do-not-re-render'
          >
            <FaBan size={28} />
            Do Not Re-render
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/corvettes'
          >
            <FaRocket size={28} />
            Corvettes
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/custom-hook'
          >
            <FaCogs size={28} />
            Custom Hook
          </Link>
          <Link
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm text-center gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
            to='/use-id'
          >
            <FaIdCard size={28} />
            UseId Hook
          </Link>

          <button
            onClick={() => setVisible(true)}
            className='w-40 h-40 flex flex-col items-center justify-center bg-blue-500 text-white rounded text-sm gap-2 hover:shadow-lg shadow-indigo-500/50 hover:text-black'
          >
            <FaWindowRestore size={28} />
            Show Popup
          </button>

          <Popup visible={visible} onClose={() => setVisible(false)} />
        </div>
      </div>

      {/* Content outlet */}
      <div className='p-2 border rounded bg-gray-200'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
