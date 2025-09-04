import axios from 'axios';
import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { CorvettesList } from './CorvettesList';
export const Data = createContext([]);
export const Starwars = () => {
  const [spaceships, setSpaceships] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.info/api/starships')
      .then(data => setSpaceships(data.data || []))
      .catch(err => console.error('Error fetching starships:', err));
  }, []);

  return (
    <div className='starwars flex flex-col my-2 p-2'>
      <Data.Provider value={spaceships}>
        <CorvettesList />
      </Data.Provider>
    </div>
  );
};
