
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
