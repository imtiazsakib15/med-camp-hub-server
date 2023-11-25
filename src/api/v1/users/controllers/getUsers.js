const User = require("../../../../models/users/userSchema");

const getUsers = async (req, res) => {
  const user = await User.find({ email: req.params?.email });
  console.log(user);
  res.send(user);
};

module.exports = getUsers;
