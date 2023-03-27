import { createContext, useState } from "react";
import { CartType } from "types/types";

export const CartContext = createContext<any>([]);

export const CartProvider = (props: any) => {
  const [cart, setCart] = useState<CartType[]>([]);

  
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
