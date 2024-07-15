import createProduct from "./routes/create-product";
import getProducts from "./routes/get-products";

const express = require("express");
const app = express();

app.use(express.json());

app.use(createProduct);
app.use(getProducts);


app.listen(3333, () => {
  console.log(`server running at 3333`);
});
