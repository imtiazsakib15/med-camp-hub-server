const router = require("express").Router();
const getUser = require("../../../api/v1/users/controllers/getUser");
const postUser = require("../../../api/v1/users/controllers/postUser");

//Post a user info to database
router.post("/users", postUser);

// Get a user info from database
router.get("/users/:email", getUser);

module.exports = router;
