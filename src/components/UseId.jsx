import { useId } from 'react';
import ReactMarkdown from 'react-markdown';

export const UseId = () => {
  const reactId = useId();
  return (
    <div className='use-id flex flex-col my-2 p-2 gap-2 '>
      <strong>Use Id Hook on an input field</strong>
      <input type='text' className='border border-pink-500 w-50' id={reactId} />
      <ReactMarkdown>**Description**: This component uses the **useId** hook to give a text input a React generated id.</ReactMarkdown>
    </div>
  );
};
