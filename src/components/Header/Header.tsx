import React from 'react';

import {BsRocketTakeoffFill, BsCart3} from 'react-icons/bs';

import { SearchBar } from 'components/SearchBar';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}><BsRocketTakeoffFill/></div>
      <SearchBar />
      <div className={styles.cart}><BsCart3 /></div>
    </div>
  )
}
