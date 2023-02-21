import React, { useEffect, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { productsContext } from "../../ProductsContextProvider";

const ProductList = () => {
  const { products, getProducts } = useContext(productsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
