import { useSpaceships } from '../hooks/UseApi.js';

export const CustomHook = () => {
  const { spaceships } = useSpaceships('https://swapi.info/api/starships');

  return (
    <div className='custom-hook flex flex-col p-2 my-2 border-t'>
      <strong>Custom Hook</strong>
      <ul>
        {spaceships.map((ship, i) => (
          <li key={i}>{ship.name}</li>
        ))}
      </ul>
    </div>
  );
};
