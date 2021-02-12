const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const options = {toJson: {virtuals:true}}
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
},options);


exerciseSchema.virtual('totalDuration').get(function() { //I want to compile the duration
    array = this.exercises
    return array.reduce((total, exercise) =>{
        return total + exercise.duration
    },0) //return 0 if the workout hasn't started yet

  });
const Exercises = mongoose.model("Exercises", exerciseSchema);
// mongoose.model.exports = Exercises
module.exports = {Exercises, exerciseSchema}