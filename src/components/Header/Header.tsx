import React from 'react';
import { useNavigate } from 'react-router-dom';

import {BsRocketTakeoffFill, BsCart3} from 'react-icons/bs';

import { SearchBar } from 'components/SearchBar';
import styles from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}><BsRocketTakeoffFill/></div>
      <SearchBar />
      <div className={styles.cart} onClick={() => navigate("/cart")}><BsCart3 /></div>
    </div>
  )
}
