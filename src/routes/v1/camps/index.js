const router = require("express").Router();
const postCamp = require("../../../api/v1/camps/controllers/postCamp");
const getCamps = require("../../../api/v1/camps/controllers/getCamps");
const getCamp = require("../../../api/v1/camps/controllers/getCamp");

//Post a camp info to database
router.post("/camps", postCamp);

// Get all camps from database
router.get("/camps", getCamps);

// Get a camp details from database
router.get("/camps/:id", getCamp);

module.exports = router;
