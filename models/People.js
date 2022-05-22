const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PeopleSchema = Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    birthday: { type: String },
    city_of_residence: { type: String },
    email: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Categories", PeopleSchema);
