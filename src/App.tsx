import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../src/globaCss.scss';
import {Profile} from './components/Profile/Profile';
import {Sort} from './components/sort/Sort';
import {Users} from './components/users/Users';
import {IUser} from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await axios.get<IUser[]>(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(response.data);
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  const sortedUsersCity = () => {
    const sortedData = [...users].sort((a, b) => {
      return a.address.city > b.address.city ? 1 : -1;
    });
    setUsers(sortedData);
  };

  const sortedUsersCompany = () => {
    const sortedData = [...users].sort((a, b) => {
      return a.company.name > b.company.name ? 1 : -1;
    });
    setUsers(sortedData);
  };

  const routes = (
    <Routes>
      <Route
        path='/test-roox'
        element={<Users error={error} loading={loading} users={users} />}
      />
      <Route path='/profile/:id' element={<Profile />} />
    </Routes>
  );

  return (
    <div className='App'>
      <Sort
        sortedUsersCity={sortedUsersCity}
        sortedUsersCompany={sortedUsersCompany}
      />
      <BrowserRouter>
        <div>{routes}</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
