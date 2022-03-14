import React, { FC } from 'react';
import { IUser } from '../../types/types';
import { UserItem } from '../user-item/UserItem';
import styles from '../users-list/UsersList.module.scss';

interface UsersListProps {
  users: IUser[];
}

export const UsersList: FC<UsersListProps> = ({ users }) => {
  return (
    <>
      <ul className={styles.userList}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};
