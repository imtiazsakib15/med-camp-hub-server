const router = require("express").Router();
const postUpcomingCamp = require("../../../api/v1/upcomingCamps/controllers/postUpcomingCamp");
const getUpcomingCamps = require("../../../api/v1/upcomingCamps/controllers/getUpcomingCamps");
const verifyToken = require("../../../middlewares/verifyToken");

// Get all upcoming camps from database
router.get("/upcoming-camps", verifyToken, getUpcomingCamps);

//Post a upcoming camp info to database
router.post("/upcoming-camps", verifyToken, postUpcomingCamp);

module.exports = router;
