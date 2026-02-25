
const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  model: { type: String, required: true },
  vehicleNo: { type: String, required: true },
  specs: String,
  pricePerDay: { type: Number, required: true },
  imageUrl: String
});


// Prevent OverwriteModelError
module.exports = mongoose.models.Car || mongoose.model("Car", CarSchema);