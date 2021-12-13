const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true, trim: true, unique: true },
}, {
  timestamps: true
});

module.exports = model("Category", categorySchema);
