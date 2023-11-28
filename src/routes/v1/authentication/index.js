const createAccessToken = require("../../../api/v1/authentication/controllers/createAccessToken");

const router = require("express").Router();

// Create access token
router.post("/jwt", createAccessToken);

module.exports = router;
