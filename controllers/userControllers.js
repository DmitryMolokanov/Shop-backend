const { default: mongoose } = require("mongoose");
const userSchema = require("../schema/userSchema.js");

exports.addUser = async function (req, res) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Shop");
    const user = new userSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confPassword: req.body.confPassword,
    });
    await user.save();
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.disconnect();
  }
};

exports.findUser = async function (req, res) {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Shop");
    const user = await userSchema.findOne({
      email: req.body.email,
    });
    if (user !== null && user.password === req.body.password) {
      res.send(
        JSON.stringify({ user: user.name, email: user.email, success: true })
      );
    } else res.send(JSON.stringify({ success: false }));
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.disconnect();
  }
};
