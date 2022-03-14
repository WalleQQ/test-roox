import axios from 'axios';
import React, { FC, useEffect, useMemo, useState } from 'react';
import '../src/globaCss.scss';
import { Sort } from './components/sort/Sort';
import { Users } from './components/users/Users';
import { IUser } from './types/types';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

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

  const sortedUsersCity = (sort: any) => {
    users.sort((a, b) => (a.address.city > b.address.city ? 1 : -1));
    setSelectedSort(sort);
  };

  const sortedUsersCompany = (sort: any) => {
    users.sort((a, b) => (a.company.name > b.company.name ? 1 : -1));
    setSelectedSort(sort);
  };

  return (
    <div className='App'>
      <Sort
        sortedUsersCity={sortedUsersCity}
        sortedUsersCompany={sortedUsersCompany}
      />
      <Users error={error} loading={loading} users={users} />
    </div>
  );
}

export default App;
