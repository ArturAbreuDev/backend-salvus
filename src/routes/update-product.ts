import { Request, Response, Router } from 'express';
import { z, ZodError } from 'zod';
import { prisma } from '../lib/prisma';

const router: Router = Router();

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive()
});

router.put('/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: 'Invalid input', details: (result.error as ZodError).errors });
  }

  const { name, description, price } = result.data;
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { name, description, price },
    });
    res.json(updatedProduct);
  } catch (error: any) {
    if (error.code === 'P2025') {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }
});

export default router;
