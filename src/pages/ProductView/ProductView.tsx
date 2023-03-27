import { ProductContext } from "context/ProductContext";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductsType } from "types/types";
import styles from "./ProductView.module.scss";
import { AiFillStar } from "react-icons/ai";

export const ProductView = () => {
  const location = useLocation();
  const [productsData] = useContext(ProductContext);
  const currentProductId = location.pathname.split("/")[2];
  const product = productsData.find(
    (product: ProductsType) => +currentProductId === product?.id
  );
  return (
    <>
      <div key={product?.id} className={styles.productViewContainer}>
        <div className={styles.left}>
          <img src={product?.image} alt={product?.title} draggable={false} />
        </div>
        <div className={styles.right}>
          <div className={styles.topContent}>
            <h1>{product?.title}</h1>
            <h5>
              {product?.rating.rate} <AiFillStar />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {product?.rating.count} ratings{" "}
            </h5>
          </div>
          <div className={styles.midContent}>
            <p>{product?.description}</p>
            <h4>₹ {product?.price}</h4>
          </div>
          <div className={styles.bottomContent}>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
};
