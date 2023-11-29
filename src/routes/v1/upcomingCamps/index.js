const router = require("express").Router();
const postUpcomingCamp = require("../../../api/v1/upcomingCamps/controllers/postUpcomingCamp");
const getUpcomingCamps = require("../../../api/v1/upcomingCamps/controllers/getUpcomingCamps");
const updateUpcomingCamp = require("../../../api/v1/upcomingCamps/controllers/updateUpcomingCamp");
const deleteUpcomingCamp = require("../../../api/v1/upcomingCamps/controllers/deleteUpcomingCamp");
const verifyToken = require("../../../middlewares/verifyToken");

// Get all upcoming camps from database
router.get("/upcoming-camps", verifyToken, getUpcomingCamps);

// Post a upcoming camp info to database
router.post("/upcoming-camps", verifyToken, postUpcomingCamp);

// Update a upcoming camp details into database
router.put("/upcoming-camps/:id", verifyToken, updateUpcomingCamp);

// Delete a upcoming camp details from database
router.delete("/upcoming-camps/:id", verifyToken, deleteUpcomingCamp);

module.exports = router;
