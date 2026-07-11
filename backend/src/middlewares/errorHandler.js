const AppError = require('../errors/AppError');

const errorHandler = (
  err,
  req,
  res,
  next
) => {

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    });
  }

  console.error(err);

  return res.status(500).json({
    message: 'Internal Server Error'
  });
};

module.exports = errorHandler;