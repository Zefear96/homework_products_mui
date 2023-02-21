import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../ProductsContextProvider";

export default function InputWithIcon() {
  const { addProduct } = useContext(productsContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  function createProduct() {
    let newProduct = {
      title,
      image,
      desc,
      price,
    };

    for (let key in newProduct) {
      if (!newProduct[key]) {
        alert("Some inputs are empty!");
        return;
      }
    }

    addProduct(newProduct);

    setTitle("");
    setDesc("");
    setImage("");
    setPrice("");

    navigate("/");
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ background: "white", width: "20%" }}
        />
        <TextField
          id="filled-basic"
          label="Image"
          variant="filled"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ background: "white", width: "20%" }}
        />
        <TextField
          id="filled-basic"
          label="Description"
          variant="filled"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{ background: "white", width: "20%" }}
        />
        <TextField
          id="filled-basic"
          label="Price"
          variant="filled"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ background: "white", width: "20%" }}
        />
      </Box>
      <Button
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "auto",
          width: "20%",
        }}
        variant="contained"
        onClick={createProduct}
      >
        Add
      </Button>
    </>
  );
}
