const UpcomingCamp = require("../../../../models/upcomingCamps/upcomingCampSchema");

const getUpcomingCamps = async (req, res) => {
  let upcomingCamps;
  const { organizer_email } = req.query;
  if (organizer_email) {
    if (req.user?.email !== organizer_email)
      return res.status(403).send({ message: "Forbidden" });
      upcomingCamps = await UpcomingCamp.find({ organizer_email });
  } else upcomingCamps = await UpcomingCamp.find({});
  res.send(upcomingCamps);
};

module.exports = getUpcomingCamps;
