const { z } = require('zod');

const currentYear = new Date().getFullYear();

const VehicleSchema = z.object({
  brand: z
    .string()
    .min(2, 'Brand must have at least 2 characters'),

  model: z
    .string()
    .min(1, 'Model is required'),

  manufactureYear: z
    .number()
    .min(1900, 'Manufacture year must be greater than 1900')
    .max(
      currentYear + 1,
      `Manufacture year cannot be greater than ${currentYear + 1}`
    ),

  modelYear: z
    .number()
    .min(1900, 'Model year must be greater than 1900')
    .max(
      currentYear + 2,
      `Model year cannot be greater than ${currentYear + 2}`
    )
})
.refine(
  data => data.modelYear >= data.manufactureYear,
  {
    message: 'Model year cannot be less than manufacture year',
    path: ['modelYear']
  }
);

module.exports = VehicleSchema;