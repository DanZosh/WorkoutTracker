//this should contain a day and a series of exercises i think

// // START ATTEMPT1
// const mongoose = require("mongoose");
// const Schema = mongoose.Schema; //PULL OUT SCHEMA FROM THE MONGOOSE OBJECT mongoose.schema also works
// const {exerciseSchema} = require("./Exercise")

// const WorkoutSchema = new Schema({
//     day: {
//         type:Date,
//         default:Date.now
//     },
//     exercises:[//i want to hold an array of exercises
//         // {
//         //     type:Schema.Types.ObjectId,
//         //     ref: "Exercises"
//         // }
//         exerciseSchema
//     ]
// },{ toJSON: { virtuals: true } }); //this will allow us to compile the time and weight

// const Workout = mongoose.model("Workout", WorkoutSchema);
// module.exports = Workout



// // END ATTEMPT1

// START ATTEMPT2
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    day:{
        type:Date,
        default:Date.now
    },
    exercises:[//i want to hold an array of exercises
        {
            type: { //before the workout type was being read as a keyword or something.
                type:String,
                required:true
            },
            name: String,
            duration:Number, 
            weight: Number,
            reps: Number,
            sets: Number,
            distance:Number
        }
    ]
},{ toJSON: { virtuals: true } });

// insert virtual schema here to compile time and weight


const Workout = mongoose.model("Workout", WorkoutSchema); //create the model
module.exports = Workout
// END ATTEMPT 2

