import createProduct from "./routes/create-product";
import getProducts from "./routes/get-products";
import getProduct from "./routes/get-product";
import deleteProduct from "./routes/delete-product";
import updateProduct from "./routes/update-product";

const express = require("express");
const app = express();

app.use(express.json());

app.use(createProduct);
app.use(getProducts);
app.use(getProduct);
app.use(deleteProduct);
app.use(updateProduct);


app.listen(3333, () => {
  console.log(`server running at 3333`);
});
