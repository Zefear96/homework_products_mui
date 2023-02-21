import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductsContextProvider from "./ProductsContextProvider";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";

const MainRoutes = () => {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </ProductsContextProvider>
  );
};

export default MainRoutes;
