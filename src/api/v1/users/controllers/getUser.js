const User = require("../../../../models/users/userSchema");

const getUser = async (req, res) => {
  const user = await User.findOne({ email: req.params?.email });
  res.send(user);
};

module.exports = getUser;
