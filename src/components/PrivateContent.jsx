export const PrivateContent = ({ login }) => {
  const handleContent = login => {
    return login ? 'If you are logged in you will see this.' : 'If you arent logged in you will see this.';
  };

  return (
    <div className='private-content flex flex-col border-t p-2 my-2'>
      <strong>Private Content</strong>
      <div>{handleContent(login)}</div>
    </div>
  );
};
