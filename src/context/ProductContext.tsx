import { createContext, useEffect, useState } from "react";
import { ProductsType } from "types/types";

export const ProductContext = createContext<any>([]);

export const ProductProvider = (props: any) => {
  const [productsData, setProductsData] = useState<ProductsType[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductsData(json));
  }, []);
  return (
    <ProductContext.Provider value={[productsData, setProductsData]}>
      {props.children}
    </ProductContext.Provider>
  );
};
