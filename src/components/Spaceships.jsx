import { Description } from './Description';

import axios from 'axios';
import { useEffect, useState } from 'react';

export const Spaceships = () => {
  const [spaceships, setSpaceships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://swapi.info/api/starships')
      .then(({ data }) => {
        setSpaceships(data || []);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to load starships 🚨');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading spaceships...</p>;
  if (error) return <p>{error}</p>;

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

      <Description
        text='This component is using **axios** to fetch data from an API and using the hook **useEffect** to fetch the data as soon as the component
        loads. Adding an empty array after the useEffect callback makes it load once only.'
      />
    </div>
  );
};
