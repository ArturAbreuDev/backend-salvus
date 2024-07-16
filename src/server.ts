import createProduct from "./routes/create-product";
import getProducts from "./routes/get-products";
import getProduct from "./routes/get-product";
import deleteProduct from "./routes/delete-product";
import updateProduct from "./routes/update-product";
import { env } from './env'

const express = require("express");
const app = express();

app.use(express.json());

app.use(createProduct);
app.use(getProducts);
app.use(getProduct);
app.use(deleteProduct);
app.use(updateProduct);


app.listen(env.PORT, () => {
  console.log(`server running at ${env.PORT}`);
});
