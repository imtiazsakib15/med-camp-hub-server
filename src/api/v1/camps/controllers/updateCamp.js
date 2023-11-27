const Camp = require("../../../../models/camps/campSchema");

const postCamp = async (req, res) => {
  const modifiedCamp = req.body;
  const id = req.params?.id;
  const updateCamp = {
    $set: {
      ...modifiedCamp,
    },
  };
  console.log(modifiedCamp, id);

  const result = await Camp.updateOne({ _id: id }, updateCamp);
  console.log(result);
  res.send(result);
};

module.exports = postCamp;
