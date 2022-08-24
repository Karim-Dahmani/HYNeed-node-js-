const mongoose = require("mongoose");
const ContactShema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contacts", ContactShema);
