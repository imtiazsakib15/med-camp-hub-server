const Camp = require("../../../../models/camps/campSchema");

const getPopularCamps = async (req, res) => {
  const camps = (await Camp.find()).splice(0, 6);
  // console.log(camps);
  res.send(camps);
};

module.exports = getPopularCamps;
