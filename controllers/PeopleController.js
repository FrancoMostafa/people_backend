const express = require("express");
const PeopleService = require("../services/PeopleService");

class PeopleController {
  constructor() {
    this.peopleService = new PeopleService();
    this.router = express.Router();
    this.router.post("/", (req, res) => this.createPeople(req, res));
    this.router.get("/", (req, res) => this.getPeople(req, res));
  }

  createPeople(req, res) {
    const peopleService = this.peopleService.createPeople();

    peopleService
      .then((p) => {
        res.status(200).json(p);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(400).json({ error: err.message });
      });
  }

  getPeople(req, res) {
    const peoplePromise = this.peopleService.getPeople();

    peoplePromise
      .then((p) => {
        res.status(200).json(p);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(400).json({ error: err.message });
      });
  }
}

module.exports = PeopleController;
