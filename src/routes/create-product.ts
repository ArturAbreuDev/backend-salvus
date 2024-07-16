import { Request, Response, Router } from 'express';
import { z, ZodError } from 'zod';
import { prisma } from '../lib/prisma';

const router: Router = Router();

const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive()
});

router.post('/products', async (req: Request, res: Response) => {
  const result = productSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: 'Invalid input', details: (result.error as ZodError).errors });
  }

  const { name, description, price } = result.data;
  try {
    const newProduct = await prisma.product.create({
      data: { name, description, price },
    });
    res.status(201).json(newProduct);
  } catch (error: any) {
    if (error.code === 'P2002') {
      res.status(409).json({ error: 'Product with the same name already exists' });
    } else {
      res.status(500).json({ error: 'Failed to create product' });
    }
  }
});

export default router;
