const { Router } = require("express");
const express = require("express");

const indexRouter = Router();

const app = express();

const messages = [
  {
    text: "Maybe I don't recognize you sober.",
    user: "Katniss",
    added: new Date().toDateString(),
  },
  {
    text: "I'm not a drinker myself.",
    user: "Haymitch",
    added: new Date().toDateString(),
  },
];
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { links: links, messages: messages });
});

indexRouter.post("/new", (req, res) => {
  const userMessage = req.body.userMessage;
  const userName = req.body.userName;
  messages.push({
    text: userMessage,
    user: userName,
    added: new Date().toDateString(),
  });
  res.redirect("/");
});

module.exports = indexRouter;
