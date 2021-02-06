//this should contain a day and a series of exercises i think

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: Date,
    exercise:[//i want to hold an array of exercises
        {
            type:Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout