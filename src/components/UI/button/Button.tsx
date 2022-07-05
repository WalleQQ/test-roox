import React, {FC} from 'react';
import styles from '../button/Button.module.scss';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: FC<ButtonProps> = ({children, onClick}) => {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {children}
      </button>
    </>
  );
};
