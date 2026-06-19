const validateRequiredFields = (req, res, next) => {
  const {
    brand,
    model,
    manufactureYear,
    modelYear
  } = req.body;

  if (!brand || !model || !manufactureYear || !modelYear) {
    return res.status(400).json({
      message: 'All fields are required'
    });
  }

  next();
};

module.exports = validateRequiredFields;