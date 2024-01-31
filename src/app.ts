import express from 'express';
import homeRoutes from './routes/home';
import blogRoutes from './routes/blog'
import registergRoutes from './routes/register'

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const rootPath = __dirname

// Config template engine - twig.
const Twig = require("twig");

app.set('view engine', 'twig');
app.set('views', rootPath + '/templates');

// Config Routes
app.use('/', homeRoutes);
app.use('/blog', blogRoutes);
app.use('/register', registergRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

export default [rootPath]