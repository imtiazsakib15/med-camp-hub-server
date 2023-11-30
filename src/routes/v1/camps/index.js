const router = require("express").Router();
const postCamp = require("../../../api/v1/camps/controllers/postCamp");
const getCamps = require("../../../api/v1/camps/controllers/getCamps");
const getPopularCamps = require("../../../api/v1/camps/controllers/getPopularCamps");
const getCamp = require("../../../api/v1/camps/controllers/getCamp");
const updateCamp = require("../../../api/v1/camps/controllers/updateCamp");
const deleteCamp = require("../../../api/v1/camps/controllers/deleteCamp");
const verifyToken = require("../../../middlewares/verifyToken");

// Get all camps from database
router.get("/camps", verifyToken, getCamps);

// Get popular camps from database
router.get("/popular-camps", getPopularCamps);

// Get a camp details from database
router.get("/camps/:id", verifyToken, getCamp);

//Post a camp info to database
router.post("/camps", verifyToken, postCamp);

// Update a camp details into database
router.put("/camps/:id", verifyToken, updateCamp);

// Delete a camp details from database
router.delete("/camps/:id", verifyToken, deleteCamp);

module.exports = router;
