import express, { Express, Request, Response, NextFunction } from 'express';
import createProduct from "./routes/create-product";
import getProducts from "./routes/get-products";
import getProduct from "./routes/get-product";
import deleteProduct from "./routes/delete-product";
import updateProduct from "./routes/update-product";
import { env } from './env'

const app: Express = express();

app.use(express.json());

app.use(createProduct);
app.use(getProducts);
app.use(getProduct);
app.use(deleteProduct);
app.use(updateProduct);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(env.PORT, () => {
  console.log(`server running at ${env.PORT}`);
});
