const mongoose = require("mongoose");

const subscribeNewsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});

const SubscribeNewsletter = mongoose.model("SubscribeNewsletter", subscribeNewsletterSchema)

module.exports = SubscribeNewsletter;
