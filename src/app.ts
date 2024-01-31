import express from 'express';
import homeRoutes from './routes/home';
import blogRoutes from './routes/blog'
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const rootPath = __dirname

// Config template engine - twig.
const Twig = require("twig");

app.set("twig options", {
  allowAsync: true, // Allow asynchronous compiling
  strict_variables: false
});

app.set('views', rootPath + '/templates');

// Config Routes
app.use('/', homeRoutes);
app.use('/blog', blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})

export default [rootPath]