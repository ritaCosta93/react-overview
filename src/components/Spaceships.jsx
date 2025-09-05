import { useSpaceships } from '../hooks/UseSpaceships';
import { Description } from './Description';

export const Spaceships = () => {
  const { spaceships } = useSpaceships('https://swapi.info/api/starships');

  return (
    <div className='flex flex-col p-2 my-2 gap-2'>
      <strong>Spaceships</strong>

      <div className='grid grid-cols-3 gap-4'>
        {spaceships.map((s, i) => (
          <div key={i} className='p-4 border rounded shadow bg-white flex flex-col gap-2'>
            <span className='flex gap-2'>
              <strong>Name:</strong>
              {s.name}
            </span>
            <span className='flex gap-2'>
              <strong>Model:</strong>
              {s.model}
            </span>
            <span className='flex gap-2'>
              <strong>Passengers:</strong>
              {s.passengers}
            </span>
          </div>
        ))}
      </div>

      <Description text='This component is using the custom hook **useSpaceships** to fetch data from an API.' />
    </div>
  );
};
