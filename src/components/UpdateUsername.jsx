import { useState } from 'react';

export const UpdateUsername = () => {
  const [username, setUsername] = useState('max');

  const handleSubmit = () => {
    alert(`The username has been updated to: ${username}`);
  };

  return (
    <div className='update-username flex flex-col border-t my-2 p-2'>
      <strong>Update username</strong>
      <span>Username: {username}</span>
      <form className='flex flex-col gap-2'>
        <div className='flex flex-row gap-2'>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' className='border border-pink-100' onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='flex flex-row'>
          <button type='button' className='bg-pink-200 rounded hover:bg-pink-500 p-2' onClick={handleSubmit}>
            Update Username
          </button>
        </div>
      </form>
    </div>
  );
};
