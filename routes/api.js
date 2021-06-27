//creates the connection to all the files 
const router = require('express').Router();
//brings in the Workout model
const Workout = require('../Models/workout.js')

// tis shows the last workout info
router.get("/api/workouts", (req, res) => {
    // console.log('MADE IT HERE');
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:{
                    $sum:'$exercises.duration'
                }
            }
        }
    ])
    .then( (Workoutdb) => {
        // console.log(Workoutdb)
        res.json(Workoutdb)
    })
    .catch((err) => {
        // console.log(err)
        res.json(err)
    })

});

// this finds by id and updates the exercises 
router.put("/api/workouts/:id", (req, res) =>{
    // console.log(req.params.id);
    // console.log(req.body);
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push:{exercises: req.body}},
        // it's a new workout and we'll check to make sure
        // it meets schema requirements
        {new: true, runValidators: true}
    )
    .then((Workoutdb) => {
    
        res.json(Workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })

});

//this creates and posts the workout 
router.post("/api/workouts", (req, res) => {
    Workout.create ({})
    .then((Workoutdb) => {
        res.json(Workoutdb)
    })
    .catch((err) => {
        res.json(err)
    })
}
)

// this renders the workout stats and adds all the feilds to the chart.js and gives the totols over 9 days 
router.get("/api/workouts/range", (req, res) => {
    // console.log('MADE IT HERE');
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:{
                    $sum:'$exercises.duration'
                }
            }
        }
    ])
    .then( (Workoutdb) => {
        // console.log(Workoutdb)
        res.json(Workoutdb)
    })
    .catch((err) => {
        // console.log(err)
        res.json(err)
    })

});

module.exports = router;
 
