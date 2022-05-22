const express = require("express");
const cors = require("cors");
const PeopleController = require("./controllers/PeopleController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
module.exports = app;

const peopleController = new PeopleController();

app.use("/people", peopleController.router);
