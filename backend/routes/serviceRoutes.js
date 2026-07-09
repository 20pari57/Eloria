const express = require("express");
const serviceValidation = require("../validation/serviceValidation");

const validate = require("../middleware/validationMiddleware");
const {
  getServices,
  getService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/serviceController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();


// Public Routes


// Get all services
router.get("/", getServices);

// Get single service
router.get("/:id", getService);

// Admin Routes


// Create service with image upload
router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  createService
);

// Update service
router.put("/:id", protect, admin, serviceValidation, validate, updateService);

// Delete service
router.delete("/:id", protect, admin, serviceValidation, validate, deleteService);

module.exports = router;