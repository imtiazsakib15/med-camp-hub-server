const Camp = require("../../../../models/camps/campSchema");

const getCamps = async (req, res) => {
  let camps;
  if (req.query?.organizer_email)
    camps = await Camp.find({ organizer_email: req.query?.organizer_email });
  else camps = await Camp.find({});
  res.send(camps);
};

module.exports = getCamps;
