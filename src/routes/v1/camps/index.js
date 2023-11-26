const router = require("express").Router();
const postCamp = require("../../../api/v1/camps/controllers/postCamp");

//Post a camp info to database
router.post("/camps", postCamp);

module.exports = router;
