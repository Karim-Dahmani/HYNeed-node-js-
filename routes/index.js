var express = require("express");
var router = express.Router();
const User = require("../model/users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "HYNeed" });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "HYNeed" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "HYNeed" });
});
router.get("/blog", function (req, res, next) {
  res.render("blog", { title: "HYNeed" });
});
router.get("/login", function (req, res, next) {
  res.render("login", { title: "HYNeed" });
});
router.get("/register", function (req, res, next) {
  res.render("register", { title: "HYNeed" });
});
router.get("/single-post", function (req, res, next) {
  res.render("single-post", { title: "HYNeed" });
});
router.post("/insert", function (req, res, next) {
  const user = new User({
    userName: req.body.username,
    userMail: req.body.usermail,
    userCountry: req.body.usercountry,
    userPassword: req.body.userpass,
  });
});
module.exports = router;
