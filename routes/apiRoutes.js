// const router = require("express").Router() //router method 2
const db = require("../models");

module.exports = function(app) { //router method 1
// router//router method 2
app//router method 1
//THIS IS FOR THE `getLastWorkout` function
    .get("/api/workouts",(req,res) => { 
            console.log("get request: /api/workouts from apiRoutes.js") //why cant i see this?
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
// router//router method 2
app//router method 1
//THIS IS FOR THE `addExercise` put function
    .put("/api/workouts/:id", function (req,res){ 
            console.log("get request: /api/workouts from apiRoutes.js")
        db.Workout.findByIdAndUpdate( //find the WORKOUT by ID and update it by pushing the EXERCISE to the workout
            req.params.id, //`conditions`get the id
            {$push:{exercises:req.body}},  //`update` push the body of the webpage as a document to our Workout collection
            { new: true }
        )
        .then(dbWorkout => {
                console.log("db.Workout.findbyIDandUpdate().then")
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
})

// router//router method 2
app//router method 1
//this is the `createWorkout` post function
.post("/api/workouts",(req,res) => { 
    db.Workout.create(req.body)
    .then(dbWorkout => {
            console.log("db.Workout.create().then")
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
})

// router //router method 2
app//router method 1
//this is the `createWorkout` post function
.get("/api/workouts/range",(req,res) => {
    db.Workout.find({
        minNum : { $gte :  50},
        maxNum : { $lte :  100}
    })
    .then(dbWorkout => {
            console.log("db.Workout.find().then")
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
}) //router method 1
}
// module.exports = router; //router method 2
