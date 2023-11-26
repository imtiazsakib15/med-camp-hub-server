const mongoose = require("mongoose");

const campSchema = new mongoose.Schema({
  camp_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  starting_date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  service_provided: {
    type: String,
    required: true,
  },
  healthcare_professionals: {
    type: String,
    required: true,
  },
  target_audience: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Camp = mongoose.model("Camp", campSchema);

module.exports = Camp;
