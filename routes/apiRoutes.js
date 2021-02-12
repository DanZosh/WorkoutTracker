// const router = require("express").Router() //router method 2
const db = require("../models/Workout.js");

module.exports = function(app) { //router method 1
// router//router method 2
app//router method 1
//THIS IS FOR THE `getLastWorkout` function
    .get("/api/workouts",(req, res) => { 
            console.log("get request: /api/workouts from apiRoutes.js") 
        db.find({})
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
            console.log("req.body: ", req.body)
        db.findByIdAndUpdate( //find the WORKOUT by ID and update it by pushing the EXERCISE to the workout
            req.params.id, //`conditions`get the id
            {$push:{exercises:req.body}},  //`update` push the body of the webpage as a document to our Workout collection
            { new: true, //this gets the UPDATED document instead of the old version of the one that changed.
                runValidators:true} 

        )
        .then(dbWorkout => { //what the database gives me back - the object i created
                console.log("db.Workout.findbyIDandUpdate().then")
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(500).json(err);
            console.log(err)
        });
})

// router//router method 2
app//router method 1
//this is the `createWorkout` post function
.post("/api/workouts",(req,res) => { 
    // const newWorkout = {
    //     // day: Date.now,
    //     exercise: [req.body]
    // }
    console.log(req.body)
    db.create({})

    .then(dbWorkout => {
            console.log("db.Workout.create().then")
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(500).json(err);
    });
})

// router //router method 2
app//router method 1
//this is the `createWorkout` post function
.get("/api/workouts/range",(req,res) => {
    db.find({
        // minNum : { $gte :  50}, //this  is a placeholder
        // maxNum : { $lte :  100} //this  is a placeholder
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
