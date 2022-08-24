var express = require("express");
var router = express.Router();
const User = require("../model/users");
const users = [];
const New = require("../model/newsletter");
const Job = require("../model/jobs");
const contact = require("../model/contactus");
/* GET home page. */
router.get("", (req, res, next) => {
  Job.find({}, (error, result) => {
    if (error) {
      console.log(error);
    }
    let jobGrid = [];
    let colGrid = 2;
    let cpt = 0;
    for (i = 0; i < result.length; i += colGrid) {
      if (cpt < 1) {
        jobGrid.push(result.slice(i, i + colGrid));
      }
      cpt++;
    }
    console.log(jobGrid);
    res.render("index", { items: jobGrid });
  });
});
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "HYNeed" });
});
router.get("/about", function (req, res, next) {
  res.render("about", { title: "HYNeed" });
});
router.get("/post-job", function (req, res, next) {
  res.render("post-job", { title: "HYNeed" });
});
router.get("/blog", function (req, res, next) {
  Job.find({}, (error, result) => {
    if (error) {
      console.log(error);

      res.render("error");
    }

    res.render("blog", { items: result });
  });
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

router.post("/subscribe", function (req, res, next) {
  const letter = new New({
    Mailuser: req.body.email,
  });
  letter.save((error, result) => {
    if (error) {
      console.log(error);
      res.redirect("/error");
      return;
    }
    console.log(result);
    res.redirect("/");
  });
});

router.post("/getcontact", function (req, res, next) {
  const cn = new contact({
    Name: req.body.contactname,
    Email: req.body.contactemail,
    Message: req.body.contactmessage,
  });
  cn.save((error, result) => {
    if (error) {
      console.log(error);
      res.redirect("/error");
      return;
    }
    console.log(result);
    res.redirect("/contact");
  });
});
router.post("/insert", function (req, res, next) {
  const user = new User({
    userName: req.body.username,
    userMail: req.body.usermail,
    userCountry: req.body.usercountry,
    userPassword: req.body.userpass,
  });

  user.save((error, result) => {
    if (error) {
      console.log(error);
      res.render("error");
      return;
    }
    console.log(result);
    res.redirect("/");
  });
});

router.post("/insertjob", function (req, res, next) {
  const job = new Job({
    JobTitle: req.body.titlejob,
    CompanyName: req.body.Companyname,
    CompanyEmail: req.body.emailcompany,
    Localisation: req.body.country,
    Skills: req.body.skills,
    Description: req.body.Description,
    PublishedDate: Date.now(),
    Category: req.body.categorie,
  });

  job.save((error, result) => {
    if (error) {
      console.log(error);
      res.redirect("/");
      return;
    }
    console.log(result);
    res.redirect("/");
  });
});

router.post("/getusers", (req, res, next) => {
  User.find({}, (error, result) => {
    if (error) {
      console.log(error);
      res.redirect("/error");
    }
    items = result;
    /*res.render("/", { items: result });*/
    if (
      items.userMail === req.body.username &&
      items.userPassword === req.body.userpassword
    ) {
      res.render("/", { items: result });
    }
  });
});
module.exports = router;
