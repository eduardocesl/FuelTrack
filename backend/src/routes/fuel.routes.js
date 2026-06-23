const express = require('express');

const {
  getFuelings,
  createFueling,
  getFueling,
  deleteFueling,
  updateFueling
} = require('../controllers/fuelings.controller');

const validateFuelingSchema = require(
  '../middlewares/fuelings/validateFuelingSchema'
);

const router = express.Router();

router.get('/', getFuelings);

router.get('/:id', getFueling);

router.post(
  '/',
  validateFuelingSchema,
  createFueling
);

router.delete('/:id', deleteFueling);

router.put('/:id', updateFueling);

module.exports = router;