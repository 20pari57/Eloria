const Booking = require("../models/Booking");
const sendEmail = require("../utils/sendEmail");

// ==========================
// Create Booking
// ==========================
const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user._id,
    });

    // Send Booking Confirmation Email
    await sendEmail({
      email: booking.email,
      subject: "Booking Confirmed 🎉",
      html: `
        <h2>Booking Confirmed</h2>

        <p>Hello <strong>${booking.customerName}</strong>,</p>

        <p>Your booking has been successfully confirmed.</p>

        <h3>Booking Details</h3>

        <ul>
          <li><strong>Date:</strong> ${booking.bookingDate}</li>
          <li><strong>Time:</strong> ${booking.bookingTime}</li>
          <li><strong>Total:</strong> ₹${booking.totalPrice}</li>
          <li><strong>Status:</strong> ${booking.status}</li>
        </ul>

        <p>Thank you for choosing <strong>Eloria Spa</strong>. We look forward to welcoming you!</p>
      `,
    });

    res.status(201).json({
      success: true,
      booking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Get Logged-in User Bookings
// ==========================
const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    })
      .populate("service")
      .populate("user", "name email");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Admin - Get All Bookings
// ==========================
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "name email")
      .populate("service");

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Booking Status
// ==========================
const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = req.body.status;

    await booking.save();

    res.status(200).json({
      success: true,
      booking,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Cancel Booking
// ==========================
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    booking.status = "Cancelled";

    await booking.save();

    // Send Cancellation Email
    await sendEmail({
      email: booking.email,
      subject: "Booking Cancelled ❌",
      html: `
        <h2>Booking Cancelled</h2>

        <p>Hello <strong>${booking.customerName}</strong>,</p>

        <p>Your booking has been cancelled successfully.</p>

        <p>If this was a mistake, you can make a new booking anytime through Eloria.</p>

        <p>Thank you.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getMyBookings,
  getAllBookings,
  updateBookingStatus,
  cancelBooking,
};