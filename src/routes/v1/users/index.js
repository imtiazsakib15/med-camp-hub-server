const router = require("express").Router();
const getUsers = require("../../../api/v1/users/controllers/getUsers");
const postUsers = require("../../../api/v1/users/controllers/postUsers");

//Post a user info to database
router.post("/users", postUsers);

// Get a user info from database
router.get("/users/:email", getUsers);

module.exports = router;
