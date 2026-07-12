const express = require('express');

const router = express.Router();


// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: "GET all workouts"});
});

//GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: "GET a single workout"})
});

//POST a new workout
router.post('/', (req, res) => {

});

module.exports = router;