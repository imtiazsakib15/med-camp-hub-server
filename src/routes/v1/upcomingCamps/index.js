const router = require("express").Router();
const postUpcomingCamp = require("../../../api/v1/upcomingCamps/controllers/postUpcomingCamp");
const verifyToken = require("../../../middlewares/verifyToken");

//Post a upcoming camp info to database
router.post("/upcoming-camps", verifyToken, postUpcomingCamp);

module.exports = router;
