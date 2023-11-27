const Camp = require("../../../../models/camps/campSchema");

const deleteCamp = async (req, res) => {
  const id = req.params?.id;
  const result = await Camp.findByIdAndDelete(id);
  res.send(result);
};

module.exports = deleteCamp;
