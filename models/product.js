const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/database");

class Product {
  constructor(title, price, description, imageUrl, _id) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = _id;
  }
  save() {
    const db = getDb();
    if (this._id) {
      const productData = {
        title: this.title,
        price: this.price,
        description: this.description,
        imageUrl: this.imageUrl,
      };
      return db
        .collection("products")
        .updateOne(
          { _id: new ObjectId(this._id) },
          {
            $set: productData,
          }
        )
        .then((result) => {
          console.log("Data Updated Successfuly!", result);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return db
        .collection("products")
        .insertOne(this)
        .then((result) => {
          console.log("Data Inserted Successfuly!", result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  static fetchAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static fetchbyId(prodId) {
    const db = getDb();
    const objectId = new ObjectId(prodId);
    return db
      .collection("products")
      .find({ _id: objectId })
      .next()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static deleteById(prodId) {
    if (!prodId) {
      return Promise.reject(new Error("Product does not have a valid _id."));
    }

    const db = getDb();
    return db
      .collection("products")
      .deleteOne({ _id: new ObjectId(prodId) })
      .then((result) => {
        if (result.deletedCount === 1) {
          console.log("Product deleted successfully");
          return true;
        } else {
          console.log("Product not found or already deleted");
          return false;
        }
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
}

module.exports = Product;
