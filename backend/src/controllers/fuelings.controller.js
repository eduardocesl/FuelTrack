const {
  getFuelings,
  createFueling
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

module.exports = {
  getFuelings: getFuelingsController,
  createFueling: createFuelingController
};