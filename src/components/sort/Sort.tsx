import React from 'react';
import styles from '../sort/Sort.module.scss';
import { Button } from '../UI/button/Button';

export const Sort = () => {
  return (
    <section className={styles.sort}>
      <h2 className={styles.sort__title}>Сортировка</h2>
      <Button>по городу</Button>
      <Button>по компании</Button>
    </section>
  );
};
