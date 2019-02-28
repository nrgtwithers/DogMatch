const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BreedsSchema = new Schema({
  breed: { type: String, required: true },
  image: { type: String, required: true },
  lifeSpan: { type: String, required: true },
  weight: { type: String, required: true },
  height: { type: String, required: true },
  Description: { type: String, required: true },
  updated_date: { type: Date, default: Date.now },
});

const Breeds = mongoose.model("Breeds", BreedsSchema);

module.exports = Breeds;