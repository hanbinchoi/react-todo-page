import React, { useRef } from 'react';
import UserList from './UserList';
function App() {
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

  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current);
    nextId.current += 1;
  };

  return <UserList users={users}></UserList>;
}

export default App;
