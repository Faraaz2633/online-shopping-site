import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "components";
import { Home, Cart, ProductView } from "pages";

export const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductView />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  </BrowserRouter>
);
