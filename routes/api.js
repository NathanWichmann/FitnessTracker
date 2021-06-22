const router = require('express').Router();
const Workout = require('../models/workout.js')


router.get("/api/workouts", (req, res) => {
    console.log('MADE IT HERE');
    Workout.aggregate([
        {
            $addFields: {
                totalDuration:{
                    $sum:'$exercise.duration'
                }
            }
        }
    ])
    .then( (dbWorkout) => {
        console.log(dbWorkout)
        res.json(dbWorkout)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    })

});

router.put("/api/workouts/:id", (req, res) =>{
    console.log(req.params.id);
    console.log(req.body);
    Workout.findByIdAndUpdate(
        req.params.id,
        {$push:{exercises:req.body}}
    )
    .then((dbWorkout) => {
        res.json(dbWorkout)
    })
    .catch((err) => {
        res.json(err)
    })

})


module.exports = router;
 
