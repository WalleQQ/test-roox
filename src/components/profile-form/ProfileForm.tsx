import axios from 'axios';
import React, {FC, useState} from 'react';
import {IUser} from '../../types/types';
import styles from '../profile-form/ProfileForm.module.scss';
import {emailRegExp, telRegExp} from '../../utils/validation';

interface ProfileFormProps {
  user: IUser;
  readonly: boolean;
  buttonDisabled: boolean;
  setReadonly: React.Dispatch<React.SetStateAction<boolean>>;
  setButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfileForm: FC<ProfileFormProps> = ({
  user,
  readonly,
  buttonDisabled,
  setReadonly,
  setButtonDisabled,
}) => {
  const [userFormData, setFormData] = useState(user);
  async function sendUser() {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        userFormData
      );
      if (response) {
        console.log(JSON.stringify(response));
        setReadonly(true);
        setButtonDisabled(true);
      }
    } catch {
      console.error('');
    }
  }

  const handlerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendUser();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeTextAreaHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [isValidForm, setIsValidForm] = useState(true);

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'email':
        if (!emailRegExp.test(String(e.target.value).toLowerCase())) {
          setIsValidForm(false);
          e.target.className = styles.invalid;
        } else {
          setIsValidForm(true);
          e.target.className = '';
        }
        break;
      case 'phone':
        if (!telRegExp.test(String(e.target.value).toLowerCase())) {
          setIsValidForm(false);
          e.target.className = styles.invalid;
        } else {
          setIsValidForm(true);
          e.target.className = '';
        }
        break;
    }
  };

  return (
    <form className={styles.profile__form} onSubmit={handlerSubmit}>
      <div className={styles.profile__formWrapper}>
        <label>
          Name
          <input
            type='text'
            name='name'
            defaultValue={userFormData.name}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label>
          User name
          <input
            type='text'
            name='username'
            defaultValue={userFormData.username}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label>
          E-mail
          <input
            type='text'
            name='email'
            defaultValue={userFormData.email}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label>
          Street
          <input
            type='text'
            name='street'
            defaultValue={userFormData.address.street}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label>
          City
          <input
            type='text'
            name='city'
            defaultValue={userFormData.address.city}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label>
          Zipcode
          <input
            type='text'
            name='zipcode'
            defaultValue={userFormData.address.zipcode}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label>
          Phone
          <input
            type='tel'
            name='phone'
            defaultValue={userFormData.phone}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label>
          Website
          <input
            type='text'
            name='website'
            defaultValue={userFormData.website}
            onBlur={blurHandler}
            onChange={onChangeHandler}
            readOnly={readonly}
            required
          />
        </label>
        <label className={styles.profile__textareaLabel}>
          <textarea
            name='textarea'
            className={styles.profile__textarea}
            onChange={onChangeTextAreaHandler}
            readOnly={readonly}
          ></textarea>
        </label>
      </div>
      <input
        className={styles.profile__formButton}
        type='submit'
        value='Отправить'
        disabled={!isValidForm || buttonDisabled}
      />
    </form>
  );
};
