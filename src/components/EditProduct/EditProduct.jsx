import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsContext } from "../../ProductsContextProvider";
import "./EditProduct.css";

const EditProduct = () => {
  const { oneProduct, getOneProduct, updateProduct } =
    useContext(productsContext);

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setImage(oneProduct.image);
      setDesc(oneProduct.desc);
      setPrice(oneProduct.price);
    }
  }, [oneProduct]);

  function saveChanges() {
    let editedProduct = {
      title,
      desc,
      image,
      price,
    };

    updateProduct(id, editedProduct);

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
        id="edit"
      >
        <TextField
          id="filled-basic"
          label="Title"
          variant="filled"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ background: "white", width: "30%" }}
        />
        <TextField
          id="filled-basic"
          label="Image"
          variant="filled"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          style={{ background: "white", width: "30%" }}
        />
        <TextField
          id="filled-basic"
          label="Description"
          variant="filled"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{ background: "white", width: "30%" }}
        />
        <TextField
          id="filled-basic"
          label="Price"
          variant="filled"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ background: "white", width: "30%" }}
        />
      </Box>
      <Button variant="contained" onClick={saveChanges} id="btn-edit">
        Save
      </Button>
    </>
  );
};

export default EditProduct;
