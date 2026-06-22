const repository = require('../repositories/fuelings.repository');
const vehiclesRepository = require('../repositories/vehicles.repository');

const getFuelings = () => {
  return repository.getAllFuelings();
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

module.exports = {
  getFuelings,
  createFueling
};