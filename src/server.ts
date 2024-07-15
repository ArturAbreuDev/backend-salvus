import createProduct from "./routes/create-product";
import getProducts from "./routes/get-products";
import getProduct from "./routes/get-product";

const express = require("express");
const app = express();

app.use(express.json());

app.use(createProduct);
app.use(getProducts);
app.use(getProduct);


app.listen(3333, () => {
  console.log(`server running at 3333`);
});
