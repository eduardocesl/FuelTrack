const FuelingSchema = require('../../schemas/fueling.schema');

const validateFuelingSchema = (
  req,
  res,
  next
) => {
  try {
    FuelingSchema.parse(req.body);

    next();
  } catch (error) {
    return res.status(400).json({
      message: 'Invalid fueling data',
      errors: error.errors
    });
  }
};

module.exports = validateFuelingSchema;