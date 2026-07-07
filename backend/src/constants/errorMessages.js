const ERROR_MESSAGES = {
  VEHICLE_NOT_FOUND: 'Vehicle not found',

  FUELING_NOT_FOUND: 'Fueling not found',

  INVALID_VEHICLE_CHANGE:
    'Vehicle cannot be changed for an existing fueling',

  PREVIOUS_ODOMETER:
    'Odometer cannot be less than the previous fueling',

  LAST_ODOMETER:
    'Odometer cannot be less than the last recorded fueling',

  INSUFFICIENT_FUELINGS:
    'At least two fueling records are required to calculate average consumption.',

  ALL_FIELDS_REQUIRED: 
    'All fields are required'
};

module.exports = ERROR_MESSAGES;