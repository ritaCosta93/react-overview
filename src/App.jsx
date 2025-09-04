import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Popup } from './components/Popup';
const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='app flex flex-col gap-4 p-4'>
      <nav className='flex gap-2 flex-wrap'>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/numbers-list'>
          NumbersList
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/users-info'>
          UsersInfo
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/users-profile'>
          UserProfile
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/private-content'>
          PrivateContent
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/click-me'>
          ClickMe
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/theme-switch'>
          Theme Switch
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/update-username'>
          UpdateUsername
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/update-todolist'>
          UpdateTodoList
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/spaceships'>
          Spaceships
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/starwars'>
          Starwars
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/products'>
          Products
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/do-not-re-render'>
          DoNotRerender
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/custom-hook'>
          CustomHook
        </Link>
        <Link className='px-2 py-1 bg-blue-500 text-white rounded' to='/use-id'>
          UseId
        </Link>
        <button onClick={() => setVisible(true)} className='px-4 w-45 py-2 bg-blue-500 text-white rounded'>
          Show Popup
        </button>

        <Popup visible={visible} onClose={() => setVisible(false)} />
      </nav>

      <div className='p-2 border-t'>
        <Outlet />
      </div>
    </div>
  );
};

export default App;
