const VehicleSchema = require('../../schemas/vehicle.schema');

const validateVehicleSchema = (
  req,
  res,
  next
) => {
  try {
    VehicleSchema.parse(req.body);

    next();
  } catch (error) {

    return res.status(400).json({
      message: 'Invalid vehicle data',
      errors: error.errors
    });
  }
};

module.exports = validateVehicleSchema;