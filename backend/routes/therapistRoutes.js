const express = require("express");

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
router.post("/", protect, admin, createTherapist);
router.put("/:id", protect, admin, updateTherapist);
router.delete("/:id", protect, admin, deleteTherapist);

module.exports = router;