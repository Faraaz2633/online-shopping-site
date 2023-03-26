import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsType } from "types/types";
import styles from './Product.module.scss';

type PropTypes = {
    product: ProductsType;
}


export const Product = ({product}: PropTypes) => {
    const navigate = useNavigate();
  return (
    <div className={styles.productContainer}>
        <div className={styles.imageContainer} onClick={() => navigate(`/product/${product.id}`)}>
            <img src={product.image} alt={product.title}/>
        </div>
        <div className={styles.contentContainer}>
            <h4 className={styles.productTitle} title={product.title} onClick={() => navigate(`/product/${product.id}`)}>
                {product.title.length > 60 ? `${product.title.slice(0,60)}...` : product.title}
            </h4>
            <div className={styles.productPrice}>Price: ₹{product.price}</div>
        </div>
        <button className={styles.button}>Add to cart</button>
    </div>
  )
}
