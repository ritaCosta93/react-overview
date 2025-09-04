import ReactMarkdown from 'react-markdown';

export const PrivateContent = ({ login }) => {
  const handleContent = login => {
    return login ? 'If you are logged in you will see this.' : 'If you arent logged in you will see this.';
  };

  return (
    <div className='private-content flex flex-col p-2 my-2'>
      <strong>Private Content</strong>
      <div>{handleContent(login)}</div>
      <ReactMarkdown>
        **Description**: Handles **conditional rendering**, depending on the value of a prop received from the parent component. Used the ternary operator
        instead of an if statement to render the content.
      </ReactMarkdown>
    </div>
  );
};
