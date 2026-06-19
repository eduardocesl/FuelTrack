const repository = require('../repositories/vehicles.repository');

let vehicles = [
    { 
        id: 1,
        brand: 'Chevrolet',
        model: 'Onix Plus',
        manufactureYear: 2022,
        modelYear: 2023
    }
];

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
    throw new Error('Vehicle not found');
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
    throw new Error('Vehicle not found');
  }

  const {
    brand,
    model,
    manufactureYear,
    modelYear
  } = data;

  if (!brand || !model || !manufactureYear || !modelYear) {
    throw new Error('All fields are required');
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

module.exports = {
    getAllVehicles,
    createVehicle,
    getVehicleById,
    deleteVehicle,
    updateVehicle
};