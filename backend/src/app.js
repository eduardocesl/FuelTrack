const express = require('express');
const cors = require('cors');

const fuelRoutes = require('./routes/fuel.routes');
const vehicleRoutes = require('./routes/vehicles.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use('/fuel', fuelRoutes);
app.use('/vehicles', vehicleRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'FuelTrack API funcionando' });
});

app.use(errorHandler);

module.exports = app;