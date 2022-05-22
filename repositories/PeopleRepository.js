const People = require("../models/People");
const faker = require("@faker-js/faker").faker;

class PeopleRepository {
  async getPeople() {
    return await People.find();
  }

  async createPeople() {
    const first_name = faker.name.firstName();
    const last_name = faker.name.lastName();
    const birthday = faker.date.between();
    const city_of_residence = faker.address.city();
    const email = faker.internet.email();
    try {
      const people = await People.create({
        first_name,
        last_name,
        birthday,
        city_of_residence,
        email,
      });
      return await people.save();
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = PeopleRepository;
