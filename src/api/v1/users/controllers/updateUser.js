const User = require("../../../../models/users/userSchema");

const updateUser = async (req, res) => {
  const modifiedUser = req.body;
  const email = req.params?.email;
  const updateUser = {
    $set: {
      ...modifiedUser,
    },
  };

  const result = await User.updateOne({ email }, updateUser);
  res.send(result);
};

module.exports = updateUser;
