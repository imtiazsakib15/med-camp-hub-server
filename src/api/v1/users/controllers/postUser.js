const User = require("../../../../models/users/userSchema");

const postUser = async (req, res) => {
  const newUser = new User(req.body);

  const result = await newUser.save();
  res.send(result);
};

module.exports = postUser;
