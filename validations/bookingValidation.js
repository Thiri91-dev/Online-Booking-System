const Joi = require("joi");

const bookingSchema = Joi.object({
  carId: Joi.string().length(24).hex().required(),
  customerName: Joi.string().min(2).max(100).required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().greater(Joi.ref("startDate")).required()
});

module.exports = bookingSchema;