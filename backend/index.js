const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const authRouter = require("./routes/user.routes");
const bookingRouter = require("./routes/booking.routes");

// Config dotev
require("dotenv").config({
  path: "./.env",
});

app.use(cors());

app.use(bodyParser.json());

// Connect DataBase
connect();

app.get("/", function (req, res) {
  res.json({ msg: "App is Running!!!" });
});

// Router
app.use("/api", authRouter);
app.use("/api", bookingRouter);

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
  console.log(`Your app running successfully on port:${PORT}`);
});
