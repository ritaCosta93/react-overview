import { useId } from 'react';

export const UseId = () => {
  const reactId = useId();
  return (
    <div className='use-id flex flex-col my-2 p-2 gap-2 border-t'>
      <strong>Use Id Hook on an input field</strong>
      <input type='text' className='border border-pink-500 w-50' id={reactId} />
    </div>
  );
};
