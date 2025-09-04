import axios from 'axios';
import { createContext } from 'react';
import { useEffect, useState } from 'react';
import { CorvettesList } from './CorvettesList';

export const Data = createContext();

export const Starwars = () => {
  const [spaceships, setSpaceships] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.info/api/starships')
      .then(({ data }) => {
        setSpaceships(data || []);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        console.log('Loading spaceships...');
      });
  }, []);

  return (
    <div className='starwars flex flex-col border-t my-2 p2'>
      <Data.Provider value={spaceships}>
        <CorvettesList />
      </Data.Provider>
    </div>
  );
};
