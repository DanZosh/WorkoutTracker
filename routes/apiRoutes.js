// const router = require("express").Router() //router method 2
const db = require("../models");

module.exports = function(app) { //router method 1
// router//router method 2
app//router method 1
.get("/api/workouts",(req,res) => { //this is the
    console.log("test") //why cant i see this?
    db.Workout.find({})
    .then(dbWorkout => {
        console.log("db.Workout.find().then")
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
    }
)

// router.put("/api/workouts",() => { //this is the put

// }
// )

// router.post("/api/workouts",() => { //this is the post

// }
// )

// router.get("/api/workouts",() => { //this is the post

// }
// )
} //router method 1
// module.exports = router; //router method 2
