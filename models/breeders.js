const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breedersSchema = new Schema({
  breeder: { type: String, required: true },
  location: { type: String, required: true },
  ratings: String,
  contact: String,
  date: { type: Date, default: Date.now }
});

const Breeders = mongoose.model("Breeders", breedersSchema);

module.exports = Breeders;