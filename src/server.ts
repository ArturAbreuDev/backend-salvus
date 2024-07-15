import createProduct from "./routes/create-product";

const express = require("express");
const app = express();
app.use(express.json());

app.use(createProduct);


app.listen(3333, () => {
  console.log(`server running at 3333`);
});
