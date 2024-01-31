import express from 'express';
import homeRoutes from './routes/home';
import blogRoutes from './routes/blog';

const app = express();
const port = 3000;

app.use('/', homeRoutes);
app.use('/blog', blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})  