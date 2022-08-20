const { model, Schema } = require("mongoose");

const bookingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please Enter Your Name."],
    },
    email: {
      type: String,
      required: [true, "Please Enter Your Email."],
    },
    mobile: {
      type: String,
      required: [true, "Please Enter Your Mobile Number."],
    },
    date: {
      type: String,
      required: [true, "Please Choose Your Travel Date."],
    },
    member: {
      type: String,
      required: [true, "Please Select How Many Numbers Do You Have!!"],
    },
  },
  { timestamps: true }
);
module.exports = model("booking", bookingSchema);
