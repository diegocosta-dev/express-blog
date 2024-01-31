// src/routes/home.ts
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Rota da Página Inicial');
});

export default router;