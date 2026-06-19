const {
  getAllVehicles,
  createVehicle,
  getVehicleById,
  deleteVehicle,
  updateVehicle
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

const deleteVehicleController = (req, res) => {
  try {
    const { id } = req.params;

    const deletedVehicle = deleteVehicle(id);

    return res.json(deletedVehicle);
  } catch (error) {
    return res.status(404).json({
      message: error.message
    });
  }
};

const updateVehicleController = (req, res) => {
  try {
    const { id } = req.params;

    const updatedVehicle = updateVehicle(
      id,
      req.body
    );

    return res.json(updatedVehicle);
  } catch (error) {
    const status =
      error.message === 'Vehicle not found'
        ? 404
        : 400;

    return res.status(status).json({
      message: error.message
    });
  }
};

const getVehicle = (req, res) => {
  const { id } = req.params;
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    return res.status(404).json({
      message: 'Vehicle not found'
    });
  }

  return res.json(vehicle);
};

module.exports = {
  getVehicles,
  createVehicle: createVehicleController,
  deleteVehicle: deleteVehicleController,
  updateVehicle: updateVehicleController,
  getVehicle
};