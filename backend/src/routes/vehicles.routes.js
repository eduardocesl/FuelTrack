const express = require('express');
const router = express.Router();
const validateRequiredFields = require('../middlewares/vehicles/validateVehicleSchema');

const {
  getVehicles,
  getVehicle,
  createVehicle,
  deleteVehicle,
  updateVehicle
} = require('../controllers/vehicles.controller');
const validateVehicleSchema = require('../middlewares/vehicles/validateVehicleSchema');

router.get('/', getVehicles);
router.get('/:id', getVehicle);
router.post('/', validateVehicleSchema, createVehicle);
router.put('/:id', validateVehicleSchema, updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;