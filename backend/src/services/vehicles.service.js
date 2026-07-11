const ERROR_MESSAGES = require('../constants/errorMessages');
const repository = require('../repositories/vehicles.repository');
const AppError = require('../errors/AppError');


const getAllVehicles = () => {
    return repository.getAll();
};

const createVehicle = (data) => {
  const vehicles = repository.getAll();

  const { brand, model, manufactureYear, modelYear } = data;

  const newVehicle = {
    id: vehicles.length > 0
      ? Math.max(...vehicles.map(v => v.id)) + 1
      : 1,
    brand,
    model,
    manufactureYear,
    modelYear
  };

  vehicles.push(newVehicle);

  repository.saveAll(vehicles);

  return newVehicle;
};

const deleteVehicle = (id) => {
  const vehicles = repository.getAll();

  const vehicle = vehicles.find(v => v.id === Number(id));

  if (!vehicle) {
    throw new AppError(ERROR_MESSAGES.VEHICLE_NOT_FOUND, 404);
  }

  const updated = vehicles.filter(
    v => v.id !== Number(id)
  );

  repository.saveAll(updated);

  return vehicle;
};

const updateVehicle = (id, data) => {
  const vehicles = repository.getAll();

  const vehicle = vehicles.find(v => v.id === Number(id));

  if (!vehicle) {
    throw new AppError(ERROR_MESSAGES.VEHICLE_NOT_FOUND, 404);
  }

  const {
    brand,
    model,
    manufactureYear,
    modelYear
  } = data;

  if (!brand || !model || !manufactureYear || !modelYear) {
    throw new AppError(ERROR_MESSAGES.ALL_FIELDS_REQUIRED, 400);
  }

  vehicle.brand = brand;
  vehicle.model = model;
  vehicle.manufactureYear = manufactureYear;
  vehicle.modelYear = modelYear;

  repository.saveAll(vehicles);

  return vehicle;
};



const getVehicleById = (id) => {
  const vehicles = repository.getAll();

  const vehicle = vehicles.find(
    v => v.id === Number(id)
  );

  return vehicle;
};

const ensureVehicleExists = (id) => {
  const vehicle = getVehicleById(id);

  if (!vehicle) {
    throw new AppError(ERROR_MESSAGES.VEHICLE_NOT_FOUND, 404);
  }

  return vehicle;
};

module.exports = {
    getAllVehicles,
    createVehicle,
    getVehicleById,
    ensureVehicleExists,
    deleteVehicle,
    updateVehicle
};