const router = require("express").Router();
const getSubscribeNewsletter = require("../../../api/v1/subscribeNewsletters/controllers/getSubscribeNewsletter");
const postSubscribeNewsletter = require("../../../api/v1/subscribeNewsletters/controllers/postSubscribeNewsletter");

// Post a newsletter subscriber info to database
router.get("/subscribe-newsletter/:email", getSubscribeNewsletter);

// Post a newsletter subscriber info to database
router.post("/subscribe-newsletter", postSubscribeNewsletter);

module.exports = router;
