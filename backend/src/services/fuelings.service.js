const repository = require('../repositories/fuelings.repository');
const vehiclesRepository = require('../repositories/vehicles.repository');
const FUEL_TYPES = require('../constants/fuelTypes');

const getFuelings = () => {
  return repository.getAllFuelings();
};

const getFuelTypes = () => {
  return FUEL_TYPES;
};

const getFuelingById = (id) => {
  const fuelings = repository.getAllFuelings();

  return fuelings.find(
    fueling => fueling.id === Number(id)
  );
};

const createFueling = (data) => {
  const fuelings = repository.getAllFuelings();

  const vehicles = vehiclesRepository.getAll();

  const vehicle = vehicles.find(
    v => v.id === Number(data.vehicleId)
  );

  if (!vehicle) {
    throw new Error('Vehicle not found');
  }

  const lastFueling = getLastFuelingByVehicleId(data.vehicleId);

  validateOdometer(
    data.odometer,
    lastFueling,
    'Odometer cannot be less than the last recorded fueling'
  );

  const newFueling = {
    id: fuelings.length > 0
      ? Math.max(...fuelings.map(f => f.id)) + 1
      : 1,

    vehicleId: data.vehicleId,
    date: data.date,
    fuelType: data.fuelType,
    liters: data.liters,
    totalCost: data.totalCost,
    odometer: data.odometer
  };

  fuelings.push(newFueling);

  repository.saveAllFuelings(fuelings);

  return newFueling;
};

const deleteFueling = (id) => {
  const fuelings = repository.getAllFuelings();

  const fueling = fuelings.find(
    f => f.id === Number(id)
  );

  if (!fueling) {
    throw new Error('Fueling not found');
  }

  const updatedFuelings = fuelings.filter(
    f => f.id !== Number(id)
  );

  repository.saveAllFuelings(updatedFuelings);

  return fueling;
};

const updateFueling = (id, data) => {
  const fuelings = repository.getAllFuelings();

  const fueling = fuelings.find(
    f => f.id === Number(id)
  );

  if (!fueling) {
    throw new Error('Fueling not found');
  }

  const previousFueling = getPreviousFueling(
    data.vehicleId,
    id
  );

  validateOdometer(
  data.odometer,
  previousFueling,
  'Odometer cannot be less than the previous fueling'
);

  const updatedFueling = {
    ...fueling,
    vehicleId: data.vehicleId,
    date: data.date,
    fuelType: data.fuelType,
    liters: data.liters,
    totalCost: data.totalCost,
    odometer: data.odometer
  };

  const updatedFuelings = fuelings.map(
    f => f.id === Number(id) ? updatedFueling : f
  );

  repository.saveAllFuelings(updatedFuelings);

  return updatedFueling;
};

const getFuelingsByVehicleId = (vehicleId) => {
  const fuelings = repository.getAllFuelings();

  return fuelings.filter(
    fueling => fueling.vehicleId === Number(vehicleId)
  );
};

const getSortedFuelingsByVehicleId = (vehicleId) => {
  const fuelings = getFuelingsByVehicleId(vehicleId);

  return fuelings.sort(
  (a, b) => a.id - b.id
);
};

const getLastFuelingByVehicleId = (vehicleId) => {
  const fuelings = getSortedFuelingsByVehicleId(vehicleId);

  if (fuelings.length === 0) {
    return null;
  }

  return fuelings[fuelings.length - 1];
};

const getPreviousFueling = (vehicleId, fuelingId) => {
  const fuelings = getSortedFuelingsByVehicleId(vehicleId);

  const index = fuelings.findIndex(
    fueling => fueling.id === Number(fuelingId)
  );

  if (index <= 0) {
    return null;
  }
  
  return fuelings[index - 1];
};

const validateOdometer = (
  currentOdometer,
  referenceFueling,
  message
) => {
  if (
    referenceFueling &&
    currentOdometer < referenceFueling.odometer
  ) {
    throw new Error(message);
  }
};

const calculateAverageConsumption = (vehicleId) => {
  const fuelings = getSortedFuelingsByVehicleId(vehicleId);

  if (fuelings.length < 2) {
    throw new Error(
      'At least two fueling records are required to calculate average consumption.'
    );
  }

  const consumptions = [];

  for (let i = 1; i < fuelings.length; i++) {
    const previousFueling = fuelings[i - 1];

    const currentFueling = fuelings[i];

    const distance = 
      currentFueling.odometer - previousFueling.odometer;

    const consumption =
      distance / currentFueling.liters;

    consumptions.push(consumption);
  }

  const totalConsumption = consumptions.reduce(
    (total, consumption) => total + consumption,
    0
  );

  const averageConsumption = totalConsumption / consumptions.length;

  return {
    vehicleId: Number(vehicleId),
    averageConsumption: Number(
      averageConsumption.toFixed(2)
    ),
    fuelingsUsed: fuelings.length,
    calculations: consumptions.length,
    unit: 'km/L'
  }

};

const getVehicleStatistics = (vehicleId) => {
  const fuelings = getFuelingsByVehicleId(vehicleId);

  const totalLiters = fuelings.reduce(
    (total, fueling) => total + fueling.liters,
    0
  );

  const totalSpent = fuelings.reduce(
    (total, fueling) => total + fueling.totalCost,
    0
  );

  return {
    vehicleId: Number(vehicleId),
    fuelings: fuelings.length,
    totalLiters: Number(totalLiters.toFixed(2)),
    totalSpent: Number(totalSpent.toFixed(2))
  };
};

const getVehicleDashboard = (vehicleId) => {
  let consumption = null;

  try {
    consumption = calculateAverageConsumption(vehicleId);
  } catch (error) {
    consumption = null;
  }

  return {
    statistics: getVehicleStatistics(vehicleId),
    consumption
  };
};


module.exports = {
  getFuelings,
  getFuelTypes,
  createFueling,
  getFuelingById,
  deleteFueling,
  updateFueling,
  getFuelingsByVehicleId,
  getPreviousFueling,
  getSortedFuelingsByVehicleId,
  getLastFuelingByVehicleId,
  calculateAverageConsumption,
  getVehicleStatistics,
  getVehicleDashboard
};