import './App.css';
import React from 'react';
import UserListSection from './components/UserListSection'

const userDB = [
  {
    id: 1,
    fname: 'Elon',
  },
  {
    id: 2,
    fname: 'Elen',
  },
  {
    id: 3,
    fname: 'Tim',
  },
  {
    id: 4,
    fname: 'Bob',
  },
  {
    id: 5,
    fname: 'Sasha',
  },
  {
    id: 6,
    fname: 'Rob',
  },
  {
    id: 7,
    fname: 'Alex',
  },
  {
    id: 8,
    fname: 'Rex',
  },
];

function App() {
  return (
    <>
      <UserListSection userDB={userDB}/>
    </>
  );
}

export default App;
