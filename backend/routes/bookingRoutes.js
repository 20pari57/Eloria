const express = require("express");
const bookingValidation = require("../validation/bookingValidation");
const validate = require("../middleware/validationMiddleware");
const {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateBookingStatus,
  cancelBooking,
} = require("../controllers/bookingController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Customer
router.post("/", protect, bookingValidation, validate, createBooking);

router.get("/my-bookings", protect, getMyBookings);

router.put("/cancel/:id", protect, cancelBooking);

// Admin
router.get("/", protect, admin, getAllBookings);

router.put("/:id", protect, admin, bookingValidation, validate, updateBookingStatus);

module.exports = router;