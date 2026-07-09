const User = require("../models/User");
const Booking = require("../models/Booking");
const Service = require("../models/Service");
const Therapist = require("../models/Therapist");
const Contact = require("../models/Contact");

const getDashboardStats = async (req, res) => {
  try {

    const totalUsers = await User.countDocuments();

    const totalBookings = await Booking.countDocuments();

    const totalServices = await Service.countDocuments();

    const totalTherapists = await Therapist.countDocuments();

    const totalMessages = await Contact.countDocuments();

    const pendingBookings = await Booking.countDocuments({
      status: "Pending",
    });

    const confirmedBookings = await Booking.countDocuments({
      status: "Confirmed",
    });

    const completedBookings = await Booking.countDocuments({
      status: "Completed",
    });

    const cancelledBookings = await Booking.countDocuments({
      status: "Cancelled",
    });

    const revenue = await Booking.aggregate([
      {
        $match: {
          status: "Completed",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$totalPrice",
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,

      dashboard: {
        totalUsers,
        totalBookings,
        totalServices,
        totalTherapists,
        totalMessages,

        pendingBookings,
        confirmedBookings,
        completedBookings,
        cancelledBookings,

        totalRevenue:
          revenue.length > 0 ? revenue[0].totalRevenue : 0,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getDashboardStats,
};