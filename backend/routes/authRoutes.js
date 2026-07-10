const express = require("express");
const authLimiter = require("../middleware/authLimiter")
const {
    registerUser,
    loginUser,
    getUserProfile
} = require("../controllers/authController");

const {
    registerValidation,
    loginValidation,
} = require("../validation/authValidation");

const validate = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/register", registerValidation, validate, registerUser);
// router.put("/profile", getUserProfile);
//  router.delete("/profile", getUserProfile);
router.post("/login", authLimiter, loginValidation, validate, loginUser);
router.get("/profile", getUserProfile);

module.exports = router;