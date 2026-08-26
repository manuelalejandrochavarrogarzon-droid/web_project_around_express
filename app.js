const express = require('express');

const app = express();

const { PORT = 3000 } = process.env;

const users = require('./users.json');
const cards = require('./cards.json');

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/cards', (req, res) => {
  res.json(cards);
});

app.get('/users/:userId', (req, res) => {
  const user = users.find((item) => item._id === req.params.userId);

  if (!user) {
    res.status(404).json({ message: 'ID de usuario no encontrado' });
    return;
  }

  res.json(user);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Recurso solicitado no encontrado' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
