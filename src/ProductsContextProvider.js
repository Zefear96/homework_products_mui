import React, { createContext, useState } from "react";
import axios from "axios";

export const productsContext = createContext();

const INIT_STATE = {
  products: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const ProductsContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

  const API = "http://localhost:8000/products";

  async function getProducts() {
    let res = await axios(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  }

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  async function getOneProduct(id) {
    let res = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: res.data,
    });
  }

  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  const values = {
    products: state.products,
    oneProduct: state.oneProduct,

    getProducts,
    addProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <productsContext.Provider value={values}>
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
