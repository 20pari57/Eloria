const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
require("dotenv").config();

const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const therapistRoutes = require("./routes/therapistRoutes");
const contactRoutes = require("./routes/contactRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const limiter = require("./middleware/rateLimiter");
const startServer = async () => {
  try {
    // Connect Database
    await connectDB();

    const app = express();

    // Middlewares
    app.use(cors(
      {
        origin: process.env.FRONTEND_URL,
        credentials: true,
      }
    ));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(helmet());
    app.use(limiter);
    // Serve Uploaded Images
    app.use(
      "/uploads",
      express.static(path.join(__dirname, "uploads"))
    );

    // Test Route
    app.get("/", (req, res) => {
      res.send(" Eloria Backend is Running...");
    });

    // API Routes
    app.use("/api/auth", authRoutes);
    app.use("/api/services", serviceRoutes);
    app.use("/api/bookings", bookingRoutes);
    app.use("/api/therapists", therapistRoutes);
    app.use("/api/contact", contactRoutes);
    app.use("/api/dashboard", dashboardRoutes);
    app.use("/api/users", userRoutes);

    // Error Handling Middleware
    app.use(errorMiddleware);

    // 404 Route
    app.use((req, res) => {
      res.status(404).json({
        success: false,
        message: "Route Not Found",
      });
    });

    // Start Server
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(` Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error.message);
  }
};

startServer();