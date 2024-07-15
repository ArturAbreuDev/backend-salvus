import { Request, Response, Router } from 'express';
import { prisma } from '../lib/prisma';

const router = Router();

router.get('/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

export default router;
