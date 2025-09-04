export const ClickMe = () => {
  const handleButtonClick = () => {
    alert("You've clicked on a button");
  };
  return (
    <div className='click-me flex flex-col p-2 '>
      <strong>Click Me</strong>
      <button
        className='button bg-neutral-100 hover:bg-pink-200 active:bg-pink-100 w-20 rounded hover:text-pink-500 hover:shadow-sm'
        onClick={handleButtonClick}
      >
        Click Me
      </button>
    </div>
  );
};
