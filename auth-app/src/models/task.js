const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  dueDate: { type: Date, required: true },
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Task", taskSchema);
