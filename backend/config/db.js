const mongoose = require("mongoose");
// require("dotenv").config();

module.exports = connect = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("connection created to Mongodb");
  } catch (error) {
    console.log(error);
  }
};
