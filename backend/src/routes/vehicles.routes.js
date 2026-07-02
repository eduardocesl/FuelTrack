const express = require('express');
const router = express.Router();

const {
  getVehicles,
  getVehicle,
  getVehicleFuelings,
  getVehicleConsumption,
  getVehicleStatistics,
  createVehicle,
  deleteVehicle,
  updateVehicle
} = require('../controllers/vehicles.controller');
const validateVehicleSchema = require('../middlewares/vehicles/validateVehicleSchema');

router.get('/', getVehicles);
router.get('/:id/fuelings', getVehicleFuelings);
router.get('/:id/consumption', getVehicleConsumption);
router.get('/:id/statistics', getVehicleStatistics);
router.get('/:id', getVehicle);
router.post('/', validateVehicleSchema, createVehicle);
router.put('/:id', validateVehicleSchema, updateVehicle);
router.delete('/:id', deleteVehicle);

module.exports = router;