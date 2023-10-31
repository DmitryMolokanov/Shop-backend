const express = require("express");
const userRouter = require("./routes/userRouter.js");
const orderRouter = require("./routes/orderRouter.js");

const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/order", orderRouter);
app.listen(5000, () => console.log("server stated"));
