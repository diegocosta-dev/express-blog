import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Rota do Blog: Listagem de Posts');
});

router.get('/:postId', (req: Request, res: Response) => {
  const postId = req.params.postId;
  res.send(`Rota do Blog: Detalhes do Post ${postId}`);
});

export default router;