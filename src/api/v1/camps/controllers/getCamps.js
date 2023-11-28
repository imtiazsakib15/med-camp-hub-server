const Camp = require("../../../../models/camps/campSchema");

const getCamps = async (req, res) => {
  let camps;
  const { organizer_email } = req.query;
  if (organizer_email) {
    if (req.user?.email !== organizer_email)
      return res.status(403).send({ message: "Forbidden" });
    camps = await Camp.find({ organizer_email });
  } else camps = await Camp.find({});
  res.send(camps);
};

module.exports = getCamps;
