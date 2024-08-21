//* Dependencies
require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

//* Routers Imports

//* Dotenv

//* App
const app = express();
const PORT = 5505 || process.env.PORT;

//* Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//* Public
app.use(express.static("public"));

//* View Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout", "layouts/main");

//* Routes
app.get(["/", "/home"], (req, res) => {
  res.status(200).render("home");
});

//TODO error 404

//* App Listen
app.listen(PORT, () => {
  console.log("Server:\x1b[92m Online \x1b[0m");
  console.log("Port: " + PORT);
  console.log(`link: http://localhost:${PORT}`);
  console.log("->");
});
