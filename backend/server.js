require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const workoutRoutes = require("./routes/workoutRoutes");

// express app
const app = express();

app.use(cors())

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log("Middleware executed");
  console.log("Method:", req.method);
  console.log("Path:", req.path);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_LOCAL)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB");
      console.log(`Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

/*// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);   
});*/
