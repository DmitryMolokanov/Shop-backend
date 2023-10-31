const express = require("express");
const orderRouter = express.Router();
const orderControllers = require("../controllers/orderControllers.js");

orderRouter.use("/add_order", orderControllers.addOrders);

module.exports = orderRouter;
