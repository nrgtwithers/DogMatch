const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rescuesSchema = new Schema({
  breeder: { type: String, required: true },
  location: { type: String, required: true },
  ratings: String,
  contact: String,
  date: { type: Date, default: Date.now }
});

const Rescues = mongoose.model("Rescues", rescuesSchema);

module.exports = Rescues;