import App from './App';
import { ClickMe } from './components/ClickMe';
import { CustomHook } from './components/CustomHook';
import { DoNotRerender } from './components/DoNotRerender';
import { NumbersList } from './components/NumbersList';
import { PrivateContent } from './components/PrivateContent';
import { Products } from './components/Products';
import { Spaceships } from './components/Spaceships';
import { Starwars } from './components/Starwars';
import { ThemeSwitch } from './components/ThemeSwitch';
import { UpdateTodoList } from './components/UpdateTodoList';
import { UpdateUsername } from './components/UpdateUsername';
import { UseId } from './components/UseId';
import { UserProfile } from './components/UserProfile';
import { UsersInfo } from './components/UsersInfo';
const user = {
  username: 'Galio',
  email: 'galio@testproject.com',
  location: 'Spain',
  avatar: './src/assets/avatar.jpg'
};
const login = true;

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'numbers-list', element: <NumbersList /> },
      { path: 'users-info', element: <UsersInfo /> },
      { path: 'users-profile', element: <UserProfile user={user} /> },
      { path: 'private-content', element: <PrivateContent login={login} /> },
      { path: 'click-me', element: <ClickMe /> },
      { path: 'theme-switch', element: <ThemeSwitch /> },
      { path: 'update-username', element: <UpdateUsername /> },
      { path: 'update-todolist', element: <UpdateTodoList /> },
      { path: 'spaceships', element: <Spaceships /> },
      { path: 'starwars', element: <Starwars /> },
      { path: 'products', element: <Products /> },
      { path: 'do-not-re-render', element: <DoNotRerender /> },
      { path: 'custom-hook', element: <CustomHook /> },
      { path: 'use-id', element: <UseId /> }
    ]
  }
];
