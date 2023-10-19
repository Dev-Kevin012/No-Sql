const mongoDb = require("mongodb");
const mongoClient = mongoDb.MongoClient;
const Database_URL = "mongodb://localhost:27017/shop";

let _db;

const connectDb = (callback) => {
  mongoClient
    .connect(Database_URL)
    .then((result) => {
      console.log("Database Connected!");
      _db = result.db();
      callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  return null;
};

module.exports = { connectDb, getDb };
