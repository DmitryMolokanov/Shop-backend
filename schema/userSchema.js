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
    type: String,
    required: true,
    trim: true,
  },
  confPassword: {
    type: String,
    required: true,
    trim: true,
  },
  purchases: {
    type: Array,
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
