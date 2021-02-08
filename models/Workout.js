//this should contain a day and a series of exercises i think

// START ATTEMPT1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day: Date,
    exercise:[//i want to hold an array of exercises
        {
            type:Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout
// END ATTEMPT1
// // START ATTEMPT2
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const WorkoutSchema = new Schema({
//     day: Date,
//     exercises:[//i want to hold an array of exercises
//         {
//             type: String,
//             name: String,
//             duration:Number, 
//             weight: Number,
//             reps: Number,
//             sets: Number,
//             distance:Number
//         }
//     ]
// });

// const Workout = mongoose.model("Workout", WorkoutSchema);
// module.exports = Workout
// // END ATTEMPT 2