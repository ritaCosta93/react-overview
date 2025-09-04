import { useState } from 'react';

import { ClickMe } from './components/ClickMe';
import { NumbersList } from './components/NumbersList';
import { Popup } from './components/Popup';
import { PrivateContent } from './components/PrivateContent';
import { Spaceships } from './components/Spaceships';
import { Starwars } from './components/Starwars';
import { ThemeSwitch } from './components/ThemeSwitch';
import { UpdateTodoList } from './components/UpdateTodoList';
import { UpdateUsername } from './components/UpdateUsername';
import { UserProfile } from './components/UserProfile';
import { UsersInfo } from './components/UsersInfo';

const App = () => {
  const [visible, setVisible] = useState(false);
  const user = {
    username: 'Galio',
    email: 'galio@testproject.com',
    location: 'Spain',
    avatar: './src/assets/avatar.jpg'
  };

  const login = true;
  return (
    <div className='app flex flex-col gap-2'>
      <NumbersList />
      <UsersInfo />
      <UserProfile user={user} />
      <PrivateContent login={login} />
      <ClickMe />
      <UpdateUsername />
      <UpdateTodoList />
      <div className='flex flex-col p-2 border-t gap-2'>
        <strong>Popup</strong>
        <button onClick={() => setVisible(true)} className='px-4 w-45 py-2 bg-blue-500 text-white rounded'>
          Show Popup
        </button>
        <Popup visible={visible} onClose={() => setVisible(false)} />
      </div>
      <ThemeSwitch />
      <Spaceships />
      <Starwars />
    </div>
  );
};

export default App;
