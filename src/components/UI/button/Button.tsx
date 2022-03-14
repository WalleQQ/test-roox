import React, { Children, FC } from 'react';
import styles from '../button/Button.module.scss';

export const Button: FC = ({ children }) => {
  return (
    <>
      <button className={styles.button}>{children}</button>
    </>
  );
};
