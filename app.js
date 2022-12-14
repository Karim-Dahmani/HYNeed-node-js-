var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const dbURL =
  "mongodb+srv://karim:karim291101@hyneed.j4huu4l.mongodb.net/hyneed?retryWrites=true&w=majority";
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  "mongodb://localhost/hlpyeed",
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("connected");
  }
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/about", indexRouter);
app.use("/contact", indexRouter);
app.use("/blog", indexRouter);
app.use("/register", indexRouter);
app.use("/login", indexRouter);
app.use("single-post", indexRouter);
app.use("/post-job", indexRouter);
app.use("/subscribe", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
