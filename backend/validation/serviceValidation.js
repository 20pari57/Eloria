const { body } = require("express-validator");


const serviceValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Service name is required"),


    body("description")
        .trim()
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters"),


    body("price")
        .notEmpty()
        .withMessage("Price is required")
        .isNumeric()
        .withMessage("Price must be a number"),


    body("duration")
        .notEmpty()
        .withMessage("Duration is required"),


    body("category")
        .trim()
        .notEmpty()
        .withMessage("Category is required"),

];


module.exports = serviceValidation;