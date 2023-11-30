const mongoose = require("mongoose");

const registerCampSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  health_info: {
    type: String,
    required: true,
  },
  registered_camp_id: {
    type: String,
    required: true,
  },
});

const RegisterCamp = mongoose.model("RegisterCamp", registerCampSchema);

module.exports = RegisterCamp;
