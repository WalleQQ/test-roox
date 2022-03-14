import React, { FC } from 'react';
import styles from '../button/Button.module.scss';

interface ButtonProps {
  props: any;
}

export const Button: FC<ButtonProps> = ({ children, props }) => {
  return (
    <>
      <button onClick={props} className={styles.button}>
        {children}
      </button>
    </>
  );
};
