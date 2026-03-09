const express = require("express");
const router = express.Router();

const carController = require("../controllers/carController");

router.get("/", carController.getCars);
router.get("/:vehicleNo",carController.getCarsByvehicleNo);

module.exports = router;