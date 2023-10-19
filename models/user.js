const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/database");

class User {
  constructor(email, password, name) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log("User created successfuly!", result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchbyId(userId) {
    return db
      .collection("users")
      .find({ _id: new ObjectId(userId) })
      .next()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
