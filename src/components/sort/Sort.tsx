import React, { FC } from 'react';
import styles from '../sort/Sort.module.scss';
import { Button } from '../UI/button/Button';

interface SortProps {
  sortedUsersCity: any;
  sortedUsersCompany: any;
}

export const Sort: FC<SortProps> = ({
  sortedUsersCity,
  sortedUsersCompany,
}) => {
  return (
    <section className={styles.sort}>
      <h2 className={styles.sort__title}>Сортировка</h2>
      <Button props={sortedUsersCity}>по городу</Button>
      <Button props={sortedUsersCompany}>по компании</Button>
    </section>
  );
};
