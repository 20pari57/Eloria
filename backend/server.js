const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");

const startServer = async () => {
    const dbReady = await connectDB();
const authRoutes = require("./routes/authRoutes");
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/api/auth", authRoutes);

    app.get("/", (req, res) => {
        res.send("Backend working");
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
       
    });
};

startServer();