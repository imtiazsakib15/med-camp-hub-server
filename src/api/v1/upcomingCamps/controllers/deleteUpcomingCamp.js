const UpcomingCamp = require("../../../../models/upcomingCamps/upcomingCampSchema");

const deleteUpcomingCamp = async (req, res) => {
  const id = req.params?.id;
  const result = await UpcomingCamp.findByIdAndDelete(id);
  res.send(result);
};

module.exports = deleteUpcomingCamp;
