const Camp = require("../../../../models/camps/campSchema");

const postCamp = async (req, res) => {
  const newCamp = new Camp(req.body);

  const result = await newCamp.save();
  res.send(result);
};

module.exports = postCamp;
