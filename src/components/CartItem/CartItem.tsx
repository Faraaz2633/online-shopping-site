import React from "react";
import { CartType } from "types/types";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import styles from "./CartItem.module.scss";

type PropTypes = {
  product: CartType;
  increaseCart: (id: number) => void;
  decreaseCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const CartItem = ({
  product,
  increaseCart,
  decreaseCart,
  removeFromCart,
}: PropTypes) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.left}>
        <img src={product.image} alt={product.title} draggable={false} />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <h4>{product.title}</h4>
        </div>
        <div className={styles.bottom}>
          <div className={styles.contentContainer}>
            <div>₹{product.price}</div>
            <h5>Quantity: {product.quantity}</h5>
          </div>
          <div className={styles.btnContainer}>
            <button onClick={() => increaseCart(product.id)}>+</button>
            <div>{product.quantity}</div>
            <button onClick={() => decreaseCart(product.id)}>-</button>
          </div>
        </div>
      </div>
      <div className={styles.remove} onClick={() => removeFromCart(product.id)}>
        <MdOutlineRemoveShoppingCart />
      </div>
    </div>
  );
};
