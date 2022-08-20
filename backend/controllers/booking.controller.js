const Booking = require("../models/booking.model");
const User = require("../models/user.model");

module.exports.createBooking = async (req, res) => {
  const { name, email, mobile, date, member, userId } = req.body;
  try {
    const booking = await Booking.create({
      userId,
      name,
      email,
      mobile,
      date,
      member,
    });
    return res
      .status(200)
      .json({ msg: "Your travel place has been booked successfully", booking });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

module.exports.getAllBooking = async (req, res) => {
  try {
    const allBooking = await Booking.find({});
    return res.status(200).json(allBooking);
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

module.exports.getUserAllBooking = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(500).json("User not found.");
    }
    const bookings = await Booking.find({ userId: user._id }).sort({
      updatedAt: -1,
    });

    res.status(200).json({
      success: true,
      bookings,
    });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};
