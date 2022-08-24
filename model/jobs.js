const mongoose = require("mongoose");
const JobShema = mongoose.Schema({
  JobTitle: {
    type: String,
    required: true,
  },
  CompanyName: {
    type: String,
    required: true,
  },
  CompanyEmail: {
    type: String,
    required: true,
  },
  Localisation: {
    type: String,
    required: true,
  },
  Skills: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },

  PublishedDate: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Job", JobShema);
