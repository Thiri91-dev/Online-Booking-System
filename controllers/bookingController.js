const Booking = require("../models/Booking");
const Car = require("../models/Car");
const { v4: uuidv4 } = require("uuid");

exports.createBooking = async (req, res) => {
  try {
    const { carId, customerName, startDate, endDate } = req.body;

    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    const booking = new Booking({
      bookingNo: uuidv4().slice(0, 8).toUpperCase(),
      customerName,
      carId,
      vehicleNo: car.vehicleNo,
      specs: car.specs,
      rentalRate: car.pricePerDay,
      startDate,
      endDate
    });

    await booking.save();

    res.status(201).json(booking);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.getBookingByNo = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      bookingNo: req.params.bookingNo
    });

    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }

    res.json(booking);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};