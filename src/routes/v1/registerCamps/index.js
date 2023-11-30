const router = require("express").Router();
const verifyToken = require("../../../middlewares/verifyToken");
const postRegisterCamp = require("../../../api/v1/registerCamps/controllers/postRegisterCamp");

//Post a register camp details to database
router.post("/register-camps", verifyToken, postRegisterCamp);

module.exports = router;
