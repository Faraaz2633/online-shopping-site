import { CartItem } from "components";
import { CartContext } from "context/CartContext";
import React, { useContext, useEffect, useState } from "react";
import { CartType } from "types/types";
import styles from "./Cart.module.scss";

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    let currTotal = cart.reduce((acc:number, curr:CartType) => acc + curr.price * curr.quantity, 0);
    setTotal(currTotal.toFixed(2))
  }, [cart])

  const increaseCart = (id: number) => {
    setCart((prev: CartType[]) => {
      const newCart = prev.map((cartItem: CartType) => {
        if (cartItem.id === id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        }

        return cartItem;
      });

      return newCart;
    });
  };

  const decreaseCart = (id: number) => {
    setCart((prev: CartType[]) => {
      const newCart = prev.map((cartItem: CartType) => {
        if (cartItem.id === id && cartItem.quantity > 1) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        }

        return cartItem;
      });

      return newCart;
    });
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((cartItem: CartType) => cartItem.id !== id);
    setCart([...newCart]);
  };
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartItemContainer}>
        {cart.map((cartItem: CartType) => (
          <CartItem
            key={cartItem.id}
            product={cartItem}
            increaseCart={increaseCart}
            decreaseCart={decreaseCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <h4>Total: {total}</h4>
    </div>
  );
};
