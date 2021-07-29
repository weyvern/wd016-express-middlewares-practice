require('dotenv').config();
const express = require('express');
const postsRouter = require('./routes/postsRouter');
const usersRouter = require('./routes/userRouter');
const app = express();

const port = process.env.PORT || 5000;

app.use('/posts', postsRouter);
app.use('/users', usersRouter);
app.get('/', (req, res) => res.send('Hello World!'));
app.all('*', (req, res) =>
  res.status(404).json({
    error: 'Not found'
  })
);

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
