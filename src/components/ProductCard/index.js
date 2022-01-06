import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";


export default function ProductCard({ product }) {
  const handlePurchase = async () => {
    const response = await axios
      .post(`http://localhost:4000/products/${product._id}`, {
        userId: "61d68df1f895d1a4033ec2d2"
      })
      .catch((err) => {
        return err.response.data;
      });
    if(response.error) {
       alert(response.error);
    } else {
      alert("Purchase successful!");
    }
  };

  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Price: {product.price}
        </Typography>
        <Typography variant="body2">
          {product.quantityInStock > 0
            ? `Stock: ${product.quantityInStock}`
            : "Out of Stock"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handlePurchase}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
