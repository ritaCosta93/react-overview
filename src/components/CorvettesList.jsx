import { useContext } from 'react';
import { Description } from './Description';

import { Data } from './Starwars';
export const CorvettesList = () => {
  const corvette = useContext(Data);
  if (!Array.isArray(corvette)) {
    return <div className='p-2 text-gray-500'>Loading corvettes...</div>;
  }

  const corvettesOnly = corvette.filter(s => s.starship_class === 'corvette');

  return (
    <div className='corvettes-list flex flex-col p-2'>
      <strong className=' my-2'>Corvettes ({corvettesOnly.length})</strong>
      {corvettesOnly.map((s, i) => (
        <div key={i} className='flex flex-col'>
          <span className='flex gap-2'>
            <strong>name:</strong>
            {s.name}
          </span>
          <span className='flex gap-2'>
            <strong>model:</strong>
            {s.model}
          </span>
          <span className='flex gap-2'>
            <strong>manufacturer:</strong>
            {s.manufacturer}
          </span>
        </div>
      ))}
      <div className='flex flex-row'>
        <Description
          text='This component consumes data from the **Context API**, and filters it before rendering, using the ternary operator. This component is
          a **Data Consumer**'
        />
      </div>
    </div>
  );
};
