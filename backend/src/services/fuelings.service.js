const repository = require('../repositories/fuelings.repository');
const vehiclesRepository = require('../repositories/vehicles.repository');

const getFuelings = () => {
  return repository.getAllFuelings();
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
  const fuelings  = getFuelingsByVehicleId(vehicleId);

  return fuelings.sort(
    (a, b) => a.odometer - b.odometer
  );
};

const calculateAverageConsumption = (vehicleId) => {
  const fuelings = getSortedFuelingsByVehicleId(vehicleId);

  if (fuelings.length < 2) {
    throw new Error(
      'At least two fueling records are required to calculate average consumption.'
    );
  }
};

module.exports = {
  getFuelings,
  createFueling,
  getFuelingById,
  deleteFueling,
  updateFueling,
  getFuelingsByVehicleId,
  getSortedFuelingsByVehicleId,
  calculateAverageConsumption
};