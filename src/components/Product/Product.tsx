import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { ProductsType, CartType } from "types/types";
import { CartContext } from "context/CartContext";
import styles from "./Product.module.scss";

type PropTypes = {
  product: ProductsType;
};

export const Product = ({ product }: PropTypes) => {
  const navigate = useNavigate();
  const [cart, setCart] = useContext(CartContext);
  const [isCartItem, setIsCartItem] = useState(false);
  const [currentCartItem, setCurrentCartItem] = useState<CartType>();

  useEffect(() => {
    if (cart?.length > 0) {
      const isPresent = cart.find(
        (cartItem: CartType) => cartItem.id === product.id
      );
      if (isPresent?.id === product.id) {
        setIsCartItem(true);
        setCurrentCartItem(isPresent);
      }
    }
  }, [cart]);

  const increaseCart = () => {
    setCart((prev: CartType[]) => {
      const newCart = prev.map((cartItem: CartType) => {
        if (cartItem.id === product.id) {
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

  const decreaseCart = () => {
    setCart((prev: CartType[]) => {
      const newCart = prev.map((cartItem: CartType) => {
        if (cartItem.id === product.id && cartItem.quantity > 1) {
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

  const addToCart = () => {
    const newItem = [{ ...product, quantity: 1 }];
    setCart((prev: CartType[]) => [...prev, ...newItem]);
  };

  const removeFromCart = () => {
    const newCart = cart.filter(
      (cartItem: CartType) => cartItem.id !== product.id
    );
    setCart([...newCart]);
    setIsCartItem(false);
  };

  return (
    <div className={styles.productContainer}>
      {isCartItem ? (
        <div className={styles.remove} onClick={removeFromCart}>
          <MdOutlineRemoveShoppingCart />
        </div>
      ) : (
        <></>
      )}
      <div
        className={styles.imageContainer}
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <img src={product.image} alt={product.title} draggable={false} />
      </div>
      <div className={styles.contentContainer}>
        <h4
          className={styles.productTitle}
          title={product.title}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.title.length > 60
            ? `${product.title.slice(0, 60)}...`
            : product.title}
        </h4>
        <div className={styles.productPrice}>Price: ₹{product.price}</div>
      </div>
      {isCartItem ? (
        <div className={styles.buttonGroup}>
          <button onClick={increaseCart} className={styles.leftButton}>
            +
          </button>
          <div>{currentCartItem?.quantity}</div>
          <button onClick={decreaseCart} className={styles.rightButton}>
            -
          </button>
        </div>
      ) : (
        <button className={styles.button} onClick={addToCart}>
          Add to cart
        </button>
      )}
    </div>
  );
};
