
const Car = require("../models/Car");

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();
    console.log("Cars fetched:", cars);

    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.getCarsByvehicleNo = async (req, res) => {
  try {
    const car = await Car.findOne({
        vehicleNo: req.params.vehicleNo
    });

    if (!car) {
      return res.status(404).json({ error: "car not found" });
    }

    res.json(car);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};