const mongoose = require("mongoose");
const { DB_URL, NODE_ENV } = require("./server.config");

async function connectToDB() {
  try {
    if (NODE_ENV == "development") await mongoose.connect(DB_URL);
  } catch (error) {
    console.log("unable to connect to the DB", error);
  }
}

module.exports = connectToDB;
