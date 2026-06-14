const { Router } = require("express");
const express = require("express");
const { populate, getData } = require("../db/queries.js");

const indexRouter = Router();

const app = express();

const messages = [];
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
];

async function print() {
  const r = await getData();
  r.forEach((m) => {
    let newDate = m.submission_date;
    newDate = newDate.toString();
    const formatted = newDate.slice(0, 15);
    messages.push({
      text: m.message,
      user: m.user_name,
      added: formatted,
    });
  });
}

print();

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links, messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const userMessage = req.body.userMessage;
  const userName = req.body.userName;
  const date = new Date();
  const toDateString = date.toISOString();
  const formattedDate = toDateString.slice(0, 10);
  const arr = [userName, userMessage, formattedDate];

  populate(arr);

  res.redirect("/");
});

module.exports = indexRouter;
