const SubscribeNewsletter = require("../../../../models/subscribeNewsletters/subscribeNewsletterSchema");

const postSubscribeNewsletter = async (req, res) => {
  const newSubscribeNewsletter = new SubscribeNewsletter(req.body);
  const result = await newSubscribeNewsletter.save();
  res.send(result);
};

module.exports = postSubscribeNewsletter;
