import React from 'react';
import '../src/globaCss.scss';
import { Sort } from './components/sort/Sort';
import { Users } from './components/users/Users';

function App() {
  return (
    <div className='App'>
      <Sort />
      <Users />
    </div>
  );
}

export default App;
