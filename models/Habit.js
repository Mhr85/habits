const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: String,
  progress: { type: Number, default: 0 }
});

const Habit = mongoose.model("Habit", habitSchema);

module.exports = Habit;