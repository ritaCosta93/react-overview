import { useContext } from 'react';
import { Data } from './Starwars';

export const CorvettesList = () => {
  const corvete = useContext(Data);

  return (
    <div className='corvettes-list flex flex-col p-2 '>
      <strong>Corvettes</strong>
      {corvete.map((s, i) =>
        s.starship_class === 'corvette' ? (
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
        ) : (
          ''
        )
      )}
    </div>
  );
};
