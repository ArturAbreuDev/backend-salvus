import { Request, Response, Router } from 'express';
import { prisma } from '../lib/prisma';

const router: Router = Router();

router.delete('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { id } });
    res.status(204).send();
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }
});

export default router;
