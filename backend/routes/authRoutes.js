const express = require("express");

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
router.post("/login", loginValidation, validate, loginUser);
router.get("/profile", getUserProfile);

module.exports = router;