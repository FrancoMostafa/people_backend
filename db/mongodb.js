const mongoose = require("mongoose");

mongoose.connection.on("open", () => console.log("db connected"));

async function connectDb({ mongoUri }) {
  const uri = mongoUri;
  await mongoose.connect(uri, { useNewUrlParser: true });
}

module.exports = connectDb;
