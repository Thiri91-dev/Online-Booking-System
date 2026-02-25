const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");
const validate = require("../middleware/validate");
const bookingSchema = require("../validations/bookingValidation");
const protect = require("../middleware/authMiddleware");

router.post(
  "/",
  protect,
  validate(bookingSchema),
  bookingController.createBooking
);

router.get(
  "/:bookingNo",
  bookingController.getBookingByNo
);


module.exports = router;