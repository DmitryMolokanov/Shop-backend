const express = require("express");
const userRouter = require("./routes/userRouter.js");
const validation = require("../backend/validation/validReg.js");

const app = express();
app.use(express.json());

app.use("/user", validation.validReg, userRouter);

app.listen(5000, () => console.log("server stated"));
