const express = require("express");
const app = express();
const port = 5000;

// middelwares
app.use(express.json());

// MongoDB Settings
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/Store")
  .then(() => {
    console.log("MongoDB server is running ....");
  })
  .catch(() => {
    console.log("MongoDB server is down");
  });

// Routes

const products = require("./routes/product");
app.use("/api/products", products);

/// server listen
app.listen(port, () => {
  console.log(
    `running on : http://localhost:${port}/  \nserver is running ...`
  );
});
