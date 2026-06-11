const { Router } = require("express");
const newRouter = Router();
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Message" },
];

newRouter.get("/", (req, res) => {
  res.render("form", { links: links });
});

module.exports = newRouter;
