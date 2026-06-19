const fs = require('fs');
const path = require('path');

const vehiclesFilePath = path.join(
  __dirname,
  '../data/vehicles.json'
);

const getAll = () => {
  const data = fs.readFileSync(vehiclesFilePath, 'utf-8');
  return JSON.parse(data);
};

const saveAll = (vehicles) => {
  fs.writeFileSync(
    vehiclesFilePath,
    JSON.stringify(vehicles, null, 2),
    'utf-8'
  );
};

module.exports = {
  getAll,
  saveAll
};