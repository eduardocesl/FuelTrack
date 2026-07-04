const FUEL_TYPES = require('../constants/fuelTypes');
const { z } = require('zod');

const FuelingSchema = z.object({
  vehicleId: z.number(),

  date: z.string(),

fuelType: z.string().refine(
  value => FUEL_TYPES.includes(value),
  {
    message: 'Invalid fuel type'
  }
),


  liters: z.number().positive(),

  totalCost: z.number().positive(),

  odometer: z.number().nonnegative()
});

module.exports = FuelingSchema;