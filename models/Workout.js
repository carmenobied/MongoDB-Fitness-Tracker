// Create models schema using mongoose 
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
        type: Date,
        default: new Date().setDate(new Date().getDate()),
      },
  activity: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  duration: {
    type: Number,
    required: "Enter exercise duration time"
  },
  distance: {
    type: Number,
    required: "Enter exercise distance"
  },
  weight: {
    type: Number,
    required: "Enter weight"
  },
  reps: {
    type: Number,
    required: "Enter number of reps"
  },
  sets: {
    type: Number,
    required: "Enter number of sets"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;