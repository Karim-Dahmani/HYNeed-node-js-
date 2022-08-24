const mongoose = require("mongoose");
const UserShema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userMail: {
    type: String,
    required: true,
  },
  userCountry: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserShema);
