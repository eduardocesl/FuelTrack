const express = require('express');
const fuelRoutes = require('./routes/fuel.routes');

const app = express();

app.use(express.json());

// Rotas
app.use('/fuel', fuelRoutes);


app.get('/', (req, res) => {
  res.json({ message: 'FuelTrack API funcionando' });
});

module.exports = app;