const express = require('express');
const fuelRoutes = require('./routes/fuel.routes');
const vehicleRoutes = require('./routes/vehicles.routes');

const app = express();

app.use(express.json());

// Routes
app.use('/fuel', fuelRoutes);
app.use('/vehicles', vehicleRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'FuelTrack API funcionando' });
});

module.exports = app;