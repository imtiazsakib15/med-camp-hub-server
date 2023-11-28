const UpcomingCamp = require("../../../../models/upcomingCamps/upcomingCampSchema");

const postUpcomingCamp = async (req, res) => {
  const newUpcomingCamp = new UpcomingCamp(req.body);

  const result = await newUpcomingCamp.save();
  res.send(result);
};

module.exports = postUpcomingCamp;
