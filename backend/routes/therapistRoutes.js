const express = require("express");
const therapistValidation = require("../validation/therapistValidation");

const validate = require("../middleware/validationMiddleware");
const {
  getTherapists,
  getTherapist,
  createTherapist,
  updateTherapist,
  deleteTherapist,
} = require("../controllers/therapistController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.get("/", getTherapists);
router.get("/:id", getTherapist);

// Admin
router.post("/", protect, admin, therapistValidation, validate, upload.single("image"), createTherapist);
router.put("/:id", protect, admin, therapistValidation, validate, upload.single("image"), updateTherapist);
router.delete("/:id", protect, admin, therapistValidation, validate, upload.single("image"), deleteTherapist);

module.exports = router;