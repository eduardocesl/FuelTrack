const fs = require('fs');
const path = require('path');

const fuelingsFilePath = path.join(
  __dirname,
  '../data/fuelings.json'
);

const getAllFuelings = () => {
  const data = fs.readFileSync(
    fuelingsFilePath,
    'utf-8'
  );

  return JSON.parse(data);
};

const saveAllFuelings = (fuelings) => {
  fs.writeFileSync(
    fuelingsFilePath,
    JSON.stringify(fuelings, null, 2),
    'utf-8'
  );
};

module.exports = {
  getAllFuelings,
  saveAllFuelings
};