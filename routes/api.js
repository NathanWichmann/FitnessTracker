const router = require('express').Router();
const Workout = require('../models/workout.js')


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
 
