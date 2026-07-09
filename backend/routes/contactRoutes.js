const express = require("express");
const contactValidation = require("../validation/contactValidation");

const validate = require("../middleware/validationMiddleware");
const {
  createContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public
router.post("/", contactValidation, validate, createContact);

// Admin
router.get("/", protect, admin, getContacts);
router.get("/:id", protect, admin, getContact);
router.put("/:id", protect, admin, contactValidation, validate, updateContactStatus);
router.delete("/:id", protect, admin, deleteContact);

module.exports = router;