const router = require("express").Router();
const getUser = require("../../../api/v1/users/controllers/getUser");
const postUser = require("../../../api/v1/users/controllers/postUser");
const updateUser = require("../../../api/v1/users/controllers/updateUser");

// Get a user info from database
router.get("/users/:email", getUser);

//Post a user info to database
router.post("/users", postUser);

// Update a user info into database
router.put("/users/:email", updateUser);

module.exports = router;
