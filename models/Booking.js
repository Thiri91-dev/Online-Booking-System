
const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    bookingNo: { type: String, required: true },
    customerName: { type: String, required: true },
    carId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
      required: true
    },
    vehicleNo: String,
    specs: String,
    rentalRate: Number,
    startDate: Date,
    endDate: Date
  },
  { timestamps: true }
);

// prevents OverwriteModelError
module.exports = mongoose.models.Booking || mongoose.model("Booking", BookingSchema);

