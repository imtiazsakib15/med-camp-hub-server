const router = require("express").Router();
const postCamp = require("../../../api/v1/camps/controllers/postCamp");
const getCamps = require("../../../api/v1/camps/controllers/getCamps");

//Post a camp info to database
router.post("/camps", postCamp);

// Get camps from database
router.get("/camps", getCamps);

module.exports = router;
