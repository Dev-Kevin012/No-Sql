const express = require("express");
const productRoutes = require("./routes/product");
const adminRoutes = require("./routes/admin");
const { connectDb } = require("./utils/database");
const app = express();

app.use(express.json());
app.use("/product", productRoutes);
app.use("/admin/product", adminRoutes);

connectDb(() => {
  app.listen(3000, () => console.log("Server running on Port: 3000"));
});
