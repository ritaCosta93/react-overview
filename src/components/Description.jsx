import { createPortal } from 'react-dom';
import ReactMarkdown from 'react-markdown';

export const Description = ({ text }) => {
  const descriptionRoot = document.getElementById('description');

  if (!descriptionRoot) return null; // safe guard

  return createPortal(
    <div className='component-description flex flex-col w-80% mx-5 my-4 p-2 bg-gray-100 rounded shadow'>
      <strong>Component Description</strong>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>,
    descriptionRoot
  );
};
