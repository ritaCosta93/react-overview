export const UsersInfo = () => {
  const users = [
    {
      id: 1,
      username: 'Galio',
      email: 'galio@testproject.com',
      location: 'Spain'
    },
    { id: 2, username: 'Gaby', email: 'gaby@testproject.com', location: 'UK' }
  ];
  return (
    <div className='users-info flex flex-col gap-2 my-2 p-2  border-t'>
      <strong>Users Info</strong>
      {users.map(user => (
        <div key={user.id}>
          <span>
            <strong>Username:</strong> {user.username}
          </span>
          <br />
          <span>
            <strong>Email:</strong> {user.email}
          </span>
          <br />
          <span>
            <strong>Location:</strong> {user.location}
          </span>
          <br />
        </div>
      ))}
    </div>
  );
};
