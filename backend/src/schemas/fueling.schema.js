const { z } = require('zod');

const FuelingSchema = z.object({
  vehicleId: z.number(),

  date: z.string(),

  fuelType: z.enum([
    'Gasoline',
    'Ethanol',
    'Diesel',
    'CNG'
  ]),

  liters: z.number().positive(),

  totalCost: z.number().positive(),

  odometer: z.number().nonnegative()
});

module.exports = FuelingSchema;