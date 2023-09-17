const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: Number,
    required: true,
    trim: true,
  },
  confPassword: {
    type: Number,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
