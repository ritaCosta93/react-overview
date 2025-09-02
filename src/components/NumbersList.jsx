export const NumbersList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='numbers-list flex flex-row gap-1 p-2'>
      <strong>Numbers List:</strong>
      <ul className='list-none'>
        {numbers.map(number => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};
