const express = require("express");
const userControllers = require("../controllers/userControllers.js");
const validation = require("../validation/validReg.js");
const userRouter = express.Router();

userRouter.use("/registration", validation.validReg, userControllers.addUser);
userRouter.use("/auth", userControllers.findUser);

module.exports = userRouter;
