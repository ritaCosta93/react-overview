export const NumbersList = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className='numbers-list flex flex-row gap-1 p-2'>
      <strong>Numbers List:</strong>
      {numbers.map(number => (
        <ul key={number} className='list-none'>
          <li>{number}</li>
        </ul>
      ))}
    </div>
  );
};
