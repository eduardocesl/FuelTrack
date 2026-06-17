const {
  getAllVehicles,
  createVehicle
} = require('../services/vehicles.service');

const getVehicles = (req, res) => {
  return res.json(getAllVehicles());
};

const createVehicleController = (req, res) => {
  try {
    const vehicle = createVehicle(req.body);

    return res.status(201).json(vehicle);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  getVehicles,
  createVehicle: createVehicleController
};