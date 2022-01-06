import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:4000/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid
      container
      columns={{ xs: 4, md: 12 }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {products.map((product) => (
        <Grid key={product._id} item xs={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
