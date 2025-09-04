export const UserProfile = ({ user }) => {
  return (
    <div className='user-profile flex flex-col p-2 my-2'>
      <strong>User Profile</strong>
      <div className='user-details flex flex-col my-2'>
        <img src={user.avatar} alt={user.username} className='h-40 w-40' />
        <span className='flex gap-1'>
          <strong>Username:</strong>
          {user.username}
        </span>
        <span className='flex gap-1'>
          <strong>Email:</strong>
          {user.email}
        </span>
        <span className='flex gap-1'>
          <strong>Location:</strong>
          {user.location}
        </span>
      </div>
    </div>
  );
};
