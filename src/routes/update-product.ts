import { Request, Response, Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

const router = Router();

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive()
});

router.put('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error);
  }

  const { name, description, price } = result.data;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { name, description, price },
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

export default router;
