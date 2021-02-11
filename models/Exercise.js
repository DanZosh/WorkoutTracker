const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
    type: {
        type:String,
        required:true},
    name: String,
    duration:Number, 
    weight: Number,
    reps: Number,
    sets: Number,
    distance:Number,
});

const Exercises = mongoose.model("Exercises", exerciseSchema);
// mongoose.model.exports = Exercises
module.exports = {Exercises, exerciseSchema}