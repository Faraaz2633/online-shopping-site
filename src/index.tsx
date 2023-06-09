import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ProductProvider } from "context/ProductContext";
import { CartProvider } from "context/CartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
