import * as React from "react";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productsContext } from "../../ProductsContextProvider";

export default function BasicCard({ item }) {
  const navigate = useNavigate();
  const { deleteProduct } = useContext(productsContext);

  return (
    <Card
      sx={{
        width: "20%",
        margin: "3%",
        height: "15%",
      }}
    >
      <CardContent>
        <CardHeader title={item.title} />
        <hr />
        <CardMedia
          component="img"
          image={item.image}
          alt="error:("
          style={{
            width: "250px",
            height: "250px",
            margin: "auto",
            objectFit: "contain",
          }}
        />
        <Typography variant="h5" component="div">
          <hr />
          <b>Descr: </b>
          {item.desc}
        </Typography>
        <hr />
        <Typography variant="h5" component="div">
          <b>Price:</b> {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => navigate(`/edit/${item.id}`)}
        >
          <EditIcon />
          Edit
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => deleteProduct(item.id)}
        >
          <DeleteIcon />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
