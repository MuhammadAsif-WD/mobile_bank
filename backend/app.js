const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// routes import
const userRoute = require("./routes/user.route");

// middleware
app.use(express.json());
app.use(cors());
// routes
app.use("/api/v1/user", userRoute);
// route hit
app.get("/", (req, res, next) => {
  res.send(
    `<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">Welcome To Our Gen Zam Bank Server...</h1>`
  );
});

module.exports = app;
