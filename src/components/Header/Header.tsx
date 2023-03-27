import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import {BsRocketTakeoffFill, BsCart3} from 'react-icons/bs';

import { SearchBar } from 'components/SearchBar';
import styles from './Header.module.scss';
import { CartContext } from 'context/CartContext';

export const Header = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => navigate("/")}><BsRocketTakeoffFill/></div>
      <SearchBar />
      <div className={styles.cart} onClick={() => navigate("/cart")}><div className={styles.count}>{cart ? cart.length : 0 }</div><BsCart3 /></div>
    </div>
  )
}
