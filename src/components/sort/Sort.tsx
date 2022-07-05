import React, {FC} from 'react';
import styles from '../sort/Sort.module.scss';
import {Button} from '../UI/button/Button';

interface SortProps {
  sortedUsersCity: () => void;
  sortedUsersCompany: () => void;
}

export const Sort: FC<SortProps> = ({sortedUsersCity, sortedUsersCompany}) => {
  return (
    <section className={styles.sort}>
      <h2 className={styles.sort__title}>Сортировка</h2>
      <Button onClick={sortedUsersCity}>по городу</Button>
      <Button onClick={sortedUsersCompany}>по компании</Button>
    </section>
  );
};
