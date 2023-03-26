import React from 'react';
import { ProductsType } from "types/types";
import styles from './Product.module.scss';

type PropTypes = {
    product: ProductsType;
}


export const Product = ({product}: PropTypes) => {
  return (
    <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
            <img src={product.image} alt={product.title}/>
        </div>
        <div className={styles.contentContainer}>
            <h4 className={styles.productTitle} title={product.title}>
                {product.title.length > 60 ? `${product.title.slice(0,60)}...` : product.title}
            </h4>
            <div className={styles.productPrice}>Price: ₹{product.price}</div>
        </div>
        <button className={styles.button}>Add to cart</button>
    </div>
  )
}
