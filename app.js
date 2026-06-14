const express = require("express");
const indexRouter = require("./controller/index.js");
const newRouter = require("./controller/new.js");
const path = require("node:path");
const ejs = require("ejs");
const { text } = require("node:stream/consumers");
const q = require("./db/queries.js");
const { loadEnvFile } = require("node:process");
const app = express();

try {
  process.loadEnvFile(".env");
} catch {
  console.log("This is production :)");
}

app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/new", newRouter);

const port = process.env.PORT || 8000;
app.listen(port, (error) => {
  if (error) {
    throw error;
  } else {
    console.log(`Hello from port ${port}`);
  }
});
