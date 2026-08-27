const express = require('express');

const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

const app = express();

const { PORT = 3000 } = process.env;

app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(500).json({ message: 'An error has occurred on the server' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
