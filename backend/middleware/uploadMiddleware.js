const multer = require("multer");
const path = require("path");
const fs = require("fs");
const createFolder = (folderPath) =>{
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true});
}
}

// Storage Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        let folder = "uploads/";

        if (req.baseUrl.includes("users")) {
            folder += "profile/";
        }
        else if (req.baseUrl.includes("services")) {
            folder += "services/";
        }
        else if (req.baseUrl.includes("therapists")) {
            folder += "therapists/";
        }

        cb(null, folder);
    },

    filename: (req, file, cb) => {

        const uniqueName =
            Date.now() + "-" + Math.round(Math.random() * 1E9);

        cb(
            null,
            uniqueName + path.extname(file.originalname)
        );
    }
});

// Allow only images
const fileFilter = (req, file, cb) => {

    const allowedTypes = /jpeg|jpg|png|webp/;

    const isValid =
        allowedTypes.test(file.mimetype);

    if (isValid) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"));
    }

};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 } // 2 MB limit
});

module.exports = upload;