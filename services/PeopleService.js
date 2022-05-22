const PeopleRepository = require("../repositories/PeopleRepository");

class PeopleService {
  constructor() {
    this.peopleRepository = new PeopleRepository();
  }

  async createPeople() {
    return this.peopleRepository.createPeople();
  }

  async getPeople() {
    return this.peopleRepository.getPeople();
  }
}
module.exports = PeopleService;
