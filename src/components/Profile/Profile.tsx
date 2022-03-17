import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from '../Profile/Profile.module.scss';
import { Button } from '../UI/button/Button';
import { IUser } from '../../types/types';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ProfileForm } from '../profile-form/ProfileForm';

export const Profile: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<{ id: string }>();

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        'https://jsonplaceholder.typicode.com/users/' + params.id
      );
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const [readonly, setReadonly] = useState<any>('readOnly');
  const [buttonDisabled, setButtonDisabled] = useState<any>('disabled');

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setReadonly('');
    setButtonDisabled('');
  };

  return (
    <section className={styles.profile}>
      <h2 className={styles.profile__title}>Профиль пользоваетля</h2>
      <Button props={clickHandler}>Редактировать</Button>
      {user && (
        <ProfileForm
          user={user}
          readonly={readonly}
          buttonDisabled={buttonDisabled}
        />
      )}
    </section>
  );
};
