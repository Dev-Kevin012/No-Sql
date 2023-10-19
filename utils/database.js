const mongoose = require("mongoose");
const Database_URL = "mongodb://localhost:27017/shop";

const connectDb = async () => {
  try {
    await mongoose.connect(Database_URL);
    console.log("Database Connected!");
  } catch (error) {
    console.log("Database connection failed!", error);
  }
};

module.exports = connectDb;
