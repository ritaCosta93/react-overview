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
    <div className='flex flex-col border-t p-2 my-2 gap-2'>
      <strong>Spaceships</strong>
      <ul>
        {spaceships.map((s, i) => (
          <div key={i} className='flex flex-col my-2 border-t'>
            <span>
              <strong>name:</strong>
              {s.name}
            </span>
            <span>
              <strong>model:</strong>
              {s.model}
            </span>
            <span>
              <strong>passengers:</strong>
              {s.passengers}
            </span>
          </div>
        ))}
      </ul>
    </div>
  );
};
