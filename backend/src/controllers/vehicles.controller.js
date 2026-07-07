const {
  getAllVehicles,
  createVehicle,
  getVehicleById,
  ensureVehicleExists,
  deleteVehicle,
  updateVehicle
} = require('../services/vehicles.service');

const {
  getFuelingsByVehicleId,
  calculateAverageConsumption,
  getVehicleStatistics,
  getVehicleDashboard
} = require('../services/fuelings.service');

const getVehicles = (req, res) => {
  return res.json(getAllVehicles());
};

const createVehicleController = (req, res, next) => {
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

const getVehicleFuelings = (req, res) => {
  try {
    const { id } = req.params;

    ensureVehicleExists(id);

    const fuelings = getFuelingsByVehicleId(id);

    return res.json(fuelings);
  } catch (error) {
    return res.status(404).json({
      message: error.message
    });
  }
};

const getVehicleConsumption = (req, res) => {
  try {
    const { id } = req.params;

    ensureVehicleExists(id);

    const consumption =
      calculateAverageConsumption(id);

    return res.json(consumption);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });    
  }
};

const getVehicleStatisticsController = (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = getVehicleById(id);

    if (!vehicle) {
      return res.status(404).json({
        message: 'Vehicle not found'
      });
    }

    const statistics = getVehicleStatistics(id);

    return res.json(statistics);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

const getVehicleDashboardController = (req, res) => {
  try {
    const { id } = req.params;

    const vehicle = getVehicleById(id);

    if (!vehicle) {
      return res.status(404).json({
        message: 'Vehicle not found'
      });
    }

    const dashboard = getVehicleDashboard(id);

    return res.json(dashboard);

  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

module.exports = {
  getVehicles,
  createVehicle: createVehicleController,
  deleteVehicle: deleteVehicleController,
  updateVehicle: updateVehicleController,
  getVehicle,
  getVehicleFuelings,
  getVehicleConsumption,
  getVehicleStatistics: getVehicleStatisticsController,
  getVehicleDashboard: getVehicleDashboardController
};