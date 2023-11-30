const RegisterCamp = require("../../../../models/registerCamps/registerCampSchema");

const postRegisterCamp = async (req, res) => {
  const newRegisterCamp = new RegisterCamp(req.body);

  const result = await newRegisterCamp.save();
  res.send(result);
};

module.exports = postRegisterCamp;
