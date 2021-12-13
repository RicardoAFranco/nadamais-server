const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: Number, default: 0 },
  cart: { type: Array, default: [] }
}, {
  timestamps: true
});

module.exports = model("Users", userSchema);
