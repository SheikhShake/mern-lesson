const mongoose = require("mongoose");
const Comedian = require("./comedian");

const mongoUri = "mongodb://localhost:27017/learn";
const db = mongoose.connection;

mongoose.connect(mongoUri, () => {
  console.log("Connection to Mongo DB established");
});

db.on("error", (err) => console.log(err.message));
db.on("connected", () => console.log("mongo connected: " + mongoUri));
db.on("disconnected", () => console.log("mongo disconnected"));

async function insertMany(input) {
  try {
    const result = await Comedian.insertMany(input);
    return result;
  } catch (e) {
    console.error(e);
  }
}

async function readAll(params) {
  try {
    return await Comedian.find(params);
  } catch (e) {
    console.error(e);
  }
}

(async () => {
  const data = [
    {
      name: "Uncle Roger",
      location: "London",
    },
    {
      name: "Uncle Roger",
      location: "London",
    },
    {
      name: "Ra Ra Kumar",
      location: "Singapore",
    },
  ];

  await insertMany(data);
  const results = await readAll({ location: "Singapore" });
  console.log("Fetched data", results);
})();
