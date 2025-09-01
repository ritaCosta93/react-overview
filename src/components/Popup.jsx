import { createPortal } from 'react-dom';

export const Popup = ({ visible, onClose }) => {
  const popupRoot = document.getElementById('popup');
  if (!popupRoot || !visible) return null;

  return createPortal(
    <div
      className='fixed inset-0 flex items-center justify-center bg-black/30'
      onClick={onClose} // clicking backdrop closes
    >
      <div
        className='bg-white p-6 rounded-xl shadow-lg'
        onClick={e => e.stopPropagation()} // prevent backdrop click closing
      >
        <p>Popup content</p>
        <button className='mt-4 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-400' onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    popupRoot
  );
};
