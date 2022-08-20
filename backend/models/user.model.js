const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Your Name."],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);
module.exports = model("user", UserSchema);
