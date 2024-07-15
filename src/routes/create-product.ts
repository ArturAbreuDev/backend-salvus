import { Request, Response, Router } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma';

const router = Router();

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive()
});

router.post('/products', async (req: Request, res: Response) => {
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json(result.error);
  }

  const { name, description, price } = result.data;
  try {
    const newProduct = await prisma.product.create({
      data: { name, description, price },
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

export default router;
