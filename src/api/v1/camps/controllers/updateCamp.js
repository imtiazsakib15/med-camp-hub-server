const Camp = require("../../../../models/camps/campSchema");

const postCamp = async (req, res) => {
  const modifiedCamp = req.body;
  const id = req.params?.id;
  const updateCamp = {
    $set: {
      ...modifiedCamp,
    },
  };

  const result = await Camp.updateOne({ _id: id }, updateCamp);
  res.send(result);
};

module.exports = postCamp;
