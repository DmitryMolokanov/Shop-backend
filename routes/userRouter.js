const express = require("express");
const userControllers = require("../controllers/userControllers.js");
const userRouter = express.Router();

userRouter.use("/registration", userControllers.addUser);

module.exports = userRouter;
