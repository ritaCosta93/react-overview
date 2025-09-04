import { useRef, useState } from 'react';
import { Description } from './Description';

export const DoNotRerender = () => {
  const inputRef = useRef(null);
  const [savedValue, setSavedValue] = useState('');

  const handleUpdate = () => {
    if (inputRef.current) {
      setSavedValue(inputRef.current.value);
    }
  };

  return (
    <div className='do-not-refresh flex flex-col my-2 p-2'>
      <strong>Do Not Rerender</strong>
      <p>Saved value: {savedValue}</p>
      <input type='text' ref={inputRef} className='w-30 border border-pink-500' />
      <button className='w-40 rounded border border-pink-500 bg-pink-500 hover:bg-pink-200 mt-2' type='button' onClick={handleUpdate}>
        Update Value to state
      </button>
      <Description text='This component uses the **useRef** hook on a text input to update a state without re-rendering the component.' />
    </div>
  );
};
