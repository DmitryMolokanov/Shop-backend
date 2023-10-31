const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = {
  adress: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  cardNumber: {
    type: String,
    trim: true,
  },
  monthYear: {
    type: String,
    trim: true,
  },
  cvc: {
    type: String,
    trim: true,
  },
  date: {
    type: String,
    trim: true,
  },
  products: {
    type: Array,
    trim: true,
  },
  total_cost: {
    type: String,
    trim: true,
  },
};
module.exports = mongoose.model("Order", orderSchema);
