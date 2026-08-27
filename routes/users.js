const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/', (req, res, next) => {
  fs.readFile(usersPath, 'utf8', (error, data) => {
    if (error) {
      next(error);
      return;
    }

    try {
      const users = JSON.parse(data);
      res.json(users);
    } catch (parseError) {
      next(parseError);
    }
  });
});

router.get('/:userId', (req, res, next) => {
  fs.readFile(usersPath, 'utf8', (error, data) => {
    if (error) {
      next(error);
      return;
    }

    try {
      const users = JSON.parse(data);
      const user = users.find((item) => item._id === req.params.userId);

      if (!user) {
        res.status(404).json({ message: 'ID de usuario no encontrado' });
        return;
      }

      res.json(user);
    } catch (parseError) {
      next(parseError);
    }
  });
});

module.exports = router;
