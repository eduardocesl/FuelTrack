const express = require('express');

const {
  getFuelings,
  createFueling
} = require('../controllers/fuelings.controller');

const router = express.Router();

router.get('/', getFuelings);

router.post('/', createFueling);

module.exports = router;