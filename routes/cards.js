const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', (req, res, next) => {
  fs.readFile(cardsPath, 'utf8', (error, data) => {
    if (error) {
      next(error);
      return;
    }

    try {
      const cards = JSON.parse(data);
      res.json(cards);
    } catch (parseError) {
      next(parseError);
    }
  });
});

module.exports = router;
