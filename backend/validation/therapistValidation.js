const { body } = require("express-validator");


const therapistValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Therapist name is required"),


    body("email")
        .isEmail()
        .withMessage("Valid email is required"),


    body("phone")
        .isMobilePhone()
        .withMessage("Valid phone number is required"),


    body("specialization")
        .trim()
        .notEmpty()
        .withMessage("Specialization is required"),


    body("experience")
        .notEmpty()
        .withMessage("Experience is required")
        .isNumeric()
        .withMessage("Experience must be a number"),


    body("bio")
        .trim()
        .isLength({ min: 10 })
        .withMessage("Bio must be at least 10 characters"),

];


module.exports = therapistValidation;