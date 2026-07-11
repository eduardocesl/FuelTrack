const {
  getAllVehicles,
  createVehicle,
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

const getVehicle = (req, res, next) => {
  try {
    const { id } = req.params;

    const vehicle = ensureVehicleExists(id);

    return res.json(vehicle);
  } catch (error) {
    next(error);
  }
};

const getVehicleFuelings = (req, res, next) => {
  try {
    const { id } = req.params;

    ensureVehicleExists(id);

    const fuelings = getFuelingsByVehicleId(id);

    return res.json(fuelings);
  } catch (error) {
    next(error);
  }
};

const getVehicleConsumption = (req, res, next) => {
  try {
    const { id } = req.params;

    ensureVehicleExists(id);

    const consumption =
      calculateAverageConsumption(id);

    return res.json(consumption);
  } catch (error) {
    next(error);
  }
};

const getVehicleStatisticsController = (req, res, next) => {
  try {
    const { id } = req.params;

    ensureVehicleExists(id);

    const statistics = getVehicleStatistics(id);

    return res.json(statistics);
  } catch (error) {
    next(error);
  }
};

const getVehicleDashboardController = (req, res, next) => {
  try {
    const { id } = req.params;

    ensureVehicleExists(id);

    const dashboard = getVehicleDashboard(id);

    return res.json(dashboard);
  } catch (error) {
    next(error);
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