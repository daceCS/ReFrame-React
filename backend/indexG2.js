require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const accountRoutes = require("./routes/AccountsRoutes");

//express app
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/accounts", accountRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Database live and running on port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });