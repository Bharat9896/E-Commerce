var express = require("express");
var router = express.Router();
const {  registerUser,verifyUser } = require("../controlers/auth");

/* GET login page. */
// router.get("/login", function (req, res, next) {
//   console.log("inside /auth/login");
//   res.render("login", { error: "", success: "" });
// });
router.post("/login", verifyUser);

// /* GET signup page. */
// router.get("/signup", function (req, res, next) {
//   console.log("inside /auth/signup");
//   res.render("signup", { error: "", success: "" });
// });
router.post("/signup", registerUser);

module.exports = router;
