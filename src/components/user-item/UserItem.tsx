import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/types';
import { Profile } from '../Profile/Profile';
import styles from '../user-item/UserItem.module.scss';

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <li className={styles.userItem}>
      <div>
        <ul>
          <li className={styles.userItem__heading}>ФИО:</li>
          <li>{user.name}</li>
        </ul>
        <ul>
          <li className={styles.userItem__heading}>город:</li>
          <li>{user.address.city}</li>
        </ul>
        <ul>
          <li className={styles.userItem__heading}>компания:</li>
          <li>{user.company.name}</li>
        </ul>
      </div>
      <Link to={`/profile/${user.id}`}>Подробнее</Link>
    </li>
  );
};
