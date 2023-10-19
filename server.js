const express = require("express");
const productRoute = require("./routes/product");
const { connectDb } = require("./utils/database");
const app = express();

app.use(express.json());
app.use(productRoute);

connectDb(() => {
  app.listen(3000, () => console.log("Server running on Port: 3000"));
});
