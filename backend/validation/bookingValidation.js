const { body } = require("express-validator");


const bookingValidation = [

    body("service")
        .notEmpty()
        .withMessage("Service ID is required"),


    body("bookingDate")
        .notEmpty()
        .withMessage("Booking date is required"),


    body("bookingTime")
        .notEmpty()
        .withMessage("Booking time is required"),


    body("customerName")
        .trim()
        .notEmpty()
        .withMessage("Customer name is required"),


    body("email")
        .isEmail()
        .withMessage("Valid email is required"),


    body("phone")
        .isMobilePhone()
        .withMessage("Valid phone number is required"),

];


module.exports = bookingValidation;