const { check, validationResult } = require("express-validator");

exports.validReg = [
  check("name")
    .isLength({ min: 3 })
    .withMessage("The name must contain at least 3 characters"),
  check("email").isEmail().normalizeEmail().withMessage("Invalid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("The password must contain at least 6 characters"),
  check("confPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("confirm password does not match");
    }
    return { success: true };
  }),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    } else {
      res.status(200).json({ success: true });
      next();
    }
  },
];
