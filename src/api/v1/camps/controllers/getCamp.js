const Camp = require("../../../../models/camps/campSchema");

const getCamp = async (req, res) => {
  const id = req.params?.id;
  const camp = (await Camp.findById(id)) || {};
  res.send(camp);
};

module.exports = getCamp;
