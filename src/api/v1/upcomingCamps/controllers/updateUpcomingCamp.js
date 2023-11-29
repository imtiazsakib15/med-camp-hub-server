const UpcomingCamp = require("../../../../models/upcomingCamps/upcomingCampSchema");

const updateUpcomingCamp = async (req, res) => {
  const modifiedUpcomingCamp = req.body;
  const id = req.params?.id;
  const updateUpcomingCamp = {
    $set: {
      ...modifiedUpcomingCamp,
    },
  };

  const result = await UpcomingCamp.updateOne({ _id: id }, updateUpcomingCamp);
  res.send(result);
};

module.exports = updateUpcomingCamp;
