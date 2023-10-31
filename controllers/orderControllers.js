const { default: mongoose } = require("mongoose");
const orderSchema = require("../schema/orderSchema.js");

exports.addOrders = async function (req, res) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Shop");
    const order = orderSchema({
      adress: req.body.adress,
      phone: req.body.phone,
      email: req.body.email,
      cardNumber: req.body.cardNumber,
      monthYear: req.body.monthYear,
      cvc: req.body.cvc,
      date: req.body.date,
      products: req.body.products,
      total_cost: req.body.total_cost,
    });
    const saveOrder = await order.save();
    if (saveOrder._id) {
      res.send({ success: true });
    } else res.send({ success: false });
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.disconnect();
  }
};
