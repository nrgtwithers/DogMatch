const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BreedsSchema = new Schema({
  breed: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  life: { type: Number, required: true },
  temperament: { type: String, required: true },
  description: { type: String, required: true },
  activity: { type: String, required: true },
  image: { type: String, required: true },
  created: { type: Date, default: Date.now },
  breederId:{type: Schema.Types.ObjectId, ref:"Breeders"},
  rescuesId:{type: Schema.Types.ObjectId, ref:"Rescues"},
});

const Breeds = mongoose.model("Breeds", BreedsSchema);

module.exports = Breeds;