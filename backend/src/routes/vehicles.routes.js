const express = require('express');
const router = express.Router();

const {
  getVehicles,
  createVehicle
} = require('../controllers/vehicles.controller');

router.get('/', getVehicles);
router.post('/', createVehicle);

module.exports = router;