require('dotenv').config();

const express = require("express");
const workoutRoutes = require('./routes/workouts');


// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log("Middleware executed");
    console.log("Method:", req.method);
    console.log("Path:", req.path);
    next();
});

// routes
app.use('/api/workouts',workoutRoutes);



// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);   
});

