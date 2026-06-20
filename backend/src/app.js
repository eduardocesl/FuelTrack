const express = require('express');
const fuelRoutes = require('./routes/fuel.routes');
const vehicleRoutes = require('./routes/vehicles.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// Routes
app.use('/fuel', fuelRoutes);
app.use('/vehicles', vehicleRoutes);
app.use(errorHandler);


app.get('/', (req, res) => {
  res.json({ message: 'FuelTrack API funcionando' });
});

module.exports = app;