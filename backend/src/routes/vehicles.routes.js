const express = require('express');
const router = express.Router();
const validateRequiredFields = require('../middlewares/vehicles/validateRequiredFields');

const {
  getVehicles,
  getVehicle,
  createVehicle,
  deleteVehicle,
  updateVehicle
} = require('../controllers/vehicles.controller');

router.get('/', getVehicles);
router.get('/:id', getVehicle);
router.post('/', validateRequiredFields, createVehicle);
router.put('/:id', validateRequiredFields, updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;