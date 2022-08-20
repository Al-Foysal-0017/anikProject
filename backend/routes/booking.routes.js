const app = require("express");
const {
  getAllBooking,
  createBooking,
  getUserAllBooking,
} = require("../controllers/booking.controller");
const router = app.Router();

router.post("/create/bookig", createBooking);
router.get("/allbooking", getAllBooking);
router.get("/allbooking/:id", getUserAllBooking);
module.exports = router;
