import { Request, Response, Router } from 'express';
import { prisma } from '../lib/prisma';

const router: Router = Router();

router.get('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

export default router;
