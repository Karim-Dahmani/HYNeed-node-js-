const rp = require("request-promise");
const request = require("request");
const cherio = require("cheerio");
const { Cheerio } = require("cheerio");
const Jobs = require("../model/jobs");
const fs = require("fs");
const mongoose = require("mongoose");

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
const job = [];

var done = 0;
for (let i = 0; i < job.length; i++) {
  console.log(i);
  job[i].save((error, doc) => {
    if (error) {
      console.log(error);
    }
    console.log(doc);
    done++;
    if (done === job.length) {
      mongoose.disconnect();
    }
  });
}
/*
let newjob = {};
request(
  "https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=java&txtLocation=",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cherio.load(html);
      $(".job-bx").each((i, el) => {
        const jobtitle = $(el).find("h2").text().replace(/\s\s+/g, "");
        const link = $(el).find("a").attr("href");
        const companyName = $(el)
          .find(".joblist-comp-name")
          .text()
          .replace(/\s\s+/g, "");
        const skills = $(el).find(".srp-skills").text().replace(/\s\s+/g, "");
        const pulishedDate = $(el)
          .find(".sim-posted")
          .text()
          .replace(/\s\s+/g, "");
        const location = $(el)
          .find(".top-jd-dtl")
          .children("li")
          .next()
          .text()
          .replace(/\s\s+/g, "");
        console.log(jobtitle.split());
        console.log(companyName.split());
        // console.log(jobtitle.length, jobtitle);
        // ws.write(
        //   `${jobtitle},${link},${companyName},${skills},${pulishedDate}\n`
        // );
        // console.log(location);
        // console.log(
        //   "------------------------------------------------------------------------"
        // );
      });
    }
  }
);
//const jsonString = JSON.stringify(newjob);
//console.log(jsonString);
/*
try {
  const jsonString = fs.readFileSync("./jobs.json", "utf-8");
  const job = JSON.parse(jsonString);
  console.log(job.jobtitle);
} catch (err) {
  console.log(err);
}
*/
