const Camp = require("../../../../models/camps/campSchema");

const getCamps = async (req, res) => {
  const camps = await Camp.find({ organizer_email: req.query?.organizer_email || "" });
  console.log(camps);
  res.send(camps);
};

module.exports = getCamps;