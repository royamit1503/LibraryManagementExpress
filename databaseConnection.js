const mongoose = require('mongoose');
require('dotenv').config(); // Ensure environment variables are loaded

async function DbConnection() {
    const DB_URL = process.env.MONGO_URI;

    if (!DB_URL) {
        console.error("❌ MONGO_URI is not defined in .env file.");
        process.exit(1);
    }

    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ MongoDB connected successfully.");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        process.exit(1); // Stop the app if DB not connected
    }
}

module.exports = DbConnection;
