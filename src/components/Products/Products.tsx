import React, { useContext } from "react";
import { ProductContext } from "context/ProductContext";
import { Product } from "components";
import { ProductsType } from "types/types";
import styles from './Products.module.scss'

export const Products = () => {
  const [productsData, setProductsData] = useContext(ProductContext);
  console.log(productsData);
  return (
    <div className={styles.productsContainer}>
      {productsData.map((product: ProductsType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
