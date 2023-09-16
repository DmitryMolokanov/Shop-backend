const express = require("express");
const userRouter = require("./routes/userRouter.js");

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.listen(5000, () => console.log("server stated"));