// src/routes/home.ts
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.render("_home.twig", {
    title : "Home Page"
  });
});

export default router;