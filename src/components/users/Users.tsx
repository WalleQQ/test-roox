import React, { FC } from 'react';
import { IUser } from '../../types/types';
import { Loader } from '../UI/loader/Loader';
import { UsersList } from '../users-list/UsersList';
import styles from '../users/Users.module.scss';

interface UsersProps {
  users: IUser[];
  loading: boolean;
  error: boolean;
}

export const Users: FC<UsersProps> = ({ users, loading, error }) => {
  if (error) return <p>Произошло что-то ужасное...Попробуй снова</p>;
  return (
    <section className={styles.users}>
      <h2 className={styles.users__title}>Список пользователей</h2>
      {loading ? <Loader /> : <UsersList users={users} />}
    </section>
  );
};
