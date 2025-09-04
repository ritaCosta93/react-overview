import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

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

      {spaceships.map((s, i) => (
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
            <strong>passengers:</strong>
            {s.passengers}
          </span>
        </div>
      ))}
      <ReactMarkdown>
        **Description**: This component is using **axios** to fetch data from an API and using the hook **useEffect** to fetch the data as soon as the component
        loads. Adding an empty array after the useEffect callback makes it load once only.
      </ReactMarkdown>
    </div>
  );
};
