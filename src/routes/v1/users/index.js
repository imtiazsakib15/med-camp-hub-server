const router = require("express").Router();
const postUsers = require("../../../api/v1/users/controllers/postUsers");

router.post("/users", postUsers);

module.exports = router;
