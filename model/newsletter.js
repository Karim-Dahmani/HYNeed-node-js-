const mongoose = require("mongoose");
const NewsLetterShema = mongoose.Schema({
  Mailuser: {
    type: String,
  },
});

module.exports = mongoose.model("News", NewsLetterShema);
