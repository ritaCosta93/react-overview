import ReactMarkdown from 'react-markdown';
export const NumbersList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='numbers-list flex flex-col gap-1 p-2'>
      <strong>Numbers List:</strong>
      <ul className='list-none'>
        {numbers.map(number => (
          <li key={number}>{number}</li>
        ))}
      </ul>
      <div className='flex flex-row'>
        <ReactMarkdown>**Desription**: Goes through an array and **map the values to a list**</ReactMarkdown>
      </div>
    </div>
  );
};
