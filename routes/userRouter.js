const express = require("express");
const userControllers = require("../controllers/userControllers.js");
const validation = require("../validation/validReg.js");
const userRouter = express.Router();

userRouter.use("/registration", validation.validReg, userControllers.addUser);
userRouter.use("/auth", userControllers.findUser);
userRouter.use("/payment", userControllers.payment);
userRouter.use("/get_all_purchases", userControllers.getAllPurchases);

module.exports = userRouter;
