const app = require("express");
const router = app.Router();

const { register, login } = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", login);
module.exports = router;
