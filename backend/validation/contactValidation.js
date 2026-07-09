const { body } = require("express-validator");


const contactValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),


    body("email")
        .isEmail()
        .withMessage("Valid email is required"),


    body("phone")
        .isMobilePhone()
        .withMessage("Valid phone number is required"),


    body("message")
        .trim()
        .isLength({ min: 10 })
        .withMessage("Message must be at least 10 characters"),

];


module.exports = contactValidation;