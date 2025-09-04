import ReactMarkdown from 'react-markdown';
import { useSpaceships } from '../hooks/UseSpaceships.js';
export const CustomHook = () => {
  const { spaceships } = useSpaceships('https://swapi.info/api/starships');

  return (
    <div className='custom-hook flex flex-col p-2 my-2'>
      <strong>Custom Hook</strong>
      <ul>
        {spaceships.map((ship, i) => (
          <li key={i}>{ship.name}</li>
        ))}
      </ul>
      <ReactMarkdown>
        **Description**: This component fetches data from an API using the call in a **custom hook** called useSpaceships. This hook lives in the hooks folder.
      </ReactMarkdown>
    </div>
  );
};
