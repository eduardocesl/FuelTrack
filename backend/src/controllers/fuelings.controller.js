const {
  getFuelings,
  createFueling,
  getFuelingById,
  deleteFueling,
  updateFueling
} = require('../services/fuelings.service');

const getFuelingsController = (req, res) => {
  return res.json(
    getFuelings()
  );
};

const createFuelingController = (req, res) => {
  try {
    const fueling = createFueling(req.body);

    return res.status(201).json(fueling);
  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
};

const getFueling = (req, res) => {
  const { id } = req.params;

  const fueling = getFuelingById(id);

  if (!fueling) {
    return res.status(404).json({
      message: 'Fueling not found'
    });
  }

  return res.json(fueling);
};

const deleteFuelingController = (req, res) => {
  try {
    const { id } = req.params;

    const deletedFueling = deleteFueling(id);

    return res.json(deletedFueling);
  } catch (error) {
    return res.status(404).json({
      message: error.message
    });
  }
};

const updateFuelingController = (req, res) => {
  try {
    const { id } = req.params;

    const updatedFueling = updateFueling(id, req.body);

    return res.json(updatedFueling);
  } catch (error) {
    const status =
      error.message === 'Fueling not found'
        ? 404
        : 400;

    return res.status(status).json({
      message: error.message
    });
  }
};

module.exports = {
  getFuelings: getFuelingsController,
  createFueling: createFuelingController,
  getFueling: getFueling,
  deleteFueling: deleteFuelingController,
  updateFueling: updateFuelingController
};