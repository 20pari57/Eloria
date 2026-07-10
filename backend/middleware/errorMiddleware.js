const errorMiddleware = (err, req, res, next) => {

    console.error(err.stack);


    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;


    let message = err.message || "Server Error";


    // MongoDB Invalid ID Error
    if (err.name === "CastError") {

        statusCode = 404;

        message = "Resource not found";

    }


    // Duplicate MongoDB Data
    if (err.code === 11000) {

        statusCode = 400;

        message = "Duplicate field value entered";

    }


    // JWT Error
    if (err.name === "JsonWebTokenError") {

        statusCode = 401;

        message = "Invalid token";

    }


    // JWT Expired
    if (err.name === "TokenExpiredError") {

        statusCode = 401;

        message = "Token expired";

    }


    res.status(statusCode).json({

        success: false,

        message,

    });

};


module.exports = errorMiddleware;