const {
  getFuelings,
  getFuelTypes,
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

const getFuelTypesController = (req, res) => {
  return res.json(
    getFuelTypes()
  );
};

const createFuelingController = (req, res, next) => {
  try {
    return res.status(201).json(
      createFueling(req.body)
    );
  } catch (error) {
    next(error);
  }
};

const getFueling = (req, res, next) => {
  try {
    return res.json(
      getFuelingById(req.params.id)
    );
  } catch (error) {
    next(error);
  }
};

const deleteFuelingController = (req, res, next) => {
  try {
    return res.json(
      deleteFueling(req.params.id)
    );
  } catch (error) {
    next(error);
  }
};

const updateFuelingController = (req, res, next) => {
  try {
    return res.json(
      updateFueling(req.params.id, req.body)
    );
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getFuelings: getFuelingsController,
  getFuelTypes: getFuelTypesController,
  createFueling: createFuelingController,
  getFueling: getFueling,
  deleteFueling: deleteFuelingController,
  updateFueling: updateFuelingController
};