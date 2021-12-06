import React from 'react';

function User({ user }) {
  return <div>{user.username}</div>;
}
function UserList() {
  const users = [
    {
      id: 1,
      username: 'a',
      email: 'k@naver.com',
    },
    {
      id: 2,
      username: 'b',
      email: 'd@naver.com',
    },
    {
      id: 3,
      username: 'c',
      email: 'r@naver.com',
    },
  ];

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
